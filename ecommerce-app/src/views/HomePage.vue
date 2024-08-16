<template>
  <div class="m-3">
    <NavbarComp />
    <CarouselComp/>
    <ProductGrid />
  </div>
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue';
import CarouselComp from '@/components/CarouselComp.vue';
import ProductGrid from '@/components/ProductGrid.vue';

export default {
  name: 'HomePage',
  components: {
    NavbarComp,
    CarouselComp,
    ProductGrid,
  },
};
</script>

<style>

</style>