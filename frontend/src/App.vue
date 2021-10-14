<template>
  <div>
    <div id="navbar">
      <img src="../public/favicon.png" style="height: 50px">
      <div v-if="!this.$session.exists()" class="btn-group btn-gr oup-justified">
        <div class="btn-group">
          <button type="button" class="btn btn-default">Food-ó-metro: página oficial de reviews</button>
        </div>
        <div class="btn-group">
          <button @click="goLogin()" type="button" class="btn btn-default">Ingresar</button>
        </div>
        <div class="btn-group">
          <button @click="goRegistro()" type="button" class="btn btn-default">Registrarse</button>
        </div>
      </div>
      <div v-else>
        <button class="btn btn-default" @click="doLogoff()">Cerrar sesión</button>
    </div>
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
    },
    async goLogin() {
      this.$router.push({path: "/"});
    },
    async goRegistro() {
      this.$router.push({path: "/Registro"});
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
  border-style: solid; 
  border-width: medium; 
  border-radius: 10px; 
  border-color: white;
}

#navbar {
  background-color: white; 
  font-size: 200%;
  color: black;
  text-align: center;
}

</style>
