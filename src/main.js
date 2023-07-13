import Vue from 'vue'
import App from './App.vue'
import router from './router';

import './assets/css/fontawesome/css/fontawesome.css';
import './assets/css/fontawesome/css/brands.css';
import './assets/css/fontawesome/css/solid.css';
import './assets/css/bootstrap.min69db.css?id=3341';
import './assets/css/style7ff7.css?id=j523333';
import './assets/css/header.css';
import './assets/css/main.css';

// import './assets/js/cookieconsent.js';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import './assets/js/browse_nft.js';
// import './assets/js/popper.min.js';
// import './assets/js/custom28b4.js';

Vue.config.productionTip = false

export const OPENSEA_API_KEY = '8d6c9ede2a294c6c9e3f23214dbb24d2';
export const ALCHEMY_API_KEY = 'p5mON-omIMAgLAz82zfHaIymONhonpQ_';
export const HV_MTL = '0x4b15a9c28034dC83db40CD810001427d3BD7163D';
export const MO_API_KEY = 's51LMch8Mgs1JiwtNEYIEoiIMzWyqWaRtIhDzrsPcH719ZI1BQso4Dca3xAXmRld';

export const API_URL = 'http://forge.e2app.asia/api/';


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
