import { makeRequest } from '@/helpers/api'

export const getAllMiembros = async () => {
  const data = await makeRequest('/miembros', 'GET')
  return data
}

export const getOneMiembro = async (id) => {
  const data = await makeRequest(`/miembros/${id}`, 'GET')
  return data
}

export const saveMiembro = async (datos) => {
  const formData = new FormData()
  for (const key in datos) {
    formData.append(key, datos[key])
  }

  const data = await makeRequest('/miembros', 'POST', formData, 'multipart/form-data')
  return data
}

export const updateMiembro = async (id, datos) => {
  const encodedData = new URLSearchParams()
  for (const key in datos) {
    encodedData.append(key, datos[key])
  }

  const data = await makeRequest(
    `/miembros/${id}`,
    'PUT',
    encodedData,
    'application/x-www-form-urlencoded'
  )
  return data
}
