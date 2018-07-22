import Vue from 'vue';
import router from '../../router/index.js';
import App from './App.vue';

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')


if(module.hot){
    module.hot.accept();
}