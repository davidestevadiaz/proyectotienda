<template>
  <div id="app">
    <div id="nav">
      <navbar/>
      <router-view/>
  <notifications group="sesion" position="top center"/>
  <notifications group="eliminar" position="top left" width="200" />

    </div>
  </div>
</template>


<script>
import navbar from './components/navbar.vue'

export default {
  name: 'App',
  components: {
    navbar,
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  margin:0px;
}
#nav {
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
