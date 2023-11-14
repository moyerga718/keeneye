import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BootstrapVue3 from 'bootstrap-vue-3';
import Tooltip from 'primevue/tooltip';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(BootstrapVue3)
app.directive('tooltip', Tooltip);
app.use(router)

app.mount('#app')
