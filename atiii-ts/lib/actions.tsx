'use server'

import { User } from "@/types/types";


export async function getUsers(): Promise<User[]> {
  const response = await fetch('https://6574f0c7b2fbb8f6509ccc48.mockapi.io/api/pl/clientes/clientes');
  const data = await response.json();
  return data;
}
