import Vue from "vue";
import Swal from 'sweetalert2'

import App from "./App.vue";
import VueFirestore from 'vue-firestore'
require('firebase/firestore')
import router from "./router";
import vuetify from './plugins/vuetify';
import { fb } from './firebase'
import VueLazyload from 'vue-lazyload'


import Carousel3d from 'vue-carousel-3d';
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);
Vue.use(Carousel3d);
Vue.use(VueLazyload)
Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})
window.Swal = Swal;
Vue.use(VueFirestore)
Vue.config.productionTip = false;
let app = '';

Vue.filter('lowercase', value => {
  if (!value || typeof (value) != 'string') return ''
  value = value.toLowerCase()
  return value
})

const Toast = Swal.mixin({
  toast: true,
  position: 'center',
  showConfirmButton: false,
  timer: 3000
})
window.Toast = Toast;



fb.auth().onAuthStateChanged(function (user) {

  if (!app) {
    new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount("#app");

  }

});


