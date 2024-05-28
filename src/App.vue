<script>
import navbarComponent from "@/public/components/navbar/navbar.component.vue";
export default {
 components: {
   navbarComponent,
 }
}
</script>


<template>
  <navbar-component />
  <RouterView />
</template>


