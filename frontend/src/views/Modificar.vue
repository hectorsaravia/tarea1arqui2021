<template>

  
    <div>
        <h6 class="card-header">Modificar reseña</h6>
        <div style="padding: 20px">
            <div class="col-lg-4 col-md-6 col-sm-8 mx-auto " style="border-style: solid; border-width: medium; border-radius: 10px; border-color: white;">
                <form class="form-group">
                    <div style= "display: flex; text-align: left; justify-content: center; flex-direction: column;">
                        <StarRating v-model="votacion"/>
                    </div>
                    <input v-model="descripcion" type="text" class="form-control" placeholder="Una breve descripción de su reseña" required>
                    <button type="button" class="btn btn-danger" @click="modificar()">Modificar</button><br>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import StarRating from 'vue-star-rating'
export default {
    props:{
        id: String,
    },
    name: 'Modificar',
    data() {
          return {
            votacion:0,
            descripcion:''
          };
        },
        components: {
            StarRating
        },
        methods: {
          async modificar() {
              this.$axios.put('http://localhost:8081/api/update_resena',{
                    id: this.$route.params.id,
                    votacion: this.votacion,
                    descripcion: this.descripcion    
                }).then(response => {
                if(!response.data.message) {
                    alert("No se pudo modificar");
                } else {
                    alert("Modificación exitosa")
                    this.$router.go();
                }
                }).catch(error => alert(error));
          },
          async getResena(){
            await this.$axios.post('http://localhost:8081/api/get_resena_detalle',{
              id: this.$route.params.id,
            }).then(response => {
              if(!response.data.message) {
                alert("error inesperado");
              } else {
                  this.votacion=response.data.message.votacion;
                  this.descripcion=response.data.message.descripcion;
              }
            }).catch(error => alert(error));
              
          }

        },
        computed: {

        },
        created(){
          this.getResena();
        }
}
</script>

<style>

</style>