<script>
import ToolbarComponent from "./public/components/toolbar/Toolbar.component.vue";
import sidebarComponent from "@/securityContext/components/filter/filter.component.vue";
export default {
  components: {
    ToolbarComponent,
sidebarComponent
  }
}
</script>

<template>
  <ToolbarComponent/>

  <RouterView />

</template>
