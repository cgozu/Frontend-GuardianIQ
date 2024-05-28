<template>
  <div class="guard-card">
    <img class="guard-photo" :src="personal.foto" :alt="`Foto de ${personal.nombre}`" />
    <h2 class="guard-name">{{ personal.nombre }}</h2>
    <p class="guard-district">{{ personal.distrito }}</p>
    <p class="guard-age">Edad: {{ personal.edad }} años</p>
    <p class="guard-sex">Sexo: {{ personal.sexo }}</p>
    <p class="guard-experience">Experiencia: {{ personal.experiencia }}</p>
    <p class="guard-availability">Disponibilidad: {{ personal.disponibilidad }}</p>
    <button class="guard-button" @click="contratar">Contratar</button>
    <button class="guard-button" @click="contactar">Contactar</button>
  </div>
</template>

<script>

export default {
  props: {
    personal: Object
  },
  methods: {
    contratar() {
      alert(`Contratar a ${this.personal.nombre}`);
    },
    contactar() {
      alert(`Contactar a ${this.personal.nombre}`);
    }
  }
}
</script>

<style scoped>
.guard-card {
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  text-align: center;
  width: 300px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.guard-photo {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.guard-name {
  font-size: 1.5em;
  margin: 10px 0;
}

.guard-district,
.guard-age,
.guard-sex,
.guard-experience,
.guard-availability {
  margin: 5px 0;
}

.guard-button {
  margin: 8px;
  padding: 10px 20px;
  background-color: #f0ad4e;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}

.guard-button:hover {
  background-color: #ec971f;
}
</style>
