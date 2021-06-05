import App from './App.vue';
import Vue from 'vue';
import './plugins/composition-api';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');