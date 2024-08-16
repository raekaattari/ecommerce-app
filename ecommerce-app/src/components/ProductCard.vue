<template>
    <b-card class="product-card" :title="product.name" img-src="product.image" img-alt="Image" img-top
        @mouseover="hover = true" @mouseleave="hover = false">
        <b-card-text>
            Price: ${{ product.price }}
        </b-card-text>
        <b-card-text v-if="!isInCart && hover">
            {{ product.description }}
        </b-card-text>
        <b-button variant="outline-secondary" v-show="!isInCart" @click="addToCart(product)" class="add-to-cart-btn">Add to Cart</b-button>
        <span class="badge quantity-badge" v-show="isInCart">{{ product.quantity }}</span>
        <b-button variant="outline-danger" v-show="isInCart" @click="removeFromCart(product.id)" class="remove-from-cart-btn">Remove</b-button>
    </b-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
            required: true,
        },
        isInCart: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            hover: false,
        };
    },
    methods: {
        ...mapActions(['addToCart', 'removeFromCart', 'clearCart']),
    }
};
</script>

<style scoped>
.product-card {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    transition: box-shadow 0.3s ease-in-out;
    border-radius: 8px;
}

.product-card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-card .b-card-text {
    font-size: 14px;
    color: #666666;
}

.product-card .add-to-cart-btn {
    margin-top: 10px;
    border-color: #e0e0e0;
    color: #333333;
    border-radius: 4px;
}

.product-card .add-to-cart-btn:hover {
    background-color: #f8f8f8;
}

.product-card .quantity-badge {
    display: inline-block;
    background-color: #e0e0e0;
    color: #333333;
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 12px;
    margin-top: 10px;
}

.product-card .remove-from-cart-btn {
    margin-top: 10px;
    border-color: #d9534f;
    color: #d9534f;
    border-radius: 4px;
    font-size: 12px;
}

.product-card .remove-from-cart-btn:hover {
    background-color: #f8d7da;
}
</style>