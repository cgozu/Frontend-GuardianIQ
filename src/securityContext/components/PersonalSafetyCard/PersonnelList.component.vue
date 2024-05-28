<template>
  <div class="cards-container">
    <div v-for="guard in filteredGuards" :key="guard.nombre" class="card">
      <img :src="guard.photo" alt="Guard Photo" class="card-img">
      <div class="card-body">
        <h3>{{ guard.nombre }}</h3>
        <p>{{ guard.descripcion }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    guards: {
      type: Array,
      required: true
    },
    filters: {
      type: Object,
      required: true
    }
  },
  computed: {
    filteredGuards() {
      return this.guards.filter(guard => {

        if (this.filters.edad.length && !this.filters.edad.includes(guard.edad)) {
          return false;
        }

        if (this.filters.sexo && this.filters.sexo !== guard.sexo) {
          return false;
        }

        if (this.filters.experiencia && this.filters.experiencia !== guard.experiencia) {
          return false;
        }

        if (this.filters.disponibilidad && this.filters.disponibilidad !== guard.disponibilidad) {
          return false;
        }

        return !(this.filters.contract && this.filters.contract !== guard.contract);

      });
    }
  }
};
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  overflow: hidden;
  width: 300px;
  text-align: center;
}

.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 15px;
}

.card-body h3 {
  margin: 0 0 10px;
}

.card-body p {
  color: #555;
}
</style>
