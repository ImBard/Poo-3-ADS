import { columns } from "@/components/data-columns";
import { DataTable } from "@/components/data-table";
import { Card, CardHeader } from "@/components/ui/card";
import { getClients } from "@/lib/actions";
import { Suspense } from "react";

export default async function Page() {

  const data = await getClients();

  return (
    <main>
      <div className="flex w-full justify-center">
        
        <Suspense fallback={<p>Loading...</p>}>
          <Card className="p-4">
            <CardHeader>
            <h1 className="text-2xl">Clientes</h1>
            </CardHeader>
            <DataTable data={data} columns={columns} />
          </Card>
        </Suspense>
      </div>
    </main>
  )
}