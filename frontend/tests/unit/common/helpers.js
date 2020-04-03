import Vuex from 'vuex';
import base from './base';

function props(options) {
  base.propsData = options;
}

function routeParams(options) {
  base.mocks = {
    $route: {
      params: options,
    },
  };
}

function store(options) {
  base.store = new Vuex.Store({
    modules: options,
  });
}

export default {
  props,
  routeParams,
  store,
};
