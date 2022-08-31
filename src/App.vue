<script setup lang="ts">
import ActividadActual from "./components/ActividadActual.vue";
import ActividadesHistorial from "./components/ActividadesHistorial.vue";
</script>

<template>
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <ActividadActual class="col"> </ActividadActual>
    </div>
    <div class="col">
      <ActividadesHistorial class="col"> </ActividadesHistorial>
    </div>
  </div>
</div>
</template>

<style scoped></style>
