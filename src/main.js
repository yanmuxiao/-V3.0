// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import babelpolyfill from 'babel-polyfill'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from "@/vuex/store"


Vue.config.productionTip = false


import {Alert, Confirm, Prompt, Toast} from 'wc-messagebox'
import 'wc-messagebox/style.css'
Vue.use(Alert)
Vue.use(Confirm)
Vue.use(Prompt)
Vue.use(Toast)


import VueScroller from 'vue-scroller'
Vue.use(VueScroller)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
