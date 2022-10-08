import { createApp } from 'vue';
import App from './App';
import router from './router'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import VueFullscreen from 'vue-fullscreen'

const app = createApp(App);

app.use(router)
app.use(Antd)
app.use(VueFullscreen)
app.mount('#app');