import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-indigo/theme.css'
import App from './App.vue'
import Router from '@/router'

const app = createApp(App)
app.use(PrimeVue)
app.use(Router)
app.mount('#app')