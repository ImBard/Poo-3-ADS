import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectGenderProps {
  id: string;
  name: string;
}

export function SelectGender({ id, name }: SelectGenderProps) {
  return (
    <Select name={name}>
      <SelectTrigger id={id} className="w-full">
        <SelectValue placeholder="Selecione" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sexo</SelectLabel>
          <SelectItem value="apple">Masculino</SelectItem>
          <SelectItem value="banana">Feminino</SelectItem>
          <SelectItem value="blueberry">Outro</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
