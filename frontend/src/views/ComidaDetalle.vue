<template>
  <div>
    <Comidas v-bind:nombre_comida="this.$route.params.nombre" v-bind:desc_comida="this.descripcion"/>
    <Resenas v-for="r in values" v-bind:key="r" v-bind:id="r.id" v-bind:nombre_comida="r.nombre_comida" v-bind:votacion_res="r.votacion" v-bind:desc_res="r.descripcion" v-bind:nombre_usuario="r.nombre_usuario"/>
    <HacerResena v-bind:nombre_comida="this.$route.params.nombre"/>
  </div>
</template>

<script>
import Comidas from '../components/Comidas.vue'
import Resenas from '../components/Resenas.vue'
import HacerResena from '../components/HacerResena.vue'
export default {
    name: 'ComidaDetalle',
    data() {
          return {
            values:[],
            desc: '',
            rutI: '',
          };
        },
        components: {
          Resenas, 
          Comidas,
          HacerResena
        },
        methods: {
          async getComida(){
            await this.$axios.post('http://localhost:8081/api/get_comida_detalle',{
              nombre_comida: this.$route.params.nombre,
            }).then(response => {
              if(!response.data.message) {
                alert("error inesperado");
              } else {
                  this.desc=response.data.message.nombre;
                  this.rutI=response.data.message.descripcion;
              }
            }).catch(error => alert(error));
              
          },
          async getResenas() {
            await this.$axios.post('http://localhost:8081/api/get_resenas',{
              nombre_comida: this.$route.params.nombre
            }).then(response => {
              if(!response.data.message) {
                alert("Aún no hay reseñas");
              } else {
                this.values=response.data.message;
              }
            }).catch(error => alert(error));

          }


        },
        computed: {

        },
        created(){
          this.getResenas();
          this.getComida();
          console.log("params:" + this.$route.params.nombre)
        }
}
</script>

<style>

</style>