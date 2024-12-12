<template>
  <div class="recommendation">
    <Navbar />
    <div class="background"></div>

    <!-- Description and selection -->
    <p class="text"> Based on your preferred choices, Fantasy2Reality will recommend a customized hiking trail that will give your outdoor trip a personal touch and surprise!</p>

    <SliderWrapper class="slider-wrapper"/>

    <!-- Text Box -->
    <div class="text-box">
      <p class="text1">
        <strong>Hiking Trail:</strong> Zugspitze<br>
        <strong>Location:</strong> Zugspitzplatt 1, 82475 Garmisch-Partenkirchen<br>
        <strong>Terrain:</strong> Highest peak in Germany<br>
        <strong>Difficulty:</strong> ⭐️⭐️⭐️⭐️⭐️⭐️<br>
        <strong>Walking Distance:</strong> Ehrwald Route 17km<br>
        <strong>Duration:</strong> 8-9 hours<br>
        <strong>Neighboring Attractions:</strong> Eibsee-Seilbahn, Gletscherbahn<br>
        <strong>Best Season:</strong> June - September
      </p>
    </div>

    <p class="text2"> Thank you for your participation and your love for our app, we hope you have a wonderful hiking experience and enjoy your trip!</p>

    <button class="button" @click="goToHome">
      <div class="end">END</div>
    </button>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import SliderWrapper from '../components/SliderWrapper.vue'

export default {
  name: "Recommendation",

  components: {
    Navbar,
    SliderWrapper
  },

  methods: {
    goToHome() {
      this.$router.push('/home'); 
    },
  }
};
</script>

<style scoped>
.recommendation {
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
  width: 1000px;
  top: 140px;
  left: 360px;
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: #7fa1c4;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
}

.slider-wrapper {
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  z-index: 1;
}

.text-box {
  position: absolute;
  top: 550px;
  left: 50%;
  transform: translateX(-50%); 
  width: 80%;
  max-width: 700px;
  height: 250px;
  overflow-y: scroll;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
}

.text1 {
  font-size: 18px;
  color: #333;
  line-height: 1.6;
}

.text2 {
  position: absolute;
  width: 700px;
  top: 830px;
  left: 480px;
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: #7fa1c4;
  font-size: 18px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
}

.button {
  all: unset;
  box-sizing: border-box;
  position: absolute;
  width: 150px;
  height: 60px;
  top: 885px;
  left: 750px;
  background-color: #7fa1c4;
  border: 1px solid;
}

.end {
  position: absolute;
  top: 11px;
  left: 40px;
  font-family: "Inter-Bold", Helvetica;
  font-weight: 700;
  color: #ffffff;
  font-size: 32px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
}
</style>
