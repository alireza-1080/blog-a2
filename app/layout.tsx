import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/general/Navbar'
import { Toaster } from 'react-hot-toast'
import ThemeProvider from '@/components/theme/them-Provider'
import { Metadata } from 'next'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white dark:bg-gray-900 transition-colors duration-200`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* Site Wrapper */}
          <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="mb-8">
              <Navbar />
            </header>

            {/* Main Content */}
            <main className="flex-1">{children}</main>
          </div>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

const metadata: Metadata = {
  title: 'BlogA2',
  description: 'Simple article website'
}

export { metadata }
export default RootLayout
