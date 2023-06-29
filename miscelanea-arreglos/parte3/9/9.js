// Dado el arreglo [true, true, false, true, false, false] use ciclo while y una variable
// contadora(diferente al contador del ciclo) para mostrar cuántas veces aparece false en el arreglo.
// Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como se implementa
// la variable contadora.



let array =[true, true, false, true, false, false]
let contadorFalse = 0
let i=0

while (i<array.length) {

    if (array[i]==false) {
        contadorFalse++
    }
    i++
    
}
console.log(contadorFalse);