// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import iView from 'iview';
import 'iview/dist/styles/iview.css'

import {ajaxGet,ajaxPost} from './api/axios'

Vue.prototype.$ajaxGet = ajaxGet;
Vue.prototype.$ajaxPost = ajaxPost;

import store from './store/index';
Vue.use(iView);
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})