<script setup lang="ts"></script>

<template>
  <footer>
    <p>Made with <span class="heart">♥️</span> by Gerardo Garcia</p>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  margin-top: 2rem;
  font-size: 1.8rem;
  text-align: center;
}

span.heart {
  display: inline-block;
  color: #ff0000;
  transition: transform 0.3s ease, text-shadow 0.3s ease;
}

span.heart:hover {
  transform: scale(1.2);
  text-shadow: 0 0 0.6rem #ff0000;
}

@media (max-width: 839px) {
  footer {
    margin-top: 0;
  }
}
</style>
