import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/Navbar";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "@/components/theme/them-Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} mx-auto max-w-7xl bg-white px-4 py-6 antialiased transition-colors duration-200 sm:px-6 lg:px-8 dark:bg-gray-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Site Wrapper */}
          <div className="flex min-h-screen flex-col">
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
  );
};

const metadata: Metadata = {
  title: "BlogA2",
  description: "Simple article website",
};

export { metadata };
export default RootLayout;
