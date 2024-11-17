import { makeRequest } from '@/helpers/api'

export const getAllInvitados = async () => {
  const data = await makeRequest('/invitados', 'GET')
  return data
}

export const getOneInvitado = async (id) => {
  const data = await makeRequest(`/invitados/${id}`, 'GET')
  return data
}

export const saveInvitado = async (invitado) => {
  const formData = new FormData()
  for (const key in invitado) {
    formData.append(key, invitado[key])
  }
  const data = await makeRequest('/invitados', 'POST', formData, 'multipart/form-data')
  return data
}

export const updateInvitado = async (id, invitado) => {
  const data = await makeRequest(`/invitados/${id}`, 'PUT', invitado)
  return data
}
