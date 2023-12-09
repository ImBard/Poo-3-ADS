import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import { ProdutosServicos } from "./secoes/ProdutosServicos";
import { clientes } from "./secoes/clientes";
import { pets } from "./secoes/pets";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
  console.log(`Selecione uma seção:`);
  console.log(`1 - Clientes`);
  console.log(`2 - Pets`);
  console.log(`3 - Produtos e Servicos`);
  console.log(`4 - Listar todos os clientes`);
  console.log(`0 - Sair`);

  let entrada = new Entrada()
  let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
  console.clear();
  switch (opcao) {
    case 1:
      clientes(empresa);
      break;
    case 2:
      pets(empresa)
      break;
    case 3:
      ProdutosServicos(empresa)
      break;
    case 0:
      execucao = false
      console.log(`Até mais`)
      break;
    default:
      console.log(`Operação não entendida :(`);
  }


}