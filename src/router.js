import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from './components/MainPage.vue';
import NftPage from './components/NftPage.vue';
import NftDetails from './components/NftDetails.vue';
import Sediment from './components/Sediment.vue';
import Strategy from './components/Strategy.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/', component: MainPage },
  { path: '/nft', component: NftPage },
  { path: '/nftDetails', component: NftDetails },
  { path: '/Sediment', component: Sediment },
  { path: '/Strategy', component: Strategy },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;