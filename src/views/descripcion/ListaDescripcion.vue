<script>
import BreadCrumb from '@/components/BreadCrumb.vue'

export default {
  components: {
    BreadCrumb
  },
  data() {
    return {
      descripciones: [
        {
          ID_DESCRIPCION: 1,
          ESTU_IMPLICADOS: 'Juan Pérez, Eliut Rosario, Scot Brucanosk',
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
        },
        {
          ID_DESCRIPCION: 3,
          ESTU_IMPLICADOS: 'Carlos Ruiz',
          DOCEN_IMPLICADOS: 'Prof. Martínez',
          CIUDAD_IMPLICADA: 'Cali',
          EVENTO: 'Conferencia C'
        }
      ]
    }
  },
  methods: {
    agregarDescripcion() {
      this.$router.push('/descripcion-agregar')
    },
    editarDescripcion(id) {
      this.$router.push(`/descripcion-editar/${id}`)
    },
    borrarDescripcion(id) {
      this.descripciones = this.descripciones.filter(
        (descripcion) => descripcion.ID_DESCRIPCION !== id
      )
    }
  }
}
</script>

<template>
  <BreadCrumb modulo="descripcion" />
  <div class="container mx-auto mt-5">
    <div class="flex justify-between items-center">
      <h3 class="text-justify mb-2 text-xl font-bold">
        <strong>Listado de Descripciones</strong>
      </h3>
      <div class="text-right mb-4">
        <button class="bg-green-500 text-white py-2 px-4 rounded" @click="agregarDescripcion">
          <i class="fas fa-plus-square mr-2"></i> Agregar Descripción
        </button>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-300">
        <thead class="bg-gray-800 text-white">
          <tr>
            <th class="py-2 px-4 border-b">ID Descripción</th>
            <th class="py-2 px-4 border-b">Estudiantes Implicados</th>
            <th class="py-2 px-4 border-b">Docentes Implicados</th>
            <th class="py-2 px-4 border-b">Ciudad Implicada</th>
            <th class="py-2 px-4 border-b">Evento</th>
            <th class="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="descripcion in descripciones"
            :key="descripcion.ID_DESCRIPCION"
            class="hover:bg-gray-100"
          >
            <td class="py-2 px-4 border-b">{{ descripcion.ID_DESCRIPCION }}</td>
            <td class="py-2 px-4 border-b">{{ descripcion.ESTU_IMPLICADOS }}</td>
            <td class="py-2 px-4 border-b">{{ descripcion.DOCEN_IMPLICADOS }}</td>
            <td class="py-2 px-4 border-b">{{ descripcion.CIUDAD_IMPLICADA }}</td>
            <td class="py-2 px-4 border-b">{{ descripcion.EVENTO }}</td>
            <td class="py-2 px-4 border-b">
              <div class="flex gap-1">
                <button
                  class="bg-blue-500 text-white py-1 px-2 rounded mr-2"
                  @click="editarDescripcion(descripcion.ID_DESCRIPCION)"
                >
                  <i class="fas fa-pencil"></i>
                </button>
                <button
                  class="bg-red-500 text-white py-1 px-2 rounded"
                  @click="borrarDescripcion(descripcion.ID_DESCRIPCION)"
                >
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
