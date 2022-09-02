<script>
import ActividadActual from "./components/ActividadActual.vue";
import ActividadesHistorial from "./components/ActividadesHistorial.vue";
export default {
  data() {
    return {
      historial: [],
    };
  },
  methods: {
    getActividad(actividad) {
      this.historial.push(actividad);
      localStorage.setItem("historialActividades", JSON.stringify(this.historial));
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
        <ActividadActual @actualizarHistorial="getActividad" class="col">
        </ActividadActual>
      </div>
      <div class="col">
        <ActividadesHistorial class="col"> </ActividadesHistorial>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
