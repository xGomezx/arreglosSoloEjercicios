// Dado el arreglo de cadenas de ADN [“AATGAAC”, “GTTTTTC”, “GGTAAA”, “CCCCATGGG”]
// cree una función que reciba como argumento tal arreglo y muestre las cadenas de una sola base
// (cadenas formadas solo de A, o solo de T, o solo de C o solo de G) que se pueden formar entre todos los
// elementos del arreglo.


let adn = ["AATGAAC", "GTTTTTC", "GGTAAA", "CCCCATGGG"];



function base1() { 
    let A = "";
    let T = "";
    let C = "";
    let G = "";

    for (let i = 0; i < adn.length; i++) {
        
        for (let n = 0; n < adn[i].length; n++) {
            if (adn[i][n] == "A") {
                A = A + "A";
            }
        }
        
    }
    for (let i = 0; i < adn.length; i++) {
        
        for (let n = 0; n < adn[i].length; n++) {
            if (adn[i][n] == "T") {
                T = T + "T";
            }
        }
        
    }
    for (let i = 0; i < adn.length; i++) {
        
        for (let n = 0; n < adn[i].length; n++) {
            if (adn[i][n] == "C") {
                C = C + "C";
            }
        }
        
    }
    for (let i = 0; i < adn.length; i++) {
        
        for (let n = 0; n < adn[i].length; n++) {
            if (adn[i][n] == "G") {
                G = G + "G";
            }
        }
        
    }

    console.log("La cadena de una sola base de A es; ", A);
    console.log("La cadena de una sola base de T es; ", T);
    console.log("La cadena de una sola base de C es; ", C);
    console.log("La cadena de una sola base de G es; ", G);
    
}
base1()
