<template>
    <b-card :class="['product-card', 'cardSizeClass']" :style="cardStyles" :img-src="product.image"
        :img-alt="product.name" :img-top="imgPosition === 'top'" :img-left="imgPosition === 'left'"
        @mouseover="hover = true" @mouseleave="hover = false">

        <b-card-title> {{ product.name }}</b-card-title>

        <b-card-text>
            Price: ${{ product.price }}
        </b-card-text>
        <b-card-text v-if="!isInCart && hover">
            {{ product.description }}
        </b-card-text>
        <b-button variant="outline-secondary" v-show="!isInCart" @click="addToCart(product)" class="add-to-cart-btn">Add
            to Cart</b-button>
        <span class="badge quantity-badge" v-show="isInCart">{{ product.quantity }}</span>
        <b-button variant="outline-danger" v-show="isInCart" @click="removeFromCart(product.id)"
            class="remove-from-cart-btn">Remove</b-button>
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
        },
        imgPosition: {
            type: String,
            default: 'top',
        },
        cardSize: {
            type: String,
            default: 'medium',
        },
    },
    data() {
        return {
            hover: false,
        };
    },
    mounted() {
        console.log(this.imgPosition)
    },
    computed: {
        cardSizeClass() {
            return `card-size-${this.cardSize}`;
        },
        cardStyles() {
            switch (this.cardSize) {
                case 'small':
                    return { width: '400px', height: '200px' };
                default:
                    return { width: '300px', height: '450px' };
            }
        },
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

.product-card .b-card-text {
    font-size: 14px;
    color: #666666;
}

.product-card img {
    max-width: 100%;
    max-height: 200px;
    object-fit: scale-down;
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

.product-card .b-card-title {
    font-size: 16px;
    color: #333333;
}
</style>