"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const produto_1 = __importDefault(require("../../modelo/produto"));
const servico_1 = __importDefault(require("../../modelo/servico"));
const cadastro_1 = __importDefault(require("./cadastro"));
class CadastroProdutoServico extends cadastro_1.default {
    constructor(produtos, servicos) {
        super();
        this.produtos = produtos;
        this.servicos = servicos;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.log(`\nInício do cadastro`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome: `);
        let valor = this.entrada.receberNumero(`Por favor informe o valor: `);
        let categoria = "";
        do {
            categoria = this.entrada.receberTexto(`Por favor informe a categoria (produto, servico): `);
            if (categoria === "produto") {
                let produto = new produto_1.default(nome, valor);
                this.produtos.push(produto);
            }
            else if (categoria === "servico") {
                let servico = new servico_1.default(nome, valor);
                this.servicos.push(servico);
            }
            else {
                console.log('Essa categoria não existe');
            }
        } while (!["produto", "servico"].includes(categoria));
        console.log(`\nCadastro concluído :rocket:\n`);
        console.clear();
    }
}
exports.default = CadastroProdutoServico;
