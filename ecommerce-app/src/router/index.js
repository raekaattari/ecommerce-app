import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import PaymentComp from '@/components/PaymentComp.vue';

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
            path: '/checkout',
            name: 'PaymentComp',
            component: PaymentComp,
        },
    ]
});