//variables globales
let producto
let cantidad
let precio 
let continua = true;
const IVA = 1.21

while (continua){
    let productoIngresado= prompt("Ingrese producto a comprar: bandolera, riñonera, bolsotote, tabaquera");
    if(productoIngresado=="bandolera"){
        producto= "bandolera"
        console.log(producto)
        continua = false;
    }
    else if (productoIngresado=="riñonera") {
        producto= "riñonera"
        continua = false;
    }
    else if (productoIngresado=="bolsotote") {
        producto= "bolsotote"
        continua = false;
    }
    else if (productoIngresado=="tabaquera") {
        producto= "tabaquera"
        continua = false;
    }
    else if (productoIngresado=="") {
        alert("Ingrese un producto válido")
        
    }
    else if (isNaN==productoIngresado){
        continua=false
    }
    else{
        alert("Por favor ingrese un producto válido");
    }
}

let continua2=true;
while (continua2){
    let cantidadProductos= parseInt(prompt ("Ingrese el número de unidades a comprar"))
    if(!(isNaN(cantidadProductos)) && !(cantidadProductos > 11)) {
        cantidad= cantidadProductos
        console.log(cantidad)
        continua2=false;
    }
    else {
        alert("Por favor ingrese un número válido. Hasta 10 unidades");  
    } 
}

function precioFinal (precio, cantidad){
    return precio*cantidad*IVA
}

switch (producto) {
    case "bandolera":
        precio = 2000
        console.log(precio);
    break;
    case "riñonera":
        precio = 1500
        console.log(precio)
    break;
    case "bolsotote":
        precio=3000
        console.log(precio)
    break;
    case "tabaquera":
        precio=1000
        console.log(precio)
    break;
    default:
        break;
}

let Total = precioFinal (cantidad,precio,IVA)
console.log(Total)
alert ("Monto a abonar = $ "+ Total)