import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import CadastroProdutoServico from "../../negocio/produtos-servicos/cadastroProdutoSerivico";
import ListagemProdutosServicos from "../../negocio/produtos-servicos/listagemProdutoServico";
import produtosServicos from "../../negocio/produtos-servicos/produtosServicos";

export function ProdutosServicos(empresa: Empresa) {
  let secao = true
  const listagem = new ListagemProdutosServicos(empresa.getProdutos, empresa.getServicos, empresa.getClientes);
  while (secao) {
    secao = true;
    console.log(`Selecione uma seção:`);
    console.log(`1 - Cadastrar produto ou servico`);
    console.log(`2 - Listar todos os Produtos ou Servicos`);
    console.log(`3 - Atualizar um Produto`);
    console.log(`4 - Atualizar um Serviço`);
    console.log(`5 - Listar um Produto`);
    console.log(`6 - Listar um Serviço`);
    console.log(`7 - Deletar um Produto`);
    console.log(`8 - Deletar um Serviço`);
    console.log(`9 - Cosumir um Produto`);
    console.log(`10 - Cosumir um Serviço`);
    console.log(`11 - Listar Produtos e Serviços consumidos`);
    console.log(`12 - Listar TOP Clientes`);
    console.log(`0 - Voltar`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
    let nome: string;
    let cpfUser: string;
    let categoria: string;
    let produto: Produto | undefined;
    let servico: Servico | undefined;
    console.clear();

    switch (opcao) {
      case 1:
        let cadastro = new CadastroProdutoServico(empresa.getProdutos, empresa.getServicos);
        cadastro.cadastrar();
        break;
      case 2:
        categoria = entrada.receberTexto("Digite 1 para Produtos ou 2 para Servicos ");
        listagem.listar(categoria);
        break;
      case 3:
        nome = entrada.receberTexto(`Digite o nome do Produto: `);
        produto = listagem.getUmProduto(nome);
        produtosServicos.update(produto!);
        console.log('Produto atualizado com sucesso!');
        break;
      case 4:
        nome = entrada.receberTexto(`Digite o nome do Serviço: `);
        servico = listagem.getUmServico(nome);
        produtosServicos.update(servico!);
        console.log('Serviço atualizado com sucesso!');
        break;
      case 5:
        nome = entrada.receberTexto(`Digite o nome do Produto: `);
        listagem.listarUmProduto(nome);
        break;
      case 6:
        nome = entrada.receberTexto(`Digite o nome do Servico: `);
        listagem.listarUmServico(nome);
        break;
      case 7:
        nome = entrada.receberTexto(`Digite o nome do Produto: `);
        listagem.deleteProduto(nome);
        console.log('Produto deletado!');
        break;
      case 8:
        nome = entrada.receberTexto(`Digite o nome do Servico: `);
        listagem.deleteServico(nome);
        console.log('Serviço deletado!');
        break;
      case 9:
        nome = entrada.receberTexto(`Digite o nome do Produto: `);
        cpfUser = entrada.receberTexto(`Digite o CPF do cliente: `);
        listagem.consumirProduto(nome, cpfUser);
        break;
      case 10:
        nome = entrada.receberTexto(`Digite o nome do Servico: `);
        cpfUser = entrada.receberTexto(`Digite o CPF do cliente: `);
        listagem.consumirServico(nome, cpfUser);
        break;
      case 11:
        listagem.listarMaisConsumidos();
        break;
      case 12:
        listagem.listarTopConsumidores();
        break;
      case 0:
        secao = false;
        return
      default:
        console.log(`Operação não entendida :(`);
    }

  }
}