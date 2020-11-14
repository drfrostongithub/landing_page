import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    }
  },
  actions: {
    fetchProducts (context) {
      axios({
        method: 'GET',
        url: 'putUrlhere' // URL HERE TO FETCH PRODUCT (PAKET HOSTING)
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS', data.product)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
