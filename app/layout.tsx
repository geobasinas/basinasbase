'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from "./components/Footer"
import { ThemeProvider } from "@/app/components/theme-provider"
import { ThemeToggle } from "@/app/components/theme-toggle"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
            <div className="fixed bottom-4 right-4">
              <ThemeToggle />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}