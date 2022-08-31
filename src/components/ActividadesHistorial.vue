<template>
  <div class="bg-light contenedor">
    <h1>Historial de actividades</h1>
    <div class="row">
      <div class="col-md-6 border h5">Actividad</div>
      <div class="col-md-3 border h5">Participantes</div>
      <div class="col-md-3 border h5">Tipo</div>
    </div>
    <div class="row" v-for="item in lista">
      <div class="col-md-6 border">{{ item.titulo }}</div>
      <div class="col-md-3 border">{{ item.participantes }}</div>
      <div class="col-md-3 border">{{ item.tipo }}</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      lista: [
        {
          titulo: "Listen to a new podcast",
          tipo: "relaxation",
          participantes: 1,
        },
        {
          titulo:
            "Learn about a distributed version control system such as Git",
          tipo: "education",
          participantes: 1,
        },
        {
          titulo: "Look at pictures and videos of cute animals",
          tipo: "relaxation",
          participantes: 1,
        },
        {
          titulo: "Have a paper airplane contest with some friends",
          tipo: "social",
          participantes: 4,
        },
        {
          titulo: "Learn to write with your nondominant hand",
          tipo: "recreational",
          participantes: 1,
        },
        {
          titulo: "Invite some friends over for a game night",
          tipo: "social",
          participantes: 4,
        },
      ],
    };
  },
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
