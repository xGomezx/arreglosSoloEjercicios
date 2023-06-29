// Cree una función que reciba un arreglo de números y retorne el número menor entre todos los
// elementos del arreglo.

let array = [];
let num = parseInt(prompt("Ingrese un numero entero"));
array.push(num)

let continuar = prompt("¿Desea ingresar otro numero? escriba 'si' o 'no'")


while (continuar == "si") {
    num = parseInt(prompt("Ingrese otro numero entero"));
    array.push(num)
    continuar = prompt("¿Desea ingresar otro numero? escriba 'si' o 'no'")
}

function numMenor() {

    let menorNumero = array[0]; 
    
    for (let i = 1; i < array.length; i++) {
      if (array[i] < menorNumero) {
        menorNumero = array[i];
      }
    }
    
    return menorNumero;
  }


console.log("El numero menor es ",numMenor());