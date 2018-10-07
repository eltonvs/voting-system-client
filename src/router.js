import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
    },
    {
      path: '/vote',
      name: 'vote',
      component: () =>
        import(/* webpackChunkName: "vote" */ '@/views/Vote.vue'),
    },
    {
      path: '/results',
      name: 'results',
      component: () =>
        import(/* webpackChunkName: "results" */ '@/views/Results.vue'),
    },
  ],
});
