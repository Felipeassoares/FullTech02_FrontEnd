// função que recebe dois parametros númericos e retorna sua soma
function calcularSoma(valor1, valor2) {
    if(typeof(valor1) != 'number' || typeof(valor2) != 'number'){
        throw new Error('Os parâmetros devem ser númericos');
    }

    return valor1 + valor2;
}

exports.somar = calcularSoma;

// função anônima
// neste exemplo, a função recebe dois parâmetros númericos e retornar o maior deles
exports.buscarMaior = function(a,b =0) {
    if(typeof(a) != 'number' || typeof(b) != 'number'){
        throw new Error('Os parâmetros devem ser númericos');
    }
    return a > b ? a : b;
}

//arrow function
//exemplo 1: função que recebe como parâmetros o valor de um produto e uma taxa de juros
exports.calcularJuros = (valor, taxa) => valor + valor * taxa / 100;

// exemplo 2: na função a seguir é aplicada a propriedade length ao parâmetro 's'.
// Neste caso, o parâmetro 's' pode ser uma string ou uma lista
exports.calcularTamanho = s => s.length;
