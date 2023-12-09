"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class ListagemClientes extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
    getOneClient(cpf) {
        try {
            const cliente = this.clientes.find((cliente) => cliente.getCpf.getValor === cpf);
            if (!cliente) {
                throw new Error("Cliente não encontrado");
            }
            return cliente;
        }
        catch (err) {
            console.log(err);
        }
    }
    listOneClient(cpf) {
        const cliente = this.getOneClient(cpf);
        if (cliente) {
            console.log(`\nLista de todos os clientes:`);
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
            console.log(`\n`);
        }
        else {
            console.log(`Cliente com o CPF - ${cpf} não foi encontrado`);
        }
    }
    deleteCliente(cpf) {
        this.clientes = this.clientes.filter((cliente) => cliente.getCpf.getValor !== cpf);
    }
}
exports.default = ListagemClientes;
