<template>
  <div id="shoppingCart">
    <ShoppingCartProduct v-for="product in shoppingCart" :key="product.id" :item="product" />

    <div v-if="shoppingCart.length < 1" class="cart-item">
      <div class="p-2 d-flex justify-content-center align-items-center">
        <div class="d-flex align-items-center">Din kundvagn är tom.</div>
      </div>
      <div class="dropdown-divider"></div>
    </div>

    <div class="p-2 d-flex justify-content-between align-items-center">
      <div>
        <div class="total-price ml-2">
          Totalt:
          <span class="ml-1">{{ shoppingCartTotal }} SEK</span>
        </div>
        <small class="text-muted ml-2">inkl. moms</small>
      </div>
      <router-link v-if="shoppingCart != ''" to="/order">
        <button class="btn btn-indigo">Gå till Kassan</button>
      </router-link>
      <button v-else title="Kundvagnen är tom." v-on:click.stop class="btn btn-indigo">Gå till Kassan</button>
    </div>
  </div>
</template>

<script>
import ShoppingCartProduct from "./ShoppingCartProduct";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ShoppingCart",
  components: {
    ShoppingCartProduct
  },
  computed: {
    ...mapGetters(["shoppingCart", "shoppingCartTotal"])
  }
};
</script>

<style scoped>
.total-price {
  font-size: 1.1em;
}
@media (max-width: 768px) {
  .btn{
    font-size: 0.6em;
  }
}
</style>