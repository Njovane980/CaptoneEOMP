<template>
    <div class="container-fluid fixed-bottom">
      <div id="app"></div>
      <div class="row">
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <p class="lead lobster-text">
           BookSpot &copy;
            <span>{{ currYear }}</span>
          </p>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: 'FooterComp',
    data() {
      return {
        currYear: new Date().getFullYear(),
      };
    },
  };
  </script>
  <style scoped>
  @font-face {
    font-family: 'Lobster';
    src: url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
  }
  .fixed-bottom {
    background-color: #B09053;
    color: #fff;
    padding: 10px;
  }
  .lobster-text {
    /* font-family: 'Lobster', cursive; */
    font-size: 20px;
  }
  .social-link {
    color: #fff;
    margin: 0 5px;
    text-decoration: none;
    font-size: 20px;
  }
  </style>