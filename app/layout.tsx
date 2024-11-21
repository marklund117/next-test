// primary layout file
//first, import React
import React from 'react'
// import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'

// Mantine components
import { AppShell, Burger } from '@mantine/core'

import { ColorSchemeScript, MantineProvider } from '@mantine/core'

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
        <main className="flex-grow">
        <MantineProvider>
        <Header />
        {children}
        </MantineProvider>
        </main>
        <Footer />
      </body>
    </html>
  )
}