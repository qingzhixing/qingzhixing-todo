import { createApp } from 'vue'
import App from './App.vue';

const app = createApp(App);


//Arco Design
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
app.use(ArcoVue);
//Acro Design Icon
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
app.use(ArcoVueIcon);

//vue-router
import router from '@/router/router'
app.use(router);


app.mount('#app');
