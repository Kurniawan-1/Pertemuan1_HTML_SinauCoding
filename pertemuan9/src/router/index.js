import Cart from "../views/ViewCart.vue"
import Log from "../views/ViewLog.vue"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/log',
            name: 'Log',
            component: Log
        }
    ]
})

export default router