import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App) // 先取得 app 實例
app.use(router)            // 再把 router 掛載上去
app.mount('#app')          // 最後掛載到 DOM