<template>
    <div class="notifications">
      <h1>Notifications</h1>
      <div v-for="hotel in hotels" :key="hotel.hotelID">
        <p>{{ hotel.hotelName }}</p>
        <p>{{ hotel.hotelDesc }}</p>
        <p>{{ hotel.price }}</p>
        <button @click="deleteHotel(hotel.hotelID)">Delete</button>
        <button @click="editHotel(hotel.hotelID)">Edit</button>
      </div>
    </div>
  </template>
  

  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        hotels: [],
        selectedHotel: null,
        newHotel: {
          hotelName: '',
          hotelDesc: '',
          price: ''
        }
      };
    },
    mounted() {
      this.fetchHotels();
    },
    methods: {
      async fetchHotels() {
        try {
          const response = await axios.get('/api/hotels');
          this.hotels = response.data.results;
        } catch (error) {
          console.error('Error fetching hotels:', error);
        }
      },
      async deleteHotel(hotelID) {
        try {
          await axios.delete(`/api/hotels/${hotelID}`);
          this.hotels = this.hotels.filter(hotel => hotel.hotelID !== hotelID);
        } catch (error) {
          console.error('Error deleting hotel:', error);
        }
      },
      
    }
  }
  </script>
  

<style scoped>

</style>