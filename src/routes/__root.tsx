import { createRootRoute, Outlet } from '@tanstack/react-router'
import '../styles.css'

function RootWrapper() {
  return (
    <div className="min-h-dvh bg-background text-foreground antialiased">
      <Outlet />
    </div>
  )
}

function NotFound() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center gap-2 p-6 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-muted-foreground">Page not found</p>
      <a href="/" className="underline underline-offset-4">Go home</a>
    </div>
  )
}

export const Route = createRootRoute({
  component: RootWrapper,
  notFoundComponent: NotFound,
})
