<script setup lang='ts'>
import NavBar from './components/NavBar.vue'
import PersonalInfo from './components/PersonalInfo.vue'
import ProjectsContainer from './components/ProjectsContainer.vue'
</script>

<template>
  <NavBar />
  <PersonalInfo />
  <ProjectsContainer />
</template>

<style scoped>
nav, section, main {
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
