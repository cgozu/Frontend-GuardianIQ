<script>

export default {
  name: 'navbar-content',
  components: {

  },

  data() {
    return {
      visible: false,
    };
  },
  mounted() {

  },
};
</script>
<template>
  <pv-toolbar class="flex justify-content-center items-center toolbar" aria-label="Toolbar content">
    <template #start>
      <div class=" flex flex-row gap-7 justify-content-center" aria-label="Main navigation section">
        <router-link to="/">
          <img src="https://pageguardianiq.vercel.app/img/Glogo.png" width="100" alt="Toolbar image" aria-label="Branding logo"/>
        </router-link>
        <div class="flex justify-content-center">
          <div  class=" block lg:hidden card flex justify-content-center" aria-label="toolbar features content">
            <pv-sidebar v-model:visible="visible" header="Artcollab">
              <router-link to="/">
                <img src="https://pageguardianiq.vercel.app/img/Glogo.png" width="100" alt="Toolbar image" aria-label="Branding logo"/>
              </router-link>
              <router-link to="/home">
                <h2> Home </h2>
              </router-link>
              <router-link to="/PersonalCardPage">
                <h2> PersonalCardPage </h2>
              </router-link>
              <router-link to="/SafetyDevicePage">
                <h2> SafetyDevicePage </h2>
              </router-link>
            </pv-sidebar>
          </div>
          <div  class=" hidden  text-center lg:flex lg:flex-row text-xs gap-5 align-items-center navbar-links " aria-label="toolbar features content" >
            <router-link to="/home">
              <h2> home </h2>
            </router-link>
            <router-link to="/PersonalCardPage">
              <h2> PersonalCardPage </h2>
            </router-link>
            <router-link to="/SafetyDevicePage">
              <h2> SafetyDevicePage </h2>
            </router-link>
          </div>
        </div>
      </div>
    </template>
  </pv-toolbar>
</template>



<style scoped>
.toolbar{
  border-radius:0;
}
h2:hover{
  cursor:pointer;
  color: #00B4CC;
}
h2{
  color:black;
  font-size: 1rem;
  font-weight: bold;
}
.navbar-links img {
  cursor: pointer;
}
</style>
