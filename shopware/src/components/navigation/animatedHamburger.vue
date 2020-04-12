<template>
  <div v-on:click="showMobileMenu = !showMobileMenu" :class="{active: showMobileMenu}">
      <div class="hamburger-part"></div>
      <div class="hamburger-part"></div>
      <div class="hamburger-part"></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            showMobileMenu: false
        }
    }
}
</script>

<style scoped>
.navbar-toggler{
    padding: 0;
}
.hamburger-part {
    background: #ffffff;
    width: 24px;
    height: 2px;
    margin-top: 5px;
    border-radius: 4px;
    transition: 400ms ease;
}
.hamburger-menu{
    width: 20px;
    padding: 5px;
    height: 20px;
    display: inline-block;
    cursor: pointer;
}
.hamburger-part:first-of-type{
    margin-top: -2.5px;
}
.active .hamburger-part:nth-child(1) {
    transform: translateY(7px) translateX(0px) rotate(315deg);
}
.active .hamburger-part:nth-child(2) {
    transform: rotate(45deg);
}
.active .hamburger-part:nth-child(3) {
    display: none;
}
</style>