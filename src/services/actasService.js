import { makeRequest } from '@/helpers/api'

// Función para obtener las actas
export const getAllActas = async () => {
  const data = await makeRequest('/actas', 'GET')
  return data
}

export const saveActa = async (acta) => {
  const formData = new FormData()

  for (const key in acta) {
    formData.append(key, acta[key])
  }

  const data = await makeRequest('/actas', 'POST', formData, 'multipart/form-data')
  return data
}

export const getActaBySesion = async (id) => {
  const data = await makeRequest(`/actas/${id}`, 'GET')
  return data
}

export const updateActa = async (id, acta) => {
  const encodedData = new URLSearchParams()

  for (const key in acta) {
    encodedData.append(key, acta[key])
  }

  const data = await makeRequest(`/actas/${id}`, 'PUT', acta, 'application/x-www-form-urlencoded')
  return data
}
