//determinando o ano atual
let data = new Date();
let ano = data.getFullYear();



//definir uma lista de objetos contendo a descrição do mês e o número de dias desse mês.
let meses = [
    { mes: 'Janeiro',   dias: 31 },
    { mes: 'Fevereiro', dias: (ano % 4 == 0) ? 29 : 28 },
    { mes: 'Março',     dias: 31 },
    { mes: 'Abril',     dias: 30 },
    { mes: 'Maio',      dias: 31 },
    { mes: 'Junho',     dias: 30 },
    { mes: 'Julho',     dias: 31 },
    { mes: 'Agosto',    dias: 31 },
    { mes: 'Setembro',  dias: 30 },
    { mes: 'Outubro',   dias: 31 },
    { mes: 'Novembro',  dias: 30 },
    { mes: 'Dezembro',  dias: 31 }
];

// referenciando o elemento 'select' pelo id
let elementoMes = document.getElementById('mesPreferido');

// definido uma função para criar os elementos 'option' a serem adicionados ao 'select'
function listarMeses() {
    for (let i = 0; i < meses.length; i++) {
        let option = document.createElement('option');     // elemento 'option' criado
        option.textContent = meses[i].mes;                 // text do elemento criado
        option.setAttribute('value', meses[i].dias);       // atributo 'value' do elemento criado

        elementoMes.appendChild(option);
    }
}

listarMeses();