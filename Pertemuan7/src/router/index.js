import IngredientList from '../../views/InputIngredient.vue'
import Invoice from '../../views/PrintBill.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: IngredientList
    },
    {
        path: '/payment',
        name: 'payment',
        component: Invoice
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
