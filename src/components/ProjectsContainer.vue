<template>
  <section>
    <h1>Projects</h1>
    <ul>
      <Project
        v-for="prop in props.user.pinnedItems.edges"
        :key="prop.node.id"
        v-bind="prop.node"
      />
    </ul>
  </section>
</template>

<script setup lang="ts">
import { getApiData } from '../graphql/client'
import Project from './ProjectItem.vue'
const { data: props } = await getApiData()
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  grid-column: 1 / 2;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2.4rem;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(40rem, 100%), 1fr));
  align-items: stretch;
  gap: 2rem;
}
</style>
