// Cree una función que reciba un arreglo de cadenas de ADN (las cadenas estarán formadas por las
// letras A o C o T o G referirse a taller de ADN pasado) y muestre la cadena de ADN con mayor número
// de Timina (T). Se le debe pedir al usuario que introduzca los arreglos.

function mayorTimina() {
    
     
    let cantidad = parseInt(prompt("ingrese la cantidad de nombres que va a ingresar"));
    let adn = [];
    let cadena;
    for (let i = 0; i < cantidad; i++) {
        cadena = prompt("Ingresa el nombre que deseas");
        adn.push(cadena);
    }

    let mayorCantidadDeTimina = 0;
    let cadenaMayorTimina = '';
  
    for (let i = 0; i < adn.length; i++) {
      let cadenaActual = adn[i];
      let cantidadDeTimina = contarTimina(cadenaActual);
  
      if (cantidadDeTimina > mayorCantidadDeTimina) {
        mayorCantidadDeTimina = cantidadDeTimina;
        cadenaMayorTimina = cadenaActual;
      }
    }
  
    return console.log("la cadena con mayor cantidad de timina es",cadenaMayorTimina); 
  }
  
  function contarTimina(cadena) {
    let contador = 0;
  
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] === 'T') {
        contador++;
      }
    }
  
    return contador;
  }
  mayorTimina()