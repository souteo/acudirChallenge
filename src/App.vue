<script>
import ActividadActual from "./components/ActividadActual.vue";
import ActividadesHistorial from "./components/ActividadesHistorial.js";
export default {
  data() {
    return {
      historial: this.getHistorial(),
    };
  },
  methods: {
    setHistorial(actividad) {
      this.historial.push(actividad);
      localStorage.setItem(
        "historialActividades",
        JSON.stringify(this.historial)
      );
    },
    getHistorial() {
      const auxHistorial = JSON.parse(
        localStorage.getItem("historialActividades")
      );
      return auxHistorial || [];
    },
  },
  components: {
    ActividadActual: ActividadActual,
    ActividadesHistorial: ActividadesHistorial,
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <ActividadActual
          class="contenedor borderRadius col"
          @actualizarHistorial="setHistorial"
        >
        </ActividadActual>
      </div>
      <div class="col">
        <ActividadesHistorial
          :historial="this.historial"
          class="contenedor borderRadius col"
        >
        </ActividadesHistorial>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./assets/base.css";
.contenedor {
  width: 95%;
  padding: 10px;
  margin: 50px auto;
  height: 550px;
  position: relative;
}
</style>
