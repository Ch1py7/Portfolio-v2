<script setup lang="ts">
import { Ref } from 'vue'
defineProps<{
  mode: Ref
  firstMode: object
  secMode: object
  toggle: () => void
}>()
</script>

<template>
  <button
    :aria-label="mode.value ? 'light mode' : 'dark mode'"
    :title='mode.value ? "light mode" : "dark mode"'
    type="button"
    @click="toggle"
    :class="{ active: mode.value === true }"
  >
    <span :class="{ anim: mode.value === true }">
      <component :is="mode.value ? firstMode : secMode" />
    </span>
  </button>
</template>

<style scoped>
button {
  position: relative;
  display: flex;
  align-items: center;
  height: 2.4rem;
  width: 4.4rem;
  border: solid 1px #343434;
  border-radius: 2.2rem;
  background-color: #2b2b2b;
  cursor: pointer;
}

span {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  transition: transform 0.2s linear;
}

span.anim {
  transform: translateX(2rem);
}

button.active {
  background-color: #bbb;
}
</style>
