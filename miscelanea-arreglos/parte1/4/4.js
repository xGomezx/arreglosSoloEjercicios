/* Dado el siguiente arreglo let k = [17, 4, 64, 79, 109, 112] , recorrer cada elemento con foreach e
imprimir los elementos que sean números impares
 */

let k = [17, 4, 64, 79, 109, 112];

k.forEach(i => {
    if (i % 2 != 0 ) {
        console.log(i);
    }
});