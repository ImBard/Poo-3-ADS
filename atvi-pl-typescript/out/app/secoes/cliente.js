"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientes = void 0;
const entrada_1 = __importDefault(require("../../io/entrada"));
const cadastroCliente_1 = __importDefault(require("../../negocio/Clientes/cadastroCliente"));
const clienteServices_1 = __importDefault(require("../../negocio/Clientes/clienteServices"));
const listagemClientes_1 = __importDefault(require("../../negocio/Clientes/listagemClientes"));
function clientes(empresa) {
    let secao = true;
    const listagem = new listagemClientes_1.default(empresa.getClientes);
    while (secao) {
        secao = true;
        console.log(`Selecione uma seção:`);
        console.log(`1 - Cadastrar novo cliente`);
        console.log(`2 - Listar todos os clientes`);
        console.log(`3 - Atualizar um cliente`);
        console.log(`4 - Listar um cliente`);
        console.log(`5 - Deletar um cliente`);
        console.log(`0 - Voltar`);
        let entrada = new entrada_1.default();
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
        let cpf;
        let cliente;
        console.clear();
        switch (opcao) {
            case 1:
                let cadastro = new cadastroCliente_1.default(empresa.getClientes);
                cadastro.cadastrar();
                break;
            case 2:
                listagem.listar();
                break;
            case 3:
                cpf = entrada.receberCpf(`Digite o CPF do cliente: `);
                cliente = listagem.getOneClient(cpf);
                clienteServices_1.default.update(cliente);
                console.log('Cliente atualizado com sucesso!');
                break;
            case 4:
                cpf = entrada.receberCpf(`Digite o CPF do cliente: `);
                listagem.listOneClient(cpf);
                break;
            case 5:
                cpf = entrada.receberCpf(`Digite o CPF do cliente: `);
                listagem.deleteCliente(cpf);
                console.log('Cliente deletado!');
                break;
            case 0:
                secao = false;
                return;
            default:
                console.log(`Operação não entendida :(`);
        }
    }
}
exports.clientes = clientes;
