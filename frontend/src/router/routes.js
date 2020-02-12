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
    path: '/user',
    name: 'user',
    components: {
      header: Header,
      default: () => import(/* webpackChunkName: "user" */ '@/views/User.vue'),
    },
  },
  {
    path: '*',
    redirect: { name: 'invalid' },
  },
];
