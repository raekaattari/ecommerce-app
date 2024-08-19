<template>
    <b-card :class="['product-card', 'cardSizeClass']" :style="[cardStyles, { 'aspect-ratio': aspectRatio }]"
        :img-src="product.image" :img-alt="product.name" :img-top="imgPosition === 'top'"
        :img-left="imgPosition === 'left'" @mouseover="hover = true" @mouseleave="hover = false">

        <b-card-title> {{ product.name }}</b-card-title>

        <b-card-text>
            Price: ${{ product.price }}
        </b-card-text>
        <b-card-text v-if="!isInCart && hover">
            {{ product.description }}
        </b-card-text>
        <b-button variant="outline-secondary" v-show="!isInCart" @click="addToCart(product)" class="add-to-cart-btn">Add
            to Cart</b-button>
        <div v-show="isInCart">
            <span class="quantity-badge">Quantity: {{ product.quantity }}</span>
        </div>
        <div v-show="isInCart">
            <button class="minimal-btn" @click="removeFromCart(product.id)">
                <i class="bi bi-bag-dash"></i>
            </button>
            <button class="minimal-btn" @click="addToCart(product)">
                <i class="bi bi-bag-plus"></i>
            </button>
        </div>

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
            return {
                width: this.cardSize === 'small' ? '100%' : '100%',
            };
        },
        aspectRatio() {
            return this.cardSize === 'small' ? '6/3' : '4/5';
        },
    },
    methods: {
        ...mapActions(['addToCart', 'removeFromCart', 'clearCart']),
    }
};
</script>

<style scoped>
:root {
  --primary-color: #333333;
}

.b-card-title, .b-card-text, .quantity-badge, .minimal-btn, .bi {
  color: var(--primary-color);
}
.product-card img {
    max-width: 100%;
    max-height: 30vh;    
    object-fit: scale-down;
}

.product-card .add-to-cart-btn {
    margin-top: 10px;
    border-color: #e0e0e0;
}

.product-card .add-to-cart-btn:hover {
    background-color: #f8f8f8;
}

.quantity-badge {
    font-size: 14px;
    padding: 0.5rem;
}

.minimal-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    padding: 0.5rem;
}

.minimal-btn:hover {
    color: #ff7f7f;
}

</style>