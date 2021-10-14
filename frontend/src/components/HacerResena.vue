<template>
    <div>
        <h6 class="card-header">Ingresar una nueva reseña</h6>
        <form class="form-group">
            <input v-model="descripcion" type="text" class="form-control" placeholder="Una breve descripción de su reseña" required>
            <button type="button" class="btn btn-danger" @click="doResena()">Ingresar</button><br>
        </form>
    </div>
</template>

<script>
export default {
    name: 'HacerResena',
    data() {
        return {
            valoracio: "",
            descripcion: ""
        }
    },
    methods:{
        async doResena() {
            this.$axios.post("http://localhost:8081/api/new_resena", {
                valoracion: this.valoracion,
                nombre_usuario: this.descripcion,
                nombre_comida: this.nombre_comida,
                nombre_usuario: this.nombre_usuario,
            }).then(response => {
                if(!response.data.message) {
                    alert("No se ha podido enviar su reseña");
                } else {
                    alert("Reseña ingresada satisfactoriamente");
                    this.$router.go();
                }
            }).catch(error => alert(error));
        }
    },
    props: {
        nombre_comida: String,
        nombre_usuario: String
    },
}
</script>

<style>

</style>