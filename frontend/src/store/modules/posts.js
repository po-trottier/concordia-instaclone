import firebase from 'firebase';

const state = {
  posts: [],
};

const getters = {
  getPosts: s => s.posts,
};

const mutations = {
  mutatePosts: (s, payload) => {
    s.posts = payload;
  },
};

const actions = {
  queryPosts: (context) => {
    firebase.firestore().collection('posts').get()
      .then((snapshot) => {
        const results = [];
        snapshot.forEach((doc) => {
          results.push(doc.data());
        });
        context.commit('mutatePosts', results);
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
