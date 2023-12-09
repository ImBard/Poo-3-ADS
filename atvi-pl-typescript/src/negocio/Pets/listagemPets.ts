import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import ListagemClientes from "../Clientes/listagemClientes";
import Listagem from "./listagem";

export default class ListagemPets extends Listagem {
    private pets: Array<Pet>
    private listagemClientes;
    private produtosConsumidos: Array<Produto>;
    private servicosConsumidos: Array<Servico>;
    constructor(pets: Array<Pet>, clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.pets = pets
        this.listagemClientes = new ListagemClientes(clientes, pets);
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];

    }

    public listar(): void {
        console.log(`\nLista de todos os pets:`);
        this.pets.forEach(pet => {
            console.log(`Nome: ` + pet.getNome);
            console.log(`Tipo: ` + pet.getTipo);
            console.log(`Raça: ` + pet.getRaca);
            console.log(`Sexo: ` + pet.getGenero);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public getOnePet(nome: string): Pet | undefined {
        try {
            const pet = this.pets.find((pet) => pet.getNome === nome);
            if (!pet) {
                throw new Error("pet não encontrado");
            }
            return pet;
        } catch (err) {
            console.log(err);
        }

    }

    public listOnePet(nome: string): void {
        const pet = this.getOnePet(nome)

        if (pet) {
            console.log(`\nDados do pet:`);
            console.log(`Nome: ` + pet.getNome);
            console.log(`Tipo: ` + pet.getTipo);
            console.log(`Raça: ` + pet.getRaca);
            console.log(`Sexo: ` + pet.getGenero);
            console.log(`--------------------------------------`);
            console.log(`\n`);
        } else {
            console.log(`Pet com o nome - ${nome} não foi encontrado`);
        }
    }

    public deletePet(nome: string, cpf: string): void {
        console.log(cpf, nome)
        const cliente = this.listagemClientes.getOneClient(cpf)
        if (cliente) {
            this.pets = this.pets.filter((pet) => pet.getNome !== nome);
            cliente.removePet(this.pets);
        }
    }

    public consumirProduto(produto: Produto): void {
        this.produtosConsumidos.push(produto);
    }

    public consumirServico(servico: Servico): void {
        this.servicosConsumidos.push(servico);
    }

    public getConsumo(): Array<Produto | Servico> {
        return [...this.produtosConsumidos, ...this.servicosConsumidos];
    }
}