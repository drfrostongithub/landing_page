<template>
  <div class="container-fluid m-0 p-0">
    <HomePage />
    <Feature />
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '../components/HomePage.vue'
import Feature from '../components/Feature.vue'

export default {
  name: 'Home',
  components: {
    Feature,
    HomePage
  }
}
</script>

<style scoped>

</style>
