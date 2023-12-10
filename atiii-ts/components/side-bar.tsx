'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { ModeToggle } from "./toggle-mode"
import { usePathname, useRouter } from "next/navigation"
import clsx from "clsx"
import Link from "next/link"

export function SheetDemo() {
  const pathname = usePathname()

  console.log(pathname)
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><Menu /></Button>
      </SheetTrigger>
      <SheetContent side={'left'} className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            Navegue
          </SheetDescription>
        </SheetHeader>

        <Button variant='outline' className={clsx(
          { 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4': pathname === '/' },
        )}>
          <Link className="w-full" href={'/'}>
            Inicio
          </Link>
        </Button>

        <Button variant='outline' className={clsx(
          { 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4': pathname === '/usuario/create' },
        )}>
          <Link className="w-full" href={'/usuario/create'}>
            Cadastrar Novo Cliente
          </Link>
        </Button>

        <Button variant='outline' className={clsx(
          { 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4': pathname === '/usuario' },
        )}>
          <Link className="w-full" href={'/usuario'}>
            Clientes
          </Link>
        </Button>
      </SheetContent>
    </Sheet >
  )
}
