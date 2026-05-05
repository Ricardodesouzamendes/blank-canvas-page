import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

function NotFound() {
  return (
    <div className="mx-auto max-w-2xl py-24 text-center">
      <h1 className="text-6xl font-bold tracking-tight text-slate-900">404</h1>
      <p className="mt-4 text-lg text-slate-600">Page not found</p>
      <p className="mt-2 text-slate-500">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-white shadow-sm hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
      >
        Go home
      </Link>
    </div>
  )
}

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white text-slate-900 antialiased">
      <Outlet />
    </div>
  ),
  notFoundComponent: NotFound,
})
