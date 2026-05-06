import * as React from "react";
import { createFileRoute, Link, useNavigate, useSearch } from "@tanstack/react-router";
import { z } from "zod";
import { login as loginService } from "@/services/auth";
import { setSession } from "@/auth/session";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const schema = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z.string().min(6, { message: "Mínimo de 6 caracteres" }),
});

type FormState = {
  email: string;
  password: string;
};

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { title: "Entrar" },
      { name: "description", content: "Faça login para acessar a área logada." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const search = useSearch({ from: "/login" }) as { redirect?: string };
  const [form, setForm] = React.useState<FormState>({ email: "", password: "" });
  const [error, setError] = React.useState<string | null>(null);
  const [submitting, setSubmitting] = React.useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const first = parsed.error.issues[0]?.message ?? "Dados inválidos";
      setError(first);
      return;
    }
    setSubmitting(true);
    try {
      const session = await loginService(parsed.data);
      setSession(session);
      await navigate({ to: search?.redirect ?? "/app" });
    } catch (err: any) {
      setError(err?.message ?? "Falha ao entrar");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <Card>
        <CardHeader>
          <CardTitle>Entrar</CardTitle>
          <CardDescription>Acesse sua conta para continuar</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-4 rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
              {error}
            </div>
          )}
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={form.email}
                onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••"
                value={form.password}
                onChange={(e) => setForm((s) => ({ ...s, password: e.target.value }))}
                required
                minLength={6}
              />
            </div>
            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? "Entrando..." : "Entrar"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          <span>
            Não tem conta? <Link to="/registrar" className="underline">Crie uma agora</Link>
          </span>
        </CardFooter>
      </Card>
    </div>
  );
}
