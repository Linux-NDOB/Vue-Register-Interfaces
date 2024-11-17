<script setup>
import BreadCrumb from '../../components/BreadCrumb.vue'
</script>

<script setup></script>

<template>
  <BreadCrumb modulo="encargados-tareas" accion="ver" />
  <div class="max-w-md mx-auto mt-8 shadow-md p-6 bg-white rounded-md">
    <h3 class="text-center mb-4">
      <b>Datos Encargado</b>
    </h3>
    <div class="relative z-0 w-full mb-5 group">
      <label for="estado">Estado</label>
      <input
        type="text"
        id="estado"
        aria-label="disabled input"
        class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value="Estado 1"
        disabled
      />
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <label for="id_miembros">ID MIEMBROS</label>
      <input
        type="number"
        id="id_miembros"
        aria-label="disabled input"
        class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value="1"
        disabled
      />
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <label for="id_tareas">ID TAREAS</label>
      <input
        type="number"
        id="id_tareas"
        aria-label="disabled input"
        class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value="1"
        disabled
      />
    </div>
  </div>
</template>
