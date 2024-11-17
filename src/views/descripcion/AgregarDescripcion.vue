<template>
  <BreadCrumb modulo="descripcion" accion="agregar" />
  <div class="max-w-md mx-auto mt-5 p-6 bg-white shadow-md rounded-md">
    <h1 class="text-center mb-4 text-2xl font-bold">Agregar Descripción</h1>
    <form @submit.prevent="guardarDescripcion" class="needs-validation" novalidate>
      <div class="mb-4">
        <label for="estudiantes" class="block text-gray-700 font-semibold mb-2"
          >Estudiantes Implicados</label
        >
        <input
          v-model="nuevaDescripcion.ESTU_IMPLICADOS"
          type="text"
          id="estudiantes"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
        <div class="text-red-500 mt-1" v-if="!nuevaDescripcion.ESTU_IMPLICADOS">
          Por favor, ingresa los estudiantes implicados.
        </div>
      </div>

      <div class="mb-4">
        <label for="docentes" class="block text-gray-700 font-semibold mb-2"
          >Docentes Implicados</label
        >
        <input
          v-model="nuevaDescripcion.DOCEN_IMPLICADOS"
          type="text"
          id="docentes"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
        <div class="text-red-500 mt-1" v-if="!nuevaDescripcion.DOCEN_IMPLICADOS">
          Por favor, ingresa los docentes implicados.
        </div>
      </div>

      <div class="mb-4">
        <label for="ciudad" class="block text-gray-700 font-semibold mb-2">Ciudad Implicada</label>
        <input
          v-model="nuevaDescripcion.CIUDAD_IMPLICADA"
          type="text"
          id="ciudad"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
        <div class="text-red-500 mt-1" v-if="!nuevaDescripcion.CIUDAD_IMPLICADA">
          Por favor, ingresa la ciudad implicada.
        </div>
      </div>

      <div class="mb-4">
        <label for="evento" class="block text-gray-700 font-semibold mb-2">Evento</label>
        <input
          v-model="nuevaDescripcion.EVENTO"
          type="text"
          id="evento"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
        <div class="text-red-500 mt-1" v-if="!nuevaDescripcion.EVENTO">
          Por favor, ingresa el nombre del evento.
        </div>
      </div>

      <div class="flex justify-between">
        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Guardar
        </button>
        <button
          type="button"
          class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          @click="cancelar"
        >
          Cancelar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue'

export default {
  components: {
    BreadCrumb
  },
  data() {
    return {
      nuevaDescripcion: {
        ESTU_IMPLICADOS: '',
        DOCEN_IMPLICADOS: '',
        CIUDAD_IMPLICADA: '',
        EVENTO: ''
      }
    }
  },
  methods: {
    guardarDescripcion() {
      // Validar si los campos están completos
      if (
        !this.nuevaDescripcion.ESTU_IMPLICADOS ||
        !this.nuevaDescripcion.DOCEN_IMPLICADOS ||
        !this.nuevaDescripcion.CIUDAD_IMPLICADA ||
        !this.nuevaDescripcion.EVENTO
      ) {
        return
      }

      // Obtener el array de descripciones desde el localStorage (simulación de base de datos local)
      const descripciones = JSON.parse(localStorage.getItem('descripciones')) || []
      const id = descripciones.length + 1 // Generar nuevo ID
      descripciones.push({ ID_DESCRIPCION: id, ...this.nuevaDescripcion })
      localStorage.setItem('descripciones', JSON.stringify(descripciones))

      // Redirigir a la lista de descripciones
      this.$router.push('/descripcion')
    },
    cancelar() {
      this.nuevaDescripcion = {
        ESTU_IMPLICADOS: '',
        DOCEN_IMPLICADOS: '',
        CIUDAD_IMPLICADA: '',
        EVENTO: ''
      } // Reiniciar formulario
      this.$router.push('/descripcion') // Redirigir a la lista de descripciones
    }
  }
}
</script>
