<template>
    <div>
        <h6 class="card-header">Ingresar una nueva reseña</h6>
        <div style="padding: 20px">
            <div class="col-lg-4 col-md-6 col-sm-8 mx-auto " style="border-style: solid; border-width: medium; border-radius: 10px; border-color: white;">
                <form class="form-group">
                    <div style= "display: flex; text-align: left; justify-content: center; flex-direction: column;">
                        <StarRating v-model="valoracion"/>
                    </div>
                    <input v-model="descripcion" type="text" class="form-control" placeholder="Una breve descripción de su reseña" required>
                    <button type="button" class="btn btn-danger" @click="doResena()">Ingresar</button><br>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
    name: 'HacerResena',
    components: {
        StarRating
    },
    data() {
        return {
            valoracion: "",
            descripcion: ""
        }
    },
    methods:{
        async doResena() {
            this.$axios.post("http://localhost:8081/api/new_resena", {
                votacion: this.valoracion,
                descripcion: this.descripcion,
                nombre_comida: this.nombre_comida,
                nombre_usuario: localStorage.name,
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
    },
}
</script>

<style>

</style>