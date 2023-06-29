/*   Cree una función que reciba un arreglo de n elementos y retorne el número de elementos del
arreglo.
 */
let array = [];

let dato = prompt("Ingrese el primer dato que desee");
array.push(dato)
let continuar = prompt("¿Desea agregar otro dato? \n escriba 'si' o 'no'");

while (continuar == "si") {
    dato = prompt("Ingrese otro dato");
    array.push(dato)
    continuar = prompt("¿Desea agregar otro dato? \n escriba 'si' o 'no'");
}



let acumulador = 0;
array.forEach(i => {
    acumulador++
});
console.log("la cantidad de elemtos del arreglo es de",acumulador );
