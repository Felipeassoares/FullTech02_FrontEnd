let axios = require('axios');

// obtendo os dados do produto com entrada
let descricao = process.argv[2];
let preco = parseFloat(process.argv[3]);

// definindo o objeto a ser incluido
let produto = {"descricao": descricao, "preco": preco };

// adicionando o produto
axios.post('http://localhost:3000/produtos', produto)
.then(resposta => {
    console.log(resposta.data);
    console.log('Produto incluído com sucesso.');  
});