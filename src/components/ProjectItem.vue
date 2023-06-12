<template>
  <li>
    <div class="container">
      <a
        class="projectName"
        :href="homepageUrl"
        target="_BLANK"
        rel="noreferrer"
      >
        {{ name }}
      </a>
      <p>
        {{ description }}
      </p>
      <div class="icons">
        <div>
          <TechnologieIcon
            v-for="tech in languages.edges"
            v-bind="tech.node"
            :key="tech.node"
          />
        </div>
        <div>
          <a
            v-if="homepageUrl"
            :href="homepageUrl"
            target="_BLANK"
            rel="noreferrer"
          >
            <LinkChain />
          </a>
          <a :href="url" target="_BLANK" rel="noreferrer">
            <Github />
          </a>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { Languages as jesucristo } from '../types/Graphql.types'
import TechnologieIcon from './TechnologieIcon.vue'
import Github from './icons/GitHub.vue'
import LinkChain from './icons/LinkChain.vue'

defineProps<{
  name: string
  description: string
  homepageUrl: string
  url: string
  languages: jesucristo
}>()
</script>

<style scoped>
.projectName {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 1rem;
  font-size: 2.4rem;
  text-align: start;
  font-weight: 700;
}

.container {
  display: grid;
  flex-direction: column;
  height: 100%;
  background-color: #161616;
  padding: 1rem;
  border: solid 1px #505050;
  border-radius: 1.2rem;
  transition: border 0.6s ease;
}

.container:hover {
  border: solid 1px #9038ee;
}

li p {
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: 300;
}

.icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
}

.icons div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  gap: 1rem;
}
</style>
