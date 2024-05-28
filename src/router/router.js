import { createRouter, createWebHistory } from 'vue-router'
import safetyDevicePageComponent from "@/securityContext/pages/SafetyDevice/SafetyDevice-page.component.vue";
import loginContentComponent from "@/public/components/Login/login-content.component.vue";
import signUpComponent from "@/public/components/signUp/signUp.component.vue";
import personalCardPageComponent from "@/securityContext/pages/PersonalSafety/PersonalCard-page.component.vue";
import shoppingdeviceCard from "@/securityContext/components/SafetyDeviceCard-component/shoppingdeviceCard.vue";
import tutorialManagementComponent from "@/buyContext/pages/tutorial-management.component.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'', component:()=>import('../public/pages/home-page.component.vue')},
    {path:'/home', component:()=>import('../public/pages/home-page.component.vue')},
    {path:'/:pathMatch(.*)*', component:()=>import('../public/pages/NotFound-page.component.vue')},
    {path:'/PersonalCardPage',component:personalCardPageComponent},
    {path:'/SafetyDevicePage',component:safetyDevicePageComponent},
    {path: '/login', component: loginContentComponent},
    {path: '/signup', component: signUpComponent},
    {path: '/carrito', component: shoppingdeviceCard},
    {patch: '/tutorials',component: tutorialManagementComponent, meta: { title: 'Tutorials' } },

  ]
})

export default router
