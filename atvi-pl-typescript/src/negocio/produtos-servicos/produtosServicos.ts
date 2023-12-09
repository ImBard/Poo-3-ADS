import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";

class ProdutosServicos {
  private entrada
  constructor() {
    this.entrada = new Entrada()

  }
  update(entidade: Produto | Servico): void {
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

export default new ProdutosServicos();