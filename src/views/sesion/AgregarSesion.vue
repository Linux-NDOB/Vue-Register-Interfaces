<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import { messageSuccess, messageError } from '@/services/mensajes'
import { saveSesion } from '@/services/sesionService'
import { getUltimaSesion } from '@/services/sesionService'
import { saveActa } from '@/services/actasService'
import { ref, onMounted } from 'vue'
import { getAllMiembros } from '@/services/miembrosService'

const minFecha = ref('')
const miembros = ref([])
const sesion = ref([
  {
    FECHA: '',
    LUGAR: '',
    HORAINICIO: ''
  }
])

onMounted(async () => {
  try {
    const ultimaSesion = await getUltimaSesion()
    miembros.value = await getAllMiembros()
    if (ultimaSesion) {
      const fecha = new Date(ultimaSesion.FECHA)
      fecha.setDate(fecha.getDate() + 8)
      minFecha.value = fecha.toISOString().split('T')[0]
    }
  } catch (error) {
    console.log(error)
  }
})

const agregarSesion = async (e) => {
  e.preventDefault()
  try {
    const response = await saveSesion(sesion.value)

    if (response.message == 'Sesion creada') {
      const idSesion = response.sesion.IDSESION
      const acta = { SESION_IDSESION: idSesion }
      const actaReponse = await saveActa(acta)

      if (actaReponse.message == 'Acta creada') {
        messageSuccess(
          'Sesion creada exitosamente',
          'siguiente',
          `/orden-sesion-agregar?id=${idSesion}`
        )
      } else {
        messageError(actaReponse.message)
      }

      sesion.value = [
        {
          FECHA: '',
          LUGAR: '',
          HORAINICIO: ''
        }
      ]
    } else {
      messageError(response.message)
    }

    // console.log(response.sesion.IDSESION)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <BreadCrumb modulo="sesion" accion="agregar" />
  <form class="max-w-md mx-auto mt-8 shadow-md p-6 bg-white rounded-md" @submit="agregarSesion">
    <h3 class="text-center mb-4 text-2xl">
      <b>Agregar sesion</b>
    </h3>
    <div class="relative z-0 w-full mb-5 group">
      <input
        type="date"
        v-model="sesion.FECHA"
        :min="minFecha"
        name="FECHA"
        id="FECHA"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="FECHA"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Fecha
      </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input
        type="text"
        v-model="sesion.LUGAR"
        name="LUGAR"
        id="LUGAR"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="LUGAR"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Lugar
      </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input
        type="time"
        v-model="sesion.HORAINICIO"
        name="HORAINCIO"
        id="HORAINCIO"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="HORAINCIO"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Hora Inicio
      </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <select
        v-model="sesion.PRESIDENTE"
        name="PRESIDENTE"
        id="PRESIDENTE"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      >
        <option v-for="miembro in miembros" :key="miembro.IDMIEMBRO" :value="miembro.NOMBRE">
          {{ miembro.NOMBRE }}
        </option>
      </select>
      <label
        for="PRESIDENTE"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Presidente
      </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <select
        type="text"
        v-model="sesion.SECRETARIO"
        name="SECRETARIO"
        id="SECRETARIO"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      >
        <option v-for="miembro in miembros" :key="miembro.IDMIEMBRO" :value="miembro.NOMBRE">
          {{ miembro.NOMBRE }}
        </option>
      </select>
      <label
        for="SECRETARIO"
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
