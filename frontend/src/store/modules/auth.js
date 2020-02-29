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
  mutateAddFollowId: (s, payload) => {
    s.user.following.push(payload);
  },
  mutateRemoveFollowId: (s, payload) => {
    s.user.following.splice(payload, 1);
  },
  mutateFollowingCount: (s, payload) => {
    s.user.following_count = payload;
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

  setFollowing: (context, payload) => {
    context.commit('mutateFollowingCount', context.state.user.following_count + 1);
    context.commit('mutateAddFollowId', payload);
    firebase.firestore().collection('users').doc(context.state.user.uid)
      .update({
        following_count: context.state.user.following_count,
        following: context.state.user.following,
      });
    context.commit('mutateUser', context.state.user);
  },
  
  setUnfollowing: (context, payload) => {
    context.commit('mutateFollowingCount', context.state.user.following_count - 1);
    context.commit('mutateRemoveFollowId', payload);
    firebase.firestore().collection('users').doc(context.state.user.uid)
      .update({
        following_count: context.state.user.following_count,
        following: context.state.user.following,
      });
    context.commit('mutateUser', context.state.user);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
