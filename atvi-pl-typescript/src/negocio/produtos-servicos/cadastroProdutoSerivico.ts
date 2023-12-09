import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroProdutoServico extends Cadastro {
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    private entrada: Entrada;
    constructor(produtos: Array<Produto>, servicos: Array<Servico>) {
        super();
        this.produtos = produtos;
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome: `);
        let valor = this.entrada.receberNumero(`Por favor informe o valor: `);
        let categoria = "";
        do {
            categoria = this.entrada.receberTexto(`Por favor informe a categoria (produto, servico): `);
            if (categoria === "produto") {
                let produto = new Produto(nome, valor);
                this.produtos.push(produto);
            } else if (categoria === "servico") {
                let servico = new Servico(nome, valor);
                this.servicos.push(servico);
            } else {
                console.log('Essa categoria não existe')
            }
        } while (!["produto", "servico"].includes(categoria));
        console.log(`\nCadastro concluído :rocket:\n`);
        console.clear();
    }
}