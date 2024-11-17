import axios from 'axios'

// Configuración de la URL base
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Función para realizar peticiones
export const makeRequest = async (
  url,
  method = 'GET',
  params = null,
  contentType = 'application/json'
) => {
  try {
    const response = await api({
      url,
      method,
      data: params,
      headers: {
        'Content-Type': contentType
      }
    })
    return response.data
  } catch (error) {
    console.error('Error en la petición:', error)
  }
}
