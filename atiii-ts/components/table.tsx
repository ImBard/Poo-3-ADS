import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { User } from "@/types/types";
import { useCallback, useEffect, useState } from "react";
import { ProfilePicture } from "./ProfilePicture";
import { getUsers } from "@/lib/actions";



export async function TableUsers() {
  const users = await getUsers();

  const fackCPf = (cpf: string) => {
    const nCPF = (Number(cpf) * 12345678910).toString();
    return nCPF.substring(0, 3) + '.' + nCPF.substring(3, 6) + '.' + nCPF.substring(6, 9) + '-' + nCPF.substring(9, 11);
  }

  return (
    <Table>
      <TableCaption>Clientes.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Sexo</TableHead>
          <TableHead>CPF</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.name}>
            <TableCell className="font-medium flex items-center gap-4">
              <ProfilePicture image={user.avatar} fallback={user.name} />
              {user.name}
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.gender}</TableCell>
            <TableCell className="text-right">{fackCPf(user.cpf)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
