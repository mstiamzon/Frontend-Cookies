<template>
   <v-app  id="inspire">
    <!-- <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/login">Login</router-link>
       <router-link to="/register">Register</router-link>
    </div> -->


    <v-app-bar
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
    </v-app-bar>

    <!-- <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      color="grey lighten-4"
    > -->
    
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      color="grey lighten-4"
    >
      <v-list
        dense
        class="grey lighten-4"
      >
        <template v-for="(item, i) in items">
          <v-layout
            v-if="item.heading"
            :key="i"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex
              xs6
              class="text-xs-right"
            >
            <v-btn
                small
                text
              >edit</v-btn>
            </v-flex>
          </v-layout>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-3"
          ></v-divider>
          <v-list-item
            v-else
            :key="i"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text" @click="$router.push(item.goto)">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
   <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
    data(){
        return {
       drawer: null,
       search:'',
      items: [
      { icon: 'lightbulb_outline', text: 'Notes' , goto: ''},
      { icon: 'touch_app', text: 'Reminders' , goto: ''},
      { divider: true },
      { heading: 'Labels' , goto: ''},
      { icon: 'add', text: 'Create new label' , goto: ''},
      { divider: true , goto: ''},
      { icon: 'person', text: 'Users', goto: 'users'},
      { icon: 'lock', text: 'Roles' , goto: 'roles'},
         { icon: 'sentiment_very_satisfied', text: 'Roles' , goto: 'Products'},
      { divider: true , goto: ''},
      { icon: 'settings', text: 'Settings' , goto: 'login'},
      { icon: 'chat_bubble', text: 'Trash' , goto: ''},
      { icon: 'help', text: 'Help' , goto: ''},
      { icon: 'phonelink', text: 'App downloads' , goto: ''},
    ],
             
        }
    },
}
</script>