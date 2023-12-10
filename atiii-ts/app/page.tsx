import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <h1 className='text-2xl'>ATIVIDADE-III</h1>
      <Button>
        <Link href="/usuario">
          Navegar
        </Link>
      </Button>
    </main>
  )
}
