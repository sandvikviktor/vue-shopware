<template>
  <table class="table text-center">
      <tbody class="bg-white">
        <tr v-for="item in order.products" :key="item.product.id">
          <td><img :src="item.product.image" class="image-width"></td>
          <td>{{item.product.name}}</td>
          <td>{{item.quantity}}st</td>
          <td>{{item.product.price}} sek</td>
        </tr>
        
        <td><strong>Totalt: {{ order.total }} SEK</strong></td>
        <td class="px-0"></td>
        <td class="px-0"></td>
        <td class="px-0">
          <button class="btn btn-elegant btn-rounded btn-sm">Radera Order</button>
          <button class="btn btn-indigo btn-rounded btn-sm">Lägg Order</button>
        </td>
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "OrderProductSaved",
  props: ["order"],
  computed: {
    ...mapGetters(["shoppingCartProductCompany", "orderTotal"])
  },
};
</script>

<style scoped>
.image-width {
  width: 80px;
}
.pt {
  padding-top: 2.6em;
}
td, th{
  vertical-align: middle !important;
}
</style>