"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagemClientes_1 = __importDefault(require("../Clientes/listagemClientes"));
const listagem_1 = __importDefault(require("./listagem"));
class ListagemPets extends listagem_1.default {
    constructor(pets, clientes) {
        super();
        this.pets = pets;
        this.listagemClientes = new listagemClientes_1.default(clientes, pets);
    }
    listar() {
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
    getOnePet(nome) {
        try {
            const pet = this.pets.find((pet) => pet.getNome === nome);
            if (!pet) {
                throw new Error("pet não encontrado");
            }
            return pet;
        }
        catch (err) {
            console.log(err);
        }
    }
    listOnePet(nome) {
        const pet = this.getOnePet(nome);
        if (pet) {
            console.log(`\nDados do pet:`);
            console.log(`Nome: ` + pet.getNome);
            console.log(`Tipo: ` + pet.getTipo);
            console.log(`Raça: ` + pet.getRaca);
            console.log(`Sexo: ` + pet.getGenero);
            console.log(`--------------------------------------`);
            console.log(`\n`);
        }
        else {
            console.log(`Pet com o nome - ${nome} não foi encontrado`);
        }
    }
    deletePet(nome, cpf) {
        console.log(cpf, nome);
        const cliente = this.listagemClientes.getOneClient(cpf);
        if (cliente) {
            this.pets = this.pets.filter((pet) => pet.getNome !== nome);
            cliente.removePet(this.pets);
        }
    }
}
exports.default = ListagemPets;
