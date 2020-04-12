<template>
  <!--Navbar -->
  <nav class="mb-1 navbar navbar-expand-lg navbar-dark elegant-color-dark fixed-top scrolling-navbar">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand mb-1">
        <i class="fab fa-shopware"></i>
        Shopware
      </router-link>
      <button
        class="navbar-toggler mr-1"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent-333"
        aria-controls="navbarSupportedContent-333"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <!-- <span class="navbar-toggler-icon"></span> -->
        <animatedHamburger/>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/products" class="nav-link">Alla produkter</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/computers" class="nav-link">Datorer</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/smartphones" class="nav-link">Smartphones</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/others" class="nav-link">Övrigt</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto nav-flex-icons ">
          <!-- ShoppingCart -->
          <li class="nav-item dropdown">
            <a
              class="nav-link mr-4"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{shoppingCartItemCount}}
              <i class="fas fa-shopping-cart"></i>
            </a>
            <div id="shopping-cart" class="dropdown-menu dropdown-menu-right z-depth-2 shopping-cart">
              <ShoppingCart />
            </div>
          </li>

          <!-- UserSettings -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-user"></i>
            </a>
            <div id="userDropdown" class="dropdown-menu dropdown-menu-right z-depth-2 px-2">
              <userDropdown />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!--/.Navbar -->
</template>

<script>
import animatedHamburger from './animatedHamburger';
import ShoppingCart from "../shoppingcart/ShoppingCart";
import UserDropdown from "../user/UserDropdown";
import { mapGetters } from 'vuex';

export default {
  name: "Navbar",
  components: {
    animatedHamburger,
    ShoppingCart,
    UserDropdown
  },
  computed: {
     ...mapGetters(['shoppingCartItemCount'])
  }

};
</script>

<style scoped>
.shopping-cart {
  min-width: 450px;
}
.collapsed, .navbar-toggler{
  padding: 0 !important;
}
@media (max-width: 768px) {
  .dropdown-menu-right {
  left: 0;
  right: auto;
  }
}
@media (max-width: 578px) {
  .dropdown-menu, .shopping-cart {
    min-width: 90vw;
  }
  #userDropdown{
    left: -166%;
  }
  
}
</style>