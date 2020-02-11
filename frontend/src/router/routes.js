import Invalid from '@/views/404.vue';
import Landing from '@/views/Landing.vue';
import Header from '@/components/Header/HeaderBar.vue';
import LoginPage from '../views/LoginPage.vue';
import Register from '../views/Register.vue';


export default [
  {
    path: '/404',
    name: 'invalid',
    component: Invalid,
  },
  {
    path: '/',
    name: 'landing',
    component: Landing,
  },
  {
    path: '/feed',
    name: 'feed',
    components: {
      header: Header,
      default: () => import(/* webpackChunkName: "feed" */ '@/views/Feed.vue'),
    },
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    components: {

      default: () => import(/* webpackChunkName: "feed" */ '@/views/LoginPage.vue'),
    },
  },
  {
    path: '/Register',
    name: 'Register',
    components: {

      default: () => import(/* webpackChunkName: "feed" */ '@/views/Register.vue'),
    },
  },

  {
    path: '/account',
    name: 'account',
    components: {
      header: Header,
      default: () => import(/* webpackChunkName: "account" */ '@/views/Account.vue'),
    },
  },
  {
    path: '*',
    redirect: { name: 'invalid' },
  },
];
