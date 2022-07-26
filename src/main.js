import { createApp } from 'vue';
import App from './App.vue';

//vue-router
import router from './router';

//vuex
import store from './store';

//element-plus
import ElementPlus from 'element-plus'
import * as ElIcons from '@element-plus/icons-vue'
// import 'element-plus/dist/index.css'
// import useElementUi from './element-ui';


//global style
import './styles/comm.scss';

//路由鉴权处理
import '@/permission';

const app = createApp(App);
app.use(ElementPlus);
// app.use(ElementPlus, { size: 'small', zIndex: 3000 }) //全局设置UI组件大小等参数
// useElementUi(app);
for (const name in ElIcons){
    app.component(name, ElIcons[name]);
}
app.use(router);
app.use(store);
app.mount('#app');
