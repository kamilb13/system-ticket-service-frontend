import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from "vite-plugin-vuetify";

createApp(App).use(vuetify).use(router).mount('#app')
