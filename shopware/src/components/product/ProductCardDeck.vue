<template>
    <div>
        <div v-if="$route.name.toLowerCase() == 'computers'" class="min-height row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
            <ProductCard v-for="product in computers" :key="product._id" :product="product" />
        </div>
        <div v-else-if="$route.name.toLowerCase() == 'smartphones'" class="min-height row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
            <ProductCard v-for="product in smartphones" :key="product._id" :product="product" /> 
        </div>
        <div v-else-if="$route.name.toLowerCase() == 'others'" class="min-height row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
            <ProductCard v-for="product in others" :key="product._id" :product="product" /> 
        </div>
        
        <div v-else class="min-height row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
            <ProductCard v-for="product in products" :key="product._id" :product="product" />
        </div>
    </div>
</template>

<script>
import ProductCard from './ProductCard'
import { mapGetters } from 'vuex'
export default {
    name: 'ProductCardDeck',
    components: {
        ProductCard
    },
    created() {
        this.$store.dispatch('getProducts')     
    },
    computed: {
        ...mapGetters(['products']),
        computers() {
            return this.products.filter(product => product.type == 'computers')
        },
        smartphones() {
            return this.products.filter(product => product.type == 'smartphones')
        },
        others() {
            return this.products.filter(product => product.type == 'others')
        }
    }
}
</script>

<style scoped>
    .min-height{
        min-height: 100vh !important;
    }
</style>