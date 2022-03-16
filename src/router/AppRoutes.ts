import {createRouter,createWebHashHistory} from "vue-router";

import HomePage from '@/components/HomePage.vue';
import SettingsPage from '@/components/SettingsPage.vue';
import SearchPage from "@/components/Home/SearchPage.vue";
import TodoListContent from "@/components/Home/TodoListContent.vue";

const AppRoutes = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/',
            component : HomePage,
            alias:['/','/home'],
            children : [
                {path:'search',component:SearchPage},
                {path:'todo-list-content',component:TodoListContent}
            ]
        },
        {path:'/settings',component : SettingsPage},
    ]
})

export default AppRoutes;
