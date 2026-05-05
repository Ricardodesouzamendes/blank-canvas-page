export const metadata = {
  title: 'Oi mundo — testericardo',
  description: 'Página de teste simples exibindo "oi mundo".',
}

export default function TestericardoPage() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-semibold">oi mundo</h1>
      <p className="mt-2 text-muted-foreground">
        Rota de teste /testericardo criada para validação rápida.
      </p>
    </main>
  )
}
