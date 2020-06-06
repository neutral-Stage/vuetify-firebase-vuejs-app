
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi' || 'md',
  },
  theme: {
    primary: '#03a9f4',
    secondary: '#F69320',
    accent: '#f44336',
    error: '#ff5722',
    warning: '#ffc107',
    info: '#00bcd4',
    success: '#4caf50'
  }
});
