<template>
  <div class="main-container">
    <div class="booking-content">
      <h2>About Us</h2>
      <p class="para2">BookSpot emerged as a solution tailored to simplify the process of reserving hotel accommodations within the illustrious Proctor Hotel. Founded in 2024 by the visionary Vuyiseka Njovane, this esteemed establishment graces the vibrant landscape of Cape Town. Boasting affordability without compromising quality, the Proctor Hotel stands as a beacon for travelers seeking comfort and convenience. Nestled within proximity to renowned tourist attractions, it offers an ideal starting point for unforgettable adventures.</p>
    </div>


    <div class="hotel-pictures-container">
      <div class="hotel-pictures">
        <img v-for="(image, index) in hotelImages" :src="image" :key="index" alt="Hotel">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotelImages: [
        'https://i.postimg.cc/Px01Tbny/about-1.webp',
        'https://i.postimg.cc/QtKW4BKT/about-2.jpg',
        'https://i.postimg.cc/X7byLYjr/about-3.jpg',
        'https://i.postimg.cc/pXJ56Mrq/about-4.jpg',
        'https://i.postimg.cc/h4193xNT/about-5.jpg',
        'https://i.postimg.cc/Gtf3SXRb/about-6.webp',
        'https://i.postimg.cc/FsJhHgmJ/about-7.jpg',
      ]
    };
  },
  mounted() {
    this.moveHotelPictures();
  },
  methods: {
    moveHotelPictures() {
      setInterval(() => {
        const hotelPicturesContainer = document.querySelector('.hotel-pictures');
        hotelPicturesContainer.style.transform = `translateX(-1px)`;
        
      }, 200); 
    }
  }
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.booking-content {
  text-align: center;
  margin-bottom: 50px; 
}

.hotel-pictures-container {
  width: 100%;
  overflow: hidden;
}

.hotel-pictures {
  display: flex;
  animation: slideToLeft 30s linear infinite; 
}

@keyframes slideToLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.hotel-pictures img {
  width: 350px; 
  height: auto;
}

.para2 {
  font-size: 1.4em;
}
</style>
