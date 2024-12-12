<template>
    <div class="photo-slider-wrapper">
      <div class="photo-slider">
        <img
          src="/img/chevron-left.svg"
          alt="Left Arrow"
          class="arrow left-arrow"
          @click="prevPhoto"
        />
        <img :src="photos[currentPhotoIndex]" alt="Photo" class="photo" />
        <img
          src="/img/chevron-right.svg"
          alt="Right Arrow"
          class="arrow right-arrow"
          @click="nextPhoto"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
  
  const photos = ['/img/image1.svg', '/img/image2.svg', '/img/image3.svg', '/img/image4.svg']
  const currentPhotoIndex = ref(0)
  const nextPhoto = () => {
    currentPhotoIndex.value =
      currentPhotoIndex.value < photos.length - 1 ? currentPhotoIndex.value + 1 : 0
  }
  
  const prevPhoto = () => {
    currentPhotoIndex.value =
      currentPhotoIndex.value > 0 ? currentPhotoIndex.value - 1 : photos.length - 1
  }
  </script>
  
  <style scoped>
  .photo-slider-wrapper {
    margin-top: -300px;
    display: flex;
    justify-content: center; 
    align-items: center;    
    height: 100vh; 
  }
  
  .photo-slider {
    position: relative;
    width: 80%; 
    max-width: 700px;
    height: 300px; 
    border-radius: 10px;
    overflow: hidden;
  }
  
  .photo-slider .photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .arrow {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .left-arrow {
    left: 10px;
  }
  
  .right-arrow {
    right: 10px;
  }

  </style>
  