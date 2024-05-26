<script>
import axios from 'axios';
import Rating from 'primevue/rating';

export default {
  components: {
    Rating
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:3000/products');
        this.products = response.data;
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    }
  }
}
</script>

<template>
  <div class="products-container">
    <div class="cards-container">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.imagen" alt="Product Image" class="product-image"/>
        <div class="card-content">
          <h2>{{ product.modelo }}</h2>
          <p>{{ product.tipo }}</p>
          <div class="rating-price">
            <Rating v-model="product.rating" :cancel="false" ></Rating>
            <span class="price">${{ product.precio.toFixed(2) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}

.products-container {
  padding: 20px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product-card {
  width: 300px;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 10px;
}

.rating-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
