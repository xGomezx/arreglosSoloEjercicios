// . Dado el arreglo de caracteres: ["z", "p", "s", "z", "o", "b", "a", "w", "d"] use ciclo for para
// inspeccionar los elementos del arreglo y mostrar si con tales elementos sería posible formar la
// palabra adso.

 
 
 
 let letras=["z", "p", "s", "z", "o", "b", "a", "w", "d"];
 let sePuede=false
 for (let index = 0; index < letras.length; index++) {
    if (letras.includes("a") &&
    letras.includes("d") &&
    letras.includes("s") &&
    letras.includes("o")) {
    sePuede=true
    }else{
        sePuede=false
        break
    }
 }
 


if (sePuede) {
  console.log("Es posible formar la palabra 'adso'");
} else {
  console.log("No es posible formar la palabra 'adso'");
}
