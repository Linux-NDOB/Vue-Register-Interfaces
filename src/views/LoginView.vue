<script setup>
import router from '@/router'
import { login } from '@/services/auth/authService'
import { messageError } from '@/services/mensajes'
import { ref } from 'vue'

const user = ref('')
const password = ref('')
const showPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const handleSubmit = async () => {
  try {
    const response = await login(user.value, password.value)

    if (response.message == 'Inicio de sesión exitoso' && response.token) {
      user.value = ''
      password.value = ''
      router.push('/')
    } else {
      messageError(response.message)
    }
    console.log(response)
  } catch (error) {
    messageError('Error al iniciar sesión')
    console.log(error)
  }
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
      <div class="flex justify-center">
        <img src="../assets/avatar.svg" alt="Avatar" class="w-24 h-24" />
      </div>
      <h2 class="text-2xl font-bold text-center text-gray-700">BIENVENIDO</h2>
      <form @submit.prevent="handleSubmit">
        <div class="space-y-4">
          <div class="relative">
            <i class="fas fa-user-circle absolute left-3 top-3 text-gray-400"></i>
            <input
              type="text"
              v-model="user"
              placeholder="Usuario"
              class="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div class="relative">
            <i class="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              placeholder="Contraseña"
              class="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button type="button" @click="togglePassword" class="absolute right-3 top-3">
              <i v-if="!showPassword" class="fas fa-eye text-blue-400"></i>
              <i v-else class="fas fa-eye-slash text-blue-400"></i>
            </button>
          </div>
        </div>
        <div class="flex justify-between mt-4">
          <a href="#" class="text-sm text-blue-500 hover:underline">¿Olvidaste la contraseña?</a>
        </div>
        <button
          type="submit"
          class="w-full py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Ingresar
        </button>
      </form>
    </div>
  </div>
</template>
