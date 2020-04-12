<template>
  <div id="manage" class="vh-100 d-flex justify-content-center align-items-center">
    <div id="manage-content" class="position-relative z-10 text-white text-center">
      <h2>Hej {{currentUserName}}</h2>
      <h5>här är din fina kontosida.</h5>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "Manage", 
  computed:{
    ...mapGetters(["currentUserName", "userInlogged"])
  }
}
</script>

<style>
#manage:before{
  position: fixed;
  content: '';
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-image: url('../assets/shopware.png');
  background-position: center;
  background-size: cover;
}
#manage:after{
  content: '';
  height: 100%;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.726);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.z-10{
  z-index: 10;
}

/* Laptops */
@media (max-height: 800px) and (min-width: 1000px) {
  #manage:before {
    transform: scale(0.9);
    right: -5em;
    bottom: -3em;
  }
}
</style>