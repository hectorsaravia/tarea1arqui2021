<template>
  <div class="login-page">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto " style="border-style: solid; border-width: medium; border-radius: 10px; border-color: white;">
          <br>
          <h1>Regístrate</h1>
          <form class="form-group">
            <input v-model="nombreReg" type="nombre" class="form-control" placeholder="Nombre" required>
            <input v-model="passwordReg" type="password" class="form-control" placeholder="Contraseña" required>
            <input v-model="confirmReg" type="password" class="form-control" placeholder="Confirmar contraseña" required>
            <button type="button" class="btn btn-danger" @click="doRegister()">Registrar</button><br>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Registro',
  data () {
    return {
      nombreReg: "",
      passwordReg: "",
      confirmReg: "",
    }
  },
  beforeCreate () {
    if (this.$session.exists()) {
      this.$router.push({path: "/Dashboard"});
    };
  },
  methods: {
    async doRegister() {
      if (!this.nombreReg=="" && !this.passwordReg=="" && !this.confirmReg=="") {
        if ((this.passwordReg === this.confirmReg)) {
          await this.$axios.post('http://localhost:8081/api/registro',{
            name: this.nombreReg,
            password: this.passwordReg
          }).then(response => {
            if(!response.data.message) {
              alert("Usuario ya existe");
            } else {
              this.$router.push({path: "/"});
            }
          }).catch(error => alert(error));
        } else {
          alert("Contraseñas no coinciden");
        }
      } else {
        alert("Debe escribir todos los campos");
      }
    },
  },
}
</script>
