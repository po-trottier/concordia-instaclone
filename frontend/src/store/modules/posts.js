import firebase from 'firebase';
import clone from 'clone-deep';

// TEMP
const defaultPost = {
  comments_count: 0,
  description: 'This is the default description',
  id: null,
  likes_count: 0,
  picture: null,
  tags: ['test'],
  timestamp: null,
  user: '',
  user_picture: '',
  username: '',
};

const state = {
  posts: [],
  suggested: [],
};

const getters = {
  getPosts: s => s.posts,
  getSuggested: s => s.suggested,
};

const mutations = {
  mutatePosts: (s, payload) => {
    s.posts = payload;
  },
  mutateSuggested: (s, payload) => {
    s.suggested = payload;
  },
};

const actions = {
  queryPosts: context => new Promise((resolve, reject) => {
    const user = context.rootGetters['auth/user'];
    const following = clone(user.following);
    following.push(user.uid);

    firebase.firestore().collection('posts')
      .where('user', 'in', following)
      .orderBy('timestamp', 'desc')
      .get()
      .then((snapshot) => {
        const results = [];
        snapshot.forEach((doc) => {
          results.push(doc.data());
        });
        context.commit('mutatePosts', results);
        resolve();
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  }),

  addPost: (context, payload) => new Promise((resolve, reject) => {
    const results = clone(context.getters.getPosts);

    // TODO Payload should be a properly constructed post
    const post = clone(defaultPost);

    // Rename File to Unique ID
    const name = (new Date()).getTime().toString(32)
      + Math.floor(1E10 * Math.random()).toString(32);
    const extension = payload.file.name.split('.').pop();
    const file = new File(
      [payload.file],
      `${name}.${extension}`,
      { type: payload.file.type },
    );

    // Upload Photo
    firebase.storage().ref().child(`posts/${name}.${extension}`).put(file)
      .then(({ ref }) => {
        // Set important values for default post
        post.timestamp = firebase.firestore.FieldValue.serverTimestamp();
        post.picture = `gs://${ref.bucket}/${ref.fullPath}`;
        post.id = name;
        post.description = payload.description;

        // Get the current user's info
        const user = context.rootGetters['auth/user'];
        post.user = user.uid;
        post.user_picture = user.picture;
        post.username = user.username;

        // Add the post to the Database
        firebase.firestore().collection('posts').doc(name).set(post)
          .then(() => {
            // Add the post at the top of the current posts
            results.splice(0, 0, defaultPost);
            context.commit('mutatePosts', results);
            // Resolve the Promise
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      })
      .catch((err) => {
        reject(err);
      });
  }),

  likePost: (context, payload) => new Promise((resolve, reject) => {
    const posts = clone(context.getters.getPosts);
    posts.likes_count++;
    context.commit('mutatePosts', posts);
    context.dispatch('auth/addLike', payload, { root: true });
    firebase.firestore().collection('posts').doc(payload)
      .update({
        likes_count: firebase.firestore.FieldValue.increment(1),
      });
    firebase.firestore().collection('posts').doc(payload)
      .get()
      .then((snapshot) => {
        firebase.firestore().collection('users').doc(snapshot.data().user).collection('posts')
          .doc(payload)
          .update({
            likes_count: firebase.firestore.FieldValue.increment(1),
          });
        firebase.firestore().collection('users').doc(snapshot.data().user)
          .update({
            likes: firebase.firestore.FieldValue.arrayUnion(payload),
          });
        resolve();
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  }),

  unlikePost: (context, payload) => new Promise((resolve, reject) => {
    const posts = clone(context.getters.getPosts);
    posts.likes_count--;
    context.commit('mutatePosts', posts);
    context.dispatch('auth/removeLike', payload, { root: true });
    firebase.firestore().collection('posts').doc(payload)
      .update({
        likes_count: firebase.firestore.FieldValue.increment(-1),
      });
    firebase.firestore().collection('posts').doc(payload)
      .get()
      .then((snapshot) => {
        firebase.firestore().collection('users').doc(snapshot.data().user).collection('posts')
          .doc(payload)
          .update({
            likes_count: firebase.firestore.FieldValue.increment(-1),
          });
        firebase.firestore().collection('users').doc(snapshot.data().user)
          .update({
            likes: firebase.firestore.FieldValue.arrayRemove(payload),
          });
        resolve();
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  }),

  querySuggested: (context) => {
    firebase.firestore().collection('users')
      .limit(5)
      .orderBy('followers_count', 'desc')
      .get()
      .then((snapshot) => {
        const results = [];
        snapshot.forEach((doc) => {
          results.push({
            username: doc.data().username,
            uid: doc.data().uid,
          });
        });
        context.commit('mutateSuggested', results);
      })
      .catch((err) => {
        console.error(err);
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
