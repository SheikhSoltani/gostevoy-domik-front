import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createHead} from "@vueuse/head";

const head=createHead()
const app=createApp(App)
app.use(head)
app.mount('#app')
