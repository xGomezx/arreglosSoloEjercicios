// Cree una función que pida a n número de usuarios su nombre y edad y retorne un arreglo con los
// nombres de los usuarios que son mayores de edad, luego muestre cuantos usuarios hay mayores de
// edad.



let cantidad = parseInt(prompt("Ingrese la cantidad de usuarios que va a ingresar"));
let nombresEdades = [];


function mayoresEdad() {
    let nombre;
    let edad;
    let acum = 0;
    for (let i = 0; i < cantidad; i++) {
        nombre = prompt("Ingresa un nombre");
        edad = parseInt(prompt("Ingresa la edad"))
        
        if (edad >= 18) {
            nombresEdades.push(nombre,edad)  
            acum++ 
        }
    }
    return console.log(nombresEdades), console.log("la cantidad de mayores de edad des de; ", acum);
}
mayoresEdad()