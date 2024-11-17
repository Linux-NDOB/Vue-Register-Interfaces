<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import { ref, onMounted } from 'vue'
import { saveActa } from '@/services/actasService'
import { messageError } from '@/services/mensajes'
import { useRoute } from 'vue-router'
import router from '@/router'

const route = useRoute()
const id = ref(route.query.id)
const acta = ref([
  {
    SESION_IDSESION: ''
  }
])

onMounted(() => {
  if (id.value) {
    acta.value.SESION_IDSESION = id.value
  }
})

const agregarActa = async (e) => {
  try {
    e.preventDefault()

    const response = await saveActa(acta.value)

    if (response.message == 'Acta creada') {
      // messageSuccess(response.message)
      router.push(`/orden-sesion-agregar?id=${acta.value.SESION_IDSESION}`)
    } else {
      messageError(response.message)
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <BreadCrumb modulo="actas" accion="agregar" />
  <div class="max-w-md mx-auto mt-5 shadow-md p-6 bg-white rounded-md">
    <h1 class="text-center mb-4 text-2xl font-bold">Agregar Acta</h1>
    <form class="space-y-4" @submit="agregarActa">
      <div>
        <label for="SESION_IDSESION" class="block text-sm font-medium text-gray-700">Sesión</label>
        <input
          type="number"
          v-model="acta.SESION_IDSESION"
          id="SESION_IDSESION"
          name="SESION_IDSESION"
          class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          required
        />
        <div class="text-red-500 text-sm mt-1" v-if="!acta.SESION_IDSESION">
          Por favor, ingresa el número de sesión.
        </div>
      </div>

      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Guardar
      </button>
    </form>
  </div>
</template>
