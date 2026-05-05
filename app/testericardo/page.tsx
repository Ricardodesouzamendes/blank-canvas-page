export const metadata = {
  title: "Oi mundo — testericardo",
  description: "Rota de teste exibindo 'oi mundo'.",
};

export default function TestericardoPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">oi mundo</h1>
      <p className="mt-4 text-muted-foreground">
        Página de teste criada para validação da rota /testericardo.
      </p>
    </main>
  );
}
