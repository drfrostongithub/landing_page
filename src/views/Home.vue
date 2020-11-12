<template>
  <div class="home">
    <p>Home</p>
    <Navbar />
    <PacketList />
    <Feature />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Feature from '../components/Feature'
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
import PacketList from '../components/PacketList.vue'

export default {
  name: 'Home',
  components: {
    Feature,
    Footer,
    Navbar,
    PacketList
  }
}
</script>
