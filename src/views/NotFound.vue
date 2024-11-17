<template>
  <div class="not-found-container">
    <div class="content">
      <router-link to="/" class="text-blue-500 hover:underline">Volver al inicio</router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.not-found-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('../assets/img/notfound.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  height: 100%;
  width: 100%;
}

.content > .text-blue-500 {
  margin-top: auto;
  margin-bottom: 20px; /* Ajusta según sea necesario */
}
</style>
