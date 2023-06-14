<template>
  <nav>
    <a href="#"><img src="../assets/bulbsum.webp" alt="bulbsum" /></a>
    <template style="display: flex; align-items: center; gap: 2rem;">
      <TheButton v-for="prop in props" v-bind="prop" :key="prop.id" />
      <ol class="menu">
        <li>
          <a
            :style="`color: ${isLight ? '#161616' : '#dfdfdf'}`"
            href="/Gerardo CV.pdf"
            target="_BLANK"
            rel="noreferrer"
            >CV</a
          >
        </li>
        <li>
          <a
            :style="`color: ${isLight ? '#161616' : '#dfdfdf'}`"
            href="https://www.linkedin.com/in/gerardogarcialopez-bulbsum/"
            target="_BLANK"
            rel="noreferrer"
            >LinkedIn</a
          >
        </li>
        <li>
          <a
            :style="`color: ${isLight ? '#161616' : '#dfdfdf'}`"
            href="https://github.com/Ch1py7"
            target="_BLANK"
            rel="noreferrer"
            >Github</a
          >
        </li>
      </ol>
      <ListItem
        :style="`fill: ${isLight ? '#161616' : '#dfdfdf'}`"
        @click="menu = !menu"
      />
      <ol v-show="menu" class="isShow">
        <li>
          <a
            :style="`color: ${isLight ? '#161616' : '#dfdfdf'}`"
            href="/Gerardo CV.pdf"
            target="_BLANK"
            rel="noreferrer"
            >CV</a
          >
        </li>
        <li>
          <a
            :style="`color: ${isLight ? '#161616' : '#dfdfdf'}`"
            href="https://www.linkedin.com/in/gerardogarcialopez-bulbsum/"
            target="_BLANK"
            rel="noreferrer"
            >LinkedIn</a
          >
        </li>
        <li>
          <a
            :style="`color: ${isLight ? '#161616' : '#dfdfdf'}`"
            href="https://github.com/Ch1py7"
            target="_BLANK"
            rel="noreferrer"
            >Github</a
          >
        </li>
      </ol>
    </template>
  </nav>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import { Language, LightMode } from '../types/GeneralTypes'
import TheButton from './TheButton.vue'
import EnglishFlag from './icons/EnglishFlag.vue'
import ListItem from './icons/ListItem.vue'
import MoonIcon from './icons/MoonIcon.vue'
import SpanishFlag from './icons/SpanishFlag.vue'
import SunIcon from './icons/SunIcon.vue'

const { isLight } = inject<LightMode>('isLight')!
const { language } = inject<Language>('language')!

const setLight = () => {
  isLight.value = !isLight.value
}

const setLanguage = () => {
  language.value = !language.value
}

const props = [
  {
    id: 1,
    mode: isLight,
    firstMode: SunIcon,
    secMode: MoonIcon,
    toggle: setLight,
  },
  {
    id: 2,
    mode: language,
    firstMode: SpanishFlag,
    secMode: EnglishFlag,
    toggle: setLanguage,
  },
]

const menu = ref(false)
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100rem;
  margin: 0 auto;
  padding: 2rem;
  font-size: 1.6rem;
}

nav ol {
  display: flex;
  gap: 2rem;
}

li {
  position: relative;
}

li::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  content: '';
  background-color: #6200ff;
  box-shadow: 0 0 1rem #6200ff;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.1s linear;
}

li:hover::after {
  transform: scaleX(100%);
}

nav a {
  display: flex;
  justify-content: center;
  align-items: center;
}

nav img {
  height: 4rem;
}

.isShow {
  position: absolute;
  top: 6rem;
  left: 0;
  z-index: 1;
  display: none;
  align-items: center;
  width: 100%;
  padding: 1rem;
  gap: 1rem;
  border-radius: 1rem;
  background-color: #15151550;
  backdrop-filter: blur(4px);
}

@media (max-width: 430px) {
  .menu {
    display: none;
  }

  .isShow {
    display: flex;
    flex-direction: column;
  }
}
</style>
