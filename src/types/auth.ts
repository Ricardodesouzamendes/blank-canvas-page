export type Role = "customer" | "agent" | "admin";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
};

export type Session = {
  token: string;
  user: User;
  createdAt: number; // epoch ms
};

export type AuthCredentials = {
  email: string;
  password: string;
};

export type RegisterInput = {
  name: string;
} & AuthCredentials;
