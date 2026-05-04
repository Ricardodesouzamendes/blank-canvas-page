export function FeatureSection() {
  const features = [
    { title: 'Rápido', desc: 'Performance de ponta com SSR moderno.' },
    { title: 'Simples', desc: 'Interface limpa, foco no essencial.' },
    { title: 'Escalável', desc: 'Cresce junto com o seu time.' },
  ];
  return (
    <section className="container py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl md:text-5xl tracking-tight">Recursos</h2>
        <p className="mt-4 text-muted-foreground">Tudo que você precisa, nada que você não precisa.</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="rounded-lg border border-border p-6">
            <h3 className="font-medium text-lg">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
