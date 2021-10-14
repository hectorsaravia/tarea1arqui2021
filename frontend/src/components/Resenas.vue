<template>
  <div class="card">
    <h5 class="card-header">{{nombre}}</h5>
    <div class="card-body">
      <p class="card-text">{{desc_res}}</p>
      <a href="#" class="btn btn-primary">Ver</a>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Resenas',
    props: {
        nombre_comida: String
    },
    data() {
          return {
            nombre: this.nombre_comida,
            votacion_res: '',
            desc_res: '',
            nombre_usuario: ''
          };
        },
        methods: {

        },
        computed: {
           getResenas() {
            await this.$axios.post('http://localhost:8081/api/get_resenas',{
              nombre_comida: this.nombre_comida
            }).then(response => {
              if(!response.data.message) {
                alert("Credenciales incorrectas");
              } else {
                this.votacion_res=response.data.message.votacion;

              }
            }).catch(error => alert(error));

        }
        },
        created(){

        }
}
</script>

<style>

</style>