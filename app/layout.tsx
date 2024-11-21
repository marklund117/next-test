// primary layout file
//first, import React
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// create a component named RootLayout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Adviser Elite</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main className="flex-grow">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}