<template>
  <div class="card">
    <h5 class="card-header">{{nombre_comida}}</h5>
    <div class="card-body">
      <p class="card-text">{{desc_comida}}</p>
      <a href="#" class="btn btn-primary">Ver</a>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Resenas',
    props: {
        nombre_comida: String,
        desc_comida: String,
        rutaImagen: String
    },
    data() {
          return {
          };
        },
        methods: {

        },
        computed: {

        },
        created(){

        }
}
</script>

<style>

</style>