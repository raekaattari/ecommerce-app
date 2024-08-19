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
                    <div v-if="numCartItems > 0">
                        <p> Thank you for shopping at Cozy Threads!</p>
                        <p> Your total is: $ {{ totalCost }}</p>
                    </div>
                    <div v-if="numCartItems === 0">
                        <p> Your cart is empty!</p>
                        <p> Please add an item to your cart to checkout</p>
                    </div>

                </b-col>
                <b-col v-if="isCheckout" cols="12" md="4">
                    <PaymentComp @payment-success="handlePaymentSuccess" cols="12" md="4"></PaymentComp>
                </b-col>
            </b-row>

        </b-container>
        <footer class="fixed-footer">
            <div class="button-container">
                <b-button v-if="numCartItems > 0" variant="outline-secondary" @click="clearCart"
                    class="clear-cart-btn">Clear
                    Cart</b-button>
                <b-button v-if="!isCheckout" :disabled="numCartItems === 0" variant="primary" @click="checkout"
                    class="checkout-btn">Checkout</b-button>
            </div>
        </footer>



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
        ...mapGetters(['cartItems', 'totalCost', 'numCartItems']),
    },
    methods: {
        ...mapActions(['clearCart']),
        checkout() {
            this.isCheckout = true
        },
        handlePaymentSuccess() {
            this.clearCart();
            this.$router.push('/success');
        }
    },
};
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.fixed-footer {
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #ffffff;
    padding: 10px 20px;
    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.1);
}

.clear-cart-btn, .checkout-btn {
  font-size: 0.9rem; 
  border-radius: 4px;
}
.clear-cart-btn {
  background-color: transparent;
  border: 1px solid #e0e0e0;
  color: #333333;

}
.clear-cart-btn:hover {
  border-color: #999;
}

.checkout-btn {
    background-color:#333;;
    color:#e0e0e0;
}

.checkout-btn:hover {
    background-color: #e0e0e0;
    border-color: #b0b0b0;
    color: #333;
}

</style>