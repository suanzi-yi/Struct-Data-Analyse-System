import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/global/css/global.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "animate.css"

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
