// http://localhost:32831/cliente/clientes
// http://localhost:32831/cliente/{id}
// http://localhost:32831/cliente/cadastrar
// http://localhost:32831/cliente/excluir
// http://localhost:32831/cliente/atualizar


export type Client = {
  id?: number
  nome: string
  nomeSocial: string
  email?: string | null
  endereco: Address;
  telefones: Phones[];
}

export type Phones = {
  id?: number;
  numero: string;
  ddd: string;
}

export type Address = {
  id?: number;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  codigoPostal: string;
  informacoesAdicionais: string;
}

export type ViaCep = {
  cep: string,
  logradouro: string,
  complemento: string | undefined,
  bairro: string,
  localidade: string,
  uf: string,
  ibge: string,
  gia: string,
  ddd: string,
  siafi: string,
}