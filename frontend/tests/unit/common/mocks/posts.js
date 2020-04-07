const state = {
  posts: [],
  suggested: [],
};

const getters = {
  getPosts: jest.fn(),
  getSuggested: jest.fn(),
};

const mutations = {
  mutatePosts: jest.fn(),
  mutateSuggested: jest.fn(),
};

const actions = {
  queryPosts: jest.fn(),
  addPost: jest.fn(),
  likePost: jest.fn(),
  unlikePost: jest.fn(),
  querySuggested: jest.fn(),
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
