const nomes = ["Alice", "Bob", "Charlie", "David", "Eve"];

console.log(nomes[2]);

nomes.push("Frank");
nomes.unshift("Zelda");

console.log(nomes);

nomes.pop();

console.log(nomes);

const numeros = [2, 4, 6, 8];
const numerosDobrados = numeros.map(numero => numero * 2);

console.log(numerosDobrados);

const numeros2 = [1, 3, 5, 7, 9];
const numerosMaioresQue5 = numeros2.filter(numero => numero > 5);

console.log(numerosMaioresQue5);