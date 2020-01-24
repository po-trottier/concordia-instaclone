import Landing from '@/views/Landing.vue';
import Header from '@/components/Header/HeaderBar.vue';

export default [
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
      default: () => import(/* webpackChunkName: "about" */ '@/views/Feed.vue'),
    },
  },
];
