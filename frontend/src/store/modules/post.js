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
          // get comments
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
        console.error('Comments Not Found');
        console.error(error);
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
