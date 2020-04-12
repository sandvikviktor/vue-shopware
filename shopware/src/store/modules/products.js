// import axios from '@/helpers/axios'
import axios from 'axios'


export default {

    state: {
        products: [],
        product: null
    },

    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products
        },
        SET_PRODUCT(state, product) {
            state.product = product
        }
    },

    actions: {
        getProducts({ commit }) {
          axios.get('http://localhost:9999/api/products').then(res => {
            commit('SET_PRODUCTS', res.data);
          }).catch(error => {
            console.log(error);
          })
        },
        getProductById({ commit }, id) {
          axios.get('http://localhost:9999/api/products/' + id).then(res => {
            commit('SET_PRODUCT', res.data.product)
          }).catch(error => {
            console.log(error);
          })
        }
    },

    getters: {
        products(state) {
          return state.products
        },
        product(state) {
          return state.product
        }
    }
}