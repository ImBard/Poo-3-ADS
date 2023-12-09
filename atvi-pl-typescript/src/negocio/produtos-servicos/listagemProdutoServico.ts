import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";

export default class ListagemProdutosServicos {
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    private users: Array<Cliente>;
    constructor(produtos: Array<Produto>, servicos: Array<Servico>, users: Array<Cliente>) {
        this.produtos = produtos;
        this.servicos = servicos;
        this.users = users;

    }

    public listar(categoria: string) {
        if (categoria === "1") {
            console.log(`\nLista de todos os clientes:`);
            this.produtos.forEach(produto => {
                console.log(`Nome: ` + produto.getNome());
                console.log(`Valor: R$` + produto.getValor());
                console.log(`--------------------------------------`);
            });
            console.log(`\n`);
        } else if (categoria === "2") {
            console.log(`\nLista de todos os Serviços:`);
            this.servicos.forEach(servicos => {
                console.log(`Nome: ` + servicos.getNome());
                console.log(`Valor: R$` + servicos.getValor());
                console.log(`--------------------------------------`);
            });
            console.log(`\n`);
        } else {
            console.log("Categoria não encontrada");
        }
    }

    public getUmProduto(nome: string): Produto | undefined {
        try {
            console.log(nome)
            const produto = this.produtos.find((produto) => produto.getNome() === nome);
            if (!produto) {
                throw new Error("Produto não encontrado");
            }
            return produto;
        } catch (err) {
            console.log(err);
        }
    }

    public getUmServico(nome: string): Servico | undefined {
        try {
            console.log(nome)
            const servico = this.servicos.find((servico) => servico.getNome() === nome);
            if (!servico) {
                throw new Error("Servico não encontrado");
            }
            return servico;
        } catch (err) {
            console.log(err);
        }
    }

    public listarUmServico(nome: string): void {
        const servico = this.getUmServico(nome);

        if (servico) {
            console.log(`\nLista de todos os servicos:`);
            console.log(`Nome: ` + servico.getNome());
            console.log(`Nome social: ` + servico.getValor());
            console.log(`--------------------------------------`);
            console.log(`\n`);
        } else {
            console.log(`Servico ${nome} não foi encontrado`);
        }
    }

    public listarUmProduto(nome: string): void {
        const produto = this.getUmProduto(nome);

        if (produto) {
            console.log(`\nLista de todos os Produtos:`);
            console.log(`Nome: ` + produto.getNome());
            console.log(`Nome social: ` + produto.getValor());
            console.log(`--------------------------------------`);
            console.log(`\n`);
        } else {
            console.log(`Servico ${nome} não foi encontrado`);
        }
    }

    public deleteServico(nome: string): void {
        this.servicos = this.servicos.filter((servico) => servico.getNome() !== nome);
    }


    public deleteProduto(nome: string): void {
        this.produtos = this.produtos.filter((produto) => produto.getNome() !== nome);
    }

    public consumirProduto(nome: string, cpf: string): void {
        const user = this.users.filter((user) => user.getCpf.getValor === cpf);
        const produto = this.produtos.filter((produto) => produto.getNome() === nome);
        if (user && produto) {
            user[0].consumirProduto(produto[0]);
        } else {
            console.log("Produto ou usuário não encontrado");
        }

    }
    public consumirServico(nome: string, cpf: string): void {
        const user = this.users.filter((user) => user.getCpf.getValor === cpf);
        const servico = this.servicos.filter((servico) => servico.getNome() === nome);
        if (user && servico) {
            user[0].consumirServico(servico[0]);
        } else {
            console.log("Produto ou usuário não encontrado");
        }

    }

    public listarMaisConsumidos(): void {
        let consumoProdutos: { [nome: string]: number } = {};
        let consumoServicos: { [nome: string]: number } = {};

        this.users.forEach((user) => {
            user.getConsumo().forEach(item => {
                if (item instanceof Produto) {
                    if (!consumoProdutos[item.getNome()]) {
                        consumoProdutos[item.getNome()] = 0;
                    }
                    consumoProdutos[item.getNome()]++;
                } else if (item instanceof Servico) {
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


    public listarTopConsumidores(): void {
        let consumoClientes: { [nome: string]: number } = {};

        this.users.forEach(user => {
            consumoClientes[user.nome] = user.getConsumo().length;
        });

        let listaConsumo = Object.entries(consumoClientes);

        listaConsumo.sort((a, b) => b[1] - a[1]);

        let top10Consumidores = listaConsumo.slice(0, 10);

        console.log("Top 10 consumidores:");
        top10Consumidores.forEach(consumidor => {
            console.log(`Nome: ${consumidor[0]}, Consumo: ${consumidor[1]}`);
        });
    }

    public listarTopConsumidoresPorValor(): void {
        let consumoClientes: { [nome: string]: number } = {};

        this.users.forEach(user => {
            let valorTotal = 0;
            user.getConsumo().forEach(item => {
                valorTotal += item.getValor();
            });
            consumoClientes[user.nome] = valorTotal;
        });

        let listaConsumo = Object.entries(consumoClientes);

        listaConsumo.sort((a, b) => b[1] - a[1]);

        let top5Consumidores = listaConsumo.slice(0, 5);

        console.log("Top 5 consumidores por valor:");
        top5Consumidores.forEach(consumidor => {
            console.log(`Nome: ${consumidor[0]}, Valor total: R$${consumidor[1]}`);
        });
    }

}
