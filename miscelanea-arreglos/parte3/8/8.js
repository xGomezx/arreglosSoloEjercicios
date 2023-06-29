// Dado el arreglo [-2, 8, 99, 1, 7] usar ciclo forEach y una variable contadora para mostrar la suma de
// los cuadrados de sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de
// arreglos para ver cómo se implementa la variable contadora


let numeros=  [-2, 8, 99, 1, 7]
let contador=0
numeros.forEach(i => {
    contador=contador+i*i
    
});
console.log(contador);