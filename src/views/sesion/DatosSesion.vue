<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
</script>

<template>
  <BreadCrumb modulo="sesion" accion="ver" />
  <div class="max-w-lg mx-auto mt-8 shadow-md p-6 bg-white rounded-md">
    <h3 class="text-center mb-4">
      <b>Datos sesion</b>
    </h3>
    <div class="relative z-0 w-full mb-5 group">
      <label for="id_sesion">ID</label>
      <input
        type="text"
        id="id_sesion"
        aria-label="disabled input"
        class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value="1"
        disabled
      />
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <label for="lugar">Lugar</label>
      <input
        type="text"
        id="lugar"
        aria-label="disabled input"
        class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value="Lugar"
        disabled
      />
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <label for="fecha">Fecha</label>
      <input
        type="date"
        id="fecha"
        aria-label="disabled input"
        class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value="2022-01-01"
        disabled
      />
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <label for="hora_inicio">Hora inicio</label>
      <input
        type="time"
        id="hora_inicio"
        aria-label="disabled input"
        class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value="12:00"
        disabled
      />
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <label for="hora_final">Hora final</label>
      <input
        type="time"
        id="hora_final"
        aria-label="disabled input"
        class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value="12:00"
        disabled
      />
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <label for="presidente">Presidente</label>
      <input
        type="text"
        id="presidente"
        aria-label="disabled input"
        class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value="Presidente"
        disabled
      />
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <label for="secretario">Secretario</label>
      <input
        type="text"
        id="secretario"
        aria-label="disabled input"
        class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value="Secretario"
        disabled
      />
    </div>
  </div>
</template>
