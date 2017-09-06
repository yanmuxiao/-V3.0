import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import publicM from './modules/publicM' // 公用
import planDeal from './modules/planDeal' // 套餐办理模块



// 创建 store 实例
export default new Vuex.Store({
    modules: {
        publicM,
        planDeal
    },
    strict: true
})