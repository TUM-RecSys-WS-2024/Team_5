<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="login-overlay" @click.stop>
      <div class="title">Welcome back!</div>
      
      <!-- Login Button -->
      <div class="login">
        <div class="login-btn" @click="onLoginClick">Login</div>
      </div>
    
      <!-- Username input field -->
      <div class="username-wrapper" :class="{ 'input-focused': usernameFocused }">
        <transition name="fade">
          <div v-if="!usernameFocused && !username" class="username">Username</div>
        </transition>
        <input 
          v-model="username" 
          type="username" 
          @focus="usernameFocused = true"
          @blur="usernameFocused = false"
        />
      </div>
      
      <!-- Password input field -->
      <div class="password-wrapper" :class="{ 'input-focused': passwordFocused }">
        <transition name="fade">
          <div v-if="!passwordFocused && !password" class="password">Password</div>
        </transition>
        <input 
          v-model="password" 
          type="password" 
          @focus="passwordFocused = true"
          @blur="passwordFocused = false"
        />
      </div>

      <!-- Register Link -->
      <div class="register">
        <p class="text">Don’t have an account yet?</p>
        <div class="register-btn" @click="onClickReg">Register</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      username: '',
      password: '',
      usernameFocused: false,
      passwordFocused: false
    };
  },
  methods: {
    onLoginClick() {
      // Handle login action
      if (this.username && this.password) {
        console.log('Logging in with:', this.username, this.password);
        this.$emit('login-success', {
          username: this.username,
          password: this.password,
        });
      } else {
        alert('Please enter your username and password.');
      }
    },
    closeModal() {
      this.$emit('close');  
    },

    onClickReg() {
      this.$emit('switchPage', 'register');
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: rgba(0,0,0,0.5);
}

.login-overlay {
  position: relative;
  width: 555px;
  height: 555px;
  background-color: #7fa1c4;
  padding: 20px;
  border-radius: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

}

.title {
  position: absolute;
  width: 507px;
  top: 42px;
  left: 25px;
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: #ffffff;
  font-size: 36px;
  text-align: center;
}

.login {
  position: absolute;
  width: 120px;
  height: 52px;
  top: 387px;
  left: 220px;
  background-color: #7fa1c4;
  border: 1px solid #ffffff;
}

.login-btn {
  width: 109px;
  top: -2px;
  left: 40px;
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: #ffffff;
  font-size: 32px;
  text-align: center;
  
}

.register {
  position: absolute;
  width: 486px;
  height: 66px;
  top: 488px;
  left: 46px;
}

.text {
  width: 338px;
  top: 0;
  left: 0;
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: #ffffff;
  font-size: 24px;
  text-align: center;
}

.register-btn {
  position: absolute;
  width: 157px;
  top: 0;
  left: 329px;
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: #5e5555;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
}

.register-btn:hover {
  color: #5e5555; 
  text-decoration: underline; 
}

.username-wrapper,
.password-wrapper {
  position: absolute;
  width: 454px;
  height: 60px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #000000;
  transition: border-color 0.3s ease;
}

.username-wrapper {
  top: 160px;
  left: 63px;
}

.password-wrapper {
  top: 265px;
  left: 63px;
}

.input-focused {
  border-color: #7fa1c4;
}

.username,
.password {
  position: absolute;
  width: 216px;
  top: 9px;
  left: 20px;
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: #9c9c9c99;
  font-size: 24px;
}


/* Input Fields */
input[type="username"],
input[type="password"] {
  position: absolute;
  width: 380px;
  height: 30px;
  top: 15px;
  left: 20px;
  border: none;
  outline: none;
  font-size: 18px;
  padding: 5px;
  background-color: transparent;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

  