<template>
  <div>
    <ul id="navbar">
      <li><a >Food-ó-metro: página oficial de reviews</a></li>
      <li style="float: right" v-if="!this.$session.exists()"><a @click="goLogin()">Ingresar</a></li>
      <li style="float: right" v-if="!this.$session.exists()"><a @click="goRegistro()">Registrarse</a></li>
      <li style="float: right" v-if="this.$session.exists()"><a @click="doLogoff()">Cerrar sesión</a></li>
    </ul>
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
  background-image: url("./assets/html-color-codes-color-tutorials-hero.jpg");
  border-color: white;
}

#navbar {
  position: relative;
  margin: 0;
}

li {
  float: left;
  border-right: 1px solid #bbb;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #ffffff;
}


li a {
  display: block;
  color: black;
  text-align: center;
  padding: 10px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: rgb(209, 127, 5);
  cursor: pointer;
}

.active {
  background-color: #04AA6D;
}

</style>
