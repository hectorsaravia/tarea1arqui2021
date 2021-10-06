<template>
  <div id="app">
    <div class="login-page">
        <div class="container">
          <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
                <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
                    <h1>Ingresa</h1>
                    <form class="form-group">
                      <input v-model="nombreLogin" type="text" class="form-control" placeholder="Nombre" required>
                      <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required>
                      <button type="submit" class="btn btn-primary" @click="doLogin()">Ingresar</button><br>
                      <p>No tienes una cuenta? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Registrate</a>
                      </p>
                      <p></p>
                    </form>
                </div>

                <div v-else class="card register" v-bind:class="{ error: emptyFields }">
                    <h1>Registrate</h1>
                    <form class="form-group">
                      <input v-model="nombreReg" type="nombre" class="form-control" placeholder="Nombre" required>
                      <input v-model="passwordReg" type="password" class="form-control" placeholder="Password" required>
                      <input v-model="confirmReg" type="password" class="form-control" placeholder="Confirm Password" required>
                      <button type="submit" class="btn btn-primary" @click="doRegister()">Registrar</button><br>
                      <p>Ya tienes una cuenta? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Ingresa</a>
                      </p>
                    </form>
                </div>
              </div>
          </div>
        </div>
   </div>
  </div>
</template>

<script>

export default {

   data() {
       return {
        registerActive: false,
        nombreLogin: "",
        passwordLogin: "",
        nombreReg: "",
        passwordReg: "",
        confirmReg: "",
        emptyFields: false
       };
   },
   
   methods: {
      async doLogin() {
        const Data = await fetch('http://localhost:8081/api/login',{
          method: 'POST',
          headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
            name:this.nombreLogin,
            password:this.passwordLogin
            })
        });
        const data=await Data.json();
        if(data.message != false){
          alert('bien mi rei');
          this.$router.push("/main");
        }
        else{
          alert(data.message);
          this.emptyFields = true;
        }
      },
      
      async doRegister() {
        const Data = await fetch('http://localhost:8081/api/registro',{
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' :'application/json'
            },
            body: JSON.stringify({
                name: this.nombreReg,
                password: this.passwordReg
            })
        });
        const data = await Data.json();
        alert(data.message);
        if(data.message){
            this.$router.go();
        }
        else{
            this.emptyFields = true;
        }
      }
   }
}
</script>