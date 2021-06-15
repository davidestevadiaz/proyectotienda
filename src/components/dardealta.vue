<template>
    <form>
      <h3>Dar de alta</h3>
      <input type="text"  v-model="anadirnombre" placeholder="nombre del producto">
      <input type="text" v-model="anadirdescripcion" placeholder="descripcion">
      <input type="text"  v-model="anadirprecio" placeholder="precio">
      <input type="text" v-model="anadircantidad" placeholder="cantidad">
      <input type="text"  v-model="anadirstock" placeholder="stock">
      <input type="text" v-model="anadirimagen" placeholder="url de la imagen">
      <input @click="darAlta" type="submit">
    </form>
</template>

<script>
import { db } from '../db'

export default ({
    name: 'dardealta',
    props: [],
    mounted (){

    },
    data(){
        return{
            anadirnombre:"",
            anadirdescripcion:"",
            anadirprecio:"",
            anadircantidad:"",
            anadirstock:"",
            anadirimagen:"",

        }
    },
    methods: {
        darAlta() {
            db.collection("articulos").add({
                    nombre: this.anadirnombre,
                    precio: this.anadirprecio,
                    stock: this.anadirstock,
                    cantidad: this.anadircantidad,
                    descripcion: this.anadirdescripcion,
                    imagen: this.anadirimagen,
                })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
        }
    }

})
</script>
