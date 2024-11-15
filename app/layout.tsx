// primary layout file
//first, import React
import React from 'react'
import Navbar from './Navbar'

// create a component named RootLayout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}