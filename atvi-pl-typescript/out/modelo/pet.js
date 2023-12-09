"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pet {
    constructor(nome, raca, genero, tipo, responsavel) {
        this.nome = nome;
        this.raca = raca;
        this.genero = genero;
        this.tipo = tipo;
        this.responsavel = responsavel;
    }
    get getNome() { return this.nome; }
    set setNome(nome) { this.nome = nome; }
    get getRaca() { return this.raca; }
    set setRaca(raca) { this.raca = raca; }
    get getGenero() { return this.genero; }
    set setGenero(genero) { this.genero = genero; }
    get getTipo() { return this.tipo; }
    set setTipo(tipo) { this.tipo = tipo; }
    get getResponsavel() { return this.responsavel; }
}
exports.default = Pet;
