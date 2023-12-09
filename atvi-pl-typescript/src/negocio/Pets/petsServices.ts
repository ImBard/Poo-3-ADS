import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";

class PetsServices {
  private entrada
  constructor() {
    this.entrada = new Entrada()

  }
  update(pet: Pet): void {
    console.log('Para manter os dados originais é só deixa-los em branco')
    const nome = this.entrada.receberTexto(`Digite o novo nome: `);
    if (nome) {
      pet.setNome = nome;
    }
    const tipo = this.entrada.receberTexto(`Digite o novo tipo: `);
    if (tipo) {
      pet.setTipo = tipo;
    }
    const raca = this.entrada.receberTexto(`Digite a nova raca: `);
    if (raca) {
      pet.setRaca = raca;
    }
    const genero = this.entrada.receberTexto(`Digite o novo genero: `);
    if (genero) {
      pet.setGenero = genero;
    }
  }
}

export default new PetsServices();