<template>
  <div class="registro">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <h1>Registrate</h1>
          <form class="form-group">
            <input v-model="nombreReg" type="nombre" class="form-control" placeholder="Nombre" required>
            <input v-model="passwordReg" type="password" class="form-control" placeholder="Contraseña" required>
            <input v-model="confirmReg" type="password" class="form-control" placeholder="Confirmar contraseña" required>
            <button type="button" class="btn btn-primary" @click="doRegister()">Registrar</button><br>
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
      this.$router.push({path: "Dashboard"})
    }
  },
  methods: {
    async doRegister() {
      await this.$axios.post('http://localhost:8081/api/registro',{
        name: this.nombreReg,
        password: this.passwordReg
      }).then(response => {
        alert(response.data);
        this.$router.push({path: 'Login'});
      }).catch(error => alert(error));
    },
  },
}
</script>
