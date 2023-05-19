<template>
  <section>
    <h1>Tools</h1>
    <ul>
      <Project v-for="prop in props" :key="prop.id" v-bind="prop" />
    </ul>
  </section>
</template>

<script setup lang='ts'>
import Project from './ProjectItem.vue'
import Python from './icons/PythonIcon.vue'

const props = [
  {
    id: 1,
    title: 'SSTI Payload Generator',
    description:
      'A simple python script to generate payloads for Server Side Template Injection vulnerabilities.',
    link: 'https://app.hackthebox.com/machines/481',
    repo: 'https://github.com/Ch1py7/redPanda-Script',
    techs: [{ icon: Python }],
  },
]
</script>

<style scoped>
section {
  grid-column: 3 / 4;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2.4rem;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (max-width: 860px) {
  section {
    grid-column: 2 / 3;
  }
}

@media (max-width: 430px) {
  section {
    grid-column: 1 / 2;
  }
}
</style>
