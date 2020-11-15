<template>
  <div>
    <HostingOpener />
    <PacketList />
    <FAQ />
  </div>
</template>
<script>
import PacketList from '../components/PacketList.vue'
import FAQ from '../components/FAQ.vue'
import HostingOpener from '../components/HostingOpener.vue'

export default {
  name: 'Hosting',
  components: {
    HostingOpener,
    PacketList,
    FAQ
  }
}
</script>

<style scoped>

</style>
