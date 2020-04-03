import { createLocalVue } from '@vue/test-utils';

import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

// eslint-disable-next-line prefer-const
let mocks = {
  $router: {
    push: jest.fn(),
    replace: jest.fn(),
  },
};

const stubs = ['router-link', 'router-view'];

const localVue = createLocalVue();

localVue.use(Vuex);
let store = new Vuex.Store({ // eslint-disable-line prefer-const
  strict: true,
});

Vue.use(Vuetify);
const vuetify = new Vuetify();

export default {
  mocks,
  stubs,
  store,
  vuetify,
  localVue,
};
