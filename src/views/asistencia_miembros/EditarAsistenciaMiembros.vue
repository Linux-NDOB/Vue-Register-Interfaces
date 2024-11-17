<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
</script>
<template>
  <BreadCrumb modulo="asistencia-miembros" accion="editar" />
  <div class="container mx-auto p-4">
    <h1 class="text-lg font-bold mb-4">Editar Asistencia</h1>
    <form>
      <div class="mb-4">
        <label for="id_sesion" class="block text-sm font-medium">ID Sesión</label>
        <input id="id_sesion" type="number" class="border p-2 w-full" required />
      </div>
      <div class="mb-4">
        <label for="id_miembros" class="block text-sm font-medium">ID Miembro</label>
        <input id="id_miembros" class="border p-2 w-full" required />
      </div>
      <div class="mb-4">
        <label for="estado_asistencia" class="block text-sm font-medium"
          >Estado de Asistencia</label
        >
        <select id="estado_asistencia" class="border p-2 w-full" required>
          <option value="Presente">Asistió</option>
          <option value="Ausente">No Asistió</option>
          <option value="Ausente">Excusa</option>
        </select>
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Actualizar</button>
    </form>
  </div>
</template>
