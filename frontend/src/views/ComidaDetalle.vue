<template>
  <Resenas/>
  
</template>

<script>
import Resenas from '../components/Resenas.vue'
export default {
    name: 'Dashboard',
    data() {
          return {
            votacion: 0
          };
        },
        components: {
          Resenas
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