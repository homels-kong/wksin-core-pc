import Vue from 'vue';
import Router from 'vue-router';
import routes from'./index/router'

Vue.use(Router);

let router = new Router({
    mode: 'hash',
    base: '/',
    routes
});

export default router;