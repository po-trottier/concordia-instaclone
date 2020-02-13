import firebase from 'firebase';

const state = {
  user: null,
};

const getters = {
  loggedIn: s => s.user !== null,
  user: s => s.user,
  userId: s => (s.user ? s.user.uid : ''),
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

  getUser: (context, payload) => new Promise((resolve, reject) => {
    firebase.firestore().collection('users').doc(payload).get()
      .then((snapshot) => {
        const user = snapshot.data();
        user.uid = payload;
        context.commit('mutateUser', user);
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
