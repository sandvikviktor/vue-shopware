
export default {

   state: {
      cart: []
   },

   mutations: {
      ADD_TO_CART(state, { product, quantity }) {
         let exists = state.cart.find(item => { return item.product.id === product.id })
         if (exists) {
            exists.quantity += quantity
            return
         }
         state.cart.push({ product, quantity })
         localStorage.setItem('cart', JSON.stringify(state.cart))
      },
      INCREASE_IN_CART(state, product) {
         product.quantity += 1
      },
      DECREASE_IN_CART(state, product) {
         product.quantity -= 1
      },
      DELETE_FROM_CART(state, id) {
         state.cart = state.cart.filter(item => { return item.product.id !== id })
         localStorage.setItem('cart', JSON.stringify(state.cart))
      }
   },

   actions: {
      addProductToCart({ commit }, { product, quantity }) {
         commit('ADD_TO_CART', { product, quantity })
      },
      increaseProductInCart({ commit }, product) {
         commit('INCREASE_IN_CART', product)
      },
      decreaseProductInCart({ commit }, item) {
         if (item.quantity <= 1) {
            commit('DELETE_FROM_CART', item.product.id)
            return
         }
         commit('DECREASE_IN_CART', item)
      },
      deleteProductFromCart({ commit }, id) {
         commit('DELETE_FROM_CART', id)
      }
   },


   getters: {
      shoppingCart(state) {
         let cart = JSON.parse(localStorage.getItem('cart'))
         if (cart !== null) {
            state.cart = cart
         }
         return state.cart
      },

      //Total Price
      shoppingCartTotal(state) {
         let total = 0
         if (state.cart.length !== 0) {
            state.cart.forEach(item => {
               total += item.product.price * item.quantity
            })
         }
         return total
      },
      shoppingCartItemCount(state) {
         let items = 0
         if (state.cart.length !== 0) {
            state.cart.forEach(item => {
               items += item.quantity
               localStorage.setItem('cart', JSON.stringify(state.cart)) //För att uppdatera quantity i localstorage
            })
         }
         return items
      }
   }


}