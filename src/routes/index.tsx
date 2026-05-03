import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Check,
  Zap,
  Shield,
  BarChart3,
  Users,
  Sparkles,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Linea — A plataforma simples para times ágeis" },
      {
        name: "description",
        content:
          "Linea ajuda equipes a planejar, acompanhar e entregar trabalho com clareza. Sem ruído, só foco.",
      },
      { property: "og:title", content: "Linea — Foco para times ágeis" },
      {
        property: "og:description",
        content: "Planeje, acompanhe e entregue. Tudo em um só lugar.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground text-background">
            <Sparkles className="h-4 w-4" />
          </span>
          <span>Linea</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition-colors hover:text-foreground">
            Recursos
          </a>
          <a href="#pricing" className="transition-colors hover:text-foreground">
            Preços
          </a>
          <a href="#faq" className="transition-colors hover:text-foreground">
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Entrar
          </Button>
          <Button size="sm">Começar grátis</Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 text-center md:pt-32 md:pb-28">
        <Badge variant="secondary" className="mb-6 rounded-full px-3 py-1 font-normal">
          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-foreground" />
          Novo · Linea v2.0 disponível
        </Badge>
        <h1 className="mx-auto max-w-3xl text-balance text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
          A plataforma simples para times que entregam. Hipopotomonstrosesquipedaliofobia
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted-foreground">
          Planeje, acompanhe e entregue trabalho com clareza. Sem ruído. Sem fricção.
          Só foco.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" className="w-full sm:w-auto">
            Começar grátis
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Ver demonstração
          </Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Grátis para começar · Sem cartão de crédito
        </p>

        <div className="mx-auto mt-20 max-w-5xl">
          <div className="rounded-xl border border-border bg-card p-2 shadow-sm">
            <div className="aspect-[16/9] w-full rounded-lg bg-gradient-to-br from-muted via-background to-muted" />
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoCloud() {
  const companies = ["Northwind", "Acme Co.", "Globex", "Initech", "Umbrella", "Hooli"];
  return (
    <section className="border-y border-border/60 bg-muted/30 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
          Usado por equipes em
        </p>
        <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 md:grid-cols-6">
          {companies.map((c) => (
            <span
              key={c}
              className="text-lg font-semibold tracking-tight text-muted-foreground/70"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      icon: Zap,
      title: "Rápido como pensamento",
      desc: "Atalhos de teclado em tudo. Navegue na velocidade da sua equipe.",
    },
    {
      icon: BarChart3,
      title: "Visão clara",
      desc: "Relatórios e dashboards que mostram o que importa, sem ruído.",
    },
    {
      icon: Users,
      title: "Colaboração real",
      desc: "Comentários, menções e atualizações em tempo real.",
    },
    {
      icon: Shield,
      title: "Seguro por padrão",
      desc: "Criptografia de ponta a ponta e SSO para times empresariais.",
    },
    {
      icon: Sparkles,
      title: "Automações simples",
      desc: "Crie fluxos sem código que economizam horas toda semana.",
    },
    {
      icon: Check,
      title: "Integra com tudo",
      desc: "Slack, GitHub, Figma, Notion e mais de 50 integrações nativas.",
    },
  ];
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Tudo que sua equipe precisa.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Recursos pensados para reduzir reuniões e aumentar a clareza.
          </p>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Conecte sua equipe",
      desc: "Convide quem trabalha com você em segundos.",
    },
    {
      n: "02",
      title: "Organize o trabalho",
      desc: "Projetos, tarefas e metas em uma única vista.",
    },
    {
      n: "03",
      title: "Entregue com confiança",
      desc: "Acompanhe progresso e celebre cada entrega.",
    },
  ];
  return (
    <section className="border-t border-border/60 bg-muted/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Comece em minutos.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Três passos simples para colocar sua equipe em movimento.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="text-sm font-mono text-muted-foreground">{s.n}</div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      quote:
        "Linea mudou como nosso time trabalha. Menos reuniões, mais entregas. Simples assim.",
      name: "Marina Costa",
      role: "Head of Product, Northwind",
    },
    {
      quote:
        "Finalmente uma ferramenta que sai do caminho. A interface respira e isso muda tudo.",
      name: "Rafael Lima",
      role: "Engineering Lead, Acme",
    },
    {
      quote:
        "Adotamos em uma semana. Em um mês, ninguém quer voltar para o que usávamos antes.",
      name: "Ana Pereira",
      role: "COO, Globex",
    },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Times que já confiam na Linea.
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <Card key={q.name} className="border-border/80 p-8 shadow-none">
              <p className="text-base leading-relaxed">"{q.quote}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium">{q.name}</p>
                <p className="text-xs text-muted-foreground">{q.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Grátis",
      desc: "Para indivíduos começando.",
      features: ["Até 3 projetos", "Membros ilimitados", "Integrações básicas"],
      cta: "Começar grátis",
      featured: false,
    },
    {
      name: "Pro",
      price: "R$ 39",
      period: "/usuário/mês",
      desc: "Para times em crescimento.",
      features: [
        "Projetos ilimitados",
        "Automações avançadas",
        "Relatórios e dashboards",
        "Suporte prioritário",
      ],
      cta: "Começar teste de 14 dias",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Para grandes organizações.",
      features: ["SSO e SCIM", "SLA dedicado", "Compliance customizado"],
      cta: "Falar com vendas",
      featured: false,
    },
  ];
  return (
    <section id="pricing" className="border-t border-border/60 bg-muted/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Preço simples, transparente.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Escolha o plano certo para o tamanho da sua equipe.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <Card
              key={p.name}
              className={
                p.featured
                  ? "relative border-foreground p-8 shadow-md"
                  : "border-border/80 p-8 shadow-none"
              }
            >
              {p.featured && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Mais popular
                </Badge>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
                {p.period && (
                  <span className="text-sm text-muted-foreground">{p.period}</span>
                )}
              </div>
              <Button
                className="mt-6 w-full"
                variant={p.featured ? "default" : "outline"}
              >
                {p.cta}
              </Button>
              <ul className="mt-8 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Posso usar o plano grátis para sempre?",
      a: "Sim. O plano Starter é gratuito para sempre, sem cartão de crédito.",
    },
    {
      q: "Como funciona o teste do plano Pro?",
      a: "Você tem 14 dias com todos os recursos do Pro. Cancele a qualquer momento.",
    },
    {
      q: "Vocês oferecem desconto para times grandes?",
      a: "Sim, temos descontos por volume a partir de 25 usuários. Fale com vendas.",
    },
    {
      q: "Meus dados estão seguros?",
      a: "Usamos criptografia em trânsito e em repouso, com auditorias SOC 2 anuais.",
    },
    {
      q: "Posso migrar de outra ferramenta?",
      a: "Importamos dados de Jira, Asana, Trello, Notion e mais com poucos cliques.",
    },
  ];
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Perguntas frequentes.
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="px-6 pb-24 md:pb-32">
      <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-foreground px-8 py-16 text-center text-background md:py-20">
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Comece a entregar mais hoje.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm opacity-80">
          Junte-se a milhares de equipes que já trocaram caos por clareza.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" variant="secondary">
            Começar grátis
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground text-background">
                <Sparkles className="h-4 w-4" />
              </span>
              <span>Linea</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              © {new Date().getFullYear()} Linea Inc. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacidade</a>
            <a href="#" className="hover:text-foreground">Termos</a>
            <a href="#" className="hover:text-foreground">Contato</a>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <a href="#" aria-label="Twitter" className="hover:text-foreground">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-foreground">
              <Github className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-foreground">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
