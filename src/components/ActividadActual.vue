<template>
  <div class="bg-light contenedor">
    <h1>Tarea aleatoria</h1>
    <div class="row">
      <div class="col-md-6 border h5">Actividad</div>
      <div class="col-md-3 border h5">Participantes</div>
      <div class="col-md-3 border h5">Tipo</div>
      <div class="col-md-6 border">{{ titulo }}</div>
      <div class="col-md-3 border">{{ participantes }}</div>
      <div class="col-md-3 border">{{ tipo }}</div>
    </div>
    <button class="btn w-100 border">Cargar nueva tarea</button>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      titulo: "Go for a run",
      tipo: "recreational",
      participantes: 1,
    };
  },
};
</script>

<style scoped>
.contenedor {
  width: 90%;
  padding: 20px;
  margin: 50px auto;
}
</style>
