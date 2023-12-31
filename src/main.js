import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

import './assets/css/fontawesome/css/fontawesome.css';
import './assets/css/fontawesome/css/brands.css';
import './assets/css/fontawesome/css/solid.css';
import './assets/css/bootstrap.min69db.css?id=3341';
import './assets/css/style7ff7.css?id=j523333';
import './assets/css/header.css';
import './assets/css/main.css';


import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


Vue.config.productionTip = false

export const OPENSEA_API_KEY = '8d6c9ede2a294c6c9e3f23214dbb24d2';
export const ALCHEMY_API_KEY = 'p5mON-omIMAgLAz82zfHaIymONhonpQ_';
export const HV_MTL = '0x4b15a9c28034dC83db40CD810001427d3BD7163D';
export const MO_API_KEY = 's51LMch8Mgs1JiwtNEYIEoiIMzWyqWaRtIhDzrsPcH719ZI1BQso4Dca3xAXmRld';

export const API_URL = 'https://forge.e2app.asia/api/';


new Vue({
  data(){
    return {
      isFetching: true
    }
  },
  store,
  router,
  render: h => h(App),
}).$mount('#app')
