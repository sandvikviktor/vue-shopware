<template>
  <div id="home" class="d-flex vh-100 w-100 align-items-center">
   <div class="jumbo">
      <h1>Shopware e-commerce</h1>
      <p class="lead ml-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum architecto vel rem ullam dolore voluptate fuga nam!</p>
      <!-- <a class="btn btn-indigo btn-lg" href="#" role="button">Get Started</a> -->
      <router-link to="/register" type="button" class="btn btn-indigo btn-lg">Skapa konto</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style scoped>
#home{
  background-color: rgb(29, 29, 29);
  color: white;
}
#home:after{
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
h1{
  font-size: 3.3rem;
}
.jumbo{
  z-index: 10;
  margin-top: 3em;
  margin-left: 13em;
}
p{
  max-width: 31em;
}
.btn{
  padding: 1em 3em;
}

/* Laptops */
@media (max-height: 800px) and (min-width: 1000px) {
  #home:after {
    transform: scale(0.9);
    right: -5em;
    bottom: -3em;
  }
  .jumbo{
    margin-left: 10em;
  }
  h1{
    font-size: 2.8rem;
  }
  p{
    font-size: 1rem;
  }
}
@media (max-width: 768px) {
  #home:after {
    height: 55vh;
    top: 45vh
  }
  .jumbo{
    margin: 0;
    padding: 0 5em;
  }
  h1 {
    font-size: 2rem;
  }
  p{
    font-size: 0.9rem;
  }
}
@media (max-width: 578px) {
  #home:after{
    height: 45vh;
    top: 55vh;
    left: -10em;
  }
  .jumbo{
    padding: 0 1em;
  }
  h1{
    font-size: 1.7rem;
  }
  .btn{
    font-size: 0.8em;
    padding: 0.8em 2em;
  }
}
</style>