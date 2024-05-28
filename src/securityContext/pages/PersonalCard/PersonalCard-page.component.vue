<template>
  <div id="app">
    <h1 class="title">Seguridad presencial</h1>
    <filterComponent @filter="applyFilters" />
    <div class="cards-container">
      <PersonalCard
          v-for="guard in filteredGuards"
          :key="guard.nombre"
          :personal="guard"
      />
    </div>
  </div>
</template>

<script>
import PersonalCard from '/src/securityContext/components/PersonalCard/PersonalCard.component.vue';
import filterComponent from "@/securityContext/components/filter/filter.component.vue";
import { fetchPersonals } from "@/securityContext/service/personal.js";

export default {
  name: 'App',
  components: {
    PersonalCard,
    filterComponent
  },
  data() {
    return {
      guards: [],
      filters: {
        sexo: '',
        edad: '',
        experiencia: ''
      }
    };
  },
  computed: {
    filteredGuards() {
      return this.guards.filter(guard => {
        return (
            (this.filters.sexo ? guard.sexo === this.filters.sexo : true) &&
            (this.filters.edad ? guard.edad >= this.filters.edad : true) &&
            (this.filters.experiencia ? guard.experiencia >= this.filters.experiencia : true)
        );
      });
    }
  },
  async mounted() {
    this.guards = await fetchPersonals();
  },
  methods: {
    applyFilters(filters) {
      this.filters = filters;
    }
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
</style>
