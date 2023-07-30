let btnInicio = document.getElementById("btnInicio")
let btnProducto = document.getElementById("btnProducto")
let quienesSomos = document.getElementById("quienes-somos")
let listaDeProductos = document.getElementById("productos")
let belleza = document.getElementById("belleza")
let cocina = document.getElementById("cocina")
let climatizacion = document.getElementById("climatizacion")
let tecnologia = document.getElementById("tecnologia")
let hogar = document.getElementById("hogar")
let bicicleta = document.getElementById("bicicleta")
let todo = document.getElementById("todo")
let botoneraFiltros = document.getElementById("botoneraFiltros")



let productos = [
  { nombre: "Balanza", categoria: "belleza", precio: 1000, stock: true, imagen: "./productos/balanza.webp" },
  { nombre: "Plancha de pelo", categoria: "belleza", precio: 3000, stock: true, imagen: "./productos/barraSonido.webp" },
  { nombre: "Bicicleta 1", categoria: "bicicleta", precio: 50000, stock: true, imagen: "./productos/bici1.webp" },
  { nombre: "Bicicleta 2", categoria: "bicicleta", precio: 100000, stock: true, imagen: "./productos/bici2.webp" },
  { nombre: "No se que es", categoria: "belleza", precio: 10000, stock: true, imagen: "./productos/cosoRaro.webp" },
  { nombre: "Desconosco", categoria: "hogar", precio: 10000, stock: true, imagen: "./productos/desconosco.webp" },
  { nombre: "Exprimidora", categoria: "cocina", precio: 1000, stock: true, imagen: "./productos/exprimidora.webp" },
  { nombre: "Cortadora de pelo", categoria: "belleza", precio: 10000, stock: true, imagen: "./productos/maquinaPelo.webp" },
  { nombre: "Mini", categoria: "cocina", precio: 10000, stock: true, imagen: "./productos/mini.webp" },
  { nombre: "mouseGamer", categoria: "tecnologia", precio: 10000, stock: true, imagen: "./productos/mouseGamer.webp" },
  { nombre: "Parlante 1", categoria: "tecnologia", precio: 1000, stock: true, imagen: "./productos/parlante.webp" },
  { nombre: "Parlante grande", categoria: "tecnologia", precio: 10000, stock: true, imagen: "./productos/parlanteGrande.png" },
  { nombre: "Plancha de pelo negra", categoria: "belleza", precio: 10000, stock: true, imagen: "./productos/planchaPeloNegra.webp" },
  { nombre: "Parlante de pelo rosa", categoria: "belleza", precio: 10000, stock: true, imagen: "./productos/planchaPeloRosa.webp" },
  { nombre: "Plancha ropa 1", categoria: "hogar", precio: 10000, stock: true, imagen: "./productos/planchaRopa.webp" },
  { nombre: "Plancha ropa 2", categoria: "hogar", precio: 10000, stock: true, imagen: "./productos/planchaRopa2.webp" },
  { nombre: "Stereo auto", precio: 10000, stock: true, imagen: "./productos/stereo.webp" },
  { nombre: "Cafetero", categoria: "cocina", precio: 10000, stock: true, imagen: "./productos/trituradora.webp" },
  { nombre: "Ventilador", categoria: "climatizacion", precio: 10000, stock: true, imagen: "./productos/ventilador.webp" },
]



// ver esto mas





function filtrosDeProductos(par1){
  
    mostrarQuienesSomos("display2", "display1")
    todoProductos("display1","display2")
    listaDeProductos.innerHTML = ""
    for (let index = 0; index < par1.length; index++) {
      if (productos[index].stock == true) {
        listaDeProductos.innerHTML +=
          `
        <div class=" fondoCard1 tamañoDeCartas">
          <div class="divImagen">
            <img class="card-img-top" src="${par1[index].imagen}" alt="${par1[index].nombre}">
          </div>
          <div class="divTexto">
            <h5 class="card-title tamaño">${par1[index].nombre} $${par1[index].precio}</h5>
          </div>
          
        </div>
        `
  
      }
    }
  }
let productosBelleza = productos.filter((producto) => (producto.categoria == "belleza"))
let productosBicicleta = productos.filter((producto) => (producto.categoria == "bicicleta"))
let productosCocina = productos.filter((producto) => (producto.categoria == "cocina"))
let productosHogar = productos.filter((producto) => (producto.categoria == "hogar"))
let productosTecnologia = productos.filter((producto) => (producto.categoria == "tecnologia"))
let productosClimatizacion = productos.filter((producto) => (producto.categoria == "climatizacion"))



// bicicleta.addEventListener("click", filtrosDeProductos(productosBicicleta))

// cocina.addEventListener("click", filtrosDeProductos(productosCocina))







function todoProductos(display1,display2){
  botoneraFiltros.classList.remove(`${display2}`)
  botoneraFiltros.classList.add(`${display1}`)
  listaDeProductos.classList.add(`${display2}`)
  listaDeProductos.classList.remove(`${display1}`)
}

function mostrarQuienesSomos(display1, display2) {
  quienesSomos.classList.add(`${display1}`)
  quienesSomos.classList.remove(`${display2}`)
}

function seVeQuienesSomos() {
  listaDeProductos.innerHTML = ""
  mostrarQuienesSomos("display1", "display2")
    todoProductos("display2","display1")
}

function seVeProductos() {
  mostrarQuienesSomos("display2", "display1")
  todoProductos("display1","display2")
  listaDeProductos.innerHTML = ""
  for (let index = 0; index < productos.length; index++) {
    if (productos[index].stock == true) {
      listaDeProductos.innerHTML +=
        `
      <div class="card fondoCard1 tamañoDeCartas">
        <div class="divImagen">
          <img class="card-img-top" src="${productos[index].imagen}" alt="${productos[index].nombre}">
        </div>
        <div class="divTexto">
          <h5 class="card-title tamaño">${productos[index].nombre} $${productos[index].precio}</h5>
        </div>
        
      </div>
      `

    }
  }
}


btnInicio.addEventListener("click", seVeQuienesSomos)
btnProducto.addEventListener("click", seVeProductos)
belleza.onclick = () => { filtrosDeProductos(productosBelleza) }
bicicleta.onclick = () => { filtrosDeProductos(productosBicicleta) }
hogar.onclick = () => { filtrosDeProductos(productosHogar) }
cocina.onclick = () => { filtrosDeProductos(productosCocina) }
tecnologia.onclick = () => { filtrosDeProductos(productosTecnologia) }
climatizacion.onclick = () => { filtrosDeProductos(productosClimatizacion) }

todo.addEventListener("click", seVeProductos)

