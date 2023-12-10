import { SelectGender } from "@/components/form-select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function Page() {

  return (
    <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
      <Card>
        <CardHeader>
          <h1>Cadastrar Novo Cliente</h1>
        </CardHeader>
        <CardContent className="flex flex-col items-start">

          <Label className="mb-2 mt-4" htmlFor="name">
            Nome
          </Label>
          <Input id="name" name="name" />

          <Label className="mb-2 mt-4" htmlFor="email">
            Email
          </Label>
          <Input id="email" name="email" />

          <Label className="mb-2 mt-4" htmlFor="gender">
            Sexo
          </Label>
          <SelectGender id="gender" name="gender" />

          <Label className="mb-2 mt-4" htmlFor="cpf">
            CPF
          </Label>
          <Input id="cpf" name="cpf" />
        </CardContent>

        <CardFooter>
          <Button className="w-full">Cadastrar</Button>
        </CardFooter>

      </Card>
    </main>
  )
}