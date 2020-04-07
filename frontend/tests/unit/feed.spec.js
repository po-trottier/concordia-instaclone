import { shallowMount } from '@vue/test-utils';
import base from './common/base';
import helper from './common/helpers';
import auth from './common/mocks/auth';

import Feed from '@/views/Feed.vue';

describe('Feed View', () => {
  let wrapper;

  beforeEach(() => {
    helper.store({
      auth,
    });
    wrapper = shallowMount(Feed, base);
  });

  it('is mounted properly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('has a created hook', () => {
    expect(typeof Feed.created).toBe('function');
  });

  it('has a button to create new posts', () => {
    expect(wrapper.find('.px-6').exists()).toBe(true);
    expect(wrapper.find('.px-6').text()).toMatch('New Post');
    // wrapper.find('.px-6').trigger('click');
  });

  afterEach(() => {
    wrapper.destroy();
  });
});
