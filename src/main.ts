import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueSidebarMenu from 'vue-sidebar-menu'

import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPhone, faFilter  } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faPhone, faFilter )

const app = createApp(App)
const pinia = createPinia()

app.component('icon', FontAwesomeIcon)
app.use(VueSidebarMenu)
app.use(pinia)
app.use(router)
app.mount('#app')
