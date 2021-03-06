import firebase from 'firebase';
import clone from 'clone-deep';

const state = {
  post: null,
};

const getters = {
  getPost: s => s.post,
};

const mutations = {
  mutatePost: (s, payload) => {
    s.post = payload;
  },
};

const actions = {
  queryPost: (context, payload) => {
    firebase.firestore().collection('posts').doc(payload).get()
      .then((snapshot) => {
        if (snapshot.data()) {
          context.commit('mutatePost', snapshot.data());
          context.dispatch('getPostComments', payload);
        } else {
          console.error('Post Not Found');
        }
      })
      .catch((error) => {
        console.error('Post Not Found');
        console.error(error);
      });
  },

  getPostComments: (context, payload) => {
    firebase.firestore().collection('posts').doc(payload)
      .collection('comments')
      .orderBy('timestamp', 'asc')
      .get()
      .then((collection) => {
        if (collection) {
          const comments = [];
          collection.forEach((doc) => {
            comments.push(doc.data());
          });
          const post = clone(context.getters.getPost);
          post.comments = comments;
          context.commit('mutatePost', post);
        } else {
          console.error('Comments Not Found');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },

  addPostComment: (context, payload) => new Promise((resolve, reject) => {
    const user = context.rootGetters['auth/user'];
    const newComment = {
      content: payload.comment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.uid,
      user_picture: user.picture,
      username: user.username,
    };
    firebase.firestore().collection('posts').doc(payload.id).collection('comments')
      .add(newComment)
      .then(() => {
        firebase.firestore().collection('posts')
          .doc(payload.id)
          .update({
            comments_count: firebase.firestore.FieldValue.increment(1),
          });
        firebase.firestore().collection('posts').doc(payload.id)
          .get()
          .then((snapshot) => {
            firebase.firestore().collection('users').doc(snapshot.data().user).collection('posts')
              .doc(payload.id)
              .update({
                comments_count: firebase.firestore.FieldValue.increment(1),
              });
          })
          .catch((err) => {
            console.error(err);
          });
        context.dispatch('getPostComments', payload.id);
        resolve();
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  }),
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
