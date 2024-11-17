import { makeRequest } from '@/helpers/api'

export const getAllAsistenciaMiembro = async () => {
  const data = await makeRequest('/asistencia-miembro', 'GET')
  return data
}

export const getAsistenciaMiembro = async (id) => {
  const data = await makeRequest(`/asistencia-miembros/${id}`, 'GET')
  return data
}

export const getAsistenciaMiembroBySesion = async (idSesion) => {
  const data = await makeRequest(`/asistencia-miembros/${idSesion}`, 'GET')
  return data
}

export const saveAsistenciaMiembro = async (asistencia, idSesion) => {
  const data = await makeRequest(`/asistencia-miembros/${idSesion}`, 'POST', asistencia)
  return data
}

export const updateAsistenciaMiembro = async (asistencia, idSesion) => {
  const data = await makeRequest(`/asistencia-miembros/${idSesion}`, 'PUT', asistencia)
  return data
}
