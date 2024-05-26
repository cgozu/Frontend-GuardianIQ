<template>
  <div class="card" aria-label="The toolbar container">
    <pv-toolbar class="bg-blue p-5 toolbar" aria-label="The toolbar content">
      <template #start>
        <div class="toolbar-start">
          <img src="https://pageguardianiq.vercel.app/img/Glogo.png" width="100" alt="Toolbar image" aria-label="Branding logo"/>
          <h2>GuardianIQ</h2>
        </div>
      </template>
      <template #end>
        <div class="toolbar-end">
          <router-link to="/home" class="route-text" aria-label="Go to home">
            <span class="text-white text-xl"> {{$t('toolbar.home')}}</span>
          </router-link>
          <router-link to="/SafetyDevicePage" class="route-text" aria-label="Go to mental state exams results">
            <span class="ml-4 text-white text-xl"> {{$t('toolbar.contratarPersonal')}}</span>
          </router-link>
          <router-link to="/PersonalCardPage" class="route-text" aria-label="Go to mental state exams results">
            <span class="ml-4 text-white text-xl"> {{$t('toolbar.EquiposSeguridad')}}</span>
          </router-link>
          <input type="text" placeholder="Buscar" class="search-bar">
          <button class="btn search-btn">Buscar</button>
          <button class="btn login-btn">Iniciar sesión</button>
          <button class="btn register-btn">Registrarse</button>
          <div class="ml-4 flex gap-3">
            <pv-button class="custom-button" @click="changeLanguage('en')" aria-label="Translate english"> EN </pv-button>
            <pv-button class="custom-button" @click="changeLanguage('es')" aria-label="Translate spanish"> ES </pv-button>
          </div>
        </div>
      </template>
    </pv-toolbar>
  </div>
</template>

<script>
export default {
  name: 'toolbar-content',
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  }
}
</script>

<style scoped>
.bg-blue {
  background-color: #11315C;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toolbar-start {
  display: flex;
  align-items: center;
}

h2 {
  color: #ffffff;
  margin-left: 10px;
}

.toolbar-end {
  display: flex;
  align-items: center;
}

.route-text {
  text-decoration: none;
  color: inherit;
}

.route-text:hover {
  cursor: pointer;
}

.search-bar {
  margin-left: 1rem;
  padding: 0.5rem;
  border-radius: 99px;
}

.btn {
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.search-btn {
  background-color: #F9A825;
  color: white;

}

.login-btn, .register-btn {
  background-color: #ffffff;
  color: #11315C;
}

.custom-button {
  background-color: #3498db;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.custom-button:hover {
  background-color: #45a049;
  color: white;
}

@media (max-width: 600px) {
  .toolbar {
    flex-direction: column;
  }

  .toolbar-start, .toolbar-end {
    justify-content: center;
  }

  .btn, .search-bar {
    margin-left: 0;
    margin-bottom: 1rem;
  }
}


</style>
