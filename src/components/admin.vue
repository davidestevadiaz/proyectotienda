<template>
    <div class="contenido">j
        <card v-for="ropa in articulos" v-bind:articulo="ropa" v-bind:key="ropa.id" v-bind:articuloid="ropa.id"/>
      </div>
</template>

<script>
import { db } from '../db'
import card from './cardadmin.vue'
import autentificacion from '../db'
export default {
    data() {
        return {
            articulos: [],
        }
    },
    components:{
        card
    },
      mounted: function() {
        autentificacion.auth.onAuthStateChanged( user => {
          if (!user || !autentificacion.esAdmin(user)) {
                 this.$router.push('container');
            
          }
        })
    },
    firestore: {
        articulos: db.collection('articulos'),
    },

    methods:{

    }
}
</script>

<style scoped>
.contenido{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}


</style>
