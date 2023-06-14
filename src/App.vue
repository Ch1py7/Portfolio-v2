<script setup lang="ts">
import { provide, ref } from 'vue'
import NavBar from './components/NavBar.vue'
import PersonalInfo from './components/PersonalInfo.vue'
import ProjectsContainer from './components/ProjectsContainer.vue'
import Canvas from './components/TheCanvas.vue'
import Footer from './components/TheFooter.vue'

const isLight = ref()
const language = ref()

provide('isLight', {
  isLight,
})

provide('language', {
  language,
})
</script>

<template>
  <NavBar />
  <PersonalInfo />
  <Suspense>
    <ProjectsContainer />
  </Suspense>
  <Footer />
  <Canvas />
</template>

<style scoped>
nav,
section,
main {
  animation: unvanish 0.8s ease-in-out;
}

@keyframes unvanish {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
