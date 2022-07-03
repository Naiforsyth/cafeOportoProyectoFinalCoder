//Eventos
document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle('active');
}

document.querySelector("#cerrar-carrito").onclick = () => {
  cartItem.classList.remove("active")
}

cargarEventListener()

function cargarEventListener() {
  listaMenu.addEventListener("click", agregarProducto)
  carrito.addEventListener('click', eliminarProducto);
  vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

//Funciones
//Función pafa cargar menú
function cargarMenu() {
  listaMenu.innerText = ""
  productos.forEach((producto) => {
    const item = `<div class=box>
                  <img src="./assets/img/menu-1.png"/>
                  <h3>${producto.nombre}</h3> 
                  <div class="price"><span>$${producto.precio}</span></div>
                  <a href="#" class="btn agregar-carrito" data-id="${producto.id}">agregar</a>
                  </div>`
    listaMenu.innerHTML += item
  })
}
cargarMenu()

//Función para agregar productos en el carrito
function agregarProducto(e) {
  e.preventDefault()
  if (e.target.classList.contains("agregar-carrito")) {
    const producto = e.target.parentElement
    datosProducto(producto)
  }
}


//función almacenar los datos del producto a mostrar
function datosProducto(producto) {
  const infoProducto = {
    imagen: producto.querySelector("img").src,
    titulo: producto.querySelector("h3").textContent,
    precio: producto.querySelector(".price").textContent,
    id: producto.querySelector("a").getAttribute("data-id"),
    cantidad: 1
  }
  const exist = articulosCarrito.some(producto => producto.id === infoProducto.id)
  if (exist) {
    const productos = articulosCarrito.map(producto => {
      if (producto.id === infoProducto.id) {
        producto.cantidad++;
        return producto;
      } else {
        return producto;
      }
    })
    articulosCarrito = [...productos] //Spread Arrays
  } else {
    articulosCarrito = [...articulosCarrito, infoProducto] //Spread Arrays
  }
  carritoHTML()
}

//Función para eliminar productos del carrito de compra
function eliminarProducto(e) {
  e.preventDefault();
  if (e.target.classList.contains('borrar-producto')) {
    const productoId = e.target.getAttribute('data-id')
    articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);
    carritoHTML();
    swal("Haz eliminado un producto del carrito!");
  }

}

//función para el template del producto en el carrito
function carritoHTML() {
  vaciarCarrito()
  articulosCarrito.forEach(producto => {
    const row = document.createElement("tr")
    row.innerHTML = `
                  <td>
                  <img src="${producto.imagen}" width=100>
                  </td>
                  <td>${producto.titulo}</td>
                  <td>${producto.precio}</td> 
                  <td>${producto.cantidad}</td> 
                  <td>
                  <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
                  </td>
    `
    contenedorCarrito.appendChild(row)
  })
}

//función para vaciar carrito
function vaciarCarrito() {

  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }

}