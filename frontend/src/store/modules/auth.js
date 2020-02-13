import firebase from 'firebase';
import clone from 'clone-deep';

const state = {
  user: null,
};

const getters = {
  loggedIn: s => s.user !== null,
  user: s => s.user,
  userId: s => s.user.uid,
};

const mutations = {
  mutateUser: (s, payload) => {
    localStorage.user = JSON.stringify(payload);
    s.user = payload;
  },
};

const actions = {
  setUser: (context, payload) => {
    context.commit('mutateUser', payload);
  },

  getUser: (context, payload) => {
    firebase.firestore().collection('users').doc(payload).get()
      .then((snapshot) => {
        const user = snapshot.data();
        user.uid = payload;
        context.commit('mutateUser', user);
        context.dispatch('getUserPosts', payload);
      })
      .catch((err) => {
        console.error(err);
      });
  },

  getUserPosts: (context, payload) => {
    firebase.firestore().collection('users').doc(payload).collection('posts')
      .get()
      .then((collection) => {
        const posts = [];
        collection.forEach((doc) => {
          posts.push(doc.data());
        });
        const user = clone(context.getters.user);
        user.posts = posts;
        context.commit('mutateUser', user);
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
