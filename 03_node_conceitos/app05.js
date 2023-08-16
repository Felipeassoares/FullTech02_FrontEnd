let colecoes = require('./listas/listaDados');

console.log('Lista Original:');
console.log(colecoes.nomes);

// obtendo dados de entrada: parte do nome para a realização do filtro
let input = process.argv[2];

// obtendo a lista filtrada pelo dado fornecido pelo usuário
let lista = colecoes.nomes.filter(item => item.includes(input))
console.log('Lista Filtrada:');
console.log(lista);