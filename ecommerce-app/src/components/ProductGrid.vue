<template>
    <b-container>
      <b-row class="product-grid">
        <b-col v-for="product in products" :key="product.id" cols="12" lg="4" class="mb-4">
          <ProductCard img-position="top" card-size="medium" :product="product" :isInCart="false"/>
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  import ProductCard from './ProductCard.vue';
  import { products } from '@/data/products';
  
  export default {
    name: 'ProductGrid',
    components: {
      ProductCard,
    },
    data() {
      return {
        products: products,
      };
    },
  };
  </script>
  
  <style scoped>
  </style>