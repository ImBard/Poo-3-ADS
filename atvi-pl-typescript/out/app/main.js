"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const empresa_1 = __importDefault(require("../modelo/empresa"));
const ProdutosServicos_1 = require("./secoes/ProdutosServicos");
const clientes_1 = require("./secoes/clientes");
const pets_1 = require("./secoes/pets");
console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`);
let empresa = new empresa_1.default();
let execucao = true;
while (execucao) {
    console.log(`Selecione uma seção:`);
    console.log(`1 - Clientes`);
    console.log(`2 - Pets`);
    console.log(`3 - Produtos e Servicos`);
    console.log(`4 - Listar todos os clientes`);
    console.log(`0 - Sair`);
    let entrada = new entrada_1.default();
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
    console.clear();
    switch (opcao) {
        case 1:
            (0, clientes_1.clientes)(empresa);
            break;
        case 2:
            (0, pets_1.pets)(empresa);
            break;
        case 3:
            (0, ProdutosServicos_1.ProdutosServicos)(empresa);
            break;
        case 0:
            execucao = false;
            console.log(`Até mais`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
}
