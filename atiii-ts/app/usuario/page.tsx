import { TableUsers } from "@/components/table";
import { Card } from "@/components/ui/card";
import { Suspense } from "react";

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <Suspense fallback={<p>Loading...</p>}>
          <Card>
            <TableUsers />
          </Card>
        </Suspense>
      </main>
    </div>
  )
}