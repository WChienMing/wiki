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

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
