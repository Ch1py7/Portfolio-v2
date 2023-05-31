<template>
  <section>
    <h1>Projects</h1>
    <ul>
      <Project v-for='prop in props' :key='prop.id' v-bind='prop' />
    </ul>
  </section>
</template>

<script setup lang='ts'>
import Project from './ProjectItem.vue'
import ReactIcon from './icons/ReactIcon.vue'
import TypeScript from './icons/TypeScript.vue'
import StyledComponents from './icons/StyledComponents.vue'
import Python from './icons/PythonIcon.vue'

const props = [
  {
    id: 1,
    title: 'Afordibot',
    description:
      'Twitch Hackathon Winner: Twitch Bot Data App with React, TypeScript, and Styled-Components.',
    repo: 'https://github.com/Afordin/afordibot-web',
    link: 'https://afordibot.com/',
    techs: [
      { icon: ReactIcon },
      { icon: TypeScript },
      { icon: StyledComponents }
    ]
  },
  {
    id: 2,
    title: 'PokeCards',
    description: 'Pokemon app to see details about your favorites pokemon.',
    repo: 'https://github.com/Ch1py7/pokecards',
    link: 'https://pokecards-theta.vercel.app/',
    techs: [
      { icon: ReactIcon },
      { icon: TypeScript },
      { icon: StyledComponents }
    ]
  },
  {
    id: 3,
    title: 'G-Gif',
    description: 'Gif search engine that works with the giphy API.',
    repo: 'https://github.com/Ch1py7/g-gif',
    link: 'https://g-gif.vercel.app/',
    techs: [
      { icon: ReactIcon },
      { icon: TypeScript },
      { icon: StyledComponents }
    ]
  },
  {
    id: 4,
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
