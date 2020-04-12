import axios from 'axios'

export default {

   state: {
      orders: []
   },

   mutations: {
      SET_ORDERS(state, orders) {
         state.orders = orders
      }
   },

   actions: {
      saveOrder({ commit }, order) {
         if (order.currentUserId != null && order.shoppingCart != null) {
            axios.post('http://localhost:9999/api/orders/saveorder', { userId: order.currentUserId, order: order.shoppingCart, total: order.shoppingCartTotal })
               .then(res => {
                  if (res.status === 201) {
                     console.log("Success");
                  }
               })
         }
      },
      getOrdersById({ commit }, currentUserId) {
         axios.get('http://localhost:9999/api/orders/getorders/' + currentUserId).then(res => {
            commit('SET_ORDERS', res.data)
         }).catch(error => {
            console.log(error);
         })
      },
      getOrders({ commit }) {
         axios.get('http://localhost:9999/api/orders/getorders').then(res => {
            commit('SET_ORDERS', res.data)
         }).catch(error => {
            console.log(error);
         })
      },
      deleteOrder({ commit }, orderId) {
         axios.delete('http://localhost:9999/api/orders/deleteorder' + orderId).then(res => {
            console.log("Order is deleted.");
         }).catch(error => {
            console.log("Didn't find order");
         })
      }
   },

   getters: {
      getSavedOrders(state) {
         return state.orders
      }
   }
}