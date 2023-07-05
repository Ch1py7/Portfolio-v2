<script setup lang="ts">
import { inject } from 'vue'
import { LightMode } from '../../types/GeneralTypes'

const { isLight } = inject<LightMode>('isLight')!
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    :class='isLight ? "light" : "dark"'
  >
    <g
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <path
        d="M13.544 10.456a4.368 4.368 0 0 0-6.176 0l-3.089 3.088a4.367 4.367 0 1 0 6.177 6.177L12 18.177"
      />
      <path
        d="M10.456 13.544a4.368 4.368 0 0 0 6.176 0l3.089-3.088a4.367 4.367 0 1 0-6.177-6.177L12 5.823"
      />
    </g>
  </svg>
</template>

<style scoped>
svg {
  transition: filter 0.2s ease-in-out;
}

svg.light:hover {
  filter: drop-shadow(0 0 2px #161616);
}

svg.dark:hover {
  filter: drop-shadow(0 0 2px #e1e1e1);
}
</style>
