<template>
  <BreadCrumb modulo="descripcion" accion="editar" />
  <div class="max-w-lg mx-auto mt-5 p-6 bg-white shadow-md rounded-md">
    <h1 class="text-center mb-4 text-2xl font-bold">Editar Descripción</h1>
    <form @submit.prevent="submitForm" class="needs-validation" novalidate>
      <div class="mb-4">
        <label for="evento" class="block text-gray-700 font-semibold mb-2">Evento</label>
        <input
          v-model="descripcion.EVENTO"
          type="text"
          id="evento"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
        <div class="text-red-500 mt-1" v-if="!descripcion.EVENTO">
          Por favor, ingresa el nombre del evento.
        </div>
      </div>

      <div class="mb-4">
        <label for="estuImplicados" class="block text-gray-700 font-semibold mb-2"
          >Estudiantes Implicados</label
        >
        <input
          v-model="descripcion.ESTU_IMPLICADOS"
          type="text"
          id="estuImplicados"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
        <div class="text-red-500 mt-1" v-if="!descripcion.ESTU_IMPLICADOS">
          Por favor, ingresa los estudiantes implicados.
        </div>
      </div>

      <div class="mb-4">
        <label for="docenImplicados" class="block text-gray-700 font-semibold mb-2"
          >Docentes Implicados</label
        >
        <input
          v-model="descripcion.DOCEN_IMPLICADOS"
          type="text"
          id="docenImplicados"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
        <div class="text-red-500 mt-1" v-if="!descripcion.DOCEN_IMPLICADOS">
          Por favor, ingresa los docentes implicados.
        </div>
      </div>

      <div class="mb-4">
        <label for="ciudadImplicada" class="block text-gray-700 font-semibold mb-2"
          >Ciudad Implicada</label
        >
        <input
          v-model="descripcion.CIUDAD_IMPLICADA"
          type="text"
          id="ciudadImplicada"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
        <div class="text-red-500 mt-1" v-if="!descripcion.CIUDAD_IMPLICADA">
          Por favor, ingresa la ciudad implicada.
        </div>
      </div>

      <div class="flex justify-between">
        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Guardar Cambios
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
  props: ['id'],
  data() {
    return {
      descripcion: {
        EVENTO: '',
        ESTU_IMPLICADOS: '',
        DOCEN_IMPLICADOS: '',
        CIUDAD_IMPLICADA: ''
      }
    }
  },
  mounted() {
    // Aquí puedes cargar los datos de ejemplo según el id
    const descripcionesEjemplo = [
      {
        ID_DESCRIPCION: 1,
        ESTU_IMPLICADOS: 'Juan Pérez',
        DOCEN_IMPLICADOS: 'Prof. Gómez',
        CIUDAD_IMPLICADA: 'Bogotá',
        EVENTO: 'Congreso A'
      },
      {
        ID_DESCRIPCION: 2,
        ESTU_IMPLICADOS: 'Ana Díaz',
        DOCEN_IMPLICADOS: 'Prof. Sánchez',
        CIUDAD_IMPLICADA: 'Medellín',
        EVENTO: 'Seminario B'
      }
    ]

    const descripcion = descripcionesEjemplo.find((d) => d.ID_DESCRIPCION === parseInt(this.id))
    if (descripcion) {
      this.descripcion = { ...descripcion }
    }
  },
  methods: {
    submitForm() {
      if (
        !this.descripcion.EVENTO ||
        !this.descripcion.ESTU_IMPLICADOS ||
        !this.descripcion.DOCEN_IMPLICADOS ||
        !this.descripcion.CIUDAD_IMPLICADA
      ) {
        return // Validación simple
      }
      console.log('Descripción editada:', this.descripcion)
      this.$router.push('/descripcion')
    },
    cancelar() {
      this.$router.push('/descripcion') // Redirige a la lista de descripciones sin guardar
    }
  }
}
</script>
