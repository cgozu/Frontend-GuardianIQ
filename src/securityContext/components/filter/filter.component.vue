<template>
  <div class="filter-container">
    <div class="filter-option">
      <label for="sexo">Sexo:</label>
      <select v-model="filters.sexo" id="sexo">
        <option value="">Todos</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
      </select>
    </div>
    <div class="filter-option">
      <label for="edad">Edad:</label>
      <input type="number" v-model.number="filters.edad" id="edad" placeholder="Edad mínima" />
    </div>
    <div class="filter-option">
      <label for="experiencia">Experiencia:</label>
      <input type="number" v-model.number="filters.experiencia" id="experiencia" placeholder="Experiencia mínima" />
    </div>
    <button @click="applyFilters" class="filter-button">Aplicar Filtros</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        sexo: '',
        edad: '',
        experiencia: ''
      }
    };
  },
  methods: {
    applyFilters() {
      this.$emit('filter', this.filters);
    }
  }
}
</script>

<style scoped>
.filter-container {
  margin-bottom: 20px;
  text-align: left;
}

.filter-option {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.filter-option label {
  margin-right: 10px;
}

.filter-option input,
.filter-option select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.filter-button {
  background-color: #4CAF50; /* Verde */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.filter-button:hover {
  background-color: #45a049; /* Verde más oscuro */
}
</style>
