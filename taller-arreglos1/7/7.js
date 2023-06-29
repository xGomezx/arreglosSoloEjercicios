// Dados los arreglos arreglo1 = [“Pera”, “Cebolla”, “Limón”, “Pimentón”] arreglo2 = [“Manzana”,
// “Banano”, “Lechuga”, “Perejíl”] Ordene los arreglos de tal manera que los elementos(frutas y
// verduras) queden en el arreglo que les corresponde. Use ciclos.
    
let verduras = ["Pera", "Cebolla", "Limón", "Pimentón"];
let frutas = ["Manzana","Banano", "Lechuga", "Perejíl"];

for (let i = 0; i < verduras.length; i++) {

  if (verduras[i] == "Pera") {
        verduras[i] = "Lechuga"
  }

  if (verduras[i] == "Limón") {
        verduras[i] = "Perejil"
  }
}
for (let n = 0; n < frutas.length; n++) {
    
    switch (frutas[n]) {
        case "Lechuga":
            
            frutas[n] = "Pera";
            break;
        case "Perejíl":

            frutas[n] = "Limon"

            break;
    
        default:
            break;
    }
    
}
console.log("Verduras \n",verduras);
console.log("Frutas \n",frutas);
