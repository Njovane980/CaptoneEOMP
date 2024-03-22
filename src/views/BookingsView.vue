<template>
    <div class="bookings">
      <h1>Bookings</h1>
      <div v-for="room in rooms" :key="room.roomID">
        <h2>{{ room.roomName }}</h2>
          <p>{{ room.location }}</p>
          <p>{{ room.reviews }} reviews</p>
          <p>{{ room.descript }}</p>
          <p>{{ room.features }}</p>
          <p>{{ room.capacity }}</p>
          <p>R{{ room.price }}</p>
        <button @click="deleteroom(room.roomID)">Delete</button>
        <button @click="editroom(room.roomID)">Edit</button>
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

</style>