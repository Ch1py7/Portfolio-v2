<template>
  <nav>
    <a href="#"><img src="../assets/bulbsum.webp" alt="bulbsum" /></a>
    <ol class="menu">
      <li>
        <a href="/Gerardo CV.pdf" target="_BLANK" rel="noreferrer">CV</a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/gerardogarcialopez-bulbsum/"
          target="_BLANK"
          rel="noreferrer"
          >LinkedIn</a
        >
      </li>
      <li>
        <a href="https://github.com/Ch1py7" target="_BLANK" rel="noreferrer"
          >Github</a
        >
      </li>
    </ol>
    <ListItem @click="menu = !menu" />
    <ol v-show="menu" class="isShow">
      <li>
        <a href="/Gerardo CV.pdf" target="_BLANK" rel="noreferrer">CV</a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/gerardogarcialopez-bulbsum/"
          target="_BLANK"
          rel="noreferrer"
          >LinkedIn</a
        >
      </li>
      <li>
        <a href="https://github.com/Ch1py7" target="_BLANK" rel="noreferrer"
          >Github</a
        >
      </li>
      <li>
        <a href="https://twitter.com/Bulbsum" target="_BLANK" rel="noreferrer"
          >Twitter</a
        >
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ListItem from './icons/ListItem.vue'

const menu = ref<boolean>(false)
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  display: none;
  z-index: 1;
  top: 6rem;
  left: 0;
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
