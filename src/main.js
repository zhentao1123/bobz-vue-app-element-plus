import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import './styles/index.scss';
import 'ant-design-vue/dist/antd.css';

//路由鉴权处理
import '@/permission';

createApp(App).use(Antd).use(router).use(store).mount('#app');
