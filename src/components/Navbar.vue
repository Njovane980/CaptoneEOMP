<template>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <img src="https://i.postimg.cc/kgBbFRtc/logo.png" alt="logos" class="logo1">
            
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link lobster-text">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link lobster-text">
                About
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Accomodation" class="nav-link lobster-text">
                Accomodation
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Admin" class="nav-link lobster-text">
               Admin
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Bookings" class="nav-link lobster-text">
               Bookings
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link lobster-text">
                Contact
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link lobster-text">
                Login
              </router-link>
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
  }
  .navbar-nav {
    color: white;
  }
  .lobster-text {
    color: white;
    /* font-family: 'Lobster', cursive; */
  }
  .navbar-nav {
    margin-left: auto;
  }
  .logo1 {
    width: 150px;
  }
  </style>