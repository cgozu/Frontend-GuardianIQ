

<template>
  <form-support>

  </form-support>
</template>

<script>
import formSupport from "@/public/pages/FormSupport.vue";
export default {
  components: {
    formSupport
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
