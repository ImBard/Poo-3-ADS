import { z } from "zod";

export const clientSchema = z.object({
  id: z.number().optional(),
  nome: z.string(),
  nomeSocial: z.string(),
  email: z.string().email().optional().nullable(),
  endereco: z.object({
    id: z.number().optional(),
    estado: z.string(),
    cidade: z.string(),
    bairro: z.string(),
    rua: z.string(),
    numero: z.string(),
    codigoPostal: z.string(),
    informacoesAdicionais: z.string(),
  }),
  telefones: z.array(z.object({
    id: z.number().optional(),
    numero: z.string(),
    ddd: z.string(),
  })),
});