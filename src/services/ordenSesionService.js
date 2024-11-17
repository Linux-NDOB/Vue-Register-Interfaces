import { makeRequest } from '@/helpers/api'

export const getAllOrdenSesion = async () => {
  const data = await makeRequest('/orden-sesion', 'GET')
  return data
}

export const getOneOrdenSesion = async (id) => {
  const data = await makeRequest(`/orden-sesion${id}`, 'GET')
  return data
}

export const saveOrdenSesion = async (ordenSesion, idSesion) => {
  const data = await makeRequest(`/orden-sesion-agregar/${idSesion}`, 'POST', ordenSesion)
  return data
}

export const getOrdenesBySesion = async (idSesion) => {
  const data = await makeRequest(`/orden-sesion-temas/${idSesion}`, 'GET')
  return data
}
