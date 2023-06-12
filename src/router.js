import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from './components/MainPage.vue';
import NftPage from './components/NftPage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: MainPage },
  { path: '/nft', component: NftPage },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;