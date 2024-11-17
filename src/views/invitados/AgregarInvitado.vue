<script setup>
import BreadCrumb from '../../components/BreadCrumb.vue'
import { saveInvitado } from '@/services/invitadosService'
import { messageSuccess, messageError } from '@/services/mensajes'
import { ref } from 'vue'

const invitado = ref([
  {
    NOMBRE: '',
    DEPENDENCIA: '',
    CARGO: '',
    EMAIL: ''
  }
])

const agregarInvitado = async (e) => {
  e.preventDefault()

  try {
    const response = await saveInvitado(invitado.value)
    if (response.message == 'Invitado creado exitosamente') {
      messageSuccess('Invitado creado exitosamente')
      invitado.value = [
        {
          NOMBRE: '',
          DEPENDENCIA: '',
          CARGO: '',
          EMAIL: ''
        }
      ]
    } else {
      messageError(response.message)
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <BreadCrumb modulo="invitados" accion="agregar" />
  <form class="max-w-md mx-auto mt-8 shadow-md p-6 bg-white rounded-md" @submit="agregarInvitado">
    <h3 class="text-center mb-4">
      <b>Agregar Invitado</b>
    </h3>
    <div class="relative z-0 w-full mb-5 group">
      <input
        type="text"
        v-model="invitado.NOMBRE"
        name="nombres"
        id="nombres"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="nombres"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Nombres
      </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input
        type="text"
        v-model="invitado.DEPENDENCIA"
        name="dependencia"
        id="dependencia"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="dependencia"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Dependencia
      </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input
        type="text"
        v-model="invitado.CARGO"
        name="cargo"
        id="cargo"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="cargo"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Cargo
      </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input
        type="email"
        v-model="invitado.EMAIL"
        name="email"
        id="email"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="email"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Email
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
