import * as React from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { requireAuth } from "@/auth/requireAuth";
import { clearSession, getSession } from "@/auth/session";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/app")({
  beforeLoad: ({ location }) => requireAuth({ location }),
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { title: "App — Dashboard" },
      { name: "description", content: "Área protegida do aplicativo." },
    ],
  }),
  component: AppPage,
});

function AppPage() {
  const navigate = useNavigate();
  const session = React.useMemo(() => getSession(), []);
  const name = session?.user?.name ?? "usuário";

  async function onLogout() {
    clearSession();
    await navigate({ to: "/login" });
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Bem-vindo, {name}</h1>
      <p className="mt-2 text-muted-foreground">
        Esta é a sua área logada. Em breve adicionaremos cards, métricas e atalhos.
      </p>
      <div className="mt-8">
        <Button variant="outline" onClick={onLogout}>Sair</Button>
      </div>
    </main>
  );
}
