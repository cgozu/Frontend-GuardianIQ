<template>
  <footer class="footer">
    <div class="footer-item">
      <i class="fas fa-cog"></i>
      <p>Planes personalizados adaptados a ti</p>
    </div>
    <div class="footer-item">
      <i class="fas fa-wrench"></i>
      <p>Asesorías a tu alcance</p>
    </div>
    <div class="footer-item">
      <i class="fas fa-user"></i>
      <p>Postúlate para personal de seguridad</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-around;
  background-color: #11315C;
  color: white;
  padding: 2rem 0;
  margin-top: 2rem;
}

.footer-item {
  text-align: center;
}

.footer-item i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.footer-item p {
  margin: 0;
  font-size: 1.1rem;
}
</style>
