import { shallowMount } from '@vue/test-utils';
import base from './common/base';
import h from './common/helpers';
import auth from "./common/mocks/auth";

import Feed from '@/views/Feed.vue';

describe('Feed View', () => {
  let wrapper;

  beforeEach(() => {
    h.store({
      auth,
    });
    wrapper = shallowMount(Feed, base);
  });

  it('is mounted properly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
