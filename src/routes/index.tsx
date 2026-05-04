import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  staticData: {
    title: 'Linea33333333333333',
    description: 'A minimal SaaS landing page template.'
  },
  component: () => {
    return (
      <div className="min-h-screen bg-background font-sans antialiased">
        {/* Hero Section */}
        <section className="relative flex h-screen items-center justify-center text-center">
          <div className="absolute inset-0 -z-10 bg-[url('/hero-bg.svg')] bg-cover bg-center opacity-10"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl leading-tight">
              Linea
            </h1>
            <p className="mt-4 text-xl text-muted-foreground md:text-2xl">
              A minimal SaaS landing page template.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Get Started
              </a>
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section id="features" className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Features that make your life easier
            </h2>
            <p className="mx-auto mt-4 max-w-[900px] text-center text-lg text-muted-foreground md:text-xl">
              Linea provides all the essential tools you need to launch and grow
              your SaaS product.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h3 className="text-xl font-bold">Feature One</h3>
                <p className="mt-2 text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h3 className="text-xl font-bold">Feature Two</h3>
                <p className="mt-2 text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h3 className="text-xl font-bold">Feature Three</h3>
                <p className="mt-2 text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h3 className="text-xl font-bold">Feature Four</h3>
                <p className="mt-2 text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h3 className="text-xl font-bold">Feature Five</h3>
                <p className="mt-2 text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h3 className="text-xl font-bold">Feature Six</h3>
                <p className="mt-2 text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="cta" className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container px-4 text-center md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-4 max-w-[800px] text-lg md:text-xl">
              Join thousands of satisfied customers and start experiencing the
              benefits of Linea today.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary-foreground px-8 text-base font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Sign Up Now
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-muted py-12 text-muted-foreground">
          <div className="container px-4 text-center md:px-6">
            <p className="text-sm">
              &copy; 2024 Linea. All rights reserved.
            </p>
            <nav className="mt-4 space-x-4">
              <a href="#" className="text-sm hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:underline">
                Terms of Service
              </a>
            </nav>
          </div>
        </footer>
      </div>
    )
  },
})
