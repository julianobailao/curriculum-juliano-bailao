import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'socicon/css/socicon.css';
import theme from '@/app/Arch/Theme';
import App from '@/app';
import router from './router';

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: -100,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});
Vue.use(Vuetify, { theme });
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
