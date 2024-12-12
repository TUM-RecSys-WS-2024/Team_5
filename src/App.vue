<template>
  <div :class="{ 'bg-up': isUp, 'bg-down': !isUp }">
    <router-view @bgUp="onBgUp">
    </router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  data () {
    return {
      name: 'App',
      isUp: false
    }
  },

  methods: {
    onBgUp (bgFlag) {
      this.isUp = bgFlag;
      console.log(bgFlag, '----------->onBgUp')
    }
  }
}
</script>

<style>
</style>
