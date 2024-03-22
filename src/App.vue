<template>
  <main class="container-fluid">
    <NavBar></NavBar>
    <Footer></Footer>
    <Spinner></Spinner>
  <router-view/>
</main>
</template>
<script>
import NavBar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Spinner from './components/Spinner.vue';
export default {
  components:{
    NavBar,
    Footer,
    Spinner,

  }
}
</script>