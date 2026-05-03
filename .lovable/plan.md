## System prompt para agente de IA dev (continuidade GitHub ↔ Lovable)

Gerar um arquivo markdown único contendo um system prompt pronto para colar em outro agente de IA (ex.: Cursor, Claude Code, Copilot Workspace, Devin) que vá trabalhar no repositório GitHub sincronizado com este projeto Lovable, **sem quebrar a sincronização bidirecional** nem as convenções já estabelecidas.

### Onde será criado

- `/mnt/documents/lovable-handoff-system-prompt.md` (artefato baixável)
- Também salvar uma cópia em `docs/AGENT_SYSTEM_PROMPT.md` no repo, para ficar versionada junto ao código.

### Conteúdo do system prompt (seções)

1. **Identidade e missão** — agente dev que continua o projeto "Linea" (landing SaaS minimalista) compartilhado entre Lovable e GitHub via sync bidirecional.
2. **Stack travada** (não trocar sem pedido explícito):
   - TanStack Start v1 + React 19 + Vite 7
   - Tailwind v4 via `src/styles.css` (sem `tailwind.config.js`)
   - shadcn/ui em `src/components/ui/*` + lucide-react
   - Bun como package manager, deploy alvo Cloudflare Workers (`wrangler.jsonc`)
3. **Convenções de roteamento** (file-based em `src/routes/`, nunca `src/pages/`, nunca React Router DOM, não editar `routeTree.gen.ts`, root é `__root.tsx`).
4. **Regras de servidor** — `createServerFn` em `src/server/*.functions.ts`, helpers em `*.server.ts`, restrições do runtime Worker (sem `child_process`, `sharp`, `puppeteer` etc.).
5. **Segurança** — roles em tabela separada `user_roles` + função `has_role` SECURITY DEFINER; nunca confiar em localStorage para auth.
6. **Regras para não quebrar o sync com Lovable**:
   - Não renomear/mover `src/router.tsx`, `src/routes/__root.tsx`, `src/routes/index.tsx`, `src/styles.css`, `components.json`, `wrangler.jsonc`, `vite.config.ts`.
   - Não commitar `routeTree.gen.ts` editado à mão.
   - Manter Bun + scripts do `package.json` como estão.
   - Preferir PRs pequenos e atômicos; mensagens de commit em português curto.
   - Não introduzir frameworks alternativos (Next, Remix, RR DOM, Angular, Vue).
   - Não adicionar `entry-client.tsx` / `entry-server.tsx` (padrão pré-1.0).
   - Branches longas devem ser rebased contra `main` antes de merge para evitar conflito com edições feitas no Lovable.
7. **Estilo da landing já definido** — fundo branco, acento sutil, tipografia limpa, componentes shadcn com bordas finas; manter tom minimalista nas próximas features.
8. **Workflow recomendado** — clone → `bun install` → `bun run dev` → editar → PR. Nunca rodar migrations destrutivas sem aprovação.
9. **Comunicação** — responder em português (pt-BR), ser conciso, mostrar diffs ao invés de arquivos inteiros quando possível.
10. **Checklist antes de cada commit** — typecheck, build, sem imports não resolvidos, sem placeholders.

### Entrega

Após criar os dois arquivos, emitir tag `<lov-artifact>` apontando para `lovable-handoff-system-prompt.md` para download imediato.