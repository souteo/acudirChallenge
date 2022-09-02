<template>
  <div class="bg-light contenedor borderRadius">
    <div>
      <h1>Actividad aleatoria</h1>
    </div>
    <div class="row w-100 m-0">
      <actividad></actividad>
      <actividad :actividad="actividadActual"></actividad>
    </div>
    <button
      @click="actualizarActividad"
      class="btn btn-success position-absolute bottom-0 start-0 borderRadius w-100"
    >
      Cargar nueva actividad
    </button>
    <div
      v-if="Object.keys(this.actividadActual).length === 0"
      class="d-flex justify-content-center my-2"
    >
      <div class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Actividad from "./Actividad.js";
export default {
  data() {
    return {
      actividadActual: {},
    };
  },
  methods: {
    async nuevaActividad() {
      this.actividadActual = {};
      return await axios
        .get("https://www.boredapi.com/api/activity")
        .then((response) => {
          return response.data
            ? {
                titulo: response.data.activity,
                participantes: response.data.participants,
                tipo: response.data.type,
              }
            : {};
        });
    },
    actualizarActividad() {
      this.nuevaActividad().then((data) => {
        this.actividadActual = data;
        localStorage.setItem("actividadActual", JSON.stringify(data));
      });
    },
  },
  mounted() {
    // localStorage.clear();
    const auxAct = localStorage.getItem("actividadActual");
    if (auxAct) {
      this.actividadActual = JSON.parse(auxAct);
    } else {
      this.actualizarActividad();
    }
  },
  components: {
    actividad: Actividad,
  },
};
</script>

<style scoped>
.contenedor {
  position: relative;
  width: 90%;
  padding: 10px;
  margin: 50px auto;
  min-height: 550px;
}
.borderRadius {
  border-radius: 0 0 8px 8px;
}
</style>
