// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import iView from 'iview';
// import 'iview/dist/styles/fonts/ionicons.eot'
// import 'iview/dist/styles/fonts/ionicons.svg'
// import 'iview/dist/styles/fonts/ionicons.ttf'
// import 'iview/dist/styles/fonts/ionicons.woff'
import 'iview/dist/styles/iview.css'
/* eslint-disable no-new */

import store from './store/index';
Vue.use(iView);
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})