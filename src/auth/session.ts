import { z } from "zod";
import type { Session } from "@/types/auth";

const STORAGE_KEY = "app.session";

const UserSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  email: z.string().email(),
  role: z.enum(["customer", "agent", "admin"]),
});

const SessionSchema = z.object({
  token: z.string().min(1),
  user: UserSchema,
  createdAt: z.number().int().nonnegative(),
});

export function getSession(): Session | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    const result = SessionSchema.safeParse(parsed);
    if (!result.success) {
      // dado inválido armazenado — limpa para evitar estados inconsistentes
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return result.data as Session;
  } catch {
    return null;
  }
}

export function setSession(session: Session) {
  const result = SessionSchema.safeParse(session);
  if (!result.success) {
    throw new Error("Sessão inválida ao tentar persistir");
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(result.data));
}

export function clearSession() {
  localStorage.removeItem(STORAGE_KEY);
}

export function isAuthenticated(): boolean {
  return !!getSession();
}
