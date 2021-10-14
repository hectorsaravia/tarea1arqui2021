<template>
  <div class="login-page">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto " style="border-style: solid; border-width: medium; border-radius: 10px; border-color: white;">
          <br>
          <h1>Ingresa</h1>
          <form class="form-group">
            <input v-model="nombreLogin" type="text" class="form-control" placeholder="Nombre" required>
            <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required>
            <button type="button" class="btn btn-danger" @click="doLogin()">Ingresar</button><br>
          </form>
        </div>
      </div>
    </div>
   </div>
</template>

<script>
export default {
  name: 'Login',
   data() {
    return {
      nombreLogin: "",
      passwordLogin: "",
    };
   },
   beforeCreate () {
    if (this.$session.exists()) {
      this.$router.push({path: "/Dashboard"});
    }
  },
   methods: {
      async doLogin() {
        await this.$axios.post('http://localhost:8081/api/login',{
          name:this.nombreLogin,
          password:this.passwordLogin
        }).then(response => {
          if(!response.data.message) {
            alert("Credenciales incorrectas");
          } else {
            this.$router.push({path: "/Dashboard"});
          }
        }).catch(error => alert(error));
      },
   },
}
</script>