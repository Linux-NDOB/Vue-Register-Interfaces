<template>
  <BreadCrumb modulo="asistencia-invitado" accion="editar" />
  <div class="container mx-auto p-4">
    <h1 class="text-lg font-bold mb-4">Editar Asistencia {{ asistenciaId }}</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="id_invitado" class="block text-sm font-medium">ID Invitado</label>
        <input
          v-model="asistencia.NVITADO_IDINVITADO"
          id="id_invitado"
          class="border p-2 w-full"
          required
        />
      </div>
      <div class="mb-4">
        <label for="id_sesion" class="block text-sm font-medium">ID Sesión</label>
        <input
          v-model="asistencia.SESION_IDSESION"
          id="id_sesion"
          type="number"
          class="border p-2 w-full"
          required
        />
      </div>
      <div class="mb-4">
        <label for="estado" class="block text-sm font-medium">Estado de Asistencia</label>
        <select
          v-model="asistencia.ESTADO_ASISTENCIA"
          id="estado"
          class="border p-2 w-full"
          required
        >
          <option value="ASISTIO">ASISTIO</option>
          <option value="NO ASISTIO">NO ASISTIO</option>
        </select>
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Guardar</button>
    </form>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue'
export default {
  components: { BreadCrumb },
  props: ['id'],
  data() {
    return {
      asistenciaId: this.id,
      asistencia: {
        NVITADO_IDINVITADO: '',
        SESION_IDSESION: '',
        ESTADO_ASISTENCIA: 'ASISTIO'
      }
    }
  },
  mounted() {
    const asistenciasEjemplo = [
      { NVITADO_IDINVITADO: 111, SESION_IDSESION: 1, ESTADO_ASISTENCIA: 'ASISTIO' },
      { NVITADO_IDINVITADO: 222, SESION_IDSESION: 2, ESTADO_ASISTENCIA: 'ASISTIO' },
      { NVITADO_IDINVITADO: 333, SESION_IDSESION: 3, ESTADO_ASISTENCIA: 'ASISTIO' },
      { NVITADO_IDINVITADO: 445, SESION_IDSESION: 33, ESTADO_ASISTENCIA: 'NO ASISTIDO' },
      { NVITADO_IDINVITADO: 678, SESION_IDSESION: 4, ESTADO_ASISTENCIA: 'ASISTIO' },
      { NVITADO_IDINVITADO: 901, SESION_IDSESION: 56, ESTADO_ASISTENCIA: 'ASISTIO' }
    ]

    const asistencia = asistenciasEjemplo.find((a) => a.NVITADO_IDINVITADO === parseInt(this.id))
    if (asistencia) {
      this.asistencia = { ...asistencia }
    }
  },
  methods: {
    submitForm() {
      console.log('Asistencia editada:', this.asistencia)
      this.$router.push('/asistencia-invitado')
    }
  }
}
</script>
