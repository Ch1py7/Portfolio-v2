<template>
  <section :style="`color: ${isLight ? '#161616' : '#dfdfdf'}`">
    <h1>Projects</h1>
    <ul>
      <Project
        v-for="prop in data.user.pinnedItems.edges"
        :key="prop.node.id"
        v-bind="prop.node"
      />
    </ul>
  </section>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { getApiData } from '../graphql/client'
import { LightMode } from '../types/GeneralTypes'
import Project from './ProjectItem.vue'

const { isLight } = inject<LightMode>('isLight')!

const { data } = await getApiData()
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  max-width: 100rem;
  margin: 0 auto;
  gap: 4rem;
}

h1 {
  padding-left: 2rem;
  font-size: 8rem;
}

@media (max-width: 768px) {
  h1 {
    padding: 0;
    text-align: center;
  }
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(40rem, 100%), 1fr));
  align-items: stretch;
  gap: 4rem;
}
</style>
