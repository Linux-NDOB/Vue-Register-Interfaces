<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { getOneSesion } from '@/services/sesionService'

const route = useRoute()
const id = ref(route.query.id)

const orden = ref({
  TEMA: '',
  DESCRIPCION: '',
  SESION_IDSESION: 0
})

onMounted(async () => {
  try {
    const response = await getOneSesion(id)
    orden.value = response
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <BreadCrumb modulo="orden-sesion" accion="editar" />
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Editar Orden Sesión {{ orden.SESION_IDSESION }}</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="tema" class="block text-sm font-medium">Tema</label>
        <input v-model="orden.TEMA" id="tema" class="border p-2 w-full" />
      </div>
      <div class="mb-4">
        <label for="descripcion" class="block text-sm font-medium">Descripción</label>
        <input v-model="orden.DESCRIPCION" id="descripcion" class="border p-2 w-full" />
      </div>
      <div class="mb-4">
        <label for="sesion" class="block text-sm font-medium">Sesión ID</label>
        <input
          v-model="orden.SESION_IDSESION"
          id="sesion"
          type="number"
          class="border p-2 w-full"
        />
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Guardar</button>
    </form>
  </div>
</template>
