<script setup lang="ts">
import ActividadActual from "./components/ActividadActual.vue";
import ActividadesHistorial from "./components/ActividadesHistorial.vue";
</script>

<template>
  <div class="row">
    <div class="col-md-6">
      <ActividadActual> </ActividadActual>
    </div>
    <div class="col">
      <ActividadesHistorial> </ActividadesHistorial>
    </div>
  </div>
</template>

<style scoped></style>
