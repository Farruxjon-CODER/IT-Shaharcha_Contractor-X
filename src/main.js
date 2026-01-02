import { createApp } from 'vue'
import { createPinia } from 'pinia' 
import App from './App.vue'
import router from './router/index'
import Antd from 'ant-design-vue'

const app = createApp(App)

app.use(router).use(Antd).use(createPinia()).mount('#app')