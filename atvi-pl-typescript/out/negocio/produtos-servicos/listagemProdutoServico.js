"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produto_1 = __importDefault(require("../../modelo/produto"));
const servico_1 = __importDefault(require("../../modelo/servico"));
class ListagemProdutosServicos {
    constructor(produtos, servicos, users) {
        this.produtos = produtos;
        this.servicos = servicos;
        this.users = users;
    }
    listar(categoria) {
        if (categoria === "1") {
            console.log(`\nLista de todos os clientes:`);
            this.produtos.forEach(produto => {
                console.log(`Nome: ` + produto.getNome());
                console.log(`Valor: R$` + produto.getValor());
                console.log(`--------------------------------------`);
            });
            console.log(`\n`);
        }
        else if (categoria === "2") {
            console.log(`\nLista de todos os Serviços:`);
            this.servicos.forEach(servicos => {
                console.log(`Nome: ` + servicos.getNome());
                console.log(`Valor: R$` + servicos.getValor());
                console.log(`--------------------------------------`);
            });
            console.log(`\n`);
        }
        else {
            console.log("Categoria não encontrada");
        }
    }
    getUmProduto(nome) {
        try {
            console.log(nome);
            const produto = this.produtos.find((produto) => produto.getNome() === nome);
            if (!produto) {
                throw new Error("Produto não encontrado");
            }
            return produto;
        }
        catch (err) {
            console.log(err);
        }
    }
    getUmServico(nome) {
        try {
            console.log(nome);
            const servico = this.servicos.find((servico) => servico.getNome() === nome);
            if (!servico) {
                throw new Error("Servico não encontrado");
            }
            return servico;
        }
        catch (err) {
            console.log(err);
        }
    }
    listarUmServico(nome) {
        const servico = this.getUmServico(nome);
        if (servico) {
            console.log(`\nLista de todos os servicos:`);
            console.log(`Nome: ` + servico.getNome());
            console.log(`Nome social: ` + servico.getValor());
            console.log(`--------------------------------------`);
            console.log(`\n`);
        }
        else {
            console.log(`Servico ${nome} não foi encontrado`);
        }
    }
    listarUmProduto(nome) {
        const produto = this.getUmProduto(nome);
        if (produto) {
            console.log(`\nLista de todos os Produtos:`);
            console.log(`Nome: ` + produto.getNome());
            console.log(`Nome social: ` + produto.getValor());
            console.log(`--------------------------------------`);
            console.log(`\n`);
        }
        else {
            console.log(`Servico ${nome} não foi encontrado`);
        }
    }
    deleteServico(nome) {
        this.servicos = this.servicos.filter((servico) => servico.getNome() !== nome);
    }
    deleteProduto(nome) {
        this.produtos = this.produtos.filter((produto) => produto.getNome() !== nome);
    }
    consumirProduto(nome, cpf) {
        const user = this.users.filter((user) => user.getCpf.getValor === cpf);
        const produto = this.produtos.filter((produto) => produto.getNome() === nome);
        if (user && produto) {
            user[0].consumirProduto(produto[0]);
        }
        else {
            console.log("Produto ou usuário não encontrado");
        }
    }
    consumirServico(nome, cpf) {
        const user = this.users.filter((user) => user.getCpf.getValor === cpf);
        const servico = this.servicos.filter((servico) => servico.getNome() === nome);
        if (user && servico) {
            user[0].consumirServico(servico[0]);
        }
        else {
            console.log("Produto ou usuário não encontrado");
        }
    }
    listarMaisConsumidos() {
        let consumoProdutos = {};
        let consumoServicos = {};
        this.users.forEach((user) => {
            user.getConsumo().forEach(item => {
                if (item instanceof produto_1.default) {
                    if (!consumoProdutos[item.getNome()]) {
                        consumoProdutos[item.getNome()] = 0;
                    }
                    consumoProdutos[item.getNome()]++;
                }
                else if (item instanceof servico_1.default) {
                    if (!consumoServicos[item.getNome()]) {
                        consumoServicos[item.getNome()] = 0;
                    }
                    consumoServicos[item.getNome()]++;
                }
            });
        });
        console.log("Produtos mais consumidos:");
        for (let produto in consumoProdutos) {
            console.log(`${produto}: ${consumoProdutos[produto]}`);
        }
        console.log("Serviços mais consumidos:");
        for (let servico in consumoServicos) {
            console.log(`${servico}: ${consumoServicos[servico]}`);
        }
    }
    listarTopConsumidores() {
        let consumoClientes = {};
        this.users.forEach(user => {
            consumoClientes[user.nome] = user.getConsumo().length;
        });
        // Transformar o objeto em uma lista de pares [nome, consumo]
        let listaConsumo = Object.entries(consumoClientes);
        // Ordenar a lista pelo consumo em ordem decrescente
        listaConsumo.sort((a, b) => b[1] - a[1]);
        // Pegar os 10 primeiros elementos da lista
        let top10Consumidores = listaConsumo.slice(0, 10);
        console.log("Top 10 consumidores:");
        top10Consumidores.forEach(consumidor => {
            console.log(`Nome: ${consumidor[0]}, Consumo: ${consumidor[1]}`);
        });
    }
}
exports.default = ListagemProdutosServicos;
