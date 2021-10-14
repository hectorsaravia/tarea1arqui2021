<template>
  <div>
    <div id="navbar" v-if="!this.$session.exists()" class="btn-group btn-group-justified">
      <router-link to="/" class="btn btn-default">Ingresar</router-link>
      <router-link to="/Registro" class="btn btn-default">Registrarse</router-link>
    </div>
    <div id="navbar" v-else>
      <button class="btn btn-default" @click="doLogoff()">Cerrar sesión</button>
    </div>
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    async doLogoff() {
      this.$session.destroy();
      this.$router.push({path: "/"});
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  font-size: 150%;
  background-image: url("./assets/html-color-codes-color-tutorials-hero.jpg");
}

#navbar {
  background-color: white; 
  font-size: 200%;
  color: black
}

</style>
