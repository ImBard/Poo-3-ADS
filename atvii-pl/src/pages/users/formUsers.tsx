import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Component } from "react";

class FormUsers extends Component {
  render() {
    return (
      <form action="">
        <div className="flex flex-col w-full items-center justify-center">
          <h1 className="text-2xl font-bold mb-10">Cadastrar novo Cliente</h1>
          <Card className="w-1/2 p-4">
            <Label htmlFor="name">Nome do Cliente</Label>
            <Input id="name" />

            <Label htmlFor="nickname">Nome Social do Cliente</Label>
            <Input id="nickname" />

            <Label htmlFor="cpf">CPF</Label>
            <Input id="cpf" />

            <Label htmlFor="date-cpf">Data de Emissao do CPf</Label>
            <Input id="date-cpf" type="date" />

            <Button className="mt-4">
              Cadastrar
            </Button>
          </Card>
        </div >
      </form>
    )
  }
}

export default FormUsers;