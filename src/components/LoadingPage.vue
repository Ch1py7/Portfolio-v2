<template>
  <div>
    <img src='../assets/BulbsumLoading.png' alt='loading'/>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
}

img {
  animation: vanish 1.5s ease-in-out;
}

@media (max-width: 730px) {
  img {
    width: 100%;
  }
}

@keyframes vanish {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
