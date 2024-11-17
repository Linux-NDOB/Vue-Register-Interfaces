<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
</script>

<template>
  <BreadCrumb modulo="solicitud" accion="ver" />
  <div class="max-w-md mx-auto mt-8 shadow-md p-6 bg-white rounded-md">
    <h3 class="text-center mb-4">
      <b>Datos Solicitud</b>
    </h3>
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
    <!-- asunto input -->
    <div class="relative z-0 w-full mb-5 group">
      <label for="asunto">Asunto</label>
      <input
        type="text"
        id="asunto"
        aria-label="disabled input"
        class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value="asunto"
        disabled
      />
    </div>
    <!-- decision input -->
    <div class="relative z-0 w-full mb-5 group">
      <label for="decision">Decision</label>
      <input
        type="text"
        id="decision"
        aria-label="disabled input"
        class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value="decision"
        disabled
      />
    </div>
    <!-- fecha_solcitud input -->
    <div class="relative z-0 w-full mb-5 group">
      <label for="fecha_solicitud">Fecha Solicitud</label>
      <input
        type="text"
        id="fecha_solicitud"
        aria-label="disabled input"
        class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value="2022-02-02"
        disabled
      />
    </div>
    <!-- id_solicitante -->
    <div class="relative z-0 w-full mb-5 group">
      <label for="id_solicitante">Solicitante</label>
      <input
        type="text"
        id="id_solicitante"
        aria-label="disabled input"
        class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value="1"
        disabled
      />
    </div>
    <!-- id_sesion -->
    <div class="relative z-0 w-full mb-5 group">
      <label for="id_sesion">Sesion</label>
      <input
        type="text"
        id="id_sesion"
        aria-label="disabled input"
        class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value="1"
        disabled
      />
    </div>
    <!-- id_descripcion -->
    <div class="relative z-0 w-full mb-5 group">
      <label for="id_descripcion">Descripcion</label>
      <input
        type="text"
        id="id_descripcion"
        aria-label="disabled input"
        class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value="descripcion"
        disabled
      />
    </div>
  </div>
</template>
