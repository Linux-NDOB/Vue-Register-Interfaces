import { makeRequest } from '@/helpers/api'

// Función para iniciar sesión
export const login = async (email, password) => {
  const response = await makeRequest('/auth/login', 'POST', { email, password })

  if (response.token) {
    localStorage.setItem('token', response.token)
  }
  return response
}

// Función para verificar si el usuario está autenticado
export const isAuthenticated = () => {
  return !!localStorage.getItem('token')
}

// Función para cerrar sesión
export const logout = () => {
  localStorage.removeItem('token')
}
