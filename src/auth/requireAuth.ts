import { redirect } from "@tanstack/react-router";
import { isAuthenticated } from "@/auth/session";

// Helper para ser usado em beforeLoad das rotas protegidas
export function requireAuth({ location }: { location: { href?: string } }) {
  if (!isAuthenticated()) {
    throw redirect({
      to: "/login",
      search: { redirect: location?.href ?? "/app" },
    });
  }
  return {};
}
