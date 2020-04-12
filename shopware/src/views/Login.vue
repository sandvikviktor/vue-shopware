<template>
  <div id="login" class="vh-100 w-100 d-flex align-items-center pt-5">
    <div class="container my-5 py-5 ml z-10">
      <!--Section: Content-->
      <section class="px-md-5 mx-md-5 text-center text-lg-left">
        <!--Grid row-->
        <div class="row d-flex grid-row">
          <!--Grid column-->
          <div class="col-md-12 col-lg-10 col-xl-6">
            <!-- Default form login -->
            <form class="text-center" v-on:submit.prevent="loginSubmit">
              <p class="h4 mb-4 text-white">Logga in</p>

              <input
                type="email"
                v-model="user.email"
                class="form-control mb-4"
                placeholder="E-mail"
              />

              <input
                type="password"
                v-model="user.password"
                class="form-control mb-4"
                placeholder="Lösenord"
              />

              <div class="d-flex justify-content-around">
                <div>
                  <!-- Forgot password -->
                  <a href="#">Glömt lösenord?</a>
                </div>
              </div>

              <!-- Sign in button -->
              <button class="btn btn-indigo btn-block my-4" type="submit">Logga in</button>

              <!-- Register -->
              <p>
                Inte registrerad?
                <router-link to="/register">Skapa konto här</router-link>
              </p>
            </form>
            <!-- Default form login -->
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </section>
      <!--Section: Content-->
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions(["userLogin"]),
    loginSubmit() {
      if (this.user.email != "" && this.user.password != "") {
        this.userLogin(this.user);
      }
    }
  }
};
</script>

<style scoped>
#login{
  background-color: rgb(29, 29, 29);
  color: white;
}
#login:before{
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-image: url('../assets/shopware.png');
  background-position: center;
  background-size: cover;
}
.ml{
  margin-left: 13em;
}
.z-10{
  z-index: 10;
}
@media (max-height: 800px) and (min-width: 1000px) {
  .ml {
    margin-left: 5em;
  }
  #login:before {
  transform: scale(0.9);
  right: -5em;
  bottom: -3em;
  }
}
@media (max-width: 1025px) {
  #login:before {
    height: 55vh;
    top: 45vh
  }
  #login:after{
    content: '';
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.726);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .grid-row{
    justify-content: center;
  }
  .ml{
    margin: auto;
  }
}
@media (max-width: 578px) {
  #login:before{
    height: 45vh;
    top: 55vh;
    left: -10em
  }
}
</style>