// Cree una función que reciba un arreglo de números enteros positivos y muestre cuantos números
// impares posee el arreglo. Se le debe pedir al usuario que introduzca el arreglo.

function numImpares() {
    let numeros = [];
    let cantidad1 = parseInt(prompt("Ingrese la cantidad de numeros que va atener el primer arreglo"));
    let num;

    for (let i = 0; i < cantidad1; i++) {
        num = parseInt(prompt("Ingrese el numero que desee"));
        numeros.push(num)
    }
    let impares = [];
    for (let i = 0; i < numeros.length; i++) {
        
        if (numeros[i] % 2 != 0) {
            impares.push(numeros);
        }
        
    }
    return console.log("La cantidad de numeros impares en el arreglo es de ", impares.length );
}
numImpares()