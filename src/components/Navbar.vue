<template>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <img src="https://i.postimg.cc/kgBbFRtc/logo.png" alt="logos" class="logo1">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/login" class="nav-link lobster-text">Login | Register</router-link>
          </li>
        </ul>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link lobster-text">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link lobster-text">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Bookings" class="nav-link lobster-text">Bookings</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Admin" class="nav-link lobster-text">Admin</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Notifications" class="nav-link lobster-text">Notifications</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link lobster-text">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarComp',
  }
  </script>
  
  <style scoped>
  .navbar {
    background-color: #B09053;
    color: white;
    padding: 10px;
  }
  
  .navbar-nav {
    margin-left: auto;
  }
  
  .logo1 {
    width: 150px;
  }
  
  .lobster-text {
    color: white;
    /* font-family: 'Lobster', cursive; */
  }
  </style>
  