"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pets = void 0;
const entrada_1 = __importDefault(require("../../io/entrada"));
const cadastroPets_1 = __importDefault(require("../../negocio/Pets/cadastroPets"));
const listagemPets_1 = __importDefault(require("../../negocio/Pets/listagemPets"));
const petsServices_1 = __importDefault(require("../../negocio/Pets/petsServices"));
function pets(empresa) {
    let secao = true;
    const listagem = new listagemPets_1.default(empresa.getPets, empresa.getClientes);
    while (secao) {
        secao = true;
        console.log(`Selecione uma seção:`);
        console.log(`1 - Cadastrar novo Pet`);
        console.log(`2 - Listar todos os Pets`);
        console.log(`3 - Atualizar um Pet`);
        console.log(`4 - Listar um Pet`);
        console.log(`5 - Deletar um Pet`);
        console.log(`0 - Voltar`);
        let entrada = new entrada_1.default();
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
        let nome;
        let pet;
        let cliente;
        let cpf;
        console.clear();
        switch (opcao) {
            case 1:
                let cadastro = new cadastroPets_1.default(empresa.getPets, empresa.getClientes);
                pet = cadastro.cadastrar();
                break;
            case 2:
                listagem.listar();
                break;
            case 3:
                nome = entrada.receberCpf(`Digite o nome do Pet: `);
                pet = listagem.getOnePet(nome);
                petsServices_1.default.update(pet);
                console.log('Cliente atualizado com sucesso!');
                break;
            case 4:
                nome = entrada.receberTexto(`Digite o nome do Pet: `);
                listagem.listOnePet(nome);
                break;
            case 5:
                nome = entrada.receberTexto(`Digite o nome do Pet: `);
                cpf = entrada.receberTexto(`Digite o CPF do Responsavel: `);
                listagem.deletePet(nome, cpf);
                console.log('Pet deletado!');
                break;
            case 0:
                secao = false;
                return;
            default:
                console.log(`Operação não entendida :(`);
        }
    }
}
exports.pets = pets;
