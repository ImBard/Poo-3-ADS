"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
class PetsServices {
    constructor() {
        this.entrada = new entrada_1.default();
    }
    update(pet) {
        console.log('Para manter os dados originais é só deixa-los em branco');
        const nome = this.entrada.receberTexto(`Digite o novo nome: `);
        if (nome) {
            pet.setNome = nome;
        }
        const tipo = this.entrada.receberTexto(`Digite o novo tipo: `);
        if (tipo) {
            pet.setTipo = tipo;
        }
        const raca = this.entrada.receberTexto(`Digite a nova raca: `);
        if (raca) {
            pet.setRaca = raca;
        }
        const genero = this.entrada.receberTexto(`Digite o novo genero: `);
        if (genero) {
            pet.setGenero = genero;
        }
    }
}
exports.default = new PetsServices();
