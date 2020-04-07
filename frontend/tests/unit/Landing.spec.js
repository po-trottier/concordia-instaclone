import { shallowMount } from '@vue/test-utils';
import base from './common/base';
import helper from './common/helpers';
import auth from './common/mocks/auth';

import Landing from '@/views/Landing.vue';

describe('Landing View', () => {
  let wrapper;

  beforeEach(() => {
    helper.store({
      auth,
    });
    wrapper = shallowMount(Landing, base);
  });

  it('is mounted properly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('has a created hook', () => {
    expect(typeof Landing.created).toBe('function');
  });

  it('sets the correct default information', () => {
    expect(typeof Landing.data).toBe('function');
    const defaultData = Landing.data();
    expect(defaultData.email).toBe(null);
    expect(defaultData.password).toBe(null);
    expect(defaultData.error).toBe('Sorry, your login information was incorrect.');
  });

  afterEach(() => {
    wrapper.destroy();
  });
});
