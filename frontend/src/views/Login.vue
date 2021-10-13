<template>
  <div class="login-page">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <h1>Ingresa</h1>
          <form class="form-group">
            <input v-model="nombreLogin" type="text" class="form-control" placeholder="Nombre" required>
            <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required>
            <button type="button" class="btn btn-primary" @click="doLogin()">Ingresar</button><br>
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
   
   methods: {
      async doLogin() {
        await fetch('http://localhost:8081/api/login',{
          method: 'POST',
          headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
            name:this.nombreLogin,
            password:this.passwordLogin
            })
        }).then(response => alert(response.message))
        .catch(error => alert(error));
      },
   },
}
</script>