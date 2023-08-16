let colecoes = require('./listas/listaDados');
let fn = require('./funcoes/callbacks');
const { calcularJuros } = require('./funcoes/apiFuncoes');

console.log('Lista Original:');
console.log(colecoes.nomes);

// aplicando a função buscar 
// exemplo 1 - sublista de nomes que iniciam com a letra 'A'
console.log("lista de nomes iniciando com 'A': ");
let res1 = fn.buscar(colecoes.nomes, item => item.startsWith('A'));
console.log(res1);

// exemplo 2 - sublista de nomes que contenham 'm'
console.log("lista de nomes que contenham a letra 'm':");
let res2 = fn.buscar(colecoes.nomes, item => item.toUpperCase().includes('M'));
console.log(res2);