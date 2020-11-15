<template>
  <div>
    <HostingOpener />
    <PacketList />
    <!-- <PacketList v-for="product in products"
    :key="product.id"
    :product="product" /> -->
    <!-- If you already insert url on store you can send fetch data -->
    <FAQ />
    <Question />
  </div>
</template>
<script>
import PacketList from '../components/PacketList.vue'
import FAQ from '../components/FAQ.vue'
import HostingOpener from '../components/HostingOpener.vue'
import Question from '../components/Question.vue'

export default {
  name: 'Hosting',
  components: {
    HostingOpener,
    PacketList,
    FAQ,
    Question
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style scoped>

</style>
