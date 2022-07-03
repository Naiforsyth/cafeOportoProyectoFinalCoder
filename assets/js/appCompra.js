//Variables Formulario compra
const inputNombre = document.querySelector("#inputNombre")
const inputTelefono = document.querySelector("#inputTelefono")
const inputEmail = document.querySelector("#inputEmail")
const inputDireccion = document.querySelector("#inputDireccion")
const btnSubmit = document.querySelector("#submit")
let datosDeInput = ""

btnSubmit.addEventListener("mousemove", ()=> {
  btnSubmit.title = "Complete los datos antes de hacer el pedido"
})


//función para localStorage
document.addEventListener("submit", (e) => {
  e.preventDefault()
  guardarDatos()
  alert(`Tu pedido esta en camino 🛵
Gracias por su compra 😃`)
})

function guardarDatos(){
  const datosdeUsr = {
      nombre: inputNombre.value,
      telefono: inputTelefono.value,
      email: inputEmail.value,
      direccion: inputDireccion.value
  }
  let str = JSON.stringify(datosdeUsr)
  localStorage.setItem("datosDeUsr", str)
}

function recuperoDatosUsr(){
  if(localStorage.getItem("datosDeUsr")){
      const datosDeUsr = JSON.parse(localStorage.getItem("datosDeUsr"))
          inputNombre.value = datosDeUsr.nombre
          inputTelefono.value = datosDeUsr.telefono
          inputEmail.value = datosDeUsr.email
          inputDireccion.value = datosDeUsr.direccion

  }
}
recuperoDatosUsr()

