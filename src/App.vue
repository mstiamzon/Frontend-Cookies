<template>
  <v-app  id="inspire">
    <!-- <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/login">Login</router-link>
       <router-link to="/register">Register</router-link>
    </div> -->


    <!-- <v-app-bar
      app
      clipped-left
      color="amber"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="title ml-3 mr-5">Cookies&nbsp;<span class="font-weight-light">in the Skye</span></span>
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-app-bar> -->
  
    <router-view/>

  </v-app>
</template>

<style lang="scss">


 </style>

<script>

export default {
  data () {
      return {
      search:'',
   
      }
    },
   
}
</script>