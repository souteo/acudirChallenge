<template>
  <div class="bg-light contenedor borderRadius">
    <div>
      <h1>Historial de actividades</h1>
    </div>
    <div class="actividadContainer m-0 overflow-auto row w-100">
      <div class="position-sticky top-0 bg-light p-0 m-0 row">
        <actividad></actividad>
      </div>
      <actividad
        v-for="item in lista"
        :actividad="item"
        :key="item.key"
      ></actividad>
    </div>
    <button
      @click="nuevaActividad"
      class="btn btn-success position-absolute bottom-0 start-0 w-100 borderRadius"
    >
      Limpiar historial de actividades
    </button>
  </div>
</template>

<script>
import Actividad from "./Actividad.js";
export default {
  data() {
    return {
      historial: [],
    };
  },
  components: {
    actividad: Actividad,
  },
};
</script>

<style scoped>
.contenedor {
  width: 90%;
  padding: 10px;
  margin: 50px auto;
  height: 550px;
  position: relative;
}
.borderRadius {
  border-radius: 0 0 8px 8px;
}
.actividadContainer {
  max-height: 380px;
}
</style>
