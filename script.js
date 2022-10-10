function Producto(nombre, precio, stock){ 
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock;
  this.restartStock = function(cantidad){ 
    this.stock -= cantidad
  }
}

let productoA = new Producto ("Remera", 3000, 50)
let productoB = new Producto ("Buzo", 6500, 45)
let productoC = new Producto ("Campera", 7000, 20)
let productoD = new Producto ("Pantalon", 6000, 35)
let productoE = new Producto ("Short", 3000, 15)

let listaProductos = [productoA, productoB, productoC, productoD, productoE]

let listaNombres = []

for(const prod of listaProductos){  
    if(prod.stock > 0){
      listaNombres.push(prod.nombre)
    }
}

let precioTotal = 0 

alert("Estos son nuestros productos: \n - " + listaNombres.join("\n - "))

function calculoPrecio(cantidad, precio) { 
  precioTotal += (cantidad * precio)
}

function calculoStock(cantidad, stock, precio) {
        if (cantidad <= stock) {
        calculoPrecio(cantidad * precio)
      }
      else{ 
        alert("Actualmente tenemos " + stock + " unidades de este producto")
      }
}

let cantidadCompra = prompt("Que cantidad de productos distintos quiere comprar: ")

for(let i = 0; i < cantidadCompra; i = i + 1){


  let productoCompra = prompt("Ingrese que producto quiere comprar: \n - Remera\n - Buzo\n - Campera\n - Pantalon\n - Short")


  if (productoCompra.toUpperCase() == 'REMERA'){
      let cantidadProductoRemera = prompt("ingrese que cantidad de " + nombreProductoA + " desea comprar: ")
      calculoStock(cantidadProductoRemera, stockProductoA, precioProductoA)
      productoA.restarStock(cantidadProductoRemera)
  }
  else if (productoCompra == 'Buzo'){  
    let cantidadProductoBuzo = prompt("ingrese que cantidad de " + nombreProductoB + " desea comprar: ")
    calculoStock(cantidadProductoBuzo, stockProductoB, precioProductoB)
    productoB.restarStock(cantidadProductoBuzo)
  }
  else if (productoCompra == 'Campera'){  
    let cantidadProductoCampera = prompt("ingrese que cantidad de " + nombreProductoC + " desea comprar: ")
    calculoStock(cantidadProductoCampera, stockProductoC, precioProductoC)
    productoC.restarStock(cantidadProductoCampera)
  }
    else if (productoCompra == 'Pantalon'){  
    let cantidadProductoPantalon = prompt("ingrese que cantidad de " + nombreProductoD + " desea comprar: ")
    calculoStock(cantidadProductoPantalon, stockProductoD, precioProductoD)
    productoD.restarStock(cantidadProductoPantalon)
  }
    else if (productoCompra == 'Short'){  
    let cantidadProductoShort = prompt("ingrese que cantidad de " + nombreProductoE + " desea comprar: ")
    calculoStock(cantidadProductoShort, stockProductoE, precioProductoE)
    productoE.restarStock(cantidadProductoShort)
  }
  else{ 
    alert("No tenemos ese producto a la venta")
  }

}
if (precioTotal != 0) {
  alert("El precio total es: " + precioTotal)
}
else{ 
  alert("Gracias por su visita!")
}