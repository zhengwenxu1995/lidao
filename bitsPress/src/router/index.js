import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/login/login';
import index from '@/components/index';
import agencyIndex from '@/components/agencyIndex/agencyIndex';
import test from '@/components/test/test1';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/agencyIndex',
      name: 'agencyIndex',
      component: agencyIndex
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
});
