<template>
  <div class="px-2 mb-3">
    <!-- Card -->
    <div class="card z-depth-2">
      <!--Card image-->
      <div class="view overlay">
        <img
          class="card-img-top"
          :src="product.image"
          alt="Card image cap"
        />
        <router-link :to="{name: 'Product', params: {id: product._id}}">
          <div class="mask rgba-white-slight"></div>
        </router-link>
      </div>

      <!--Card content-->
      <div class="card-body">
        <!--Title-->
        <h4 class="card-title">{{ product.name }}</h4>
        <!--Text-->
        <p class="card-text">{{ product.shortDescription }}</p>
        <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
        <router-link :to="{name: 'Product', params: {id: product._id}}" class="btn btn-indigo btn-md">Visa Produkt</router-link>
      </div>
    </div>
    <!-- Card -->
  </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: ['product']
};
</script>

<style>
.card{
  box-shadow: none;
}

</style>