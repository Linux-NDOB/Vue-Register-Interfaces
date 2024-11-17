<script>
import BreadCrumb from '@/components/BreadCrumb.vue'

export default {
  components: {
    BreadCrumb
  },
  props: ['id'],
  data() {
    return {
      actaId: this.id,
      acta: {
        num_actas: '',
        estado: ''
      }
    }
  },
  mounted() {
    // Aquí puedes cargar los datos de ejemplo según el id
    const actasEjemplo = [
      { id: 101, num_actas: 101, estado: 'FIRMADA' },
      { id: 102, num_actas: 102, estado: 'FIRMADA' },
      { id: 103, num_actas: 103, estado: 'FIRMADA' }
    ]

    const acta = actasEjemplo.find((a) => a.id === parseInt(this.id))
    if (acta) {
      this.acta = { ...acta }
    }
  },
  methods: {
    submitForm() {
      if (!this.acta.num_actas || !this.acta.estado) {
        return // Validación simple
      }
      console.log('Acta editada:', this.acta)

      this.$router.push('/actas')
    }
  }
}
</script>

<template>
  <BreadCrumb modulo="actas" accion="editar" />
  <div class="max-w-md mx-auto mt-5 shadow-md p-6 bg-white rounded-md">
    <h1 class="text-center mb-4 text-2xl font-bold">Editar Acta {{ actaId }}</h1>
    <form @submit.prevent="submitForm" class="needs-validation" novalidate>
      <div class="mb-3">
        <label for="num_actas" class="form-label block text-gray-700">Número de Acta</label>
        <input
          type="text"
          v-model="acta.num_actas"
          id="num_actas"
          class="form-control border border-gray-400 rounded w-full p-2"
          required
        />
        <div class="invalid-feedback text-red-500">
          Por favor, ingresa un número de acta válido.
        </div>
      </div>
      <div class="mb-3">
        <label for="estado" class="form-label block text-gray-700">Estado</label>
        <input
          type="text"
          v-model="acta.estado"
          id="estado"
          class="form-control border border-gray-400 rounded w-full p-2"
          required
        />
        <div class="invalid-feedback text-red-500">Por favor, ingresa el estado del acta.</div>
      </div>
      <button type="submit" class="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded">
        Guardar
      </button>
    </form>
  </div>
</template>
