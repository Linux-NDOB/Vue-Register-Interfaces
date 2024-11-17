<script setup>
import BreadCrumb from '../../components/BreadCrumb.vue'
</script>

<script setup></script>

<template>
  <BreadCrumb modulo="invitado" accion="ver" />
  <form class="max-w-md mx-auto mt-8 shadow-md p-6 bg-white rounded-md">
    <h3 class="text-center mb-4">
      <b>Datos Invitado</b>
    </h3>
    <div class="relative z-0 w-full mb-5 group">
      <label for="nombres">Nombres</label>
      <input
        type="text"
        id="nombres"
        aria-label="disabled input"
        class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value="Pedro perez"
        disabled
      />
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <label for="dependencia">Dependencia</label>
      <input
        type="text"
        id="dependencia"
        aria-label="disabled input"
        class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value="dependencia"
        disabled
      />
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <label for="cargo">Cargo</label>
      <input
        type="text"
        id="cargo"
        aria-label="disabled input"
        class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value="tipo"
        disabled
      />
    </div>
  </form>
</template>
