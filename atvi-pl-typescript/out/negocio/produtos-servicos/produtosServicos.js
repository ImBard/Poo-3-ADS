"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
class ProdutosServicos {
    constructor() {
        this.entrada = new entrada_1.default();
    }
    update(entidade) {
        console.log('Para manter os dados originais é só deixa-los em branco');
        const nome = this.entrada.receberTexto(`Digite o novo nome: `);
        if (nome) {
            entidade.setNome = nome;
        }
        const valor = this.entrada.receberNumero(`Digite o novo valor: `);
        if (valor) {
            entidade.setValor = valor;
        }
    }
}
exports.default = new ProdutosServicos();
