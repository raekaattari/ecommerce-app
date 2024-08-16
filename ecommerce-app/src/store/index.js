import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [],
    },
    mutations: {
        ADD_TO_CART(state, product) {
            console.log('adding product to cart')
            const existingProduct = state.cart.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cart.push({ ...product, quantity: 1 });
            }
        },
        REMOVE_FROM_CART(state, productId) {
            const existingProduct = state.cart.find(item => item.id === productId);
            if(existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
            } else {
                state.cart = state.cart.filter(item => item.id !== productId);
            }
        },
        CLEAR_CART(state) {
            state.cart = [];
        },
    },
    actions: {
        addToCart({ commit }, product) {
            commit('ADD_TO_CART', product);
        },
        removeFromCart({ commit }, productId) {
            commit('REMOVE_FROM_CART', productId);
        },
        clearCart({ commit }) {
            commit('CLEAR_CART');
        },
    },
    getters: {
        cartItems(state) {
            return state.cart;
        },
        numCartItems(state) {
            return state.cart.reduce((total, item) => total + item.quantity, 0);
        },
        totalCost(state) {
            return state.cart.reduce((total, item) => {
                return total + (item.price * item.quantity); 
            }, 0);

        }
    },
});