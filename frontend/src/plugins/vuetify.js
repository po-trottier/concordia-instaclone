import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#5396ec',
        secondary: '#ec9d54',
        accent: '#b9358b',
        info: '#5396ec',
        success: '#405de6',
        warning: '#f77737',
        error: '#fd1d1d',
        light: '#f7f7f7',
        dark: '#242323',
      },
    },
  },
});
