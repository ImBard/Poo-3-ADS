import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";
import ListagemClientes from "../Clientes/listagemClientes";
import Cadastro from "./cadastro";

export default class CadastroPet extends Cadastro {
    private pets: Array<Pet>;
    private entrada: Entrada;
    private listagemClientes;
    constructor(pets: Array<Pet>, clientes: Array<Cliente>) {
        super();
        this.pets = pets;
        this.entrada = new Entrada();
        this.listagemClientes = new ListagemClientes(clientes, pets);
    }

    public cadastrar(): Pet {
        console.log(`\nInício do cadastro do pet`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do Pet: `);
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do Pet: `);
        let raca = this.entrada.receberTexto(`Por favor informe a raça do Pet: `);
        let sexo = this.entrada.receberTexto(`Por favor informe sexo do Pet: `);
        let responsavel = this.entrada.receberTexto('Digite o CPF do responsavel do Pet: ')
        let pet = new Pet(nome, raca, sexo, tipo, responsavel);
        this.pets.push(pet);
        let cliente = this.listagemClientes.getOneClient(responsavel)
        cliente?.addPet(pet);
        console.log(`\nCadastro concluído\n`);
        console.clear();
        return pet;
    }
}