let nombreProductoA = 'Remera'
let precioProductoA = 3500
let stockProductoA = 15

let nombreProductoB = 'Buzo'
let precioProductoB = 6500
let stockProductoB = 15

let nombreProductoC = 'Campera'
let precioProductoC = 7000
let stockProductoC = 15

let nombreProductoD = 'Pantalon'
let precioProductoD = 6000
let stockProductoD = 15

let nombreProductoE = 'Short'
let precioProductoE = 3000
let stockProductoE = 15

let precioTotal = 0 

alert("Estos son nuestros productos: \n - Remera\n - Buzo\n - Campera\n - Pantalon\n - Short")

let cantidadCompra = prompt("Que cantidad de productos distintos quiere comprar: ")

for(let i = 0; i < cantidadCompra; i = i + 1){

  let productoCompra = prompt("Ingrese que producto quiere comprar: \n - Remera\n - Buzo\n - Campera\n - Pantalon\n - Short")


  if (productoCompra.toUpperCase() == 'REMERA'){
      let cantidadProductoRemera = prompt("ingrese que cantidad de " + nombreProductoA + " desea comprar: ")
      if (cantidadProductoRemera<= stockProductoA) {
        precioTotal = precioTotal + (cantidadProductoRemera * precioProductoA)
      }
      else{ 
        alert("Actualmente tenemos " + stockProductoA + " unidades de este producto")
      }
  }
  else if (productoCompra == 'Buzo'){  
    let cantidadProductoBuzo = prompt("ingrese que cantidad de " + nombreProductoB + " desea comprar: ")
    precioTotal = precioTotal + (cantidadProductoBuzo * precioProductoB)
  }
  else if (productoCompra == 'Campera'){  
    let cantidadProductoCampera = prompt("ingrese que cantidad de " + nombreProductoC + " desea comprar: ")
    precioTotal = precioTotal + (cantidadProductoCampera * precioProductoC)
  }
    else if (productoCompra == 'Pantalon'){  
    let cantidadProductoPantalon = prompt("ingrese que cantidad de " + nombreProductoD + " desea comprar: ")
    precioTotal = precioTotal + (cantidadProductoPantalon * precioProductoD)
  }
    else if (productoCompra == 'Short'){  
    let cantidadProductoShort = prompt("ingrese que cantidad de " + nombreProductoE + " desea comprar: ")
    precioTotal = precioTotal + (cantidadProductoShort * precioProductoE)
  }
  else{ 
    alert("No tenemos ese producto a la venta")
  }

}
if (precioTotal != 0) {
  alert("El precio total es: " + precioTotal)
}