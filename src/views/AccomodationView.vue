<template>
    <div class="booking-view">
      <!-- Display accommodation information -->
      <div class="accommodation-info">
        <img :src="accommodation.image" alt="Accommodation Image">
        <h2>{{ accommodation.name }}</h2>
        <p>{{ accommodation.location }}</p>
        <p>{{ accommodation.reviews }} reviews</p>
        <p>{{ accommodation.description }}</p>
        <p>{{ accommodation.features }}</p>
        <p>{{ accommodation.capacity }}</p>
        <p>{{ accommodation.price }}</p>
        <button @click="showBookingForm">Book Now</button>
      </div>
      <!-- Booking form -->
      <form v-if="showForm" @submit.prevent="submitBooking" class="booking-form">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="bookingData.name" required>
        <label for="surname">Surname:</label>
        <input type="text" id="surname" v-model="bookingData.surname" required>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="bookingData.email" required>
        <label for="number">Phone Number:</label>
        <input type="number" id="number" v-model="bookingData.number" required>
        <label for="guests">Number of Guests:</label>
        <select id="guests" v-model="bookingData.guests" required>
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          
        </select>
        
        <button type="submit">Confirm Booking</button>
      </form>

      <div v-if="bookingConfirmed" class="confirmation-popup">
        <p>Booking confirmed!<br> Please check the provided email address for the booking details.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        accommodation: {
          image: 'path/to/image.jpg',
          name: '1 on Albert Building',
          location: 'Woodstock, Cape Town',
          score: 5.7,
          reviews: 3916,
          description: 'Studio with Balcony',
          features: 'Entire studio • 1 bathroom • 1 kitchen • 30m² • 1 double bed',
          capacity: '1 night, 2 adults',
          price: 'ZAR 700 Price ZAR 700 +ZAR 99 taxes and charges'
        },
        showForm: false,
        bookingData: {
          name: '',
          surname: '',
          email: '',
          number: '',
          guests: '1' // Default value for the number of guests
          // Add more fields as needed
        },
        bookingConfirmed: false
      };
    },
    methods: {
      showBookingForm() {
        this.showForm = true;
      },
      submitBooking() {
        // Here I would typically send the booking data to the server for processing
        // Upon successful booking, set bookingConfirmed to true
        // For demonstration purposes, I'm just setting it to true immediately
        this.bookingConfirmed = true;
        // Reset form data
        this.bookingData = {
          name: '',
          surname: '',
          email: '',
          number: '',
          guests: '1'
        };
      }
    }
  };
  </script>

<style scoped>
.booking-form {
  background-color: beige; 
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(177, 154, 68, 0.495);
  width: 70%; 
  margin: 0 auto; 
}

.form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.form-column {
  flex: 1;
}

.confirmation-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(193, 152, 40, 0.519);
  color: white;
  padding: 20px;
  border-radius: 5px;
}

.confirmation-popup p {
  margin: 0;
}

.confirmation-popup p:first-child {
  margin-bottom: 30px;
}
</style>