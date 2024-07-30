const prompt = require('prompt-sync')();
const { criar, listar, atualizar, remover } = require('./mod.js');

while (true) {
    console.log(`
1 - para cadastrar novo produto
2 - para listar produtos
3 - para atualizar produto
4 - para remover produto
5 - para sair
\n
`);
}

let opcao = prompt('escolha uma opção no menu acima');

switch (opcao) {
    case 1:
        criar();
        break;
    case 2:
        listar();
        break;
    case 3:
        atualizar();
        break;
    case 4:
        remover();
        break;
    case 5:
        process.exit();
        break;

    default:
        break;
}
