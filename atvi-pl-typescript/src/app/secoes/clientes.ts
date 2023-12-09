import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Empresa from "../../modelo/empresa";
import empresa from "../../modelo/empresa";
import CadastroCliente from "../../negocio/Clientes/cadastroCliente";
import clienteServices from "../../negocio/Clientes/clienteServices";
import ListagemClientes from "../../negocio/Clientes/listagemClientes";


export function clientes(empresa: Empresa) {
  let secao = true
  const listagem = new ListagemClientes(empresa.getClientes, empresa.getPets);
  while (secao) {
    secao = true;
    console.log(`Selecione uma seção:`);
    console.log(`1 - Cadastrar novo cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Atualizar um cliente`);
    console.log(`4 - Listar um cliente`);
    console.log(`5 - Deletar um cliente`);
    console.log(`6 - Listar pets`);
    console.log(`0 - Voltar`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
    let cpf: string;
    let cliente: Cliente | undefined;
    console.clear();

    switch (opcao) {
      case 1:
        let cadastro = new CadastroCliente(empresa.getClientes);
        cadastro.cadastrar();
        break;
      case 2:
        listagem.listar();
        break;
      case 3:
        cpf = entrada.receberCpf(`Digite o CPF do cliente: `);
        cliente = listagem.getOneClient(cpf);
        clienteServices.update(cliente!);
        console.log('Cliente atualizado com sucesso!');
        break;
      case 4:
        cpf = entrada.receberCpf(`Digite o CPF do cliente: `);
        listagem.listOneClient(cpf)
        break;
      case 5:
        cpf = entrada.receberCpf(`Digite o CPF do cliente: `);
        listagem.deleteCliente(cpf);
        console.log('Cliente deletado!');
        break;
      case 6:
        cpf = entrada.receberCpf(`Digite o CPF do cliente: `);
        listagem.listarPets(cpf)
        break;
      case 0:
        secao = false;
        return
      default:
        console.log(`Operação não entendida :(`);
    }

  }
}