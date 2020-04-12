<template>
  <div id="products" class="container-fluid white-layer">
    <!-- <div id="left" class="col-6 black"></div> -->
    <ProductCardDeck class="custom-margin-top" />
    <!-- <div id="left" class="col-6"></div> -->
  </div>
</template>

<script>
import ProductCardDeck from "@/components/product/ProductCardDeck";
export default {
  name: "Products",
  components: {
    ProductCardDeck
  }
};
</script>

<style scoped>
#products{
  background-color: rgb(27, 27, 27);
}
#products:before{
  position: fixed;
  content: '';
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-image: url('../../assets/shopware.png');
  background-position: center;
  background-size: cover;
}
.custom-margin-top {
  position: relative;
  padding-top: 5.2rem;
  z-index: 10;
}
#products:after{
  content: '';
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.726);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* backdrop-filter: blur(10px); */
}
@media (max-height: 800px) and (min-width: 1000px) {
  #products:before {
    transform: scale(0.9);
    right: -5em;
    bottom: -3em;
    }
}
</style>
