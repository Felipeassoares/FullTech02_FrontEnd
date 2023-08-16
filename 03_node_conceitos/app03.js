let fn = require('./funcoes/callbacks');

let res1 = fn.executar(function(item) {
    return item.length;         //number
});
console.log(`res1: ${res1}`);

let res2 = fn.executar(function(item){
    return item == 'Impacta'; // boolean
});
console.log(`res2: ${res2}`);

let res3 = fn.executar(item => item.toUpperCase()); //string
console.log(`res3: ${res3}`);

// usando função nomeada
function gerarLista(item) {
    return[item.length, item == 'Impacta', item.toUpperCase()] // lista
}
let res4 = fn.executar(gerarLista);
console.log(`res4: ${res4}`); 
