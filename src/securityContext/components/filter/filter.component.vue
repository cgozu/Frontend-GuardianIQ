<template>
  <div class="filter-container">
    <div class="filter-group">
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
        <select v-model="filters.edad" id="edad">
          <option value="">Todos</option>

          <option value="20-30">20-30</option>
          <option value="31-40">31-40</option>
          <option value="41-50">41-50</option>
          <option value="51-60">51-60</option>
          <option value="61-70">61-70</option>
        </select>
      </div>
      <div class="filter-option">
        <label for="experiencia">Experiencia:</label>
        <select v-model="filters.experiencia" id="experiencia">
          <option value="">Todos</option>
          <option value="0-2">0-2 años</option>
          <option value="3-5">3-5 años</option>
          <option value="6-10">6-10 años</option>
          <option value="10+">Más de 10 años</option>
        </select>
      </div>

      <button @click="applyFilters" class="filter-button">Aplicar Filtros</button>

    </div>
  </div>
</template>

<script>
import '.././../model/personal.entity.js';
export default {
  data() {
    return {
      filters: {
        sexo: '',
        edad: '',
        experiencia: ''
      },
        filteredGuards: []
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
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.filter-group {
  display: flex;
  align-items: center;
}

.filter-option {
  margin-right: 10px;
}

.filter-option label {
  margin-right: 5px;
}

.filter-option select {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 120px;
}

.filter-button {
  background-color: #4CAF50;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.filter-button:hover {
  background-color: #45a049;
}

.no-results {
  color: red;
  font-weight: bold;
}
</style>
