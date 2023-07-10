let btnInicio = document.getElementById("btnInicio")
let btnProducto = document.getElementById("btnProducto")
let quienesSomos = document.getElementById("quienes-somos")
let productos = document.getElementById("productos")

function mostrar(display1,display2){
  quienesSomos.classList.add(`${display1}`)
  quienesSomos.classList.remove(`${display2}`)
  productos.classList.add(`${display2}`)
  productos.classList.remove(`${display1}`)
}
function seVeQuienesSomos(){
  mostrar("display1","display2")
}
function seVeProductos(){
  mostrar("display2","display1")
}

btnInicio.addEventListener("click", seVeQuienesSomos)
btnProducto.addEventListener("click",seVeProductos)



botonCarrito.addEventListener("click", nuevaFuncion)
function nuevaFuncion() {
  colorDisplay("display2", "display", "fondoCarrito", "fondoProductos")
}

function colorDisplay(par1, par2, par3, par4) {
  acaCarrito.classList.add(`${par1}`)
  acaCarrito.classList.remove(`${par2}`)
  divCompras.classList.add(`${par2}`)
  divCompras.classList.remove(`${par1}`)
  body.classList.add(`${par3}`)
  body.classList.remove(`${par4}`)
}

