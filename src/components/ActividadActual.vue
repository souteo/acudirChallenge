<template>
  <div class="bg-light borderRadius">
    <div>
      <h1 class="border-bottom mb-3">Actividad aleatoria</h1>
    </div>
    <div class="row w-100 m-0">
      <actividad></actividad>
      <actividad :actividad="actividadActual"></actividad>
    </div>
    <button
      @click="
        agregarActividadAlHistorial();
        actualizarActividad();
      "
      :disabled="this.cargando()"
      class="btn btn-success position-absolute bottom-0 start-0 borderRadius w-100"
    >
      Cargar nueva actividad
    </button>
    <div
      v-if="this.cargando()"
      class="d-flex justify-content-center my-2"
    >
      <div class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Actividad from "./Actividad.js";
export default {
  data() {
    return {
      actividadActual: {}
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
      this.nuevaActividad().then((nuevaActividad) => {
        this.actividadActual = nuevaActividad;
        localStorage.setItem("actividadActual", JSON.stringify(nuevaActividad));
      });
    },
    agregarActividadAlHistorial() {
      this.$emit("actualizarHistorial", this.actividadActual);
    },
    cargando() {
      return Object.keys(this.actividadActual).length === 0
    }
  },
  mounted() {
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
@import "../assets/base.css";
</style>
