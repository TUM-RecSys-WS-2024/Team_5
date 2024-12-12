<template>
  <Swiper
    :slides-per-view="1"
    :space-between="10"
    :loop="false"
    pagination
    class="mySwiper"
    :simulateTouch="true" 
    @slideChangeTransitionEnd="handleSlideChange"
    @touchStart="handleTouchStart"
    @touchEnd="handleTouchEnd"
  >
    <SwiperSlide v-for="(item, index) in items" :key="item.imageSrc" class="swiper-slide">
      <div class="slide-content">
        <div class="icon left-icon" v-if="isSliding && activeIndex === index">
          <img class="icon-image" alt="Left Icon" src="/public/img/x.svg" />
        </div>

        <img :src="item.imageSrc" :alt="item.imageAlt" class="slide-image" />

        <div class="icon right-icon" v-if="isSliding && activeIndex === index">
          <img class="icon-image" alt="Right Icon" src="/public/img/heart.svg" />
        </div>

        <div class="text-content">
          <h3 class="title">{{ item.title }}</h3>
          <p class="description">
            Location: {{ item.location }}<br />
            Terrain: {{ item.terrain }}<br />
            Difficulty: {{ item.difficulty }}
          </p>
        </div>
        
      </div>
    </SwiperSlide>
  </Swiper>
</template>
  
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
  
export default {
  name: "FrameSwiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isSliding: false, 
      activeIndex: 0,
    };
  },
  computed: {
    visibleItems() {
      return this.items.slice(0, 8);
    },
  },
  methods: {
    handleSlideChange(swiper) {
      this.activeIndex = swiper.activeIndex; 
      console.log("Current index:", swiper.activeIndex);
    },
    handleTouchStart(event) {
      this.isSliding = true; 
      this.startX = event.touches[0].clientX;
    },
    handleTouchEnd() {
      this.isSliding = false; 
      this.$emit("user-choice", { index: 0, choice: "swiped" });
    },
  },
};
</script>
  
<style scoped>
.mySwiper {
  width: 100%;
  max-width: 770px;
  height: 500px;
  margin: 0 auto;
}
  
.swiper-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
  
.slide-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.icon {
  transform: translateY(-50%);
  background-color: #7fa1c466;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-icon {
  position: absolute;
  left: -30px;
  top: 50%;
}

.right-icon {
  position: absolute;
  right: -30px;
  top: 50%;
}

.icon-image {
  height: 40px;
  width: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.slide-content.showIcons .icon {
  opacity: 1;
}

.slide-image {
  width: 80%;
  max-height: 770px;
  object-fit: cover;
  margin-bottom: 20px;
}
  
.text-content {
  text-align: center;
  background-color: #ffffff;
  border: 1px solid;
  border-color: #7fa1c4;
  height: 130px;
  left: 0;
  top: 0;
  width: 620px;
}
  
.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}
  
.description {
  font-size: 1rem;
  color: #555;
}
</style>
  