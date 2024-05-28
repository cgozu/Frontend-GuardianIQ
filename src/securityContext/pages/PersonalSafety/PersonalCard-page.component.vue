<template>
  <navbar-component />
  <div id="app">
    <h1 class="title">Seguridad presencial</h1>
    <filter-component @filter="applyFilters" />

    <div class="cards-container">
      <personal-card
          v-for="guard in filteredGuards"
          :key="guard.nombre"
          :personal="guard"
      />
    </div>
    <div v-if="noResultsFound && filtersApplied" class="no-results">
      No se encontraron resultados. Por favor, ajusta tus filtros e intenta de nuevo.
    </div>
  </div>
</template>
<script>
import PersonalCard from '/src/securityContext/components/PersonalSafetyCard/PersonalCard.component.vue';
import filterComponent from "@/securityContext/components/filter/filter.component.vue";
import navbarComponent from "@/public/components/navbar/navbar.component.vue";
import { fetchPersonals } from "@/securityContext/service/personal.service.js";

export default {
  name: 'App',
  components: {
    PersonalCard,
    filterComponent,
    navbarComponent
  },

  data() {
    return {
      guards: [],
      filters: {
        sexo: '',
        edad: '',
        experiencia: ''
      },
      filtersApplied: false,
    };
  },
  computed: {
    filteredGuards() {
      return this.guards.filter(guard => {
        const edadRango = this.filters.edad.split('-');
        const experienciaRango = this.filters.experiencia.split('-');

        return (
            (this.filters.sexo ? guard.sexo === this.filters.sexo : true) &&
            (this.filters.edad ? guard.edad >= parseInt(edadRango[0]) && guard.edad <= parseInt(edadRango[1]) : true) &&
            (this.filters.experiencia ? guard.experiencia >= parseInt(experienciaRango[0]) && (experienciaRango[1] ? guard.experiencia <= parseInt(experienciaRango[1]) : true) : true)
        );
      });
    },
    noResultsFound() {
      return this.filteredGuards.length === 0;
    },
  },
  async mounted() {
    this.guards = await fetchPersonals();
  },
  methods: {
    applyFilters(filters) {
      this.filters = filters;
      this.filtersApplied = true;
    },
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
}

.title {
  font-size: 2.5em;
  color: #2c3e50;
  margin-bottom: 20px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.personal-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.personal-card h3 {
  margin-top: 0;
  color: #333;
}

.personal-card p {
  color: #666;
}

.personal-card button {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
}

.personal-card button:hover {
  background-color: #45a049;
}
</style>
