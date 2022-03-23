import {createRouter,createWebHashHistory} from "vue-router"

import HomePage from '@/components/AppPages/HomePage.vue'
import SettingsPage from '@/components/AppPages/SettingsPage.vue'

const routes=[
    {path : '/', component : HomePage},
    {path : '/settings', component : SettingsPage},
]

const router = createRouter({
    history : createWebHashHistory(),
    routes,
})

export default router;
