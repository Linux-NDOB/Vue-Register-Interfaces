import { messageError } from '@/services/mensajes'

export const generarCampos = (numOrdenes, ordenes) => {
  if (numOrdenes.value < 1) {
    numOrdenes.value = 1
    return
  }
  if (numOrdenes.value > 10) {
    numOrdenes.value = 10
    messageError('El máximo de órdenes permitidas es 10')
    return
  }

  // Generar nuevo array con la cantidad especificada
  const nuevasOrdenes = Array(parseInt(numOrdenes.value))
    .fill()
    .map(() => ({
      TEMA: '',
      DESCRIPCION: ''
    }))

  ordenes.value = nuevasOrdenes
}
