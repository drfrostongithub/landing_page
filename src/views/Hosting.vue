<template>
  <div>
    <a href="/">Home</a>
    <a href="/hosting">Hosting</a>
    <PacketList />
  </div>
</template>
<script>
import PacketList from '../components/PacketList.vue'

export default {
  name: 'Hosting',
  components: {
    PacketList
  }
}
</script>

<style>

</style>
