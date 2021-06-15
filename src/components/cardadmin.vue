<template>
    <div class="card">
          <h3>{{ articulo.nombre }}</h3>
          <img v-bind:src="articulo.imagen">
        <p class="">{{articulo.descripción}}</p>
        <p class="">El precio es {{articulo.precio}}</p>
        <p class="">Hay {{articulo.stock}} unidades</p>
        <button @click="updateArticulos">Editar Datos</button>
        <button @click="deleteArticulos">Eliminar productos</button>
    </div>

</template>

<script>
import { db } from '../db'
export default {
    name: 'admin',   
    props: ['articulo', 'articuloid'],
    data(){
        return{
            id: this.articuloid
        }
    },
    methods:{

        updateArticulos(){
            var articulo = db.collection("articulos").doc();
            return articulo.update({
                Cantidad: 5,
                Stock: 20
            })
            .then(() => {
                console.log("Document successfully updated!");
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
        },

        deleteArticulos(){
            db.collection("articulos").doc(this.id).delete().then(() => {
                this.$notify({
                    group: 'eliminar',
                    title: 'Important message',
                    text: 'Document successfully deleted!'
                    });
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
        }
    },


}
</script>

<style scoped>
.card{
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-basis: 30rem;
    width: 33.33%;
    background-color: rgba(0, 0, 0, 0.685);
    color: blanchedalmond;
    padding: 1.5rem;
    margin: 0.5rem;
}
img{
    width: 300px;
    height: 300px;

}

</style>

