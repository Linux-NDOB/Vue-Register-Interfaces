import { makeRequest } from '@/helpers/api'

export const getAllAsistenciaInvitados = async () => {
  const data = await makeRequest('/asistencia-invitados', 'GET')
  return data
}

export const getOneAsistenciaInvitados = async (id) => {
  const data = await makeRequest(`/asistencia-invitados/${id}`, 'GET')
  return data
}

export const saveAsistenciaInvitados = async (invitados, idSesion) => {
  const data = await makeRequest(`/asistencia-invitados/${idSesion}`, 'POST', invitados)
  return data
}

export const updateAsistenciaInvitados = async (invitados, idSesion) => {
  const data = await makeRequest(`/asistencia-invitados/${idSesion}`, 'PUT', invitados)
  return data
}
