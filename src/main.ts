import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { getApiData } from './graphql/client'

const { apolloProvider } = await getApiData()

createApp(App).use(apolloProvider).mount('#app')
