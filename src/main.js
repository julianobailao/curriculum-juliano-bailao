import Vue from 'vue';
import { ObserveVisibility } from 'vue-observe-visibility';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'socicon/css/socicon.css';
import theme from '@/app/Arch/Theme';
import App from '@/app';
import router from './router';

Vue.use(Vuetify, { theme });
Vue.directive('observe-visibility', ObserveVisibility);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
