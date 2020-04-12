<template>
  <tr class="text-center">
    <th scope="row">
      <img :src="item.product.image" alt class="img-fluid z-depth-0 image-width" />
    </th>
    <td>
      <h5 class="pt-4">
        <strong>{{item.product.name}}</strong>
      </h5>
    </td>
    <td class="pt-5">Color</td>
    <td></td>
    <td class="pt-5">{{item.product.price}} SEK</td>
    <td class="pt-5">
      {{item.quantity}}x
      <!-- <input type="number" value="2" aria-label="Search" class="form-control" style="width: 100px"> -->
    </td>
    <td class="font-weight-bold pt" role="group" aria-label="quantity">
      <div class="btn-group btn-group-sm">
        <button
          type="button"
          class="btn btn-grey px-3"
          v-on:click.stop="decreaseProductInCart(item)"
        >-</button>
        <button
          type="button"
          class="btn btn-grey px-3"
          v-on:click.stop="increaseProductInCart(item)"
        >+</button>
      </div>
      <!-- <strong>$800</strong> -->
    </td>
    <!-- <td></td> -->
    <td class="pt">
      <div class="btn-group btn-group-sm">
        <button
          v-on:click.stop="deleteProductFromCart(item.product.id)"
          type="button"
          class="btn btn-red px-3"
          data-toggle="tooltip"
          data-placement="top"
          title="Remove item"
        >
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "OrderProduct",
  props: ["item"],
  methods: {
    ...mapActions([
      "deleteProductFromCart",
      "decreaseProductInCart",
      "increaseProductInCart"
    ])
  }
};
</script>

<style scoped>
.image-width {
  width: 300px;
}
.pt {
  padding-top: 2.6em;
}
td {
  /* border: none; */
}
</style>