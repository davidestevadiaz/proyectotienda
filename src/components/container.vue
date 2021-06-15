<template>

    <div>
    <div class="contenido">
        <card v-for="ropa in articulos" v-bind:articulo="ropa" v-bind:key="ropa.id"/>
      </div>
      <img v-if="mostrar" src="./img/loading-12.gif">
    </div>
</template>
<script>
import { db } from '../db'
import card from './card.vue'

export default {
  data() {
    return {
      articulos: [],
      mostrar:true,
    }
  },
  mounted:function(){
    this.mostrar=false
  },

  components:{
      card
  },

  firestore: {
    articulos: db.collection('articulos'),
  },
}
</script>

<style scoped>
.contenido{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>