import Invalid from '@/views/404.vue';
import Landing from '@/views/Landing.vue';
import Header from '@/components/Header/HeaderBar.vue';

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
    path: '/edit',
    name: 'edit',
    components: {
      header: Header,
      default: () => import(/* webpackChunkName: "edit" */ '@/views/Edit.vue'),
    },
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
    path: '/post/:id',
    name: 'post',
    components: {
      header: Header,
      default: () => import(/* webpackChunkName: "post" */ '@/views/Details.vue'),
    },
  },
  {
    path: '/signup',
    name: 'signup',
    components: {
      default: () => import(/* webpackChunkName: "signup" */ '@/views/SignUp.vue'),
    },
  },
  {
    path: '/reset-password',
    name: 'reset',
    components: {
      default: () => import(/* webpackChunkName: "signup" */ '@/views/ForgotPassword.vue'),
    },
  },
  {
    path: '/user/:uid',
    name: 'user',
    components: {
      header: Header,
      default: () => import(/* webpackChunkName: "user" */ '@/views/User.vue'),
    },
  },
  {
    path: '/upload',
    name: 'upload',
    components: {
      header: Header,
      default: () => import(/* webpackChunkName: "upload" */ '@/views/Upload.vue'),
    },
  },
  {
    path: '*',
    redirect: { name: 'invalid' },
  },
];
