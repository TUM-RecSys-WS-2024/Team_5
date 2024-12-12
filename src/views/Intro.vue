<template>
  <div class="intro">
    <Navbar />
    <div class="content">
      <h1 class="title">Fantasy2Reality</h1>
      <button @click="goToLocation" class="start-btn">Start</button>
    </div>

    <!-- selection up button -->
    <div class="selection-up-button" @click="goToHomePage">
      <div class="ellipse-in"></div>
      <div class="ellipse-out"></div>
      <img class="vector-up" alt="Dropup Icon" src="/public/img/chevron-up.svg" />
    </div>

    <div class="footer-text">
      <p>What is Fantasy2Reality? <br>
        Experience the beauty of nature and customize your perfect outdoor adventure! Fantasy2Reality is an innovative app that combines 
        user preferences and personalized data to recommend the ideal hiking trail for you. Whether you're an adventure enthusiast with a 
        passion for mountains and lakes, or you're looking to experience the nature you've always fantasized about, Fantasy2Reality will 
        help you move from fantasy to reality with immersive outdoor journeys.
      </p>
    </div>
  </div>
</template>
  
<script>
import Navbar from '../components/Navbar.vue'
  
export default {
  components: {
    Navbar
  },

  data() {
    return {
      imageHeight: '100vh'
    };
  },

  methods: {
    goToLocation() {
      this.$router.push('/location');
    },
    goToHomePage() {
      this.$emit('bgUp', false)
      this.$router.push('/home');
    }
  }
}
</script>
  
<style scoped>
.intro {
  position: relative;
  min-height: 100vh; 
  padding-bottom: 120px; 
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

.content {
  position: fixed; 
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%); 
  text-align: center;
  color: white;
  z-index: 10; 
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; 
}

.content * {
  pointer-events: auto;
}

.title {
  font-family: "Inter-Italic", Helvetica, sans-serif;
  font-size: 80px;
  font-style: italic;
  font-weight: 400;
  margin-bottom: 100px; 
}

.start-btn {
  background-color: rgba(0, 0, 0, 0); 
  padding: 15px 50px;
  border: 1px solid white; 
  color: white;
  cursor: pointer;
  font-size: 28px;
  border-radius: 0;
  position: absolute;
  bottom: 280px;
  left: 50%; 
  transform: translateX(-50%); 
  text-transform: uppercase; 
}

.selection-up-button {
  position: fixed;
  width: 80px;
  height: 80px;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  cursor: pointer;
}

.ellipse-in {
  position: absolute;
  width: 60px;
  height: 60px;
  top: 10px;
  left: 10px;
  background-color: #ffffff;
  border-radius: 30px;
  z-index: 1;
}

.ellipse-out {
  position: absolute;
  width: 80px;
  height: 80px;
  top: 0;
  left: 0;
  background-color: #ffffff4c;
  border-radius: 40px;
}

.vector-up {
  position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%) scale(1);
  width: 33px; 
  height: auto;
  z-index: 2;
}

.footer-text {
  position: absolute;
  bottom: 80px; 
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.8);  
  font-size: 24px;
  text-align: center;
  z-index: 50;  
  font-family: Helvetica, Arial, sans-serif;
  width: 80%;
  word-wrap: break-word;
}
</style>