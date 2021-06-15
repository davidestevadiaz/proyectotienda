<template>
    <div class="contenido">
        
        <card v-for="articulo in carrito" v-bind:carro="articulo" v-bind:carroid="articulo.id" v-bind:key="articulo.id"/>
      </div>

</template>

<script>
import { db } from '../db'
import card from './cardcarrito.vue'
import autentificacion from '../db'

export default {
  data() {
    return {
      carrito: [],
      /*precioFinal,
      i,*/
    }
  },
  components:{
      card
  },
  mounted: function() {
      autentificacion.auth.onAuthStateChanged( user => {
      
        if(user) {
            this.idUsuario=user.uid;
            console.log(this.idUsuario);
        }

      })
    },

  firestore: {
        carrito: db.collection('carro'),
    /*carrito: db.collection(this.idUsuario),
    hemos intendado arreglar para que se vea el carrito de cada usuario pero nos salta un error, que idUsuario is not defined*/

  },
  computed:{

      /*precioTotal(){
        for(this.i=0; this.i<this.carrito.length; this.i++)
          this.precioFinal+=this.carrito[i].Precio*this.carrito.Cantidad
          return this.precioFinal;
      }*/
  }
}

</script>


<style scoped>
.contenido{
    display: flex;
}
</style>