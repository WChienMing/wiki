import Vue from 'vue';
import VueRouter from 'vue-router';
// import MainPage from './components/MainPage.vue';
import NftPage from './components/NftPage.vue';
import NftDetails from './components/NftDetails.vue';
import Sediment from './components/Sediment.vue';
import Strategy from './components/Strategy.vue';
import NftPrice from './components/NftPrice.vue';
import Companion from './components/Companion.vue';
import HelloWorld from './components/HelloWorld.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/test_vuex', component: HelloWorld },
  { path: '/', component: NftPage },
  { path: '/nftDetails', component: NftDetails },
  { path: '/Sediment', component: Sediment },
  { path: '/Strategy', component: Strategy },
  { path: '/price', component: NftPrice },
  { path: '/companion', component: Companion },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;