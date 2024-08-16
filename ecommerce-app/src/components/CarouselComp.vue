<template>
    <b-carousel
      id="sustainability-carousel"
      :interval="0"
      controls
      indicators
      background="#f5f5f5"
      class="sustainability-carousel"
    >
      <b-carousel-slide
        v-for="(item, index) in slides"
        :key="index"
        :img-src="item.image"
        :alt="item.alt"
        class="carousel-slide"
      >
        <div class="carousel-caption">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </template>
  
  <script>
  export default {
    name: 'CarouselComp',
    data() {
      return {
        slides: [
          {
            image: 'path/to/sustainability-image1.jpg',
            alt: 'Sustainable Material 1',
            title: 'Sustainable Material 1',
            description: 'Description of sustainable material or practice.',
          },
          {
            image: 'path/to/sustainability-image2.jpg',
            alt: 'Sustainable Practice 2',
            title: 'Sustainable Practice 2',
            description: 'Description of another sustainable practice.',
          },
          {
            image: 'path/to/sustainability-image3.jpg',
            alt: 'Sustainable Initiative 3',
            title: 'Sustainable Initiative 3',
            description: 'Details about the initiative for sustainability.',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .sustainability-carousel {
    margin: 20px 0;
  }
  
  .carousel-slide {
    height: 400px;
    background-size: cover;
    background-position: center;
  }
  
  .carousel-caption {
    bottom: 20px;
    left: 0;
    right: 0;
    text-align: center;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 8px;
  }
  
  .carousel-caption h3 {
    font-size: 24px; /* Adjust heading size */
    margin-bottom: 10px;
  }
  
  .carousel-caption p {
    font-size: 16px; /* Adjust description size */
  }
  </style>