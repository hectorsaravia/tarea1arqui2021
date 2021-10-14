<template>
  <div style="padding: 20px">
    <div class="col-lg-4 col-md-6 col-sm-8 mx-auto " style="border-style: solid; border-width: medium; border-radius: 10px; border-color: white;">
      <h5 class="card-header">{{nombre_comida}}</h5>
      <div class="card-body">
        <p class="card-text">{{desc_comida}}</p>
        <button type="button" class="btn btn-danger btn-lg btn-block" @click="verComida()"> Ver </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Comidas',
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
          verComida(){
            this.$router.push({name: 'ComidaDetalle', params: {nombre: this.nombre_comida}});
          }

        },
        computed: {

        },
        created(){

        }
}
</script>

<style>

</style>