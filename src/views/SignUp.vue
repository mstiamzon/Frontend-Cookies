<template>

   <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">Register</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
         <v-text-field 
            label="First Name"
            v-model="firstname"
            prepend-icon="mdi-account"
              />
           <v-text-field 
             v-model="lastname"
            label="Last Name"
            prepend-icon="mdi-account"
              />
         <v-text-field 
             v-model="email"
            label="Email Address"
            prepend-icon="mdi-email"
              />
          <v-text-field 
            label="Username"
            prepend-icon="mdi-account-circle"
              />
          <v-text-field 
          :type="showPassword ? 'text' : 'password'"
          label="Password"
           prepend-icon="mdi-lock"
           :append-icon="showPassword ? 'mdi-eye' :'mdi-eye-off'"
           @click:append="showPassword = !showPassword"/>
        </v-form>
      </v-card-text>
      <v-divider></v-divider >
      <v-card-actions class="justify-center" >
        <v-btn color="success">Register</v-btn>
   
      </v-card-actions>
    </v-card>

</template>

<script>
  export default {

    data() {
        return{
            showPassword:false,
            firstname:'',
            lastname:'',
            email:''


        }

    }
    
     
  }
</script>