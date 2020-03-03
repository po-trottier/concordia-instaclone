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
  follow_status: false,
};

const getters = {
  profile: s => s.profile,
  followStatus: s => s.follow_status,
};

const mutations = {
  mutateProfile: (s, payload) => {
    s.profile = payload;
  },
  mutateFollowStatus: (s, payload) => {
    s.follow_status = payload;
  },
  // update follower count
  mutateProfileFollowersCount: (s, payload) => {
    s.profile.followers_count = payload;
  },
};

const actions = {
  getProfile: (context, payload) => {
    firebase.firestore().collection('users').doc(payload).get()
      .then((snapshot) => {
        const user = snapshot.data();
        user.uid = payload;
        // Get the current user's info
<<<<<<< Updated upstream
        let auth = context.rootGetters['auth/user'];
=======
        const auth = context.rootGetters['auth/user'];
>>>>>>> Stashed changes
        if (!auth.following) {
          context.dispatch('auth/getUser', auth.uid, { root: true })
            .then(() => {
              if (!auth.following) {
                console.error('Invalid Profile Loaded: Missing Following Array');
                return;
              }
              context.dispatch('getProfile', payload);
            });
          return;
        }
        context.commit('mutateFollowStatus', auth.following.includes(user.uid));
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

  followUser: (context, payload) => {
    context.commit('mutateProfileFollowersCount', context.state.profile.followers_count + 1);
    // call action for push this profile id to auth.following array from auth.js modules
    context.dispatch('auth/setFollowing', payload, { root: true });
    // call action to change follow status ( use for button in template )
    context.commit('mutateFollowStatus', true);
    // firebase or http request
    firebase.firestore().collection('users').doc(payload)
      .update({
        followers_count: context.state.profile.followers_count,
      });
  },
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  unfollowUser: (context, payload) => {
    // mutateProfileFollowersCount
    // follower_count - 1
    context.commit('mutateProfileFollowersCount', context.state.profile.followers_count - 1);
    // call action for remove this profile id to auth.following array from auth.js modules
    context.dispatch('auth/setUnfollowing', payload, { root: true });
    // call action to change follow status ( use for button in template )
    context.commit('mutateFollowStatus', false);
    // firebase or http request
    firebase.firestore().collection('users').doc(payload)
      .update({
        followers_count: context.state.profile.followers_count,
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
