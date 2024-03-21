<template>
  <div class="main-container">
    <!-- Content in the middle of the page -->
    <div class="booking-content">
      <h2 class="para2">About Us</h2>
      <!-- Add your booking system content here -->
    </div>

    <!-- Hotel pictures at the bottom moving slowly to the left -->
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
        // Adjust the translateX value as needed to control the speed of movement
      }, 200); // Adjust the interval as needed
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
  margin-bottom: 50px; /* Adjust as needed */
}

.hotel-pictures-container {
  width: 100%;
  overflow: hidden;
}

.hotel-pictures {
  display: flex;
  animation: slideToLeft 30s linear infinite; /* Adjust duration as needed */
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
  width: 350px; /* Adjust image size as needed */
  height: auto;
  margin-right: 10px; /* Adjust spacing between images as needed */
}
</style>
