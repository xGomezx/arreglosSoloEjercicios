/* Cree una función que reciba una letra del alfabeto y muestre si tal letra corresponde a algún
elemento del siguiente arreglo
["a", "b", "c", "d", "e", "f", "g"] Use ciclo for (con .length) en la solución de este problema */

let array = ["a", "b", "c", "d", "e", "f", "g"];



function alfabeto() {
    let letra = prompt("Ingrese una letra del alfabeto");
    let si = false
    for (let i = 0; i < array.length; i++) {
      if (array[i] == letra) {
         si = true;
    }
    }
    if (si) {
        return console.log("La letra SI esta en el array");
    }else{
        return console.log("La letra NO esta en el array");
    }

}
alfabeto()