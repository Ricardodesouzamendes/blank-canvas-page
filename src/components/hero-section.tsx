import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="container py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Linea
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          A plataforma simples para times que entregam.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">Começar agora</Button>
          <Button size="lg" variant="outline">Saiba mais</Button>
        </div>
      </div>
    </section>
  );
}
