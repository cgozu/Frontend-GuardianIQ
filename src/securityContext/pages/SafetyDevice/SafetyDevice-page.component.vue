<template>
  <div id="app">
    <h1 class="title">Dispositivos de seguridad</h1>

    <div class="cards-container">
      <safety-device-card-component
          v-for="device in devices"
          :key="device.nombre"
          :device="device"
      />
    </div>
  </div>
</template>

<script>
import safetyDeviceCardComponent from "@/securityContext/components/SafetyDeviceCard-component/SafetyDeviceCard.component.vue";
import { fetchSafetyDevices } from "@/securityContext/service/safetydevice.service.js";

export default {
  name: 'App',
  components: {
    safetyDeviceCardComponent
  },

  data() {
    return {
      devices: [],
    };
  },

  async mounted() {
    this.devices = await fetchSafetyDevices();
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
}

.title {
  font-size: 2.5em;
  color: #2c3e50;
  margin-bottom: 20px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.device-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.device-card h3 {
  margin-top: 0;
  color: #333;
}

.device-card p {
  color: #666;
}

.device-card button {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
}

.device-card button:hover {
  background-color: #45a049;
}
</style>
