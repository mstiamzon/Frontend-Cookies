import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/SignUp.vue'
import Sidebar from '../views/Sidebar.vue'
import UsersView from '../views/UsersView.vue'
import RolesView from '../views/RolesView.vue'
import ErrorView from '../views/ErrorView.vue'

Vue.use(VueRouter)

const routes = [

  //Sidebar Route
  {
    path: '/auth',
    name: '',
    component: Sidebar,
    children:
   [
     {
    path:'/users',
    name:'users',
     component:UsersView
     },
    {
      path:'/roles',
      name:'roles',
       component:RolesView
     },
      
     {
      path:'/register',
      name:'Register',
       component:Register
       },
    ]
  },
 
   //Others
   {
    path: '/',
    name: 'Home',
    component: Home
   
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
 
   //Error Route
    {
    path:'*',
    name: 'Error',
    component: ErrorView
    }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
