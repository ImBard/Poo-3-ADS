"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
class ClienteServices {
    constructor() {
        this.entrada = new entrada_1.default();
    }
    update(cliente) {
        console.log('Para manter os dados originais é só deixa-los em branco');
        const nome = this.entrada.receberTexto(`Digite o novo nome: `);
        if (nome) {
            cliente.setNome(nome);
        }
        const nomeSocial = this.entrada.receberTexto(`Digite o novo nome social: `);
        if (nomeSocial) {
            cliente.setNomeSocial(nomeSocial);
        }
    }
}
exports.default = new ClienteServices();
