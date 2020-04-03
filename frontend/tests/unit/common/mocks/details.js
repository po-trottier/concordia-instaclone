const state = {
  post: null,
};

const getters = {
  getPost: jest.fn(),
};

const mutations = {
  mutatePost: jest.fn(),
};

const actions = {
  queryPost: jest.fn(),
  getPostComments: jest.fn(),
  addPostComment: jest.fn(),
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
