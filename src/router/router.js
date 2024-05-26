import { createRouter, createWebHistory } from 'vue-router'
import safetyDevicePageComponent from "@/securityContext/pages/SafetyDevice/SafetyDevice-page.component.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'', component:()=>import('../public/pages/home-page.component.vue')},
    {path:'/home', component:()=>import('../public/pages/home-page.component.vue')},
    {path:'/:pathMatch(.*)*', component:()=>import('../public/pages/NotFound-page.component.vue')},
    {path:'/PersonalCardPage', component:()=>import('../securityContext/pages/PersonalCard/PersonalCard-page.component.vue')},
    {path:'/SafetyDevicePage',component:safetyDevicePageComponent},
  ]
})

export default router
