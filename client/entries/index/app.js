/**
 * 项目入口文件，所有的路由守卫钩子都要在vue实例之前声明
 */
import Vue from 'vue';
import router from 'client/router';
import store from 'client/store'
import App from './App.vue';
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import ProcessBar from 'client/components/layout/ProcessBar.vue'

Vue.use(ElementUI)

/**
 * 页面渲染容器
 */
import pageRender from '../pageRender' 

let loading = Vue.prototype.$progress = new Vue(ProcessBar).$mount();
document.body.appendChild(loading.$el)

/**
 * 注入事件总线
 */
Vue.prototype.$eventBus = new Vue()

/**
 * 路由跳转之前
 */
router.beforeEach(function(to, from, next) {
    next()
})

/**
 * 执行组件中异步请求
 */
excuteAsyncData()

/**
 * 挂在vue对象
 */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

/**
 * 获取每个组件中的asyncData函数并执行
 * 执行在DOM更新之前
 * 页面中需要加载的数据可以放到asyncData中
 */
function excuteAsyncData() {
    router.beforeResolve((to, from, next) => {
        let matched = router.getMatchedComponents(to);
        let prevMatched = router.getMatchedComponents(from);
    
        let diffed = false;
        let activated = matched.filter((c, i) => diffed || (diffed = (prevMatched[i] !== c)));
        console.log('456')
        if (!activated.length) {
            return next();
        }
        
        loading.start()

        Promise.all(
            activated
            .filter(c => c.asyncData && (!c.asyncDataFetched || !to.meta.keepAlive))
            .map(async c => {
                await c.asyncData({store, route: to});
                c.asyncDataFetched = true;
            })
        )
        .then(() => {
            next();
        })
    });
}

if(module.hot){
    module.hot.accept();
}
