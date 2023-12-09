import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";

class ClienteServices {
  private entrada
  constructor() {
    this.entrada = new Entrada()

  }
  update(cliente: Cliente): void {
    console.log('Para manter os dados originais é só deixa-los em branco')
    const nome = this.entrada.receberTexto(`Digite o novo nome: `);
    if (nome) {
      cliente.setNome = nome;
    }
    const nomeSocial = this.entrada.receberTexto(`Digite o novo nome social: `);
    if (nomeSocial) {
      cliente.setNomeSocial = nomeSocial;
    }
  }
}

export default new ClienteServices();