<template>
  <div class="device-card">
    <img class="device-photo" :src="device.imagen" :alt="`Foto de ${device.marca} ${device.modelo}`" />
    <h2 class="device-name">{{ device.marca }} {{ device.modelo }}</h2>
    <h1 class="device-price">S./{{device.precio}}</h1>
    <p class="device-description">{{ device.descripcion }}</p>

    <button class="device-button" @click="comprar">Comprar</button>
    <button @click="addToCart(device)">Agregar al carrito</button>
  </div>
</template>

<script>
export default {
  props: {
    device: Object
  },
  methods: {
    comprar() {
      alert(`Comprar ${this.device.nombre}`);
    },
    addToCart(device) {
      this.$emit('add-to-cart', device);
    },
  }
}
</script>

<style scoped>
.device-card {
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  text-align: center;
  width: 300px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.device-photo {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.device-name {
  font-size: 1.5em;
  margin: 10px 0;
}

.device-description {
  margin: 5px 0;
}

.device-button {
  margin: 8px;
  padding: 10px 20px;
  background-color: #f0ad4e;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}

.device-button:hover {
  background-color: #ec971f;
}
</style>
