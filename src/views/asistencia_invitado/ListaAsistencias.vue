<template>
  <BreadCrumb modulo="asistencia-invitado" />
  <div class="container mx-auto p-4">
    <div class="flex justify-between items-center mb-2">
      <h1 class="text-lg font-bold mb-4">Listado de Asistencias</h1>
      <button @click="agregarAsistencia" class="bg-green-500 text-white px-2 py-1 rounded text-sm">
        Agregar
      </button>
    </div>

    <table class="min-w-full bg-white border border-gray-300 text-sm">
      <thead class="bg-black table-dark text-white">
        <tr>
          <th class="px-2 py-1 border">ID Invitado</th>
          <th class="px-2 py-1 border">ID Sesión</th>
          <th class="px-2 py-1 border">Estado de Asistencia</th>
          <th class="px-2 border">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(asistencia, index) in paginatedData" :key="index" class="border-t">
          <td class="px-2 py-1 border">{{ asistencia.NVITADO_IDINVITADO }}</td>
          <td class="px-2 py-1 border">{{ asistencia.SESION_IDSESION }}</td>
          <td class="px-2 py-1 border">{{ asistencia.ESTADO_ASISTENCIA }}</td>
          <td class="px-2 py-1 border">
            <button
              class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-3"
              @click="editarAsistencia(asistencia.NVITADO_IDINVITADO)"
            >
              <i class="fas fa-pen-to-square"></i>
            </button>
            <button
              class="bg-red-500 text-white px-2 py-1 rounded text-xs"
              @click="borrarAsistencia(asistencia.NVITADO_IDINVITADO)"
            >
              <i class="fas fa-delete-left"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-2 flex justify-between items-center text-sm">
      <button
        class="bg-gray-300 px-2 py-1 rounded"
        :disabled="currentPage === 1"
        @click="currentPage--"
      >
        Anterior
      </button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button
        class="bg-gray-300 px-2 py-1 rounded"
        :disabled="currentPage === totalPages"
        @click="currentPage++"
      >
        Siguiente
      </button>
    </div>
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
      asistencias: [
        { NVITADO_IDINVITADO: 111, SESION_IDSESION: 1, ESTADO_ASISTENCIA: 'ASISTIO' },
        { NVITADO_IDINVITADO: 222, SESION_IDSESION: 2, ESTADO_ASISTENCIA: 'ASISTIO' },
        { NVITADO_IDINVITADO: 333, SESION_IDSESION: 3, ESTADO_ASISTENCIA: 'ASISTIO' },
        { NVITADO_IDINVITADO: 445, SESION_IDSESION: 33, ESTADO_ASISTENCIA: 'NO ASISTIDO' },
        { NVITADO_IDINVITADO: 678, SESION_IDSESION: 4, ESTADO_ASISTENCIA: 'ASISTIO' },
        { NVITADO_IDINVITADO: 901, SESION_IDSESION: 56, ESTADO_ASISTENCIA: 'ASISTIO' }
      ],
      currentPage: 1,
      itemsPerPage: 5
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.asistencias.length / this.itemsPerPage)
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.asistencias.slice(start, end)
    }
  },
  methods: {
    agregarAsistencia() {
      this.$router.push('/asistencia-invitado-agregar')
    },
    editarAsistencia(id) {
      this.$router.push(`/asistencia-invitado-editar/${id}`)
    },
    borrarAsistencia(id) {
      this.asistencias = this.asistencias.filter(
        (asistencia) => asistencia.NVITADO_IDINVITADO !== id
      )
    }
  }
}
</script>
