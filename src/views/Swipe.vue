<template>
  <div class="swipe">
    <Navbar />
    <div class="background"></div>
      
    <!-- Description and selection -->
    <p class="text"> Browse through a series of images of natural landscapes and select the scenes you dislike or like by dragging the photos left or right. Your choices will help the system better understand your preferences.</p>
    <div class="progress-bar">
      <div class="rectangle" v-for="(n, index) in progressCount" :key="n" :style="{ backgroundColor: index <= progress ? '#7fa1c4' : '#9c9c9c99', left: `${index * 78}px`}"></div>
      <div class="number">{{ progress < 8 ? progress + 1 : 8 }}/8</div>
    </div>
    <div class="frame-wrapper">
      <FrameSwiper :items="slides" @user-choice="handleUserChoice" />
    </div>

    <div class="button" v-if="showNextButton" @click="goToPhoto">
      <div class="next">Next</div>
    </div>
    
  </div>
</template>
  
<script>
import Navbar from '../components/Navbar.vue'
import FrameSwiper from "../components/FrameSwiper.vue";

export default {
  name: "Swipe",

  components: {
    Navbar,
    FrameSwiper
  },

  data() {
    return {
      slides: [],
      allItems: [
        {
          title: "Fischbeker Heide",
          location: "Fischbektal, 21149 Hamburg",
          terrain: "Nature Conservation Area",
          difficulty: "⭐️",
          imageSrc: "/public/img/photo1.svg",
          imageAlt: "Photo 1",
        },
        {
          title: "Saxon Switzerland National Park",
          location: "Bastei Bridge, 01847 Lohmen",
          terrain: "Mountain and sandstone landscapes",
          difficulty: "⭐⭐⭐",
          imageSrc: "/public/img/photo2.svg",
          imageAlt: "Photo 2",
        },
        {
          title: "Black Forest",
          location: "Westweg Trail",
          terrain: "Combination of forests and lakes",
          difficulty: "⭐⭐",
          imageSrc: "/public/img/photo3.svg",
          imageAlt: "Photo 3",
        },
        {
          title: "Königssee",
          location: "Seestraße 3, 83471 Schönau am Königssee",
          terrain: "Alpine lakes and steep valleys",
          difficulty: "⭐",
          imageSrc: "/public/img/photo4.svg",
          imageAlt: "Photo 4",
        },
        {
          title: "Elbe Wine Trails",
          location: "Wackerbarthstraße 1, 01445 Radebeul",
          terrain: "Vineyard hike on the Elbe",
          difficulty: "⭐",
          imageSrc: "/public/img/photo5.svg",
          imageAlt: "Photo 5",
        },
        {
          title: "Eifel National Park",
          location: "Fischbektal, 21149 Hamburg",
          terrain: "Volcanic landscapes and deep lakes",
          difficulty: "⭐⭐",
          imageSrc: "/public/img/photo6.svg",
          imageAlt: "Photo 6",
        },
        {
          title: "Zugspitze",
          location: "Zugspitzplatt 1, 82475 Garmisch-Partenkirchen",
          terrain: "Highest peak in Germany",
          difficulty: "⭐⭐⭐⭐⭐",
          imageSrc: "/public/img/photo7.svg",
          imageAlt: "Photo 7",
        },
        {
          title: "Rothenburg ob der Tauber Trails",
          location: "Fischbektal, 21149 Hamburg",
          terrain: "Medieval villages and romantic paths",
          difficulty: "⭐⭐",
          imageSrc: "/public/img/photo8.svg",
          imageAlt: "Photo 8",
        },
      ],

      progress: 0,
      showNextButton: false,
    };
  },
  computed: {
    progressCount() {
      console.log("progressCount array:", Array.from({ length: 8 }));
      return Array.from({ length: 8 });
    },
  },
  created() {
    this.shuffleItems();
  },
  methods: {
    goToPhoto() {
      this.$router.push('/photo'); 
    },
    handleUserChoice({ index, choice }) {
      console.log(`User chose ${choice} on slide ${index}`);
      this.slides.splice(index, 1);
      if (this.progress < 8) {
        this.progress = Math.min(this.progress + 1, 8);
      }

      console.log("Current progress value:", this.progress);
      if (this.progress === 8) {
        this.showNextButton = true;
      }
    },
    shuffleItems() {
      const shuffled = [...this.allItems];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      this.slides = shuffled; 
    },
  },
  
};
</script>
  
<style scoped>
.swipe {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.navbar {
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100; 
  background-color: rgba(0, 0, 0, 0);
  padding: 50px 20px; 
  color: white; 
}

.background {
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-image: url('/public/img/nav-background.svg');
  background-size: cover;
  background-position: center;
}
  
.text {
  position: absolute;
  width: 959px;
  top: 189px;
  left: 360px;
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: #7fa1c4;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
}
  
.progress-bar {
  position: absolute;
  width: 624px;
  top: 350px;
  left: 525px;
}
  
.rectangle {
  position: absolute;
  width: 78px;
  height: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
  
.rectangle:nth-child(1) {
  left: 0;
}

.rectangle:nth-child(2) {
  left: 78px;
}

.rectangle:nth-child(3) {
  left: 156px;
}

.rectangle:nth-child(4) {
  left: 234px;
}

.rectangle:nth-child(5) {
  left: 312px;
}

.rectangle:nth-child(6) {
  left: 390px;
}

.rectangle:nth-child(7) {
  left: 468px;
}

.rectangle:nth-child(8) {
  left: 546px;
}
  
.number {
  position: absolute;
  width: 46px;
  height: 62px;
  top: -60px;
  left: 290px;
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: #000000;
  font-size: 20px;
  letter-spacing: 0;
  line-height: normal;
}

.frame-wrapper {
  position: absolute;
  top: 400px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.button {
  all: unset;
  box-sizing: border-box;
  position: absolute;
  width: 180px;
  height: 67px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #7fa1c4;
  border: 1px solid;
  cursor: pointer;
}

.next {
  position: absolute;
  top: 11px;
  left: 57px;
  font-family: "Inter-Bold", Helvetica;
  font-weight: 700;
  color: #ffffff;
  font-size: 30px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
}

</style>
  