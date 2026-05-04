import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
  head: () => (
    <>
      <title>Linea222222222222222</title>
      <meta name="description" content="A minimal SaaS landing page template built with TanStack Start and Tailwind CSS." />
    </>
  ),
})

function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-theme(spacing.16))]">
      <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
        Linea222222222222222
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        A minimal SaaS landing page template built with TanStack Start and Tailwind CSS.
      </p>
    </div>
  )
}
