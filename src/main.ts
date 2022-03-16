import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import AppRoutes from "@/router/AppRoutes";
import App from './App.vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';

import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App);
app.use(ArcoVue);
app.use(ArcoVueIcon);
//挂载路由
app.use(AppRoutes);


app.mount('#app');
