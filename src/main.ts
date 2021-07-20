import { createApp } from 'vue'
import router from './router'
import { createVuetify } from 'vuetify'
import store from './store'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'
import * as components from 'vuetify/lib/components'
import * as directives from 'vuetify/lib/directives'

var vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  }
})

createApp(App).use(store).use(router).use(vuetify).mount('#app')