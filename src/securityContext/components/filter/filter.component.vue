<template>
  <div class="card flex justify-content-center">
    <Sidebar v-model:visible="visible">
      <template #container="{ closeCallback }">
        <div class="flex flex-column h-full">
          <div class="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
            <img src="https://pageguardianiq.vercel.app/img/Glogo.png" width="100" alt="Toolbar image" aria-label="Branding logo"/>
            <h2>Filtro de busqueda</h2>
          </div>

            <ul class="list-none p-0 m-0 overflow-hidden">

              <li>
                <label>Sexo:</label>
                <div class="flex align-items-center flex-row">
                  <Checkbox v-model="filters.sexo" inputId="hombre" name="sexo" value="hombre" />
                  <label for="hombre" class="ml-2">Hombre</label>
                </div>
                <div class="flex align-items-center flex-row">
                  <Checkbox v-model="filters.sexo" inputId="mujer" name="sexo" value="mujer" />
                  <label for="mujer" class="ml-2">Mujer</label>
                </div>
              </li>

              <li>
                <li>
                  <label>Edad:</label>
                  <div class="slider-container">
                    <input type="range" min="18" max="60" v-model="ageRange" class="slider">
                    <div>Edad seleccionada: {{ ageRange }} años</div>
                  </div>
                </li>


              </li>
              <li>
                <label for="experiencia">Experiencia:</label>
                <input id="experiencia" v-model="filters.experiencia" type="text">
              </li>
              <li>
                <label for="disponibilidad">Disponibilidad:</label>
                <input id="disponibilidad" v-model="filters.disponibilidad" type="text">
              </li>
              <li>
                <label for="distrito">Distrito:</label>
                <input id="distrito" v-model="filters.distrito" type="text">
              </li>
            </ul>
            <button-group class="flex justify-content-center mt-4">
              <button2 @click="closeCallback">Cerrar</button2>
              <button2 @click="closeCallback">Aplicar</button2>
            </button-group>

        </div>
      </template>
    </Sidebar>
    <Button icon="pi pi-bars" @click="visible = true" />
  </div>
</template>

<script>

export default {

  data() {
    return {
      visible: false,
      filters: {
        nombre: '',
        sexo: '',
        edad: null,
        experiencia: '',
        disponibilidad: '',

      },ageRange: null
    }
  }
}
</script>


<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 20%;
  border-radius: 20px;
  padding: 20px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}

.flex {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

button2{
  background-color: #F9A825;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  width: 100%;
}
button {
  background-color: #F9A825;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 2px 1px;
  cursor: pointer;
  width: 20%;
}
button:hover {
  background-color: #F9A825;
}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
  width: 100%;
}


ul li {
  margin-bottom: 10px;
}

label, input, select {
  margin-bottom: 5px;
}
.flex {
   display: flex;
   flex-direction: column;
   align-items: start;
 }

.flex.align-items-center {
  align-items: center;
}

.flex.flex-row {
  flex-direction: row;
}
</style>
