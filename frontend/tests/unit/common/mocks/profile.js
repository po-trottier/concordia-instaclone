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
  profile: jest.fn(),
  followStatus: jest.fn(),
};

const mutations = {
  mutateProfile: jest.fn(),
  mutateFollowStatus: jest.fn(),
  mutateProfileFollowersCount: jest.fn(),
};

const actions = {
  getProfile: jest.fn(),
  getProfilePosts: jest.fn(),
  followUser: jest.fn(),
  unfollowUser: jest.fn(),
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
