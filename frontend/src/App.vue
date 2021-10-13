<template>
  <div>
    <div id="navbar" v-if="!this.$session.exists()">
      <router-link to="/">Ingresar</router-link> | 
      <router-link to="/Registro" >Registrarse</router-link>
    </div>
    <div id="navbar" v-else>
      <router-link to="/logout"></router-link>
    </div>
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {}
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
