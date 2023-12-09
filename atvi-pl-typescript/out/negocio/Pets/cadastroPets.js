"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const pet_1 = __importDefault(require("../../modelo/pet"));
const listagemClientes_1 = __importDefault(require("../Clientes/listagemClientes"));
const cadastro_1 = __importDefault(require("./cadastro"));
class CadastroPet extends cadastro_1.default {
    constructor(pets, clientes) {
        super();
        this.pets = pets;
        this.entrada = new entrada_1.default();
        this.listagemClientes = new listagemClientes_1.default(clientes, pets);
    }
    cadastrar() {
        console.log(`\nInício do cadastro do pet`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do Pet: `);
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do Pet: `);
        let raca = this.entrada.receberTexto(`Por favor informe a raça do Pet: `);
        let sexo = this.entrada.receberTexto(`Por favor informe sexo do Pet: `);
        let responsavel = this.entrada.receberTexto('Digite o CPF do responsavel do Pet: ');
        let pet = new pet_1.default(nome, raca, sexo, tipo, responsavel);
        this.pets.push(pet);
        let cliente = this.listagemClientes.getOneClient(responsavel);
        cliente === null || cliente === void 0 ? void 0 : cliente.addPet(pet);
        console.log(`\nCadastro concluído\n`);
        console.clear();
        return pet;
    }
}
exports.default = CadastroPet;
