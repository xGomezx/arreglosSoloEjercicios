/* Cree una función que reciba como argumento el siguiente arreglo [2, 5, 7, 9] y lo recorra,
imprimiendo cada uno de sus elementos.
 */ 

function arreglo(array = [2,5, 7, 9]) {
    array.forEach(i => {
        return console.log(i);
    });
}
arreglo();

