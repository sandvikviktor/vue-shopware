import axios from 'axios'
import router from '@/router'

export default {

   state: {
      user: null,
      userInlogged: false,
      currentUserId: null
   },

   mutations: {
      SET_USER(state, user) {
         state.user = user
         if(user != null) {
            state.userInlogged = true
         } else {
            state.userInlogged = false
         }
      }
   },

   actions: {
      userRegister({ commit }, user) {
         axios.post('http://localhost:9999/api/users/register', user)
            .then(res => {
               if (res.status === 201) {
                  router.push('/login')
               }
            })
      },
      userLogin({ commit }, user) {
         axios.post('http://localhost:9999/api/users/login', { email: user.email, password: user.password })
            .then(res => {
               if (res.status === 200) {
                  sessionStorage.setItem("currentUserToken", res.data.token)
                  sessionStorage.setItem("currentUserId", res.data.user.id)
                  sessionStorage.setItem("userName", res.data.user.name)
                  commit('SET_USER', res.data.user)
                  router.push('/products')
               }
            })
      },
      userLogout({ commit }) {
         sessionStorage.removeItem("currentUserToken")
         sessionStorage.removeItem("currentUserId")
         sessionStorage.removeItem("userName")
         commit('SET_USER', null)
      }
   },

   getters: {
      user(state) {
         return state.user
      },
      userInlogged(state) {
         if (sessionStorage.getItem("currentUserToken") != null)
            state.userInlogged = true
         return state.userInlogged
      },
      currentUserId(state) {
         const userId = sessionStorage.getItem("currentUserId")
         if (userId != null)
            state.currentUserId = userId
         return userId
      },
      currentUserName(state) {
         const userName = sessionStorage.getItem("userName")
         if (userName != null)
            state.userName = userName
         return userName
      }
   }
}