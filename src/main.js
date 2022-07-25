import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/index.scss';

//路由鉴权处理
import '@/permission';

createApp(App).use(router).use(store).mount('#app');
