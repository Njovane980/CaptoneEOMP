<template>
    <div>
      <AddRoom @roomAdded="fetchRooms" />
      <UpdateRooms :rooms="rooms" />
      <table class="table">
        <thead>
          <tr>
            <th>Room ID</th>
            <th>Room Name</th>
            <th>Location</th>
            <th>Reviews</th>
            <th>Description</th>
            <th>Features</th>
            <th>Capacity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="room in rooms" :key="room.roomID">
            <td>{{ room.roomID }}</td>
            <td>{{ room.roomName }}</td>
            <td>{{ room.location }}</td>
            <td>{{ room.reviews }}</td>
            <td>{{ room.descript }}</td>
            <td>{{ room.features }}</td>
            <td>{{ room.capacity }}</td>
            <td>{{ room.price }}</td>
            <td>
              <button @click="editRoom(room)">Edit</button>
              <button @click="deleteRoom(room.roomID)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "AdminTable",
    data() {
      return {
        rooms: []
      };
    },
    mounted() {
      this.fetchRooms();
    },
    methods: {
      async fetchRooms() {
        try {
          const response = await axios.get("/rooms");
          this.rooms = response.data.results;
        } catch (error) {
          console.error("Error fetching rooms:", error);
        }
      },
      async deleteRoom(roomID) {
        const confirmed = confirm("Are you sure you want to delete this room?");
        if (confirmed) {
          try {
            await axios.delete(`/rooms/delete/${roomID}`);
            this.fetchRooms();
            console.log("Room deleted successfully!");
          } catch (error) {
            console.error("Error deleting room:", error);
          }
        }
      },
      editRoom() {
        // Logic to edit room
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  