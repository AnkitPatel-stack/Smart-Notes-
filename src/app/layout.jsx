import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./commoncomponents/header"
import Footer from "./commoncomponents/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Notes - AI Enhanced",
  description: "Revolutionize note-taking with AI-powered smart notes, summarization, and knowledge management",
  generator: "v0.dev",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
