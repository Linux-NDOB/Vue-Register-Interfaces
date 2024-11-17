<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { logout } from '@/services/auth/authService'
import router from '@/router'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const handleClickLink = () => {
  isOpen.value = false
}

const cerrarSesion = () => {
  logout()
  router.push('login')
}
</script>

<template>
  <!-- Desktop Header -->
  <header class="w-full items-center bg-white py-2 px-6 hidden sm:flex shadow-md">
    <div class="w-1/2"></div>
    <div class="relative w-1/2 flex justify-end">
      <button
        @click="toggleMenu"
        class="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
      >
        <img src="../../assets/user.jpg" />
      </button>
      <button
        v-if="isOpen"
        @click="toggleMenu"
        class="h-full w-full fixed inset-0 cursor-default"
      ></button>
      <div v-if="isOpen" class="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16 z-10">
        <a href="#" class="block px-4 py-2 account-link hover:text-white">Mi cuenta</a>
        <a href="#" class="block px-4 py-2 account-link hover:text-white" @click="cerrarSesion"
          >Sign Out
        </a>
      </div>
    </div>
  </header>

  <!-- Mobile Header & Nav -->
  <header class="w-full bg-sidebar py-5 px-6 sm:hidden">
    <div class="flex items-center justify-between">
      <router-link to="/" class="text-white text-3xl font-semibold uppercase hover:text-gray-300">
        Admin
      </router-link>
      <button @click="toggleMenu" class="text-white text-3xl focus:outline-none">
        <i v-if="!isOpen" class="fas fa-bars"></i>
        <i v-else class="fas fa-times"></i>
      </button>
    </div>

    <!-- Dropdown Nav -->
    <nav :class="isOpen ? 'flex' : 'hidden'" class="flex flex-col pt-4">
      <router-link to="/" class="flex items-center active-nav-link text-white py-2 pl-4 nav-item">
        <i class="fas fa-tachometer-alt mr-3"></i>
        Inicio
      </router-link>
      <router-link
        to="/solicitantes"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
        @click="handleClickLink"
      >
        <i class="fas fa-person mr-3"></i>
        Solicitantes
      </router-link>
      <router-link
        to="/invitados"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
        @click="handleClickLink"
      >
        <i class="fas fa-user mr-3"></i>
        Invitados
      </router-link>
      <router-link
        to="/tareas"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
        @click="handleClickLink"
      >
        <i class="fas fa-tasks mr-3"></i>
        Tareas
      </router-link>
      <router-link
        to="/actas"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
        @click="handleClickLink"
      >
        <i class="fas fa-archive mr-3"></i>
        Actas
      </router-link>
      <router-link
        to="/miembros"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
        @click="handleClickLink"
      >
        <i class="fas fa-users mr-3"></i>
        Miembros
      </router-link>
      <router-link
        to="/descripcion"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
        @click="handleClickLink"
      >
        <i class="fas fa-info-circle mr-3"></i>
        Descripción
      </router-link>
      <router-link
        to="/solicitud"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
        @click="handleClickLink"
      >
        <i class="fas fa-file-alt mr-3"></i>
        Solicitud
      </router-link>
      <router-link
        to="/orden-sesion"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
        @click="handleClickLink"
      >
        <i class="fas fa-clipboard-list mr-3"></i>
        Orden sesion
      </router-link>
      <router-link
        to="/asistencia-invitado"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
        @click="handleClickLink"
      >
        <i class="fas fa-user-check mr-3"></i>
        Asis. Invitados
      </router-link>
      <router-link
        to="/sesion"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
        @click="handleClickLink"
      >
        <i class="fas fa-calendar-alt mr-3"></i>
        Sesiones
      </router-link>
      <router-link
        to="/asistencia-miembros"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
        @click="handleClickLink"
      >
        <i class="fas fa-user-check mr-3"></i>
        Asis. Miembros
      </router-link>
      <router-link
        to="/proposiciones"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
        @click="handleClickLink"
      >
        <i class="fas fa-lightbulb mr-3"></i>
        Proposiciones
      </router-link>
      <router-link
        to="/encargados-tareas"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
        @click="handleClickLink"
      >
        <i class="fas fa-user-tie mr-3"></i>
        Encargados
      </router-link>
      <router-link
        to="/proposiciones"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
        @click="handleClickLink"
      >
        <i class="fas fa-user mr-3"></i>
        Mi cuenta
      </router-link>
      <router-link
        to="/encargados-tareas"
        class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
        @click="handleClickLink"
      >
        <i class="fas fa-sign-out-alt mr-3"></i>
        Cerrar sesión
      </router-link>
    </nav>
  </header>
</template>
