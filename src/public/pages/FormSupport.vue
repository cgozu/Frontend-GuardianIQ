

<template>
<navbar-component />
  <div class="support-form">
    <h1>Soporte Técnico</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Nombre:</label>
        <input type="text" v-model="form.name" required>
      </div>
      <div>
        <label for="email">Correo Electrónico:</label>
        <input type="email" v-model="form.email" required>
      </div>
      <div>
        <label for="issue">Descripción del Problema:</label>
        <textarea v-model="form.issue" required></textarea>
      </div>
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
    <div v-if="submitted" class="confirmation">
      <p>Gracias, {{ form.name }}. Hemos recibido tu solicitud de soporte y te contactaremos pronto.</p>
    </div>
  </div>
</template>

<script>
import navbarComponent from "@/public/components/navbar/navbar.component.vue";
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        issue: ''
      },
      submitted: false
    };
  },components: {
    navbarComponent
  },
  methods: {
    submitForm() {

      console.log('Formulario enviado:', this.form);
      this.submitted = true;
    },

  }
};
</script>

<style scoped>
.support-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.support-form h1 {
  margin-bottom: 20px;
}

.support-form form div {
  margin-bottom: 10px;
}

.support-form form label {
  display: block;
  margin-bottom: 5px;
}

.support-form form input,
.support-form form textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.support-form form button {
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.support-form form button:hover {
  background-color: #0056b3;
}

.confirmation {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #28a745;
  background-color: #d4edda;
  color: #155724;
  border-radius: 8px;
}
</style>
