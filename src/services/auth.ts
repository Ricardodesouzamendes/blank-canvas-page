import { z } from "zod";
import type { Session, RegisterInput, AuthCredentials, User } from "@/types/auth";

const emailSchema = z.string().email();
const passwordSchema = z.string().min(6, "Senha deve ter ao menos 6 caracteres");
const nameSchema = z.string().min(2, "Nome muito curto");

function delay(ms = 600) {
  return new Promise((res) => setTimeout(res, ms));
}

function makeUser(nameOrEmail: { name?: string; email: string }): User {
  const baseName = nameOrEmail.name ?? nameOrEmail.email.split("@")[0];
  return {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    name: baseName.charAt(0).toUpperCase() + baseName.slice(1),
    email: nameOrEmail.email,
    role: "customer",
  };
}

function makeSession(user: User): Session {
  return {
    token: `mock-${Math.random().toString(36).slice(2)}`,
    user,
    createdAt: Date.now(),
  };
}

export async function login(input: AuthCredentials): Promise<Session> {
  const email = emailSchema.parse(input.email);
  const password = passwordSchema.parse(input.password);
  await delay();
  const user = makeUser({ email });
  if (!password) {
    throw new Error("Credenciais inválidas");
  }
  return makeSession(user);
}

export async function register(input: RegisterInput): Promise<Session> {
  const name = nameSchema.parse(input.name);
  const email = emailSchema.parse(input.email);
  const password = passwordSchema.parse(input.password);
  await delay();
  // mock: aceita sempre, desde que passe na validação
  const user = makeUser({ name, email });
  if (!password) {
    throw new Error("Dados inválidos");
  }
  return makeSession(user);
}
