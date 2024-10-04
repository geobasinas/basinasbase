'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from "./components/Footer"
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', darkMode.toString())
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <html lang="en" className={darkMode ? 'dark' : ''}>
      <body className={`${inter.className} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200`}>
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        
        <Footer />
        <button
          onClick={toggleDarkMode}
          className="fixed bottom-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-200"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </body>
    </html>
  )
};