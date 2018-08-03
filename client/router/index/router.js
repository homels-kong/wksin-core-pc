/**
 * 页面路由
 */
let Home = resolve => require(['../../components/index/Home.vue'], resolve)

export default [{
    path: '/',
    component: Home
}, {
    path: '/home',
    component: Home
}]