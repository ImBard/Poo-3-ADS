import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Component } from "react";

class FormServico extends Component {
  render() {
    return (
      <form action="">
        <div className="flex flex-col w-full items-center justify-center">
          <h1 className="text-2xl font-bold mb-10">Cadastrar novo Serviço</h1>
          <Card className="w-1/2 p-4">
            <Label htmlFor="name">Nome do Serviço</Label>
            <Input id="name"/>
      
            <Label htmlFor="value">Valor do Serviço</Label>
            <Input id="value"/>

            <Button className="mt-4">
              Cadastrar
            </Button>
          </Card>
        </div >
      </form>
    )
  }
}

export default FormServico;