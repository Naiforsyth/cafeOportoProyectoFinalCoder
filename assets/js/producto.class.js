//Class Producto

class Producto {
  constructor(id, nombre, precio) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
  }
  precioFinal() {
    return parseFloat((this.precio * 1.21).toFixed(2))
  }
}