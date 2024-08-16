<template>
    <div>
      <NavbarComp />
      <ProductGrid />
    </div>
  </template>
  
  <script>
  import NavbarComp from '@/components/NavbarComp.vue';
  import ProductGrid from '@/components/ProductGrid.vue';
  
  export default {
    name: 'HomePage',
    components: {
      NavbarComp,
      ProductGrid,
    },
  };
  </script>
  
  <style>
  </style>