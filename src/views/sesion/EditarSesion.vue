<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import { useRoute } from 'vue-router'
import router from '@/router'
import { ref, onMounted } from 'vue'
import { getOneSesion, updateSesion } from '@/services/sesionService'
import { getAllMiembros } from '@/services/miembrosService'
import { messageError } from '@/services/mensajes'

const route = useRoute()
const id = ref(route.query.id)

const sesion = ref([
  {
    LUGAR: '',
    FECHA: '',
    HORAINICIO: '',
    HORAFINAL: '',
    PRESIDENTE: '',
    SECRETARIO: ''
  }
])

const miembros = ref([])

onMounted(async () => {
  try {
    sesion.value = []
    const response = await getOneSesion(id.value)
    // Formatear las horas antes de asignarlas
    if (response.HORAINICIO) {
      response.HORAINICIO = response.HORAINICIO.slice(0, 5) // Obtiene solo HH:mm
    }
    if (response.HORAFINAL) {
      response.HORAFINAL = response.HORAFINAL.slice(0, 5) // Obtiene solo HH:mm
    }
    sesion.value = response

    miembros.value = await getAllMiembros()
  } catch (error) {
    console.log(error)
  }
})

const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const response = await updateSesion(id.value, sesion.value)
    if (response.message == 'Sesion actualizada') {
      // messageSuccess(response.message)
      router.push(`/actas-agregar?id=${id.value}`)
    } else {
      messageError(response.message)
    }
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <BreadCrumb modulo="sesion" accion="editar" />
  <form class="max-w-md mx-auto mt-8 shadow-md p-6 bg-white rounded-md" @submit="handleSubmit">
    <h3 class="text-center mb-4">
      <b>Editar sesion</b>
    </h3>
    <div class="relative z-0 w-full mb-5 group">
      <input
        type="text"
        v-model="sesion.LUGAR"
        name="lugar"
        id="lugar"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="lugar"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Lugar
      </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input
        type="date"
        v-model="sesion.FECHA"
        name="fecha"
        id="fecha"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="fecha"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Fecha
      </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input
        type="time"
        v-model="sesion.HORAINICIO"
        name="hora_inicio"
        id="hora_inicio"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="hora_inicio"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Hora Inicio
      </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input
        type="time"
        v-model="sesion.HORAFINAL"
        name="hora_final"
        id="hora_final"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="hora_final"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Hora Final
      </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <select
        v-model="sesion.PRESIDENTE"
        name="presidente"
        id="presidente"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        required
      >
        <option value="" disabled selected>Seleccione un presidente</option>
        <option v-for="miembro in miembros" :key="miembro.IDMIEMBRO" :value="miembro.NOMBRE">
          {{ miembro.NOMBRE }}
        </option>
      </select>
      <label
        for="presidente"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Presidente
      </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <select
        v-model="sesion.SECRETARIO"
        name="secretario"
        id="secretario"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        required
      >
        <option value="" disabled selected>Seleccione un presidente</option>
        <option v-for="miembro in miembros" :key="miembro.IDMIEMBRO" :value="miembro.NOMBRE">
          {{ miembro.NOMBRE }}
        </option>
      </select>
      <label
        for="secretario"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Secretario
      </label>
    </div>
    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Guardar
    </button>
  </form>
</template>
