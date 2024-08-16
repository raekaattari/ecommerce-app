<template>
    <div>
        <NavbarComp />

        <b-container>
            <h2>My Cart</h2>
            <b-container>
                <b-row class="product-grid">
                    <b-col v-for="product in cartItems" :key="product.id" cols="12" md="4" class="mb-4">
                        <ProductCard :product="product" :isInCart="true" />
                    </b-col>
                </b-row>
            </b-container>
            <div class="button-container">
                <b-button variant="outline-secondary" @click="clearCart" class="clear-cart-btn">Clear Cart</b-button>
                <b-button variant="primary" @click="checkout" class="checkout-btn">Checkout</b-button>
            </div>
        </b-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductCard from './ProductCard.vue';
import NavbarComp from '@/components/NavbarComp.vue';

export default {
    name: 'ShoppingCart',
    components: {
        ProductCard,
        NavbarComp,
    },
    computed: {
        ...mapGetters(['cartItems']),
    },
    methods: {
        ...mapActions(['clearCart']),
        checkout() {
            alert('Checkout functionality not implemented yet.');
        },
    },
};
</script>

<style scoped>
.button-container {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}

.clear-cart-btn, .checkout-btn {
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    padding: 10px 20px;
}

.clear-cart-btn {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    color: #333333;
}

.clear-cart-btn:hover {
    background-color: #f8f8f8;
    border-color: #d0d0d0;
}

.checkout-btn {
    background-color: #007bff;
    border: 1px solid #007bff;
    color: #ffffff;
}

.checkout-btn:hover {
    background-color: #0056b3;
    border-color: #004080;
}
</style>