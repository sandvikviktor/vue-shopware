<template>
  <div class="mt-5 py-3 rounded bg-white min-height">
    <section class="dark-grey-text">
      <div class="table-responsive overflow">
        <table class="container-fluid table product-table mb-0">
          <!-- Table head -->
          <thead class="mdb-color lighten-5 text-center">
            <tr>
              <th></th>
              <th class="font-weight-bold">
                <strong>Produkt</strong>
              </th>
              <th class="font-weight-bold">
                <strong>Färg</strong>
              </th>
              <th></th>
              <th class="font-weight-bold">
                <strong>Pris</strong>
              </th>
              <th class="font-weight-bold">
                <strong>Antal</strong>
              </th>
              <th>
                <strong>-/+</strong>
              </th>
              <th>--</th>
            </tr>
          </thead>
          <!-- /.Table head -->

          <!-- Table body -->
          <tbody>
            <!-- Products -->
            <OrderProduct v-for="product in shoppingCart" :key="product.id" :item="product" />
            <!-- Products -->
            <tr>
              <td colspan="3"></td>
              <td>
                <h4 class="mt-3">
                  <strong>Totalt:</strong>
                </h4>
              </td>
              <td class="text-right">
                <h4 class="mt-3">
                  <strong>{{shoppingCartTotal}} SEK</strong>
                </h4>
              </td>
              <td colspan="3" class="text-right pr-5">
                <button
                  v-if="userInlogged"
                  v-on:click.stop="saveOrder({currentUserId, shoppingCartTotal, shoppingCart})"
                  title="Gå till mitt konto för att se dina sparade ordrar."
                  type="button"
                  class="btn btn-green btn-rounded"
                >Spara Order</button>
                <span v-else class="position-relative">
                  <button disabled type="button" class="btn btn-green btn-rounded">Spara Order</button>
                  <p class="position-absolute">Logga in för att spara order.</p>
                </span>
                <button type="button" class="btn btn-indigo btn-rounded">
                  Slutför Köp
                  <i class="fas fa-angle-right right"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <!-- /.Table body -->
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import OrderProduct from "@/components/order/OrderProduct";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Order",
  components: {
    OrderProduct
  },
  methods: {
    ...mapActions(["saveOrder"])
  },
  computed: {
    ...mapGetters([
      "shoppingCart",
      "shoppingCartTotal",
      "userInlogged",
      "currentUserId"
    ])
  }
};
</script>

<style>
.overflow {
  overflow: hidden !important;
}
.min-height{
  min-height: 100vh;
}
p {
  color: darkgray;
  font-weight: 400;
  font-size: 0.8rem;
  left: 0;
}
</style>