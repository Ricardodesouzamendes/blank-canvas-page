import { Button } from '@/components/ui/button';

export function CallToAction() {
  return (
    <section className="container py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl md:text-5xl tracking-tight">Pronto para começar?</h2>
        <p className="mt-4 text-muted-foreground">Crie sua conta e comece em minutos.</p>
        <Button size="lg" className="mt-8">Começar agora</Button>
      </div>
    </section>
  );
}
