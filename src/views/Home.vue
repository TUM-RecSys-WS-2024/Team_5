<template>
  <div class="home">
    <Navbar />
    <div class="content">
      <h1 class="title">Fantasy2Reality</h1>
      <button @click="goToLocation" class="start-btn">Start</button>
    </div>

    <!-- selection down button -->
    <div class="selection-down-button" @click="goToIntroPage">
      <div class="ellipse-in"></div>
      <div class="ellipse-out"></div>
      <img class="vector-down" alt="Dropdown Icon" src="/public/img/chevron-down.svg" />
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
      imageHeight: 'auto'
    };
  },

  methods: {
    goToLocation() {
      this.$router.push('/location'); 
    },
    goToIntroPage() {
      this.$emit('bgUp', true)
      this.$router.push('/intro');
    }
  }
}
</script>
  
<style scoped>
.home {
  position: relative;
  height: 100vh;
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

.selection-down-button {
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

.vector-down {
  position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%) scale(1); 
  width: 33px; 
  height: auto; 
  z-index: 2;
}
</style>
  