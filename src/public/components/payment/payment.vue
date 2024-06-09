<template>
  <div class="payment-form">
    <h2>Formulario de Pago</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="fullName">Nombre Completo:</label>
        <input type="text" id="fullName" v-model="fullName" required />
      </div>
      <div class="form-group">
        <label for="address">Dirección:</label>
        <input type="text" id="address" v-model="address" required />
      </div>
      <div class="form-group">
        <label for="cardNumber">Número de Tarjeta:</label>
        <input type="text" id="cardNumber" v-model="cardNumber" required />
      </div>
      <div class="form-group">
        <label for="expiryDate">Fecha de Expiración:</label>
        <input type="text" id="expiryDate" v-model="expiryDate" placeholder="MM/AA" required />
      </div>
      <div class="form-group">
        <label for="cvv">CVV:</label>
        <input type="text" id="cvv" v-model="cvv" required />
      </div>
      <button type="submit">Enviar Pago</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: '',
      address: '',
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes agregar la lógica para manejar el envío del formulario
      console.log('Formulario enviado:', this.fullName, this.address, this.cardNumber, this.expiryDate, this.cvv);
      alert('Pago enviado con éxito!');
    }
  }
};
</script>

<style>
.payment-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
</style>
