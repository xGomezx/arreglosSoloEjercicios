// Cree una función que reciba un arreglo de números enteros no repetidos y lo retorne ordenado de
// menor a mayor según el valor de tales elementos. Se le debe pedir al usuario que introduzca el arreglo.


function ordenarArreglo() {
    
    let numeros = [];
    let cantidad = parseInt(prompt("Ingrese la cantidad de numeros que va ingresar"));
    let num;

    for (let i = 0; i < cantidad; i++) {
        num = parseInt(prompt("Ingrese el numero que desee"));
       
        numeros.push(num)
    }
  
    numeros.sort(function(a, b) {
      return a - b;
    });
  
    return console.log(numeros);;
  }
  ordenarArreglo()  