import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/HomePage.vue';

Vue.use(Router);

const ShoppingCart = () => import('@/components/ShoppingCart.vue');
const SuccessComp = () => import('@/components/SuccessComp.vue');

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'HomePage', component: HomePage },
        { path: '/cart', name: 'ShoppingCart', component: ShoppingCart },
        { path: '/success', name: 'SuccessComp', component: SuccessComp },
    ]
});