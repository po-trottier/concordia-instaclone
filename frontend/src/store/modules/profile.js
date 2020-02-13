import firebase from 'firebase';
import clone from 'clone-deep';

const state = {
  profile: {
    bio: '',
    email: '',
    followers_count: 0,
    following_count: 0,
    name: '0',
    picture: '',
    posts_count: 0,
    username: '',
    website: '',
    uid: '',
    posts: [],
  },
};

const getters = {
  profile: s => s.profile,
};

const mutations = {
  mutateProfile: (s, payload) => {
    s.profile = payload;
  },
};

const actions = {
  getProfile: (context, payload) => {
    firebase.firestore().collection('users').doc(payload).get()
      .then((snapshot) => {
        const user = snapshot.data();
        user.uid = payload;
        context.commit('mutateProfile', user);
        context.dispatch('getProfilePosts', payload);
      })
      .catch((err) => {
        console.error(err);
      });
  },

  getProfilePosts: (context, payload) => {
    firebase.firestore().collection('users').doc(payload).collection('posts')
      .get()
      .then((collection) => {
        const posts = [];
        collection.forEach((doc) => {
          posts.push(doc.data());
        });
        const profile = clone(context.getters.profile);
        profile.posts = posts;
        context.commit('mutateProfile', profile);
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
