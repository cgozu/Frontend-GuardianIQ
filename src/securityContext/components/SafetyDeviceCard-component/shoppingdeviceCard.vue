<template>
  <div class="shopping-cart">
    <h2>Carrito de compras</h2>
    <div v-for="product in products" :key="product.id" class="product-card">

      <h3>{{ product.marca }} {{ product.modelo }}</h3>
    </div>
  </div>
</template>

<script>
import {ShoppingCartEntity} from "@/securityContext/model/shoppingCardtEntity.js";

export default {
  data() {
    return {
      shoppingCart: new ShoppingCartEntity(),
      products: []
    };
  },
  created() {
    this.$on('add-to-cart', (product) => {
      this.shoppingCart.addToCart(product);
      this.products = this.shoppingCart.products;
    });
  }
}
</script>
