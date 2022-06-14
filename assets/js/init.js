const productos = []

function cargarArrayProductos() {
  productos.push(new Producto(1234, "CAFE CON LECHE", 15))
  productos.push(new Producto(2345, "LAGRIMA", 10))
  productos.push(new Producto(3456, "CAFE AMERICANO", 15))
  productos.push(new Producto(4567, "CAFE EXPRESO", 10))
  productos.push(new Producto(5678, "MEDIALUNA", 100))
  productos.push(new Producto(6789, "MEDIALUNA CON JAMON Y QUESO", 250))
  productos.push(new Producto(7891, "CROISSANT", 150))
  productos.push(new Producto(8912, "CROISSANT CON DULCE DE LECHE", 400))
  productos.push(new Producto(9123, "SCON DE QUESO", 350))
  productos.push(new Producto(2109, "WAFFLE CON HELADO Y FRUTAS DE ESTACION", 500))
  productos.push(new Producto(3210, "WAFFLE CON DULCE DE LECHE Y SALSA DE CHOCOLATE", 600))

}



cargarArrayProductos()

carrito1 = [{id: 5678, nombre: "MEDIALUNA", precio: 100},
            {id: 4567, nombre: "CAFE EXPRESO", precio: 10},
            {id: 1234, nombre: "CAFE CON LECHE", precio: 15},
            {id: 8912, nombre: "CROISSANT CON DULCE DE LECHE", precio:400}]