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
      <v-badge
        :content="cart1"
        :value="cart1"
        color="green"
        overlap
      >
        <v-icon large>add_shopping_cart</v-icon>
      </v-badge>
    </v-app-bar>
   <v-content>
       
    <v-container>

    
  <v-card>
    <v-tabs
      background-color="white"
      color="deep-purple accent-4"
      right
    >
      <v-tab>Landscape</v-tab>
      <v-tab>City</v-tab>
      <v-tab>Abstract</v-tab>

      <v-tab-item
        v-for="n in 3"
        :key="n"
      >
        <v-container fluid>
          <v-row>
            <v-col
              v-for="i in 6"
              :key="i"
              cols="12"
              md="2"
            >
              <v-img
                :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                aspect-ratio="1"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>

 
    <!-- <v-row>
      <v-col
        cols=4
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          col
        </v-card>
        
      </v-col>
       <v-col
        cols=4
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          col
        </v-card>
        
      </v-col>
       <v-col
        cols=4
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          col
        </v-card>
      </v-col>
    </v-row> -->


    <!-- added  -->

     <!-- <v-row>
      <v-col
        cols=4
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          col
        </v-card>
        
      </v-col>
       <v-col
        cols=4
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          col
        </v-card>
        
      </v-col>
       <v-col
        cols=4
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          col
        </v-card>
      </v-col>
    </v-row> -->


      <v-row>
      <v-col
        cols=12
      >
        <v-card
          class="pa-12"
          outlined
          tile
          color="basil"
        >
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-3 basil--text">Cookies in the Skye</h1>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card
          color="basil"
          flat
        >
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

      </v-card>
      </v-col>
    </v-row>


    <v-row> 
      <v-col
        cols=12
        md=3
        sm=12
      >
        <v-card
          class="pa-12 mx-auto my-12"
          outlined
          tile
         :loading="loading"
          max-width="374">
   
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Cookies Badilico</v-card-title>
     <v-btn
          class="mx-1"
          color="primary"
          @click="messages++">
          Add to Cart
        </v-btn>

         <br/> <br/>
         <v-btn
          class="mx-1"
          color="error"
          @click="cart1 = 0"
        >
          Remove Cart
        </v-btn>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>


   </v-card>
        
    </v-col>
    
     <!-- added loader card -->
       <v-col
        cols=12
        md=3
        sm=12
      >
        <v-card
          class="pa-12 mx-auto my-12"
          outlined
          tile
         :loading="loading"
          max-width="374"
          
          >
   
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Skye Badilico</v-card-title>
      <v-btn
          class="mx-1"
          color="primary"
          @click="cart1++"
        >
          Add to Cart
        </v-btn>
         <br><br>
         <v-btn
          class="mx-1"
          color="error"
          @click="cart1 = 0"
        >
          Remove Cart
        </v-btn>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
   </v-card>
    </v-col>

    <!-- added loader card -->
       <v-col
        cols=12
        md=3
        sm=12
      >
        <v-card
          class="pa-12 mx-auto my-12"
          outlined
          tile
         :loading="loading"
          max-width="374"
          
          >
   
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Skye Badilico</v-card-title>
      <v-btn
          class="mx-1"
          color="primary"
          @click="cart1++"
        >
          Add to Cart
        </v-btn>
         <br><br>
         <v-btn
          class="mx-1"
          color="error"
          @click="cart1 = 0"
        >
          Remove Cart
        </v-btn>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
   </v-card>
    </v-col>

    <!-- added loader card -->
       <v-col
        cols=12
        md=3
        sm=12
      >
        <v-card
          class="pa-12 mx-auto my-12"
          outlined
          tile
         :loading="loading"
          max-width="374"
          
          >
   
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Skye Badilico</v-card-title>
      <v-btn
          class="mx-1"
          color="primary"
          @click="cart1++"
        >
          Add to Cart
        </v-btn>
         <br><br>
         <v-btn
          class="mx-1"
          color="error"
          @click="cart1 = 0"
        >
          Remove Cart
        </v-btn>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>

   </v-card>
        
    </v-col>

    </v-row>

     <v-row>
      <v-col
        cols=6
        md=4
        sm=12>
        <v-card
          class="pa-12"
          outlined
          tile
        >
          col
        </v-card>
        
      </v-col>
    <!-- added loader card -->

       <v-col 
        cols=6
        md=4
        sm=12>
        <v-card
          class="pa-12"
          outlined
          tile
        >
          col
        </v-card>
        
      </v-col>
     </v-row>
 
     <v-row>
       <v-col
        cols=12
      >
        <v-card
          class="pa-12"
          outlined
          tile
        >
    <div class="text-center">
    <v-btn
      color="blue"
      dark
      @click="sheet = !sheet"
    >
      Open v-model
    </v-btn>
    <v-bottom-sheet v-model="sheet">
      <v-sheet class="text-center" height="200px">
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet = !sheet"
        >close</v-btn>
        <div class="py-3">This is a bottom sheet using the controlled by v-model instead of activator</div>
         <v-list-item
          v-for="tile in tiles"
          :key="tile.title"
          @click="sheet = false"
        >
        </v-list-item>
      </v-sheet>
    </v-bottom-sheet>
  </div>
        </v-card>
        
      </v-col>
     </v-row>
       </v-container>
   </v-content>
</v-app>
</template>
<script>
//   export default {
//     computed: {
//       cols () {
//         const { lg, sm } = this.$vuetify.breakpoint
//         return lg ? [3, 9] : sm ? [9, 3] : [6, 6]
//       },
//     },
//   }

export default {
    data () {
      return {
      //bottom sheets
       sheet: false,
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' },
      ],

        //badge 
        cart1: 0,
        show: false,
        //loading card
       loading: false,
       selection: 1,

        //tabs
        tab: null,
        items: [
          'Appetizers', 'Entrees', 'Deserts', 'Cocktails',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
      //loading card
      methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>

<style>
/* Helper classes */
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>