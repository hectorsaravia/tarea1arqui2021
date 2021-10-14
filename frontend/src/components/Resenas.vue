<template>
  <div>
    <h5 class="card-header">{{nombre_comida}} {{votacion_res}} {{nombre_usuario}}</h5>
    <div class="card-body">
      <p class="card-text">{{desc_res}}</p>
      <a href="#" class="btn btn-danger">Ver</a>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Resenas',
    props:{
            nombre_comida: String,
            votacion_res: String,
            desc_res : String,
            nombre_usuario: String,
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