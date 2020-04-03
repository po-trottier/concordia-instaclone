const state = {
  user: {
    id: 'abc123',
  },
};

const getters = {
  loggedIn: jest.fn(),
  user: jest.fn(),
  userId: jest.fn(),
};

const mutations = {
  mutateUser: jest.fn(),
  mutateAddFollowId: jest.fn(),
  mutateRemoveFollowId: jest.fn(),
  mutateFollowingCount: jest.fn(),
};

const actions = {
  setUser: jest.fn(),
  getUser: jest.fn(),
  updateProfile: jest.fn(),
  uploadDP: jest.fn(),
  removeDP: jest.fn(),
  setFollowing: jest.fn(),
  setUnfollowing: jest.fn(),
  addLike: jest.fn(),
  removeLike: jest.fn(),
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
