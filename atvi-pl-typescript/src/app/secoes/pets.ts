import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Empresa from "../../modelo/empresa";
import empresa from "../../modelo/empresa";
import Pet from "../../modelo/pet";
import CadastroCliente from "../../negocio/Clientes/cadastroCliente";
import clienteServices from "../../negocio/Clientes/clienteServices";
import ListagemClientes from "../../negocio/Clientes/listagemClientes";
import CadastroPet from "../../negocio/Pets/cadastroPets";
import ListagemPets from "../../negocio/Pets/listagemPets";
import petsServices from "../../negocio/Pets/petsServices";


export function pets(empresa: Empresa) {
  let secao = true
  const listagem = new ListagemPets(empresa.getPets, empresa.getClientes, empresa.getProdutos, empresa.getServicos);

  while (secao) {
    secao = true;
    console.log(`Selecione uma seção:`);
    console.log(`1 - Cadastrar novo Pet`);
    console.log(`2 - Listar todos os Pets`);
    console.log(`3 - Atualizar um Pet`);
    console.log(`4 - Listar um Pet`);
    console.log(`5 - Deletar um Pet`);
    console.log(`0 - Voltar`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
    let nome: string;
    let pet: Pet | undefined;
    let cliente: Cliente | undefined;
    let cpf: string;
    console.clear();

    switch (opcao) {
      case 1:
        let cadastro = new CadastroPet(empresa.getPets, empresa.getClientes);
        pet = cadastro.cadastrar();
        break;
      case 2:
        listagem.listar();
        break;
      case 3:
        nome = entrada.receberCpf(`Digite o nome do Pet: `);
        pet = listagem.getOnePet(nome);
        petsServices.update(pet!);
        console.log('Cliente atualizado com sucesso!');
        break;
      case 4:
        nome = entrada.receberTexto(`Digite o nome do Pet: `);
        listagem.listOnePet(nome)
        break;
      case 5:
        nome = entrada.receberTexto(`Digite o nome do Pet: `);
        cpf = entrada.receberTexto(`Digite o CPF do Responsavel: `);
        listagem.deletePet(nome, cpf);
        console.log('Pet deletado!');
        break;
      case 6:
        nome = entrada.receberTexto(`Digite o nome do Pet: `);
        let nomeProduto = entrada.receberTexto(`Digite o nome do Produto: `);
        pet = listagem.getOnePet(nome);
        let produto = empresa.getProdutos.find((produto) => produto.getNome() === nomeProduto);
        if (pet && produto) {
          listagem.consumirProduto(produto);
          console.log('Produto consumido pelo pet com sucesso!');
        } else {
          console.log('Pet ou Produto não encontrado');
        }
        break;
      case 7:
        nome = entrada.receberTexto(`Digite o nome do Pet: `);
        let nomeServico = entrada.receberTexto(`Digite o nome do Serviço: `);
        pet = listagem.getOnePet(nome);
        let servico = empresa.getServicos.find((servico) => servico.getNome() === nomeServico);
        if (pet && servico) {
          listagem.consumirServico(servico);
          console.log('Serviço consumido pelo pet com sucesso!');
        } else {
          console.log('Pet ou Serviço não encontrado');
        }
        break;
      case 0:
        secao = false;
        return
      default:
        console.log(`Operação não entendida :(`);
    }

  }
}