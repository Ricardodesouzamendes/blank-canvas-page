import * as React from "react";
import Link from "next/link";

export type BlueHeroCta = {
  label: string;
  href: string;
};

export type BlueHeroProps = {
  title: string;
  /** Palavra/trecho destacado no título, com gradiente azul */
  highlight?: string;
  subtitle?: string;
  ctaPrimary?: BlueHeroCta;
  ctaSecondary?: BlueHeroCta;
  className?: string;
};

/**
 * BlueHero — seção de hero com estética moderna em tons de azul.
 *
 * Não depende de nenhum estado client-side. Pode ser usado em Server Components.
 */
export default function BlueHero({
  title,
  highlight,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  className,
}: BlueHeroProps) {
  const sectionClass = [
    "relative overflow-hidden",
    // Fundo com gradiente azul suave
    "bg-gradient-to-b from-blue-50 via-white to-blue-50",
    // Espaçamento padrão de landing
    "py-20 md:py-28",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClass}>
      {/* Brilho radial sutil no topo */}
      <div
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]"
        aria-hidden
      >
        <div className="absolute inset-x-0 -top-20 h-72 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.25),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {title}{" "}
            {highlight ? (
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {highlight}
              </span>
            ) : null}
          </h1>

          {subtitle ? (
            <p className="mt-6 text-pretty text-lg text-slate-600 sm:text-xl">
              {subtitle}
            </p>
          ) : null}

          {(ctaPrimary || ctaSecondary) && (
            <div className="mt-10 flex items-center justify-center gap-4">
              {ctaPrimary ? (
                <Link
                  href={ctaPrimary.href}
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
                >
                  {ctaPrimary.label}
                </Link>
              ) : null}

              {ctaSecondary ? (
                <Link
                  href={ctaSecondary.href}
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
                >
                  {ctaSecondary.label}
                </Link>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
