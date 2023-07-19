let btnInicio = document.getElementById("btnInicio")
let btnProducto = document.getElementById("btnProducto")
let quienesSomos = document.getElementById("quienes-somos")
let listaDeProductos = document.getElementById("productos")
let productos = [
  { nombre: "Balanza", precio: 1000, stock: true, imagen: "./productos/balanza.webp" },
  { nombre: "Barra de sonido", precio: 3000, stock: true, imagen: "./productos/barraSonido.jpg" },
  { nombre: "Bicicleta 1", precio: 50000, stock: true, imagen: "./productos/bici1.webp" },
  { nombre: "Bicileta 2", precio: 100000, stock: true, imagen: "./productos/bici2.jpg" },
  { nombre: "No se que es", precio: 10000, stock: true, imagen: "./productos/cosoRaro.webp" },
  { nombre: "Desconosco", precio: 10000, stock: true, imagen: "./productos/desconosco.webp" },
  { nombre: "Exprimidora", precio: 1000, stock: true, imagen: "./productos/exprimidora.webp" },
  { nombre: "Cortadora de pelo", precio: 10000, stock: true, imagen: "./productos/maquinaPelo.webp" },
  { nombre: "Mini", precio: 10000, stock: true, imagen: "./productos/mini.webp" },
  { nombre: "mouseGamer", precio: 10000, stock: true, imagen: "./productos/mouseGamer.webp" },
  { nombre: "Parlante 1", precio: 1000, stock: true, imagen: "./productos/parlante.webp" },
  { nombre: "Parlante grande", precio: 10000, stock: true, imagen: "./productos/parlanteGrande.png" },
  { nombre: "Plancha de pelo negra", precio: 10000, stock: true, imagen: "./productos/planchaPeloNegra.jpg" },
  { nombre: "Parlante de pelo rosa", precio: 10000, stock: true, imagen: "./productos/planchaPeloRosa.webp" },
  { nombre: "Plancha ropa 1", precio: 10000, stock: true, imagen: "./productos/planchaRopa.webp" },
  { nombre: "Plancha ropa 2", precio: 10000, stock: true, imagen: "./productos/planchaRopa2.webp" },
  { nombre: "Stereo auto", precio: 10000, stock: true, imagen: "./productos/stereo.webp" },
  { nombre: "Trituradora", precio: 10000, stock: true, imagen: "./productos/trituradora.webp" },
  { nombre: "Ventilador", precio: 10000, stock: true, imagen: "./productos/ventilador.webp" },
]


function mostrar(display1, display2) {
  quienesSomos.classList.add(`${display1}`)
  quienesSomos.classList.remove(`${display2}`)
  listaDeProductos.classList.add(`${display2}`)
  listaDeProductos.classList.remove(`${display1}`)
}
function seVeQuienesSomos() {
  mostrar("display1", "display2")
}
function seVeProductos() {
  mostrar("display2", "display1")
  listaDeProductos.innerHTML = ""
  for (let index = 0; index < productos.length; index++) {
    if (productos[index].stock = true) {
      listaDeProductos.innerHTML+= `${productos[index].nombre}`
    }
    }
}

btnInicio.addEventListener("click", seVeQuienesSomos)
btnProducto.addEventListener("click", seVeProductos)


//  function mostrar(alimento) {
//     colorDisplay("display", "display2", "fondoProductos", "fondoCarrito")
//     div.innerHTML = " "
//     for (let index = 0; index < alimento.length; index++) {
//       div.innerHTML += `
//     <div class="card fondoCard1 tamañoDeCartas">
//       <img class="card-img-top" src="${alimento[index].imgUrl}" alt="Card image cap">
//       <div class="card-body">
//         <h5 class="card-title tamaño">${alimento[index].nombre}</h5>
//         <p class="card-text tamaño3">Su precio es: ${alimento[index].precio * 1.25}</p>
//         <button type="button" id="${alimento[index].id}" class="btn btn-primary boton">Añadir al pedido</button>
//       </div>
//     </div>
//     `
//     }