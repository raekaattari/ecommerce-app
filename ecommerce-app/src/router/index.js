import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import SuccessComp from '@/components/SuccessComp.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/cart',
            name: 'ShoppingCart',
            component: ShoppingCart,
        },
        {
            path: '/success',
            name: 'SuccessComp',
            component: SuccessComp,
        },
    ]
});