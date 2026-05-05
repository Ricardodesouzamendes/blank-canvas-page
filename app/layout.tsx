export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
