<template>
  <nav>
    <a href="#" title="home"
      ><img src="../assets/bulbsum.webp" alt="logo" aria-label="home"
    /></a>
    <ol class="menu">
      <li>
        <TheButton v-for="prop in props" v-bind="prop" :key="prop.id" />
      </li>
      <li class="cvContainer" :class="isLight ? 'light' : 'dark'">
        <p
          @click="showCV = !showCV"
          :style="`color: ${isLight ? '#161616' : '#dfdfdf'}`"
        >
          CV
        </p>
        <div v-show="showCV" class="cvTypes">
          <a
            :style="`color: ${isLight ? '#161616' : '#dfdfdf'}`"
            href="/Gerardo-es-CV.pdf"
            target="_BLANK"
            rel="noreferrer"
            >Spanish</a
          >
          <a
            :style="`color: ${isLight ? '#161616' : '#dfdfdf'}`"
            href="/Gerardo-en-CV.pdf"
            target="_BLANK"
            rel="noreferrer"
            >English</a
          >
        </div>
      </li>
      <li :class="isLight ? 'light' : 'dark'">
        <a
          title="Go to my LinkedIn"
          :style="`color: ${isLight ? '#161616' : '#dfdfdf'}`"
          href="https://www.linkedin.com/in/gerardogarcialopez-bulbsum/"
          target="_BLANK"
          rel="noreferrer"
          >LinkedIn</a
        >
      </li>
      <li :class="isLight ? 'light' : 'dark'">
        <a
          title="Go to my Github"
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
        <TheButton v-for="prop in props" v-bind="prop" :key="prop.id" />
      </li>
      <li class="cvContainer" :class="isLight ? 'light' : 'dark'">
        <p
          @click="showCV = !showCV"
          :style="`color: ${isLight ? '#161616' : '#dfdfdf'}`"
        >
          CV
        </p>
        <div v-show="showCV" class="cvTypes">
          <a
            :style="`color: ${isLight ? '#161616' : '#dfdfdf'}`"
            href="/Gerardo-es-CV.pdf"
            target="_BLANK"
            rel="noreferrer"
            >Spanish</a
          >
          <a
            :style="`color: ${isLight ? '#161616' : '#dfdfdf'}`"
            href="/Gerardo-en-CV.pdf"
            target="_BLANK"
            rel="noreferrer"
            >English</a
          >
        </div>
      </li>
      <li :class="isLight ? 'light' : 'dark'">
        <a
          :style="`color: ${isLight ? '#161616' : '#dfdfdf'}`"
          href="https://www.linkedin.com/in/gerardogarcialopez-bulbsum/"
          target="_BLANK"
          rel="noreferrer"
          @click="menu = !menu"
          >LinkedIn</a
        >
      </li>
      <li :class="isLight ? 'light' : 'dark'">
        <a
          :style="`color: ${isLight ? '#161616' : '#dfdfdf'}`"
          href="https://github.com/Ch1py7"
          target="_BLANK"
          rel="noreferrer"
          @click="menu = !menu"
          >Github</a
        >
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import { LightMode } from '../types/GeneralTypes'
import TheButton from './TheButton.vue'
import ListItem from './icons/ListItem.vue'
import MoonIcon from './icons/MoonIcon.vue'
import SunIcon from './icons/SunIcon.vue'

const { isLight } = inject<LightMode>('isLight')!

const setLight = () => {
  isLight.value = !isLight.value
}

const props = [
  {
    id: 1,
    mode: isLight,
    firstMode: SunIcon,
    secMode: MoonIcon,
    toggle: setLight,
  },
]

const showCV = ref(false)
const menu = ref(false)
</script>

<style scoped>
nav {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100rem;
  margin: 0 auto;
  padding: 2rem;
  font-size: 2rem;
}

nav ol {
  display: flex;
  justify-content: center;
  align-items: center;
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
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.1s linear;
}

.cvContainer {
  position: relative;
}

.cvTypes {
  position: absolute;
  top: 3rem;
  left: 50%;
  z-index: 1;
  display: flex;
  gap: 2rem;
  transform: translateX(-50%);
}

@media (max-width: 430px) {
  .cvTypes {
    top: -3rem;
    left: 10rem;
    flex-direction: column;
    gap: 1rem;
  }
}

li.dark:hover::after {
  background-color: #6200ff;
  box-shadow: 0 0 1rem #6200ff;
}

li.light:hover::after {
  background-color: #00aeff;
  box-shadow: 0 0 1rem #00aeff;
}

li:hover::after {
  transform: scaleX(100%);
}

nav a {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 2rem;
  font-weight: bold;
}

nav p {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 2rem;
  font-weight: bold;
  cursor: pointer;
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
