<template>
  <div class="container" @click.self="closeModal">
    <div class="logout" @click="logout">
      <div class="logout-btn">Log out</div>
    </div>

    <div class="photo">
      <label for="file-upload"  v-if="!photoUrl">
        <img class="camera" alt="Camera Icon" src="/public/img/camera.svg" />
      </label>
      <input 
        id="file-upload" 
        type="file" 
        @change="onFileChange" 
        accept="image/*" 
        style="display: none" 
      />
      <img v-if="photoUrl" :src="photoUrl" alt="Uploaded Photo" class="uploaded-photo" />
    </div>

    <div class="username-wrapper">
      <p class="u">
        <span class="username">Username</span>
        <span class="span">{{ username || 'N/A' }}</span>
      </p>
    </div>

    <div class="password-wrapper">
      <p class="p">
        <span class="password">Password</span>
        <span class="star">{{ obfuscatedPassword }}</span>
      </p>
    </div>
   </div>
</template>
  
<script>
export default {
  props: {
    username: {
      type: String,
      default: '',
    },
    password: {
      type: String,
      default: '',
    },
    modalPosition: {
      type: Object,
      required: true, 
    },
  },

  data() {
    return {
      photoUrl: null, 
    };
  },

  computed: {
    obfuscatedPassword() {
      return '*'.repeat(this.password.length || 0);
    },
  },

  methods: {
    closeModal() {
      this.$emit('close'); 
    },
    logout() {
      console.log('User logged out.');
      this.$emit('logout'); 
      this.$emit('close'); 
    },

    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.photoUrl = URL.createObjectURL(file);
      }
    },
  },
};
</script>
  
  <style scoped>
  
 .container {
    background-color: #7fa1c4b2;
    top: 75px;
    left: 1350px;
    width: 319px;
    height: 323px;
    position: fixed;
    border-radius: 10px; /* 添加圆角 */
    padding: 20px; /* 内边距优化布局 */
  }
  
.logout {
    position: absolute;
    width: 104px;
    height: 31px;
    top: 255px;
    left: 108px;
    background-color: #7fa1c4;
    border: 1px solid #ffffff;
    cursor: pointer;
  }
  
 .logout-btn {
    position: absolute;
    width: 78px;
    top: -2px;
    left: 11px;
    font-family: "Inter-Medium", Helvetica;
    font-weight: 500;
    color: #ffffff;
    font-size: 20px;
    text-align: center;
  }
  
 .photo {
    position: absolute;
    width: 80px;
    height: 80px;
    top: 45px;
    left: 120px;
    background-color: #eaeaea;
    border-radius: 50%;
    display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  }
  
 .camera {
    position: absolute;
    width: 32px;
    height: 32px;
    top: 22px;
    left: 25px;
  }

  .uploaded-photo {
  width: 100%; /* 填充圆形区域 */
  height: 100%; /* 填充圆形区域 */
  object-fit: cover; /* 保证图片裁剪并填满圆形区域 */
}

  
 .username-wrapper {
    position: absolute;
    width: 291px;
    height: 26px;
    top: 160px;
    left: 23px;
  }
  
 .u {
    display: flex;
    justify-content: space-between; 
    align-items: center;
    font-family: "Inter-Medium", Helvetica;
    font-weight: 500;
    color: #ffffff;
    font-size: 16px;
  }
  
 .username {
    color: #ffffff;
  }
  
 .span {
    color: #ffffff;
    font-size: 16px;
  }
  
 .p {
    display: flex;
    justify-content: space-between; 
    align-items: center;
    font-family: "Inter-Medium", Helvetica;
    font-weight: 500;
    color: #ffffff;
    font-size: 16px;
  }
  
 .password {
    font-family: "Inter-Medium", Helvetica;
    font-weight: 500;
    color: #ffffff;
    font-size: 16px;
    margin-right: 150px;
  }
  
 .star {
    font-size: 16px;
  }
  
 .password-wrapper {
    position: absolute;
    width: 291px;
    height: 26px;
    top: 200px;
    left: 23px;
  }
  </style>
  