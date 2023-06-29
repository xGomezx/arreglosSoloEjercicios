// 1. Dado el arreglo [1,2,3,4,5,6]:
// a) Iterar por todos los elementos dentro del arreglo utilizando while y mostrarlos en pantalla.
// b) Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.
// c) Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.
// d) Calcular el promedio de todos los elementos del arreglo


let array = [1,2,3,4,5,6];


let i = 0;

while (i < array.length) {
    console.log(array[i]);
    i++
}

console.log("---------------------------------");

for (let n = 0; n < array.length; n++) {
    console.log(array[n]);
    
}

console.log("----------------------------------");

let array2 = array.slice()
let arreglo = [];

for (let j = 0; j < array.length; j++) {
    
    arreglo.push(array2[j] + 1) ;
}console.log(arreglo);

console.log("--------------------------------------");

let suma = 0;

for (let x = 0; x < array.length; x++) {
    
    suma = suma + array[x];
    
}
let promedio = suma / array.length;
console.log(promedio);