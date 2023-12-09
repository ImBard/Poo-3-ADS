"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosServicos = void 0;
const entrada_1 = __importDefault(require("../../io/entrada"));
const cadastroProdutoSerivico_1 = __importDefault(require("../../negocio/produtos-servicos/cadastroProdutoSerivico"));
const listagemProdutoServico_1 = __importDefault(require("../../negocio/produtos-servicos/listagemProdutoServico"));
const produtosServicos_1 = __importDefault(require("../../negocio/produtos-servicos/produtosServicos"));
function ProdutosServicos(empresa) {
    let secao = true;
    const listagem = new listagemProdutoServico_1.default(empresa.getProdutos, empresa.getServicos, empresa.getClientes);
    while (secao) {
        secao = true;
        console.log(`Selecione uma seção:`);
        console.log(`1 - Cadastrar produto ou servico`);
        console.log(`2 - Listar todos os Produtos ou Servicos`);
        console.log(`3 - Atualizar um Produto`);
        console.log(`4 - Atualizar um Serviço`);
        console.log(`5 - Listar um Produto`);
        console.log(`6 - Listar um Serviço`);
        console.log(`7 - Deletar um Produto`);
        console.log(`8 - Deletar um Serviço`);
        console.log(`9 - Cosumir um Produto`);
        console.log(`10 - Cosumir um Serviço`);
        console.log(`11 - Listar Produtos e Serviços consumidos`);
        console.log(`0 - Voltar`);
        let entrada = new entrada_1.default();
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
        let nome;
        let cpfUser;
        let categoria;
        let produto;
        let servico;
        console.clear();
        switch (opcao) {
            case 1:
                let cadastro = new cadastroProdutoSerivico_1.default(empresa.getProdutos, empresa.getServicos);
                cadastro.cadastrar();
                break;
            case 2:
                categoria = entrada.receberTexto("Digite 1 para Produtos ou 2 para Servicos ");
                listagem.listar(categoria);
                break;
            case 3:
                nome = entrada.receberTexto(`Digite o nome do Produto: `);
                produto = listagem.getUmProduto(nome);
                produtosServicos_1.default.update(produto);
                console.log('Produto atualizado com sucesso!');
                break;
            case 4:
                nome = entrada.receberTexto(`Digite o nome do Serviço: `);
                servico = listagem.getUmServico(nome);
                produtosServicos_1.default.update(servico);
                console.log('Serviço atualizado com sucesso!');
                break;
            case 5:
                nome = entrada.receberTexto(`Digite o nome do Produto: `);
                listagem.listarUmProduto(nome);
                break;
            case 6:
                nome = entrada.receberTexto(`Digite o nome do Servico: `);
                listagem.listarUmServico(nome);
                break;
            case 7:
                nome = entrada.receberTexto(`Digite o nome do Produto: `);
                listagem.deleteProduto(nome);
                console.log('Produto deletado!');
                break;
            case 8:
                nome = entrada.receberTexto(`Digite o nome do Servico: `);
                listagem.deleteServico(nome);
                console.log('Serviço deletado!');
                break;
            case 9:
                nome = entrada.receberTexto(`Digite o nome do Produto: `);
                cpfUser = entrada.receberTexto(`Digite o CPF do cliente: `);
                listagem.consumirProduto(nome, cpfUser);
                break;
            case 10:
                nome = entrada.receberTexto(`Digite o nome do Servico: `);
                cpfUser = entrada.receberTexto(`Digite o CPF do cliente: `);
                listagem.consumirServico(nome, cpfUser);
                break;
            case 11:
                listagem.listarMaisConsumidos();
                break;
            case 12:
                listagem.listarTopConsumidores();
                break;
            case 0:
                secao = false;
                return;
            default:
                console.log(`Operação não entendida :(`);
        }
    }
}
exports.ProdutosServicos = ProdutosServicos;
