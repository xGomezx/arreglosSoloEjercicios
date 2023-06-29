// Cree una función que reciba un arreglo de nombres de personas y muestre si la letra “c” se
// encuentra entre tales nombres, en caso de que la letra “c” se encuentre, mostrar las veces que se
// encuentra(considerando las apariciones entre todos los nombres) . Se le debe pedir al usuario que
// introduzca el arreglo.

function letraC() {
    
    let cantidad = parseInt(prompt("ingrese la cantidad de nombres que va a ingresar"));
    let nombres = [];
    let nombre;
    for (let i = 0; i < cantidad; i++) {
        nombre = prompt("Ingresa el nombre que deseas");
        nombres.push(nombre);
    }
    
    let contador = 0;
    for (let i = 0; i < nombres.length; i++) {
        
        for (let n = 0; n < nombres[i].length; n++) {
            
            if (nombres[i][n] == "c") {
                contador++
            }
            
        }
        
    }
    if (contador > 0) {
        return console.log("El arreglo si contiene la letra c y esta una cantidad de ", contador, "veces");
    }
    else{
        return console.log("El arreglo no contiene la letra C");
    }
}
letraC()