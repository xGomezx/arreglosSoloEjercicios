// 7. Dado el arreglo [15, 7, 9, 12, 1] usar ciclo forEach y una variable contadora para mostrar la suma de
// sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como
// se implementa la variable contadora


let numeros= [15, 7, 9, 12, 1]
let contador=0
numeros.forEach(i => {
    contador=contador+i
    
});
console.log(contador);