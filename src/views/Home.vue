<template>
  <div class="container-fluid m-0 p-0">
    <Navbar />
    <HomePage />
    <Feature />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Feature from '../components/Feature'
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
import HomePage from '../components/HomePage.vue'

export default {
  name: 'Home',
  components: {
    Feature,
    Footer,
    Navbar,
    HomePage
  }
}
</script>
