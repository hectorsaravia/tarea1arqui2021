<template>
  <div id="dashboard">
    <router-link class="btn btn-danger" to="/newcomida">Ingresar Comida</router-link>
    <Comidas v-for="c in values" v-bind:key="c" v-bind:nombre_comida="c.nombre" v-bind:desc_comida="c.descripcion" >
      
    </Comidas>
  </div>
</template>

<script>
import Comidas from '../components/Comidas.vue'
export default {
    name: 'Dashboard',
    data() {
          return {
            values:[],
            renderReview: false
          };
        },
        components: {
          Comidas,
        },
        methods: {
            getComidas(){
              this.$axios.get('http://localhost:8081/api/get_comidas')
              .then(response => {
                if(!response.data.message) {
                  alert("La base de datos no contiene comidas");
                } else {
                  this.values=response.data.message
                }
              }).catch(error => alert(error));
            },
        },
        computed: {

        },
        created(){
          this.getComidas();
        }
}
</script>

<style>
#dashboard {
  height: 100%
}
</style>