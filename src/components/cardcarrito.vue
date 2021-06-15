<template>
    <div class="card">
          <h3>{{ carro.nombreArticulo }}</h3>
        <p class="">El precio es {{carro.Precio}}</p>
        <p class="">Hay {{carro.Cantidad}} unidades</p>
        <button @click="eliminarCarrito">Eliminar producto</button>                  
    </div>

</template>

<script>
import { db } from '../db'
//import autentificacion from '../db'
export default {

    name: 'carrito',
    props: ['carro', 'carroid'],
    data() {
        return {
            id: this.carroid,
        }
    },
                 
    /*mounted: function() {
      autentificacion.auth.onAuthStateChanged( user => {
      
        if(user) {
            this.idUsuario=user.uid;
            console.log(this.idUsuario);
        }
      })
    },*/
    methods:{


        /*PREGUNTAR
        editarCarrito(){
            db.collection("articulos").doc("this.num").set({
                nombreArticulo: this.articulo.Nombre,
                Precio: this.articulo.Precio,
                Cantidad: this.cantidad,
            })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
            this.num++;
        },*/

        eliminarCarrito(){
            //console.log("El id es "+this.id)
            db.collection("carro").doc(this.id).delete().then(() => {
                this.$notify({
                    group: 'eliminar',
                    type: 'warn',
                    width:'300px',
                    title: 'Important message',
                    text: '¡Articulo eliminado del carrito!'
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