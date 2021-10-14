<template>

  <div class="login-page">
    <div class="col-lg-4 col-md-6 col-sm-8 mx-auto " style="border-style: solid; border-width: medium; border-radius: 10px; border-color: white;">
    <form>
      <h3>Formulario</h3>

      <div class="form-group">
        <label for="nombre">Nombre del plato o comida: </label>
        <input
        v-model="nombre"
        type="text"
        class="form-control form-control-lg"
        >
      </div>

      <div class="form-group">
        <label for="descripcion">Descripcion del plato o comida: </label>
        <input
        v-model="descripcion"
        type="text"
        class="form-control form-control-lg"
        >
      </div>

      <div class="form-group">
        <label for="rutaImagen"> Imagen del plato o comida: </label>
        <input
        v-model="rutaImagen"
        type="text"
        class="form-control form-control-lg"
        >
      </div>
      <button type="button" class="btn btn-dark btn-lg btn-block" @click="agregarComida()"> Ingresar comida </button>
    </form> 
    </div>
  </div>
</template>

<script>


export default {
    name: 'NewComida',
    data() {
          return {
            nombre:'',
            descripcion:'',
            rutaImagen:''
          };
        },
        methods: {
          async agregarComida(){
            await this.$axios.post('http://localhost:8081/api/new_comida',{
              nombre:this.nombre,
              descripcion:this.descripcion,
              rutaImagen: this.rutaImagen
            }).then(response => {
              if(!response.data.message) {
                alert("Credenciales incorrectas");
              } else {
                this.$router.push({path: "/Dashboard"});
              }
            }).catch(error => alert(error));
          },

        },
        computed: {

        },
        created(){

        }
}
</script>

<style>

</style>