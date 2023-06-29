// . Cree una función que reciba un arreglo de letras no repetidas y lo retorne ordenado alfabéticamente.
// Se le debe pedir al usuario que introduzca el arreglo.


function ordenarArreglo() {
    
    let letras = [];
    let cantidad = parseInt(prompt("Ingrese la cantidad de letras que va a ingresar"));
    let letra;

    for (let i = 0; i < cantidad; i++) {
        letra = parseInt(prompt("Ingrese el numero que desee"));
       
        letras.push(letra)
    }
  
    letras.sort();
  
    
    return console.log(letras);
  }
  ordenarArreglo()