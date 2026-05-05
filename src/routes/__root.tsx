import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import "@/styles.css";

export const Route = createRootRoute({
  component: Root,
  notFoundComponent: NotFound,
});

function Root() {
  // Baseline estável: nenhum wrapper que altere o tema; apenas renderiza as rotas
  return <Outlet />;
}

function NotFound() {
  return (
    <div className="mx-auto max-w-2xl py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight">404</h1>
      <p className="mt-2 text-muted-foreground">Page not found</p>
      <div className="mt-6">
        <Link to="/" className="underline">
          Go home
        </Link>
      </div>
    </div>
  );
}
