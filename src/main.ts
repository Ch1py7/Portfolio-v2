import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { getApiData } from './graphql/client'

async function initializeApp() {
  const { apolloProvider } = await getApiData()
  createApp(App).use(apolloProvider).mount('#app')
}

initializeApp()
