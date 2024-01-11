import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import IdCard from "../views/Id.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/', name:'Home', component: Home},
    // {path:'/about', name:'About', component: ()=>import ('../views/About.vue')},
    // {path:'/cart', name:'Cart', component: ()=>import ('../views/Cart.vue')},
    {path:'/products/:id', name:'IdCard', component: ()=>import ('../views/Id.vue')},
  ]
})

export default router
