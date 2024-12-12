<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/location">Location</router-link></li>
      <li><router-link to="/swipequiz">Swipe Quiz</router-link></li>
      <li><router-link to="/photo">Photo/Drawing</router-link></li>
      <li><router-link to="/recommendation">Recommendation</router-link></li>
    </ul>
    <!-- login button -->
    <button 
      v-if="!isLoggedIn" 
      @click="showLoginModal = true" 
      class="login-btn"
    >
      Login
    </button>
    <!-- profile button -->
    <button 
      v-if="isLoggedIn" 
      @click="this.showProfileModal = true" 
      class="login-btn"
      ref="profileButton"
    >
      Profile
    </button>

    <!-- LoginModal -->
    <LoginModal 
      v-if="showLoginModal" 
      @close="showLoginModal = false" 
      @login-success="handleLoginSuccess"
      @switch-page="onSwitchPage"
    />

    <!-- ProfileModal -->
    <ProfileModal 
      v-if="showProfileModal" 
      @close="this.showProfileModal = false"
      @logout="handleLogout"
      :username="username" 
      :password="password"
    />

    <!-- RegisterModal -->
    <RegisterModal 
      v-if="showRegisterModal" 
      @close="showRegisterModal = false"
      @register-success="handleRegisterSuccess"
      @switch-page="onSwitchPage"
    />

  </nav>
</template>
  
<script>
import { mapState, mapActions } from 'vuex';
import LoginModal from './LoginModal.vue';
import ProfileModal from './ProfileModal.vue';
import RegisterModal from './RegisterModal.vue';

export default {
  components: {
    LoginModal,
    ProfileModal,
    RegisterModal
  },

  data() {
    return {
      showLoginModal: false, 
      showProfileModal: false, 
      showRegisterModal: false, 
      username: '', 
      password: '', 
    };
  },
  computed: {
    ...mapState(['isLoggedIn', 'username', 'password']),
  },

  methods: {
    ...mapActions(['login', 'logout']),
    handleLoginSuccess(userData) {
      this.showLoginModal = false; 
      console.log('Login successful!'); 
      this.login(userData);
    },

    handleRegisterSuccess(userData) {
      this.showRegisterModal = false; 
      console.log('Register successful!'); 
      this.login(userData);
    },

    handleLogout() {
      this.logout();
      this.showProfileModal = false; 
      console.log('User logged out!');
    },

    onSwitchPage(pageId) {
      if (pageId === 'register') {
        this.showLoginModal = false;
        this.showRegisterModal = true;
      } else if (pageId === 'login') {
        this.showLoginModal = true;
        this.showRegisterModal = false;
      }
    }
  }
}
</script>
  
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center; 
  background-color: #333;
  color: #5e5555;
  position: relative; 
  margin-top: -25px; 
}

.navbar ul {
  display: flex;
  list-style: none;
  margin-left: 200px; 
}

.navbar ul li {
  margin: 0 60px;
}

.navbar ul li a {
  color: #5e5555;
  text-decoration: none;
  font-size: 20px; 
  font-weight: 500; 
  text-transform: capitalize; 
  transition: color 0.3s ease, text-decoration 0.3s ease; 
}

.navbar ul li a:hover {
  color: #5e5555; 
  text-decoration: underline; 
}

.login-btn {
  background-color: rgba(0, 0, 0, 0); 
  color: #5e5555; 
  border: 1px solid #5e5555; 
  padding: 10px 20px;
  border-radius: 0;
  cursor: pointer; 
  font-size: 20px; 
  font-weight: bold; 
}
</style>
  