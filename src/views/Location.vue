<template>
  <div class="location">
    <Navbar />
    <div class="background"></div>

    <!-- Description and selection -->
    <p class="text">Choose the country and city you want to trek to and start your journey!</p>
    <div class="select-wrapper1">Select a Country:</div>
    <div class="select-wrapper2">Select a City:</div>

    <!-- Country selection -->
    <div class="country" @click="toggleDropdown">
      <div class="select">{{ selectedCountry || 'Country' }} </div>
      <img class="vector-down" alt="Dropdown Icon" src="/public/img/chevron-down.svg" />
    </div>

    <!-- Country Dropdown menu -->
    <div v-if="showDropdown" class="dropdown-menu1">
      <div 
        v-for="(country, index) in sortedCountries" 
        :key="index" 
        class="dropdown-item" 
        @click="selectCountry(country)"
      >
        {{ country }}
      </div>
    </div>
      
    <!-- City selection -->
    <div class="city" @click="toggleCityDropdown">
      <div class="select">{{ selectedCity || (selectedCountry ? 'City' : 'City') }}</div>
      <img class="vector-down" alt="Dropdown Icon" src="/public/img/chevron-down.svg" />
    </div>

    <!-- City Dropdown menu -->
    <div v-if="selectedCountry && showCityDropdown" class="dropdown-menu2">
      <div 
        v-for="(city, index) in cityList" 
        :key="index" 
        class="dropdown-item" 
        @click="selectCity(city)"
      >
        {{ city }}
      </div>
    </div>

    <button class="button" @click="goToSwipe">
      <div class="next">NEXT</div>
    </button>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import { countries } from 'countries-list';

export default {
  name: "Location",
  components: {
    Navbar
  },

  data() {
    return {
      countries: [], 
      sortedCountries: [], 
      countryCities: {}, 
      cityList: [], 
      showDropdown: false, 
      showCityDropdown: false,
      selectedCountry: null,
      selectedCity: null 
    };
  },

  mounted() {
    this.fetchCountries(); 
  },
  
  methods: {
    goToSwipe() {
      this.$router.push('/swipequiz'); 
    },

    fetchCountries() {
      this.countries = Object.values(countries).map((c) => c.name);
      this.sortedCountries = [...this.countries].sort((a, b) => a.localeCompare(b));

      this.countryCities = {
        'United States': ['New York', 'Los Angeles', 'Chicago'],
        'Canada': ['Toronto', 'Vancouver', 'Montreal'],
        'India': ['Mumbai', 'Delhi', 'Bangalore'],
      };
    },

    toggleDropdown() {
      this.showDropdown = !this.showDropdown; 
      this.showCityDropdown = false;
    },
    selectCountry(country) {
      this.selectedCountry = country; 
      this.cityList = this.countryCities[country] || []; 
      this.selectedCity = null; 
      this.showDropdown = false; 
      this.showCityDropdown = false; 
    },

    toggleCityDropdown() {
      if (this.selectedCountry) {
        this.showCityDropdown = !this.showCityDropdown; 
      }
    },
    selectCity(city) {
      this.selectedCity = city; 
      this.showCityDropdown = false; 
    },
  }
};
</script>

<style scoped>
.location {
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

.div {
  background-color: #ffffff;
  width: 1440px;
  height: 1017px;
  position: relative;
}

.button {
  all: unset;
  box-sizing: border-box;
  position: absolute;
  width: 203px;
  height: 67px;
  top: 796px;
  left: 750px;
  background-color: #7fa1c4;
  border: 1px solid;
}

.next {
  position: absolute;
  top: 11px;
  left: 57px;
  font-family: "Inter-Bold", Helvetica;
  font-weight: 700;
  color: #ffffff;
  font-size: 32px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
}


.city {
  position: absolute;
  width: 552px;
  height: 74px;
  top: 560px;
  left: 580px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid;
  border-color: #000000;
}

.select {
  position: absolute;
  width: 107px;
  height: 35px;
  top: 20px;
  left: 11px;
  opacity: 0.3;
  font-family: "Inter-Bold", Helvetica;
  font-weight: 500;
  color: #000000;
  font-size: 24px;
  letter-spacing: 0;
  line-height: normal;
}

.vector-down {
  position: absolute;
  top: 50%; 
  left: 520px; 
  transform: translate(-50%, -50%) scale(0.8); 
  width: 33px; 
  height: auto; 
  z-index: 2;
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
  width: 708px;
  top: 140px;
  left: 520px;
  font-family: "Inter-Medium", Helvetica;
  font-weight: 500;
  color: #7fa1c4;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
}

.select-wrapper1 {
  top: 310px;
  left: 525px;
  position: absolute;
  width: 335px;
  font-family: "Inter-ExtraBold", Helvetica;
  font-weight: 800;
  color: #7fa1c4;
  font-size: 28px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
}

.select-wrapper2 {
  top: 500px;
  left: 500px;
  position: absolute;
  width: 335px;
  font-family: "Inter-ExtraBold", Helvetica;
  font-weight: 800;
  color: #7fa1c4;
  font-size: 28px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
}

.country {
  position: absolute;
  width: 552px;
  height: 74px;
  top: 380px;
  left: 580px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid;
  border-color: #000000;
}

.dropdown-menu1 {
  position: absolute;
  width: 552px;
  top: 450px;
  left: 580px;
  max-height: 200px; 
  overflow-y: auto;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
  z-index: 100;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  scrollbar-width: thin; 
}

.dropdown-menu2 {
  position: absolute;
  width: 552px;
  top: 630px;
  left: 580px;
  max-height: 200px;
  overflow-y: auto;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
  z-index: 100;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  scrollbar-width: thin; 
}

.dropdown-menu::-webkit-scrollbar {
  width: 8px;
}

.dropdown-menu::-webkit-scrollbar-thumb {
  background-color: #cccccc; 
  border-radius: 4px;
}

.dropdown-menu::-webkit-scrollbar-thumb:hover {
  background-color: #b3b3b3; 
}

.dropdown-menu::-webkit-scrollbar-track {
  background-color: #f9f9f9;
}

.dropdown-item {
  padding: 10px 15px;
  font-family: "Inter-Medium", Helvetica;
  font-size: 16px;
  color: #333;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}
</style>
