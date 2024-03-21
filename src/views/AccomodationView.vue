<template>
  <div class="rooms-list">
    <div v-for="room in rooms" :key="room.roomID" class="room-card">
      <img :src="room.imageURL" alt="Room Image">
      <h2>{{ room.roomName }}</h2>
      <p>{{ room.location }}</p>
      <p>{{ room.reviews }} reviews</p>
      <p>{{ room.descript }}</p>
      <p>{{ room.features }}</p>
      <p>{{ room.capacity }}</p>
      <p>{{ room.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rooms: [
        
      ]
    };
  },
  mounted() {
    this.fetchRooms();
  },
  methods: {
    async fetchRooms() {
      try {
        const response = await fetch('/rooms');
        const data = await response.json();
        this.rooms = data.results;
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    }
  }
};
</script>

<style scoped>
.room-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

.room-card img {
  width: 100%;
  border-radius: 5px;
}

.room-card h2 {
  margin-top: 0;
}
</style>
