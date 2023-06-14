<template>
  <section :style="`color: ${isLight ? '#161616' : '#dfdfdf'}`">
    <div
      @click="isClick = !isClick"
      class="imgContainer"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <img
        v-if="isClick"
        src="../assets/bulbsum.webp"
        alt="Gerardo"
        aria-label="Gerardo"
      />
      <!-- TODO: Add personal photo-->
      <template v-else>
        <div class="b75vg4" v-show="hover">
          <img
            src="/src/assets/bulbsum_thumbsup.png"
            alt="picHireMe"
            aria-label="bulbsum hire me"
          />
          <span class="pas8d7" style="width: 12rem">HIRE ME</span>
        </div>
        <div class="b75vg4" v-show="!hover">
          <img
            src="/src/assets/bulbsum_cry.png"
            alt="picPlease"
            aria-label="bulbsum please"
          />
          <span class="pas8d7" style="width: 11rem">PLEASE</span>
        </div>
      </template>
    </div>
    <div>
      <h1
        :style="`color: ${isLight ? '#161616' : '#dfdfdf'}; filter: ${
          isLight
            ? 'drop-shadow(0 0 3px #00d9ff)'
            : 'drop-shadow(0 0 3px #ff0000)'
        };`"
      >
        Hi, I'm Gerardo
      </h1>
      <p>
        I have 1 year of hands-on experience working on personal projects
        utilizing cutting-edge technologies such as
        <strong>React</strong>
        and
        <strong>TypeScript</strong>
        .
      </p>
      <p>
        Currently, I am actively expanding my skill set by learning
        <strong>Vue 3</strong>
        , as demonstrated by the creation of this
        <a
          href="https://github.com/Ch1py7/Portfolio-v2"
          target="_BLANK"
          rel="noreferrer"
          aria-label="portfolio"
          >portfolio</a
        >
        .
      </p>
      <p>
        In addition, I possess some knowledge in scripting languages such as
        <strong>Bash</strong>
        and
        <strong>Python</strong>
        .
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import { LightMode } from '../types/GeneralTypes'

const { isLight } = inject<LightMode>('isLight')!
const hover = ref(false)
const isClick = ref(true)
</script>

<style scoped>
section {
  display: grid;
  grid-template-columns: 3fr 4fr;
  place-items: center;
  max-width: 100rem;
  margin: 0 auto;
  padding: 4rem 1rem 4rem;
  font-family: 'Satoshi';
}

.imgContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 20rem;
}

.b75vg4 {
  display: grid;
  width: 20rem;
  height: 20rem;
}

.pas8d7 {
  justify-self: center;
  background-color: #dfdfdfaa;
  color: #050505;
  border-radius: 1rem;
}

section img {
  position: absolute;
  width: 20rem;
  height: 20rem;
}

section div {
  display: flex;
  justify-self: center;
  flex-direction: column;
}

section h1 {
  color: #fdfdfd;
  font-family: 'Satoshi-Bold';
  font-size: 2.8rem;
  font-weight: 500;
  margin-bottom: 1.6rem;
}

section p {
  font-weight: 300;
  font-size: 1.8rem;
  margin: 3px 0;
}

span {
  align-self: flex-end;
  text-align: center;
  font-size: 2.4rem;
  font-weight: bold;
}

p a {
  color: #ba59f7;
  font-weight: bold;
  transition: filter 0.1s linear;
  text-decoration: underline;
  text-decoration-style: solid;
}

p a:hover {
  filter: drop-shadow(0 0 2px #8000ff);
}

@media (max-width: 768px) {
  section {
    grid-template-columns: 1fr;
    place-items: center;
    height: auto;
    text-align: center;
  }
  section div {
    padding: 0;
  }
}
</style>
