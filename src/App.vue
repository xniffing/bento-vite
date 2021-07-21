<template>
  <v-app>
    
    <v-app-bar density="compact">
      <v-app-bar-title>Vuetify</v-app-bar-title>
  
      <v-spacer></v-spacer>

      <router-link to="/" tag="v-btn"><v-btn text >Home</v-btn></router-link>
      <router-link to="/about" tag="v-btn"><v-btn text >About</v-btn></router-link>
      
    </v-app-bar>
     
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
}
</script>

<style scoped>
a {
  color: rgb(176, 124, 212);;
  text-decoration: inherit;
}

</style>
