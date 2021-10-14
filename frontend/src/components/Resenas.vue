<template>
  <div>
    <h5 class="card-header">{{nombre_comida}} {{votacion_res}} {{nombre_usuario}}</h5>
    <div class="card-body">
      <p class="card-text">{{desc_res}}</p>
      <div v-if="nombre_usuario===nom">
        <button type="button" class="btn btn-danger"  @click="Modificar()">Modificar</button>
        &nbsp;
        <button type="button" class="btn btn-danger" @click="Eliminar()">Eliminar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Resenas',
    props:{
            id: String,
            nombre_comida: String,
            votacion_res: String,
            desc_res : String,
            nombre_usuario: String,
            },
    data() {
          return {
            nom: localStorage.name,
          };
        },
        methods: {
          Modificar(){

          },
          Eliminar(){
            this.$axios.delete('http://localhost:8081/api/delete_resena',{
              data:{id: this.id}
            }).then(response => {
              if(!response.data.message) {
                alert("No se pudo borrar");
              } else {
                alert("Eliminación exitosa")
                this.$router.go();
              }
            }).catch(error => alert(error));
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