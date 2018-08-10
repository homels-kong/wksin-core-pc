/**
 * 页面路由
 */
let PageContainer = resolve => require(['../../components/index/PageContainer.vue'], resolve);
let routes = require('client/config/route.js');

routes = routes || [];
/**
 * 动态注入根组件
 */
routes.forEach(item => {
    item.component = PageContainer
})

export default routes