const prompt = require('prompt-sync')();

const produtos = {
    nome,
    valor,
};

const modelo = () => {
    const nome = prompt('Qual o produto a ser cadastrado?');
    const valor = prompt('Qual o preço do produto?');

    if (nome != '' && valor != '') {
        return {
            nome,
            valor,
        };
    } else {
        console.log('não foi possivel cadastrar o produto');
    }
};
