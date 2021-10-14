<template>
  <div>
    <Comidas v-for="c in values" v-bind:key="c" v-bind:nombre_comida="c.nombre" v-bind:desc_comida="c.descripcion" >
      <Resenas v-bind:nombre_comida="c.nombre"/>
    </Comidas>
  </div>
</template>

<script>
import Comidas from '../components/Comidas.vue'
import Resenas from '../components/Resenas.vue'
export default {
    name: 'Dashboard',
    data() {
          return {
            values:[]
          };
        },
        components: {
          Resenas,
          Comidas
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

</style>