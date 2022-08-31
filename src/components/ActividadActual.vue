<template>
  <div class="bg-light contenedor">
    <h1>Tarea aleatoria</h1>
    <div class="row">
      <div class="col-md-6 border h5">Actividad</div>
      <div class="col-md-3 border h5">Participantes</div>
      <div class="col-md-3 border h5">Tipo</div>
      <div class="col-md-6 border">{{ tarea.titulo }}</div>
      <div class="col-md-3 border">{{ tarea.participantes }}</div>
      <div class="col-md-3 border">{{ tarea.tipo }}</div>
    </div>
    <button @click="nuevaTarea" class="btn btn-secondary w-100 border mt-5">Cargar nueva tarea</button>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
export default {
  data() {
    return {
      tarea: {}
    }
  },
  methods: {
    nuevaTarea(){
      axios.get('https://www.boredapi.com/api/activity').then((response) => {
      if(response.data){
        console.log(response.data);
        this.tarea = {
          titulo: response.data.activity,
          participantes: response.data.participants,
          tipo: response.data.type
        };
      }
    });
    }
  },
  mounted() {
    this.nuevaTarea();
  }
};
</script>

<style scoped>
.contenedor {
  width: 90%;
  padding: 20px;
  margin: 50px auto;
  min-height: 550px;
}
</style>
