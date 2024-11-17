import { makeRequest } from '@/helpers/api'

export const getAllSesion = async () => {
  const data = await makeRequest('/sesiones', 'GET')
  return data
}

export const getOneSesion = async (id) => {
  const data = await makeRequest(`/sesiones/${id}`, 'GET')
  return data
}

export const saveSesion = async (sesion) => {
  const formData = new FormData()

  for (const key in sesion) {
    formData.append(key, sesion[key])
  }

  const data = await makeRequest('/sesiones', 'POST', formData, 'multipart/form-data')
  return data
}

export const updateSesion = async (id, sesion) => {
  const encodedData = new URLSearchParams()

  for (const key in sesion) {
    encodedData.append(key, sesion[key])
  }

  const data = await makeRequest(
    `/sesiones/${id}`,
    'PUT',
    sesion,
    'application/x-www-form-urlencoded'
  )
  return data
}

export const getActaBySesion = async (id) => {
  const data = await makeRequest(`/actas-sesion/${id}`, 'GET')
  return data
}

export const getUltimaSesion = async () => {
  const data = await makeRequest('/sesion-fechas', 'GET')
  return data
}

export const getActaByAnteriorSesion = async (idSesion) => {
  const data = await makeRequest(`/actas-sesion-anterior/${idSesion}`, 'GET')
  return data
}

export const deleteSesion = async (id) => {
  const data = await makeRequest(`/sesiones/${id}`, 'DELETE')
  return data
}
