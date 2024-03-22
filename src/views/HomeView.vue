<template>
  <div class="home">
    
    <div class="heading-container">
      <h1 class="heading">Welcome to Our Website <br> Find the best places to enjoy your passions!</h1>
      <router-link to="/login">
      <button class="btn">Book now</button>
    </router-link>
    </div>

  
  <img src="https://i.postimg.cc/L80cqwzX/my-website-homescreen.jpg" alt="Homepage" class="homepage-banner" loading="lazy">

    <div class="booking-form">
      <h2>Plan Your Trip</h2>
      <form @submit.prevent="submitForm">
        <label for="category">Select Category:</label>
        <select id="category" v-model="selectedCategory">
          <option value="explore">Explore</option>
          <option value="beaches">Beaches</option>
          <option value="restaurants">Restaurants</option>
        </select>
        <label for="guests">Number of Guests:</label>
        <input type="number" id="guests" v-model.number="numberOfGuests" min="1" max="10">
        <label for="carHire">Car Hire:</label>
        <select id="carHire" v-model="carHire">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>

    <!-- Places section -->
    <div class="section">
      <h2>Explore!</h2>
      <div class="image-container">
        <img src="https://i.postimg.cc/g0JfJ86Z/place.jpg" alt="Place 1" loading="lazy">
        <img src="https://i.postimg.cc/CKFyk9B9/places-1.jpg" alt="Place 2" loading="lazy">
        <img src="https://i.postimg.cc/qvrBDb6x/places-2.jpg" alt="Place 3" loading="lazy">
       
      </div>
    </div>

    <!-- Beaches section -->
    <div class="section">
      <h2>Beaches</h2>
      <div class="image-container">
        <img src="https://i.postimg.cc/GhWKWYbQ/beach-1.jpg" alt="Beach 1" loading="lazy">
        <img src="https://i.postimg.cc/SsRc2NyR/beach-2.jpg" alt="Beach 2" loading="lazy">
        <img src="https://i.postimg.cc/N0MxTxDQ/beach-3.jpg" alt="Beach 3" loading="lazy">
      </div>
    </div>

    <!-- Restaurants section -->
    <div class="section">
      <h2>Restaurants</h2>
      <div class="image-container">
        <img src="https://i.postimg.cc/t4Tj1LKJ/restuarants.jpg" alt="Restaurant 1" loading="lazy">
        <img src="https://i.postimg.cc/GhmNzvqS/res2.jpg" alt="Restaurant 2" loading="lazy">
        <img src="https://i.postimg.cc/d1n6TxPQ/res3.jpg" alt="Restaurant 3" loading="lazy">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: 'explore',
      numberOfGuests: 1,
      carHire: 'no',
      showPopup: false
    };
  },
  methods: {
    submitForm() {
      
      this.showPopup = true;

      this.selectedCategory = '';
      this.numberOfGuests = 1;
      this.carHire = '';
    }
  }
};
</script>

<style scoped>
.home {
  text-align: center;
  position: relative; 
}

.heading-container {
  position: absolute;
  top: 90px; 
  left: 20px; 
  background-color: rgba(0, 0, 0, 0.5); 
  padding: 10px 20px; 
}

.heading {
  color: white;
  margin: 0;
}

.homepage-banner {
  width: 100%;
  height: 65vh; 
  object-fit: cover;
}

.section {
  margin-top: 50px;
}

.section h2 {
  margin-bottom: 20px;
}

.image-container {
  display: flex;
  justify-content: space-around;
}

.image-container img {
  width: 32%; 
  height: auto;
}
.heading {
      font-family: 'CurlyFont', cursive; 
      font-size: 36px; 
      text-align: center;
      margin-top: 30px; 
    }
.booking-form {
  background-color: rgba(180, 161, 100, 0.673);
 
}
.btn{
  font-size: 1.8rem;
  color: aquamarine;
}
</style>