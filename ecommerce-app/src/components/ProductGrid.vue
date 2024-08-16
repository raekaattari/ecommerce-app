<template>
    <b-container>
      <b-row class="product-grid">
        <b-col v-for="product in products" :key="product.id" cols="12" lg="6" class="mb-4">
          <ProductCard :product="product" :isInCart="false"/>
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
  .product-grid {
    margin-top: 30px;
  }
  
  .product-grid .b-col {
    display: flex;
    justify-content: center;
  }
  
  .product-card {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px; 
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
  </style>