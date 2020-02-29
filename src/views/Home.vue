<template>
<v-app id="inspire">
       <v-app-bar
      app
      clipped-left
      color="amber"
    >
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
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
   <v-content>
       
     <v-container class="fill-height" fluid>
    <!-- <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">{{ slide }} </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel> -->
           
           <v-row align="center" justify="center">
               <v-col cols="12" sm="8" md="8">
                   <v-card class="elevation-11">
                       <v-window v-model="step">
                           <v-window-item :value="1">
                               <v-row>
                                   <v-col cols="12" md="8">
                                       <v-card-text class="mt-12">
                                           <h1 class="text-center display-2 light-blue--text text--accent-3">Sign in</h1>
                                            <v-img
                                        :src="require('../assets/cookie.png')"
                                         class="my-3"
                                         contain
                                        height="200"
                                              />
                                           <div class="text-center mt-4">
                                               <v-btn class="mx-2" fab color="black" outlined>
                                                   <v-icon>fab fa-facebook</v-icon>
                                               </v-btn>
                                                <v-btn class="mx-2" fab color="black" outlined>
                                                   <v-icon>fab fa-google-plus-g</v-icon>
                                               </v-btn>
                                              <v-btn class="mx-2" fab color="black" outlined>
                                                   <v-icon>fab fa-linkedin-in</v-icon>
                                               </v-btn>
                                              </div>
                                               <h4 class="text-center mlt-4">Ensure your email for registration</h4>
                                               <v-form>
                                                   <v-text-field
                                                   label="Email"
                                                   name="Email"
                                                   prepend-icon="email"
                                                   type="text"
                                                   color="light-blue accent-3"/>
                                                   
                                                   <v-text-field
                                                   id="password"
                                                   label="Password"
                                                   name="Password"
                                                   prepend-icon="lock"
                                                   type="text"
                                                   color="light-blue accent-3"/>
                                               </v-form>
                                               <h3 class="text-center mt-3">Forgot your password</h3>
                                       </v-card-text>
                                          <div class="text-center mt-3">
                                           <v-btn outlined color="light-blue accent 3" dark>SIGN IN</v-btn>
                                          </div>
                                   </v-col>
                                    <v-col cols="12" md="4" class="light-blue darken-3">
                                        <v-card-text class="white--text mt-12">
                                            <h1 class="text-center display-1">Hello,Friends</h1>
                                            <h5 class="text-center">Enter your personal details</h5>
                                        </v-card-text>
                                        <div class="text-center">
                                            <v-btn rounded outlined="" dark @click="step++">SIGN UP</v-btn>
                                        </div>
                                    
                                    </v-col>
                               </v-row>
                           </v-window-item>
                            <v-window-item :value="2"> 
                                <v-row class="fill-height">
                                    <v-col cols="12" md="4" class="light-blue darken-3">
                                        <v-card-text class="white--text mt-12">
                                            <h1 class="text-center display-1">Welcome Back</h1>
                                            <h2 class="text-center">Please Log in</h2>
                                        </v-card-text>
                                        <div class="text-center">
                                            <v-btn rounded outlined dark @click="step--">SIGN IN</v-btn>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" md="8">
                                        <v-card-text class="mt-12">
                                            <h1 class="text-center display-2 light-blue--text text--accent-3">Create Account</h1>
                                             <v-img
                                        :src="require('../assets/cookie.png')"
                                         class="my-3"
                                         contain
                                        height="200"
                                              />
                                            <div class="text-center mt-4">
                                                <v-btn class="mx-2" fab color="black" outlined="">  
                                                 <v-icon>fab fa-facebook</v-icon>
                                               </v-btn>
                                                <v-btn class="mx-2" fab color="black" outlined>
                                                   <v-icon>fab fa-google-plus-g</v-icon>
                                               </v-btn>
                                              <v-btn class="mx-2" fab color="black" outlined>
                                                   <v-icon>fab fa-linkedin-in</v-icon>
                                               </v-btn>
                                            </div>
                                              <h4 class="text-center mlt-4">Ensure your email for registration</h4>
                                             <v-form>
                                              <v-text-field
                                                   label="Name"
                                                   name="Name"
                                                   prepend-icon="person"
                                                   type="text"
                                                   color="light-blue accent-3"/>
                                             <v-text-field
                                                   label="Email"
                                                   name="Email"
                                                   prepend-icon="email"
                                                   type="text"
                                                   color="light-blue accent-3"/>
                                              <v-text-field
                                                   id="password"
                                                   label="Password"
                                                   name="Password"
                                                   prepend-icon="lock"
                                                   type="text"
                                                   color="light-blue accent-3"/>
                                                   
                                               </v-form>
                                        </v-card-text>
                                        <div class="text-center mt-n5">
                                            <v-btn rounded color="light-blue accent-3" dark>SIGN UP</v-btn>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-window-item>
                       </v-window>
                   </v-card>
               </v-col>

           </v-row>
       </v-container>
   </v-content>
</v-app>
</template>

<script>

export default {
    data () {
      return {
        // colors: [
        //   'indigo',
        //   'warning',
        //   'pink darken-2',
        //   'red lighten-1',
        //   'deep-purple accent-4',
        // ],
        // slides: [
        //   'Cookies',
        //   'Second',
        //   'Third',
        //   'Fourth',
        //   'Fifth',
        // ],
        step:1
      }
    },

  props:{
      source: String
  }
  //name: 'Home',
//   components: {
//     // HelloWorld
//   }
}
</script>
