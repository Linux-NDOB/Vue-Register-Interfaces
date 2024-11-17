import Swal from 'sweetalert2'

//funcion para mostar un mensaje antes de eliminar
export const messageDelete = () => {
  Swal.fire({
    title: 'Estas seguro?',
    text: 'Si borras este registro no podras recuperarlo!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, borrar!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Eliminado!',
        text: 'Your file has been deleted.',
        icon: 'success'
      })
    }
  })
}

//funcion para mostrar un mensaje de exito
export const messageSuccess = (message, buttonText = 'Salir', buttonLink = '#', id = null) => {
  const link = id ? `${buttonLink}?id=${id}` : buttonLink

  Swal.fire({
    title: 'Éxito',
    text: message,
    icon: 'success',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'OK',
    cancelButtonText: buttonText
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.cancel) {
      window.location.href = link
    }
  })
}

//funcion para mostrar un mensaje de error
export const messageError = (message) => {
  Swal.fire({
    title: 'Error',
    text: message,
    icon: 'error',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'OK'
  })
}
