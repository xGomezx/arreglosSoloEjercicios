// Cree una función que reciba un arreglo de números naturales y muestre todos los números primos en
// él.


let array = [];
let num = parseInt(prompt("Ingrese un numero entero"));
array.push(num)

let continuar = prompt("¿Desea ingresar otro numero? escriba 'si' o 'no'")


while (continuar == "si") {
    num = parseInt(prompt("Ingrese otro numero entero"));
    array.push(num)
    continuar = prompt("¿Desea ingresar otro numero? escriba 'si' o 'no'")
}

function numNaturales() {

    for (let i = 0; i < array.length; i++) {
       let numeroP = array[i]

       let esPrimo = true;

       if (numeroP < 2) {
         esPrimo = false;
       } else {
         for (let j = 2; j < numeroP; j++) {
           if (numeroP % j === 0) {
             esPrimo = false;
             break;
           }
         }
       }
   
       if (esPrimo) {
        console.log(numeroP);
       }

    }
}
numNaturales()
