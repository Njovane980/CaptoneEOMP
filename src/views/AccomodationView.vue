<template>
  <div class="rooms-list">
    <div v-if="accomodation">
      <div v-for="room in rooms" :key="room.roomID" class="room-card">
        <img :src="room.imageURL" alt="Room Image">
        <h2>{{ room.roomName }}</h2>
        <p>{{ room.location }}</p>
        <p>{{ room.reviews }} reviews</p>
        <p>{{ room.descript }}</p>
        <p>{{ room.features }}</p>
        <p>{{ room.capacity }}</p>
        <p>R{{ room.price }}</p>
      </div>
    </div>
    <div v-else>
      <spinner/>
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
export default {
  components:{
    Spinner
  },
  data() {
    return {};
  },
  computed: {
    rooms(){
      return this.$store.state.rooms
    }
  },
  mounted() {
    this.$store.dispatch('fetchRooms')
  },
};
</script>

<style scoped>
.room-card {
  border: 100px solid white;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 50px;
}

.room-card img {
  width: 20%;
  border-radius: 5px;
}

.room-card h2 {
  margin-top: 0;
}
.rooms-list{
  background-color: rgba(239, 221, 169, 0.614);
}
</style>
