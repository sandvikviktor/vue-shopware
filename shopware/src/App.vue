<template>
  <div id="app">
    <Navbar v-if="$route.name.toLowerCase() !== ''" />
    <transition name="router-animation" enter-active-class="animated fadeIn faster">
    <router-view />
    </transition>
  </div>
</template>

<script>
import Navbar from "@/components/navigation/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap");

html,
body {
  font-family: "Montserrat", sans-serif;
  font-weight: 500 !important;
  background-color: rgb(29, 29, 29);
}
a{
  color: rgb(122, 122, 122);
}
a:hover{
  color: rgb(66, 66, 66);
}
.custom-margin-top {
  position: relative;
  padding-top: 5.2rem;
  z-index: 10;
}
.container-fluid{
  padding-left: 1.5em;
  padding-right: 1.5em;
}
</style>
