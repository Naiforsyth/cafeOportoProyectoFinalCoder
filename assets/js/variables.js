//Variables 
let navbar = document.querySelector('.navbar');
const cartItem = document.querySelector(".cart-items-container");
const carrito = document.querySelector("#carrito");
const listaMenu = document.querySelector("#box-container")
const contenedorCarrito = document.querySelector("#lista-carrito tbody")
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito")
let articulosCarrito = [];
let productos = []


//Función de carga para el menú
function cargarArrayProductos() {
  productos.push(new Producto(1, "CAFE CON LECHE", 15))
  productos.push(new Producto(2, "LAGRIMA", 10))
  productos.push(new Producto(3, "CAFE AMERICANO", 15))
  productos.push(new Producto(4, "CAFE EXPRESO", 10))
  productos.push(new Producto(5, "MEDIALUNA", 100))
  productos.push(new Producto(6, "MEDIALUNA CON JAMON Y QUESO", 250))
  productos.push(new Producto(7, "CROISSANT", 150))
  productos.push(new Producto(8, "CROISSANT CON DULCE DE LECHE", 400))
  productos.push(new Producto(9, "SCON DE QUESO", 350))
  productos.push(new Producto(10, "WAFFLE CON HELADO Y FRUTAS DE ESTACION", 500))
  productos.push(new Producto(11, "WAFFLE CON DULCE DE LECHE Y SALSA DE CHOCOLATE", 600))

}
cargarArrayProductos()








