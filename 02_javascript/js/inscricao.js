// obtendo a referência ao botão de comandos
let botao= document.getElementById('btnEnviar')

//definindo o evento click para o botão
// function executarEvento() {
//     alert('Processando evento click');
// }

// botao.addEventListener('click', executarEvento)  

botao.addEventListener('click', function() {

    // obtendo as informações dos campos de entrada
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = document.getElementById('data').value;

    let select = document.getElementById('mesPreferido');
    let dias = select.value;
    let mes = select.options[select.selectedIndex].text;

    // criando a mensagem com a resposta
    let mensagem = 
    `Nome: ${nome}</br>Email: ${email}</br>Data Nasc.: ${data}</br>Disponível por ${dias} dias no mês de ${mes}.`;

    document.getElementById('resposta').innerHTML = mensagem;
});