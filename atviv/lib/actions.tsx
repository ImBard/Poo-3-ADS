import { clientSchema } from "@/schemas/clientSchema";
import { Client } from "@/types/table";
import axios from "axios";
import { create } from "domain";
import { z } from "zod";

export async function getClients(): Promise<Client[]> {
  try {
    const response = await axios.get("http://localhost:32831/cliente/clientes", {
      validateStatus: function (status) {
        return true
      }
    });

    const data = response.data;

    return z.array(clientSchema).parse(data);
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
    throw error; // rethrow the error to handle it elsewhere if needed
  }
}


export async function createClient(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  console.log(data)
  fetch('http://localhost:32831/cliente/cadastrar', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}