// Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"] usar un ciclo, un condicional,
// y una variable contador(iniciela fuera del ciclo y úsela para almacenar las veces que aparece Maria
// en el arreglo) para mostrar cuántas veces aparece el nombre Maria


let contador=0
let nombres=["Maria", "Pedro", "Juan", "Pablo", "Diana"]

for (let index = 0; index < nombres.length; index++) {
    if (nombres[index]=='Maria') {
        contador++
    }    
}
console.log("El nombre Maria se encuentra ",contador,"veces");