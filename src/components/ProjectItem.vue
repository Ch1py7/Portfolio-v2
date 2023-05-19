<template>
  <li>
    <div class='container'>
      <h1>
        {{ title }}
      </h1>
      <p>
        {{ description }}
      </p>
      <div class='icons'>
        <div>
          <component v-for='tech in techs' :is='tech.icon' :key='tech.icon' />
        </div>
        <div>
          <a :href='link' target='_BLANK' rel='noreferrer'>
            <LinkChain />
          </a>
          <a :href='repo' target='_BLANK' rel='noreferrer'>
            <Github />
          </a>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup lang='ts'>
import LinkChain from './icons/LinkChain.vue'
import Github from './icons/GitHub.vue'

defineProps<{
  title: string
  description: string
  techs: {
    icon: object
  }[]
  repo: string
  link: string
}>()
</script>

<style scoped>
li h1 {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 1rem;
  font-size: 2.4rem;
  text-align: start;
}

.container {
  background-color: #161616;
  padding: 1rem;
  border: solid 1px #505050;
  border-radius: 1.2rem;
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
}

.icons div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  gap: 1rem;
}
</style>
