import { shallowMount } from '@vue/test-utils';
import base from './common/base';
import helper from './common/helpers';
import auth from './common/mocks/auth';

import SignUp from '@/views/SignUp.vue';

describe('Details View', () => {
  let wrapper;

  beforeEach(() => {
    helper.store({
      auth,
    });
    wrapper = shallowMount(SignUp, base);
  });

  it('is mounted properly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('initiliazes with the correct elements', () => {
    expect(wrapper.name()).toMatch('SignUp');
    expect(wrapper.findAll('h1').length).toEqual(1);
    expect(wrapper.findAll('h1').at(0).text()).toMatch('Create an Account');
    expect(wrapper.findAll('h3').length).toEqual(2);
    expect(wrapper.findAll('h3').at(0).text()).toMatch('Account Information');
    expect(wrapper.findAll('h3').at(1).text()).toMatch('Profile Information');
    expect(wrapper.findAll('.mt-n2').exists()).toBe(true);
    expect(wrapper.findAll('.mt-4').exists()).toBe(true);
  });

  it('has the correct default information', () => {
    expect(typeof SignUp.data).toBe('function');
    const defaultData = SignUp.data();
    expect(defaultData.progress).toBe(false);
    expect(defaultData.valid).toBe(false);
    expect(defaultData.snackbar).toBe(false);
    expect(defaultData.email).toBe(null);
    expect(defaultData.password).toBe(null);
    expect(defaultData.username).toBe(null);
    expect(defaultData.name).toBe(null);
    expect(defaultData.bio).toBe(null);
    expect(defaultData.website).toBe(null);
  });

  afterEach(() => {
    wrapper.destroy();
  });
});
