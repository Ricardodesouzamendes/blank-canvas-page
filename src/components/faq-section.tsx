
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'O que é Linea?',
    answer: 'Linea é uma landing page SaaS minimalista e clara, projetada para apresentar seu produto ou serviço de forma eficaz.',
  },
  {
    question: 'Como Linea pode me ajudar?',
    answer: 'Linea ajuda você a lançar rapidamente uma presença online profissional, focando na clareza e na conversão, sem a complexidade de um site completo.',
  },
  {
    question: 'Posso personalizar o Linea?',
    answer: 'Sim, Linea é construído com Tailwind CSS e shadcn/ui, permitindo personalização fácil e flexível para se adequar à sua marca.',
  },
  {
    question: 'É responsivo para dispositivos móveis?',
    answer: 'Absolutamente! Linea é desenvolvido com uma abordagem mobile-first, garantindo uma excelente experiência em qualquer dispositivo.',
  },
];

export function FAQSection() {
  return (
    <section className="container py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Perguntas Frequentes
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Respostas para as perguntas mais comuns sobre Linea.
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-2xl">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
