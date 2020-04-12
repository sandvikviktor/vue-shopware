<template>
  <div id="register" class="vh-100 w-100 d-flex align-items-center pt-5">
    <div class="container my-5 py-5 ml z-10">
      <!--Section: Content-->
      <section class="px-md-5 mx-md-5 text-center text-lg-left">
        <!--Grid row-->
        <div class="row d-flex grid-row">
          <!--Grid column-->
          <div class="col-md-12 col-lg-10 col-xl-6">
            <!-- Default form register -->
            <form class="text-center" v-on:submit.prevent="regSubmit">
              <p class="h4 mb-4 text-white font-weight-normal">Registrera</p>

              <div class="form-row mb-4">
                <div class="col">
                  <input
                    type="text"
                    v-model="user.firstName"
                    class="form-control"
                    placeholder="Förnamn"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    v-model="user.lastName"
                    class="form-control"
                    placeholder="Efternamn"
                  />
                </div>
              </div>

              <input
                type="text"
                v-model="user.email"
                class="form-control mb-4"
                placeholder="E-mail"
              />

              <input
                type="password"
                v-model="user.password"
                class="form-control"
                placeholder="Lösenord"
              />

              <button class="btn btn-indigo my-4 btn-block" type="submit">Skapa nytt konto</button>
              <p>
                <span>Redan registrerad?</span>
                <router-link to="/login"> Logga in här</router-link>
              </p>
            </form>
            <!-- Default form register -->
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
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {

    ...mapActions(["userRegister"]),

    regSubmit() {
      if (
        (this.user.firstName != "",
        this.user.lastName != "",
        this.user.email != "",
        this.user.password != "")
      ) {
        console.log("submit");
        this.userRegister(this.user);
      } else {
        console.log("Not valid");
      }
    }
  }
};
</script>

<style scoped>
#register{
  background-color: rgb(29, 29, 29);
  color: white;
}
#register:before{
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
a:hover{
  color: white;
}
p{
  color: #969696;
}
a{
  color: rgb(219, 219, 219);
}
@media (max-height: 800px) and (min-width: 1000px) {
  .ml {
    margin-left: 5em;
  }
  #register:before {
    transform: scale(0.9);
    right: -5em;
    bottom: -3em;
  }
}
@media (max-width: 1025px) {
  #register:before {
    height: 55vh;
    top: 45vh
  }
  #register:after{
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
    margin: auto
  }
}
@media (max-width: 578px) {
  #register:before{
    height: 45vh;
    top: 55vh;
    left: -10em
  }
}
</style>