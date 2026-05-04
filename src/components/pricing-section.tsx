import { Button } from '@/components/ui/button';

export function PricingSection() {
  const plans = [
    { name: 'Starter', price: 'R$ 0', features: ['Até 3 projetos', 'Suporte comunitário'] },
    { name: 'Pro', price: 'R$ 49', features: ['Projetos ilimitados', 'Suporte prioritário'] },
  ];
  return (
    <section className="container py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl md:text-5xl tracking-tight">Preços</h2>
        <p className="mt-4 text-muted-foreground">Comece grátis. Cresça quando precisar.</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
        {plans.map((p) => (
          <div key={p.name} className="rounded-lg border border-border p-8">
            <h3 className="font-medium text-xl">{p.name}</h3>
            <p className="mt-2 text-3xl font-bold">{p.price}<span className="text-base font-normal text-muted-foreground">/mês</span></p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {p.features.map((f) => <li key={f}>• {f}</li>)}
            </ul>
            <Button className="mt-6 w-full">Escolher</Button>
          </div>
        ))}
      </div>
    </section>
  );
}
