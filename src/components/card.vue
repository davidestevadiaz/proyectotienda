<template>
    <div class="card">
          <h3>{{ articulo.nombre }}</h3>
          <img v-bind:src="articulo.imagen">
       
                    <p class="">{{articulo.descripción}}</p>
                    <p class="">El precio es {{articulo.precio}}</p>
                    <p class="">Hay {{articulo.stock}} unidades</p>
                    <button @click="addCarrito" v-if="mostrar" v-bind:disabled="btnmostrar" >Comprar</button>
                    
    </div>

</template>

<script>
import { db } from '../db'
import autentificacion from '../db'
export default {

    name: 'contenido',
    props: ['articulo'],

    mounted: function() {
      autentificacion.auth.onAuthStateChanged( user => {
      
        if(user) {
            this.ItemId= this.articulo.id;
            this.uid= user.uid;
            this.mostrar=true;
            this.comprobarStock();
            this.idUsuario=user.uid;
            console.log(this.idUsuario);
        }else{
            this.mostrar=false;
            this.btnmostrar=false;
        }

      })
    },

        data() {    
            return {
                mostrar:false,
                btnmostrar: false,
                contador:0,
                uid:"",
                ItemId:"",
            }
        },

    methods:{
        addCarrito(){
            this.contador++;
            db.collection(this.uid).doc(this.ItemId).set({
                nombre: this.articulo.nombre,
                precio: this.articulo.precio,
                cantidad: this.contador
            })
            .then(() => {
                console.log("Document written with ID: ");
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
  
        },


             comprobarStock(){
                if(this.articulo.stock==0){
                    this.btnmostrar=true;
                }
                else{
                    this.btnmostrar=false;
                }
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
    background-color: rgba(111, 0, 202, 0.699);
    color: blanchedalmond;
    padding: 1.5rem;
    margin: 0.5rem;
}
img{
    width: 300px;
    height: 300px;
}

</style>