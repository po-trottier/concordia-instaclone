import { shallowMount } from '@vue/test-utils';
import base from './common/base';
import helper from './common/helpers';
import auth from './common/mocks/auth';

import Upload from '@/views/Upload.vue';

describe('Upload Image View', () => {
  let wrapper;

  beforeEach(() => {
    helper.store({
      auth,
    });
    wrapper = shallowMount(Upload, base);
  });

  it('is mounted properly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('has a created hook', () => {
    expect(typeof Upload.created).toBe('function');
  });

  it('initiliazes with the correct elements', () => {
    expect(wrapper.name()).toMatch('Upload');
    expect(wrapper.findAll('h1').length).toEqual(1);
    expect(wrapper.findAll('h1').at(0).text()).toMatch('Create a Post');
    expect(wrapper.findAll('.mb-6').exists()).toBe(true);
    // expect(wrapper.findAll('.v-btn').exists()).toBe(true);
  });

  it('has the correct default information', () => {
    expect(typeof Upload.data).toBe('function');
    const defaultData = Upload.data();
    expect(defaultData.progress).toBe(false);
    expect(defaultData.file).toBe(null);
    expect(defaultData.data).toBe(null);
    expect(defaultData.description).toBe(null);
  });

  afterEach(() => {
    wrapper.destroy();
  });
});
