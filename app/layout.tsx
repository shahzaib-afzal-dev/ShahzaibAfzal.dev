import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shahzaib Afzal - Full Stack Developer",
  description:
    "Professional portfolio of Shahzaib Afzal, a skilled Full Stack Developer with expertise in React, Node.js, and modern web technologies.",
  keywords: "Full Stack Developer, React, Node.js, JavaScript, Web Development, Software Engineer",
  authors: [{ name: "Shahzaib Afzal" }],
  openGraph: {
    title: "Shahzaib Afzal - Full Stack Developer",
    description: "Professional portfolio showcasing modern web development projects and expertise",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
