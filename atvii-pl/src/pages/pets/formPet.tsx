import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Component } from "react";

class FormPet extends Component {
  render() {
    return (
      <form action="">
        <div className="flex flex-col w-full items-center justify-center">
          <h1 className="text-2xl font-bold mb-10">Cadastrar novo Pet</h1>
          <Card className="w-1/2 p-4">
            <Label htmlFor="name">Nome do Pet</Label>
            <Input id="name" />

            <Label htmlFor="breed">Raça do Pet</Label>
            <Input id="breed" />

            <Label htmlFor="gender">Genero do Pet</Label>
            <Input id="gender" />

            <Label htmlFor="type">Tipo do Pet</Label>
            <Input id="type" />

            <Label htmlFor="owner">CPF do Dono</Label>
            <Input id="owner'" />

            <Button className="mt-4">
              Cadastrar
            </Button>
          </Card>
        </div >
      </form>
    )
  }
}

export default FormPet;