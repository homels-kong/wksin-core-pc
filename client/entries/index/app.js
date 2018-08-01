import Vue from 'vue';
import router from 'client/router';
import store from 'client/store'
import App from './App.vue';
import ProcessBar from 'client/components/layout/ProcessBar.vue'
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
 * 挂在vue对象
 */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

/**
 * 路由跳转之前
 */
router.beforeEach(function(to, from, next) {
    console.log('123')
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

excuteAsyncData()

if(module.hot){
    module.hot.accept();
}
