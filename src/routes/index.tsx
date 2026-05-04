import { createFileRoute } from '@tanstack/react-router';
import { HeroSection } from '@/components/hero-section';
import { FeatureSection } from '@/components/feature-section';
import { PricingSection } from '@/components/pricing-section';
import { CallToAction } from '@/components/call-to-action';
import { FAQSection } from '@/components/faq-section'; // Importe o componente FAQSection

export const Route = createFileRoute('/')({
  component: () => (
    <main>
      <HeroSection />
      <FeatureSection />
      <PricingSection />
      <FAQSection /> {/* Adicione o componente FAQSection aqui */}
      <CallToAction />
    </main>
  ),
  head: () => ({
    meta: [
      { title: 'Linea - Minimalist SaaS Landing Page' },
      { name: 'description', content: 'A minimalist and clear SaaS landing page template built with TanStack Start, React 19, and Tailwind CSS.' },
      { property: 'og:title', content: 'Linea - Minimalist SaaS Landing Page' },
      { property: 'og:description', content: 'A minimalist and clear SaaS landing page template built with TanStack Start, React 19, and Tailwind CSS.' },
      { property: 'og:type', content: 'website' },
    ],
  }),
});
