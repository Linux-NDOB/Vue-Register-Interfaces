<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="text-white text-base font-semibold pt-3">
    <router-link to="/" class="flex items-center py-4 pl-6 nav-item" active-class="active-nav-link">
      <i class="fas fa-tachometer-alt mr-3"></i>
      Inicio
    </router-link>
    <router-link
      to="/sesion"
      class="flex items-center py-4 pl-6 nav-item"
      active-class="active-nav-link"
    >
      <i class="fas fa-calendar-alt mr-3"></i>
      Sesiones
    </router-link>
    <router-link
      to="/actas"
      class="flex items-center py-4 pl-6 nav-item"
      active-class="active-nav-link"
    >
      <i class="fas fa-archive mr-3"></i>
      Actas
    </router-link>
    <router-link
      to="/orden-sesion"
      class="flex items-center py-4 pl-6 nav-item"
      active-class="active-nav-link"
    >
      <i class="fas fa-clipboard-list mr-3"></i>
      Orden sesión
    </router-link>
    <router-link
      to="/miembros"
      class="flex items-center py-4 pl-6 nav-item"
      active-class="active-nav-link"
    >
      <i class="fas fa-users mr-3"></i>
      Miembros
    </router-link>
    <router-link
      to="/invitados"
      class="flex items-center py-4 pl-6 nav-item"
      active-class="active-nav-link"
    >
      <i class="fas fa-user mr-3"></i>
      Invitados
    </router-link>
    <router-link
      to="/asistencia-miembros"
      class="flex items-center py-4 pl-6 nav-item"
      active-class="active-nav-link"
    >
      <i class="fas fa-user-check mr-3"></i>
      Asis. miembros
    </router-link>
    <router-link
      to="/asistencia-invitado"
      class="flex items-center py-4 pl-6 nav-item"
      active-class="active-nav-link"
    >
      <i class="fas fa-user-check mr-3"></i>
      Asis. invitados
    </router-link>
    <router-link
      to="/solicitantes"
      class="flex items-center py-4 pl-6 nav-item"
      active-class="active-nav-link"
    >
      <i class="fas fa-person mr-3"></i>
      Solicitantes
    </router-link>
    <router-link
      to="/tareas"
      class="flex items-center py-4 pl-6 nav-item"
      active-class="active-nav-link"
    >
      <i class="fas fa-tasks mr-3"></i>
      Tareas
    </router-link>
    <router-link
      to="/descripcion"
      class="flex items-center py-4 pl-6 nav-item"
      active-class="active-nav-link"
    >
      <i class="fas fa-info-circle mr-3"></i>
      Descripción
    </router-link>
    <router-link
      to="/solicitud"
      class="flex items-center py-4 pl-6 nav-item"
      active-class="active-nav-link"
    >
      <i class="fas fa-file-alt mr-3"></i>
      Solicitud
    </router-link>
    <router-link
      to="/proposiciones"
      class="flex items-center py-4 pl-6 nav-item"
      active-class="active-nav-link"
    >
      <i class="fas fa-lightbulb mr-3"></i>
      Proposiciones
    </router-link>
    <router-link
      to="/encargados-tareas"
      class="flex items-center py-4 pl-6 nav-item"
      active-class="active-nav-link"
    >
      <i class="fas fa-user-tie mr-3"></i>
      Encargados
    </router-link>
  </nav>
</template>
