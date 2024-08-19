<template>
    <b-carousel
      id="carousel"
      :interval="0"
      controls
      indicators
      background="#f5f5f5"
      class="carousel"
    >
      <b-carousel-slide
        v-for="(item, index) in slides"
        :key="index"
        :img-src="item.image"
        :alt="item.alt"
        class="carousel-slide"
      >
        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </template>
  
  <script>
import { slides } from '@/data/carousel';

  export default {
    name: 'CarouselComp',
    data() {
      return {
        slides: slides,
      };
    },
  };
  </script>
  
  <style scoped>
 .carousel {
    margin: 20px 0;
  }
  .carousel-slide {
    height: 300px;
  }

  </style>