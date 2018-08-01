/* eslint-disable */
/**
 * vuex按需加载封装
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

/**
 * 所有store模块在这里引入
 */
import index from './modules/index'

let modules = {
    index
}

export default new Vuex.Store({
    modules: {
        ...modules
    }
})
