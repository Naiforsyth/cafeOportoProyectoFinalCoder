//Funciones

function creoId(){
  return parseInt (Math.random() *10000) 
}

function agregarProd(){
  let id = creoId()
  let nombre = prompt("Ingresa el nombre del producto:").toUpperCase()
  let precio = parseInt(prompt("Ingresa el precio:"))
  productos.push(new Producto(id, nombre, precio))
}

function listarProductos() {
  console.clear()
  console.table(productos)
}

function buscarProducto() {
  let aBuscar = prompt("¿Qué producto buscas?").toUpperCase()
  let respuesta = productos.filter((productos) => productos.nombre.includes(aBuscar))
  if (respuesta !== undefined) {
    console.clear()
    console.table(respuesta)
  }
}

function enExistencia(){
  let existe = prompt ("Ingrese el producto a buscar:").toUpperCase()
  let resultado = productos.filter((producto)=>producto.name === (existe))
  if (resultado){
    console.log("Lo tenemos en existencia")
  }else{
    console.log("No lo tenemos en existencia")
  }
}

function sumarCompra() {
  console.clear()
  console.table(carrito1)
  let total = carrito1.reduce((acc, producto) => acc + producto.precio, 0)
  console.log("SUBTOTAL DE LA COMPRA:", total)
  console.log("TOTAL DE LA COMPRA + IVA:", total * 1.21)
}