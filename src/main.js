import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory} from 'vue-router'

import NavComp from './components/Navigation/NavComp.vue'
import CrudComp from './components/Pages/CrudComp.vue'
import DirectiveComp from './components/Pages/DirectiveComp.vue'
import ControlComp from './components/Pages/ControlComp.vue'
import HomeComp from './components/Pages/HomeComp.vue'
import PageName from './components/Slots/PageName.vue'

// Vuetify
// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// const vuetify = createVuetify({
//   components,
//   directives,
// })
// Vuetify

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '', component: HomeComp},
        {path: '/Home', component: HomeComp},
        {path: '/CRUD', component: CrudComp},
        {path: '/Directives', component: DirectiveComp},
        {path: '/Controls', component: ControlComp}
    ]
});

const app = createApp(App);

// Vuetify
// app.use(vuetify)
// Vuetify

app.use(router);

app.component('NavComp', NavComp);
app.component('page-name', PageName);

app.mount('#app');
