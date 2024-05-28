<template>
  <div class="container">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#" @click="navigateToHome">
        <img src="https://pageguardianiq.vercel.app/img/Glogo.png" width="100" alt="Toolbar image" aria-label="Branding logo"/>
      </a>
      <pv-button class="p-button-text text-white" icon="pi pi-bars" @click="toggleDrawer" />
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" :class="{ active: $route.path === '/home' }">
            <a class="nav-link" href="#" @click="navigateToHome">Inicio</a>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/personalpage' }">
            <a class="nav-link" href="#" @click="navigateToPersonalCard">Tarjeta Personal</a>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/safetydevice' }">
            <a class="nav-link" href="#" @click="navigateToSafetyDevice">Dispositivo de Seguridad</a>
          </li>
        </ul>
        <div class="form-inline my-2 my-lg-0">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="navigateToLogin">Login</button>
          <button class="btn btn-outline-success my-2 my-sm-0 ml-2" type="submit">Get Started</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push('/home');
    },
    navigateToPersonalCard() {
      this.$router.push('/PersonalCardPage');
    },
    navigateToSafetyDevice() {
      this.$router.push('/SafetyDevicePage');
    },
    navigateToLogin() {
      this.$router.push('/login');
    },

      toggleDrawer() {
        this.drawer = !this.drawer;

    }
  }
}
</script>
<style scoped>
.navbar {
  background-color: #11315C;
}

.navbar-brand {
  color: #F9A825;
}

.navbar-nav {
  color: #F9A825;
}

.nav-item {
  color: #F9A825;
}

.nav-item:hover {
  color: #F9A825;
  cursor: pointer;
}

.form-inline {
  color: #F9A825;
}

.btn {
  background-color: #F9A825;
  color: #11315C;
}

.btn:hover {
  background-color: #F9A825;
  color: #11315C;
  cursor: pointer;
}
</style>
