<template>
  <div class="container-fluid m-0 p-0">
    <HomePage />
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '../components/HomePage.vue'

export default {
  name: 'Home',
  components: {
    HomePage
  }
}
</script>

<style scoped>
b-navbar{
  background-color:red;
}
</style>
