import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '3D Print Gallery',
  description: 'A showcase of amazing 3D printed projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary text-white min-h-screen`}>
        <nav className="fixed top-0 w-full bg-secondary/80 backdrop-blur-sm z-50">
          <div className="container mx-auto px-4 py-4">
            <a href="/" className="text-2xl font-bold">3D Print Gallery</a>
          </div>
        </nav>
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  )
} 