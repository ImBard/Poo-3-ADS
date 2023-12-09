import { cp } from "fs";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Pet from "../../modelo/pet";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    private pets: Array<Pet>;
    constructor(clientes: Array<Cliente>, pets: Array<Pet>) {
        super()
        this.clientes = clientes;
        this.pets = pets;
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public getOneClient(cpf: string): Cliente | undefined {
        try {
            console.log(cpf)
            const cliente = this.clientes.find((cliente) => cliente.getCpf.getValor === cpf);
            if (!cliente) {
                throw new Error("Cliente não encontrado");
            }
            return cliente;
        } catch (err) {
            console.log(err);
        }

    }

    public listOneClient(cpf: string): void {
        const cliente = this.getOneClient(cpf)

        if (cliente) {
            console.log(`\nLista de todos os clientes:`);
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
            console.log(`\n`);
        } else {
            console.log(`Cliente com o CPF - ${cpf} não foi encontrado`);
        }
    }

    public listarPets(cpf: string): void {
        console.log(`\nLista de todos os pets:`);
        this.pets.filter((pet) => {
            if (pet.getResponsavel === cpf){
            console.log(`Nome: ` + pet.getNome);
            console.log(`Tipo: ` + pet.getTipo);
            console.log(`Raça: ` + pet.getRaca);
            console.log(`Sexo: ` + pet.getGenero);
            console.log(`--------------------------------------`);
        }});
        console.log(`\n`);
    }

    public deleteCliente(cpf: string): void {
        this.clientes = this.clientes.filter((cliente) => cliente.getCpf.getValor !== cpf);
    }
}