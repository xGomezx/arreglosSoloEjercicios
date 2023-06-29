// Cree una función que reciba dos arreglos de números enteros y muestre cual arreglo tiene un
// promedio mayor de sus elementos. Se le debe pedir al usuario que introduzca los arreglos.

function promMayor(params) {
    
    let array1 = [];
    let array2 = [];

    let cantidad1 = parseInt(prompt("Ingrese la cantidad de numeros que va atener el primer arreglo"));
    let num;
    for (let i = 0; i < cantidad1; i++) {
        num = parseInt(prompt("Ingrese el numero que desee"));
        array1.push(num)
    }

    let cantidad2 = parseInt(prompt("Ingrese la cantidad de numeros que va atener el segundo arreglo"));
    for (let n = 0; n < cantidad2; n++) {
        num = parseInt(prompt("Ingrese el numero que desee"));
        array2.push(num)
        
    }
    let acum1 = 0;

    for (let i = 0; i < array1.length; i++) {
        acum1 = acum1 + array1[i]
        
    }
    let acum2 = 0;
    for (let i = 0; i < array2.length; i++) {
        acum2 = acum2 + array2[i];
        
    }
    let promedio1 = acum1 / array1.length;
    let promedio2 = acum2 / array2.length;

    if (promedio1 > promedio2) {
        return console.log("El primer arreglo tiene mayor promedio el cual es ", promedio1);
    } else {
        return console.log("El segundo arreglo tiene mayor promedio el cual es ", promedio2);
    }
}
promMayor()