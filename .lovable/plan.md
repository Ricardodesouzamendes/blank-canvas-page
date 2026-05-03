## Landing page SaaS — minimalista clara

Substituir a página placeholder em `src/routes/index.tsx` por uma landing page de SaaS, estilo minimalista (fundo claro, muito espaço em branco, tipografia limpa, acentos sutis).

### Seções da página

1. **Navbar** — logo à esquerda, links âncora (Recursos, Preços, FAQ), botão "Começar" à direita.
2. **Hero** — título grande, subtítulo, CTA primário + secundário, espaço para mockup/imagem ilustrativa.
3. **Logos de clientes** — faixa discreta com "Usado por equipes de" + logos placeholder.
4. **Recursos** — grid 3 colunas com ícones (lucide-react), título e descrição curta.
5. **Como funciona** — 3 passos numerados em linha.
6. **Depoimentos** — 2-3 cards com citação, nome e cargo.
7. **Preços** — 3 planos (Starter / Pro / Enterprise) com destaque no plano do meio.
8. **FAQ** — accordion com 4-5 perguntas comuns.
9. **CTA final** — bloco destacado convidando ao cadastro.
10. **Footer** — links, copyright, redes sociais.

### Estilo

- Fundo branco, texto escuro neutro, um único tom de acento (azul sóbrio) para CTAs e destaques.
- Tipografia: pesos contrastantes (títulos bold grandes, corpo leve).
- Cards com bordas finas em vez de sombras pesadas.
- Espaçamento vertical generoso entre seções.
- Totalmente responsivo (mobile-first).

### Detalhes técnicos

- Editar apenas `src/routes/index.tsx` (rota única `/`).
- Usar componentes shadcn já disponíveis: `button`, `card`, `accordion`, `badge`.
- Ícones via `lucide-react`.
- Atualizar `head()` do root ou da rota com title/description adequados ao SaaS.
- Sem backend, sem novas dependências.
