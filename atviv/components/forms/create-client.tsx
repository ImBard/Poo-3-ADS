import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useDebouncedCallback } from 'use-debounce';
import { ViaCep } from "@/types/table";

interface FormFirstProps {
  handleValues: (name: string, value: string) => void;
  name?: string;
  email?: string;
  socialName?: string;
  value: {
    nome: string;
    email: string;
    nomeSocial: string;
    telefone: string;
    ddd: string;
  }
}

export function FormFirstStep({ handleValues, name, email, socialName, value }: FormFirstProps) {
  return (
    <>
      <Label className="mb-2 mt-4 flex" htmlFor="nome">Nome</Label>
      <Input
        className="w-full"
        placeholder="Digite o nome do cliente"
        id="nome"
        name="nome"
        type="text"
        value={value.nome}
        onChange={(event) => handleValues(event.target.name, event.target.value)}
      />

      <Label className="mb-2 mt-4 flex" htmlFor="nomeSocial">Nome Social</Label>
      <Input
        className="w-full"
        placeholder="Digite o nome social do cliente"
        id="nomeSocial"
        name="nomeSocial"
        type="text"
        value={value.nomeSocial}
        onChange={(event) => handleValues(event.target.name, event.target.value)}
      />

      <Label className="mb-2 mt-4 flex" htmlFor="email">Email</Label>
      <Input
        type="email"
        className="w-full"
        placeholder="Digite o email do cliente"
        id="email"
        name="email"
        value={value.email}
        onChange={(event) => handleValues(event.target.name, event.target.value)}
      />
      <Label className="mb-2 mt-4 flex" htmlFor="telefone">Telefone</Label>
      <Input
        type="text"
        className="w-full"
        placeholder="Digite o número do telefone"
        id="telefone"
        name="telefone"
        value={value.telefone}
        onChange={(event) => handleValues(event.target.name, event.target.value)}
      />
      <Label className="mb-2 mt-4 flex" htmlFor="ddd">DDD</Label>
      <Input
        type="ddd"
        className="w-full"
        placeholder="Digite o DDD do telefone"
        id="ddd"
        name="ddd"
        value={value.ddd}
        onChange={(event) => handleValues(event.target.name, event.target.value)}
      />
    </>
  )
}

// export type Address = {
//   id?: number;
//   estado: string;
//   cidade: string;
//   bairro: string;
//   rua: string;
//   numero: string;
//   codigoPostal: string;
//   informacoesAdicionais: string;
// }

interface FormSecondStepProps {
  getCep: (cep: string) => void;
  data: ViaCep | null;
  cep: string;
}

export function FormSecondStep({ getCep, data, cep }: FormSecondStepProps) {

  return (
    <>
      <Label className="mb-2 mt-4 flex" htmlFor="codigoPostal">CEP</Label>
      <Input
        className="w-full"
        id="codigoPostal"
        name="codigoPostal"
        onChange={(event) => getCep(event.target.value)}
        defaultValue={cep}
      />

      <Label className="mb-2 mt-4 flex" htmlFor="numero">Número</Label>
      <Input
        className="w-full"
        id="numero"
        name="numero"
      />

      <Label className="mb-2 mt-4 flex" htmlFor="rua">Rua</Label>
      <Input
        className="w-full"
        id="rua"
        name="rua"
        defaultValue={data?.logradouro}
      />

      <Label className="mb-2 mt-4 flex" htmlFor="bairro">bairro</Label>
      <Input
        className="w-full"
        id="bairro"
        name="bairro"
        defaultValue={data?.bairro}
      />
      <Label className="mb-2 mt-4 flex" htmlFor="cidade">Cidade</Label>
      <Input
        className="w-full"
        id="cidade"
        name="cidade"
        defaultValue={data?.localidade}
      />
      <Label className="mb-2 mt-4 flex" htmlFor="estado">Estado</Label>
      <Input
        className="w-full"
        id="estado"
        name="estado"
        defaultValue={data?.uf}
      />
      <Label className="mb-2 mt-4 flex" htmlFor="informacoesAdicionais">Complemento</Label>
      <Input
        className="w-full"
        id="informacoesAdicionais"
        name="informacoesAdicionais"
      />
    </>
  )
}