<template>
    <div class="photo">
      <Navbar />
      <div class="background"></div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: "Photo",

  components: {
    Navbar,
  },
};
</script>

<style scoped>
.photo {
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

</style>
