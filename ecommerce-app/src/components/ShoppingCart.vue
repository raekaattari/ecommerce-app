<template>
    <div>
        <NavbarComp />

        <b-container>
            <h2>My Cart</h2>
            <b-row>
                <b-col class="product-grid" cols="12" md="4">
                    <b-container>
                        <b-row v-for="product in cartItems" :key="product.id" class="mb-4">
                            <ProductCard :product="product" img-position="left" card-size="small" :isInCart="true" />
                        </b-row>

                    </b-container>
                </b-col>
                <b-col cols="12" md="4">
                    <p> Thank you for shopping at Cozy Threads!</p>
                    <p> Your total is: $ {{ totalCost }}</p>
                </b-col>
                <b-col v-if="isCheckout" cols="12" md="4">
                    <PaymentComp cols="12" md="4"></PaymentComp>
                </b-col>
            </b-row>

            <div class="button-container">
                <b-button variant="outline-secondary" @click="clearCart" class="clear-cart-btn">Clear
                    Cart</b-button>
                <b-button v-if="!isCheckout" variant="primary" @click="checkout" class="checkout-btn">Checkout</b-button>
            </div>
        </b-container>



    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductCard from './ProductCard.vue';
import PaymentComp from './PaymentComp.vue';

import NavbarComp from '@/components/NavbarComp.vue';

export default {
    name: 'ShoppingCart',
    data() {
        return {
            isCheckout: false
        };
    },
    components: {
        ProductCard,
        NavbarComp,
        PaymentComp
    },
    computed: {
        ...mapGetters(['cartItems', 'totalCost']),
    },
    methods: {
        ...mapActions(['clearCart']),
        checkout() {
            this.isCheckout = true
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

.clear-cart-btn,
.checkout-btn {
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