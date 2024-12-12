<template>
  <div class="photo">
    <Navbar />
    <div class="background"></div>

    <!-- Description and selection -->
    <p class="text"> Next, you can let the system know more about your ideal adventure goals by uploading photos of your past hiking trips or by using the drawing tool to depict an ideal outdoor scene.</p>

    <p class="text1">Drag &amp; drop your photo！</p>
    <p class="text2">Draw Your Ideal Hiking Scene！</p>

    <!-- Drag and Drop -->
    <div class="rectangle" @click="uploadPhoto">
      <img v-if="!photoUploaded" class="file" alt="File Icon" src="/public/img/file.svg" />
      <img v-if="photoUploaded" :src="uploadedPhotoUrl" alt="Uploaded Photo" class="uploaded-photo" />
      <input ref="fileInput" type="file" accept="image/*" style="display: none" @change="handlePhotoUpload" />
    </div>
      
    <!-- Drawing Canvas -->
    <div class="canvas-container">
      <canvas id="drawingCanvas"></canvas>
        <div class="tools">
          <div class="tool-group">
            <button @click="toggleTool('pen')">Pen</button>
            <div v-if="tool === 'pen' && showOptions" class="options">
              <div @click="selectPenSize(1)" class="option-line" :style="{ height: '2px', width: '50px' }"></div>
              <div @click="selectPenSize(3)" class="option-line" :style="{ height: '4px', width: '50px' , marginTop: '5px' }"></div>
              <div @click="selectPenSize(5)" class="option-line" :style="{ height: '6px', width: '50px' , marginTop: '5px' }"></div>
            </div>
          </div>

          <div class="tool-group">
            <button @click="toggleTool('eraser')">Eraser</button>
            <div v-if="tool === 'eraser' && showOptions" class="options options-horizontal">
              <div @click="selectEraserSize(5)" class="option-circle" :style="{ height: '10px', width: '10px' }"></div>
              <div @click="selectEraserSize(10)" class="option-circle" :style="{ height: '20px', width: '20px' }"></div>
              <div @click="selectEraserSize(20)" class="option-circle" :style="{ height: '40px', width: '40px' }"></div>
            </div>
          </div>
          <div class="tool-group">
             <input type="color" v-model="color" />
          </div>
        </div>
    </div>

    <button class="button" @click="goToRecommendation">
      <div class="next">NEXT</div>
    </button>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: "Photo",

  components: {
    Navbar,
  },

  data() {
    return {
      color: "#000000",
      penSize: 5,
      eraserSize: 10,
      tool: "pen",
      showOptions: false,
      canvas: null,
      ctx: null,
      isDrawing: false,
      lastX: 0,
      lastY: 0,
      photoUploaded: false,
      uploadedPhotoUrl: "",
    };
  },

  mounted() {
    this.canvas = document.getElementById("drawingCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = 500;
    this.canvas.height = 500;
    this.ctx.lineJoin = "round";
    this.ctx.lineCap = "round";
    this.ctx.lineWidth = this.penSize;
    this.ctx.strokeStyle = this.color;

    this.canvas.addEventListener("mousedown", this.startDrawing);
    this.canvas.addEventListener("mousemove", this.draw);
    this.canvas.addEventListener("mouseup", this.stopDrawing);
    this.canvas.addEventListener("mouseout", this.stopDrawing);
  },

  methods: {
    goToRecommendation() {
      this.$router.push('/recommendation'); 
    },

    toggleTool(selectedTool) {
      if (this.tool === selectedTool) {
        this.showOptions = !this.showOptions;
      } else {
        this.tool = selectedTool;
        this.showOptions = true;
      }
    },

    selectPenSize(size) {
      this.penSize = size;
      this.closeOptions();
    },

    selectEraserSize(size) {
      this.eraserSize = size;
      this.closeOptions();
    },

    closeOptions() {
      this.showOptions = false;
    },
    startDrawing(event) {
      this.isDrawing = true;
      [this.lastX, this.lastY] = [event.offsetX, event.offsetY];
    },

    draw(event) {
      if (!this.isDrawing) return;
      this.ctx.beginPath();
      this.ctx.moveTo(this.lastX, this.lastY);
      this.ctx.lineTo(event.offsetX, event.offsetY);
      if (this.tool === "pen") {
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = this.penSize;
      } else if (this.tool === "eraser") {
        this.ctx.strokeStyle = "#ffffff";
        this.ctx.lineWidth = this.eraserSize;
      }
      this.ctx.stroke();
      [this.lastX, this.lastY] = [event.offsetX, event.offsetY];
    },

    stopDrawing() {
      this.isDrawing = false;
      this.ctx.beginPath();
    },

    uploadPhoto() {
      this.$refs.fileInput.click();
    },

    handlePhotoUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.uploadedPhotoUrl = e.target.result;
          this.photoUploaded = true;
        };
        reader.readAsDataURL(file);
      }
    },
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

.text1 {
  height: 67px;
  width: 555px;
  color: #000000;
  font-family: "Inter-Medium", Helvetica;
  font-size: 26px;
  font-weight: 500;
  left: 250px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 250px;
}

.text2 {
  height: 67px;
  width: 555px;
  color: #000000;
  font-family: "Inter-Medium", Helvetica;
  font-size: 26px;
  font-weight: 500;
  left: 880px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 250px;
}

.rectangle {
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 20px;
  height: 500px;
  left: 270px;
  position: absolute;
  top: 300px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
}

.file {
  height: 50px;
  left: 230px;
  position: absolute;
  top: 240px;
  width: 50px;
}

.uploaded-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.canvas-container {
  position: absolute;
  top: 320px;
  left: 890px;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

canvas {
  border: 2px solid #000000;
  border-radius: 20px;
  background-color: #ffffff;
}

.tools {
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.tool-group {
  position: relative;
}

button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #7fa1c4;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #5f819a;
}

.options {
  position: absolute;
  top: -70px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  z-index: 10;
}

.options-horizontal {
  flex-direction: row;
  gap: 10px;
}

.options label {
  cursor: pointer;
}

.option-line {
  background-color: black;
  cursor: pointer;
}

.option-circle {
  background-color: black;
  border-radius: 50%;
  cursor: pointer;
}

input[type="color"] {
  border: none;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}

.button {
  all: unset;
  box-sizing: border-box;
  position: absolute;
  width: 180px;
  height: 60px;
  top: 870px;
  left: 730px;
  background-color: #7fa1c4;
  border: 1px solid;
}

.next {
  position: absolute;
  top: 11px;
  left: 45px;
  font-family: "Inter-Bold", Helvetica;
  font-weight: 700;
  color: #ffffff;
  font-size: 32px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
}
</style>
