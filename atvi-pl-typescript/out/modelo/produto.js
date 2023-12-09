"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
    getNome() {
        return this.nome;
    }
    set setNome(nome) {
        this.nome = nome;
    }
    getValor() {
        return this.valor;
    }
    set setValor(valor) {
        this.valor = valor;
    }
}
exports.default = Produto;
