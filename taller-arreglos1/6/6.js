// Dado los arreglos valle = [“Cali” , “Tulua”, “Cartago”, “Salento”] quindio = [“Cordoba”,
//     “Armenia”, “Palmira”, “Circasia”] Ordene los arreglos de tal manera que los elementos(ciudades)
//     queden en el arreglo que les corresponde. Use ciclos.

let valle = ["Cali" , "Tulua", "Cartago", "Salento"];
let quindio = ["Cordoba", "Armenia", "Palmira", "Circasia"];

for (let n = 0; n < quindio.length; n++) {
    
    if (quindio[n] == "Palmira") {

        quindio[n] = "Salento";
    }
    
}

for (let i = 0; i < valle.length; i++) {
    
    if (valle[i] == "Salento") {
        valle[i] = "Palmira"       
    }
}

console.log("Valle \n",valle);
console.log("Quindio \n",quindio);