<template>
  <div class="rooms-list">
    <div v-for="room in rooms" :key="room.roomID" class="room-card">
      <div class="room-content">
        <div class="room-image">
          <img :src="room.imageURL" alt="Room Image">
        </div>
        <div class="room-details">
          <h2>{{ room.roomName }}</h2>
          <p>{{ room.location }}</p>
          <p>{{ room.reviews }} reviews</p>
          <p>{{ room.descript }}</p>
          <p>{{ room.features }}</p>
          <p>{{ room.capacity }}</p>
        </div>
        <div class="room-price">
          <p>R{{ room.price }}</p>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    rooms() {
      return this.$store.state.rooms;
    }
  },
  mounted() {
    this.$store.dispatch('fetchRooms');
  },
};
</script>

<style scoped>
.rooms-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.room-card {
  border: 1px solid #ccc;
  border-radius: 5px;
}

.room-content {
  display: flex;
  flex-direction: column;
}

.room-image {
  text-align: center;
}

.room-image img {
  width: 80%;
  max-height: 200px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.room-details {
  padding: 10px;
}

.room-price {
  text-align: right;
}

.room-price button {
  margin-top: 10px;
}
</style>
