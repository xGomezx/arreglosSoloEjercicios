// Cree una función que reciba un arreglo de números enteros y retorne el número mayor en él. Se le
// debe pedir al usuario que introduzca el arreglo.


function numMayor() {
    

    let array = [];
    let num = parseInt(prompt("Ingrese un numero entero"));
    array.push(num)

    let continuar = prompt("¿Desea ingresar otro numero? escriba 'si' o 'no'")


    while (continuar == "si") {
        num = parseInt(prompt("Ingrese otro numero entero"));
        array.push(num)
        continuar = prompt("¿Desea ingresar otro numero? escriba 'si' o 'no'")
    }

    let numMayor = 0;
    for (let i = 0; i < array.length; i++) {
        
        numMayor = array[i];
        for (let n = 0; n < array.length; n++) {

            if (array[n] > numMayor) {
                numMayor = array[n];
            }   
        } 
    }
    return console.log("El numero mayor es ", numMayor);
}
numMayor()