'use client'

import { FormFirstStep, FormSecondStep } from "@/components/forms/create-client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/actions";
import { ViaCep } from "@/types/table";
import clsx from "clsx";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function Page() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<ViaCep | null>(null);
  const [cep, setCep] = useState('')
  const [value, setValue] = useState({
    nome: '',
    email: '',
    nomeSocial: '',
    telefone: '',
    ddd: '',
    cep: '',
  })

  const getCep = useDebouncedCallback(async (cep: string) => {
    await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setCep(cep);
      })
      .catch((err) => console.log(err));
  }, 300)

  const handleValues = (name: string, value: string) => {
    setValue((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="flex justify-center">
        <Card className="w-1/2">
          <CardHeader>
            <div className="flex gap-4 items-center">
              <h1 className={
                clsx("w-full text-2xl font-semibold border-b-2 text-center", {
                  'border-blue-500': currentStep === 0
                })}>
                Dados do Cliente
              </h1>

              <h1 className={
                clsx("w-full text-2xl font-semibold border-b-2 text-center", {
                  'border-blue-500': currentStep === 1
                })}>
                Endereço
              </h1>
            </div>
          </CardHeader>
          <form action={createClient}>

            <CardContent>
              {currentStep === 0 && (
                <FormFirstStep
                  value={value}
                  handleValues={handleValues}
                />
              )}
              {currentStep === 1 && (
                <FormSecondStep getCep={getCep} data={data} cep={cep} />
              )}

            </CardContent>

            <CardFooter className="flex items-center justify-end gap-4 w-full">
              {currentStep === 0 && (
                <>
                  <Button disabled>
                    Anterior
                  </Button>
                  <Button onClick={() => setCurrentStep(1)} type="button">
                    Proximo
                  </Button>
                </>
              )}
              {currentStep >= 1 && (
                <>
                  <Button onClick={() => setCurrentStep(0)} type="button">
                    Anterior
                  </Button>
                  <Button type="submit">
                    Cadastrar
                  </Button>
                </>
              )}

            </CardFooter>
          </form>
        </Card>
      </div>
    </main>
  )
}