<script setup lang='ts'>
import { watchEffect, ref } from 'vue'
import NavBar from './components/NavBar.vue'
import PersonalInfo from './components/PersonalInfo.vue'
import ProjectsContainer from './components/ProjectsContainer.vue'
import ToolsContainer from './components/ToolsContainer.vue'
import LoadingPage from './components/LoadingPage.vue'

const loading = ref<boolean>(true)

watchEffect(() => {
  setTimeout(() => {
    loading.value = false
  }, 1500)
})
</script>

<template>
  <LoadingPage v-if='loading'/>
  <template v-else>
    <NavBar />
    <PersonalInfo />
    <main>
      <ProjectsContainer />
      <ToolsContainer />
    </main>
  </template>
</template>

<style scoped>
nav, section, main {
  animation: unvanish 1s ease-in-out;
}

@keyframes unvanish {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

main {
  display: grid;
  grid-template-columns: 1fr 10rem 1fr;
  padding: 0 1rem;
  gap: 2rem;
}
@media (max-width: 860px) {
  main {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 430px) {
  main {
    grid-template-columns: 1fr;
  }
}
</style>
