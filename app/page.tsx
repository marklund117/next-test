// main page file
// first, import React
import React from 'react'

// import tailwind global CSS
import './styles/globals.css'

// and mantine
import { createTheme, MantineProvider } from '@mantine/core'

// import banner image
import greyscalebanner from './images/greyscalebanner.png'

const theme = createTheme({
  /** Your theme override here */
})

// here's the main dish
export default function Page() {
  return (
  <MantineProvider theme={theme}>
  <div className="h-[100vh]">
    <section className="flex flex-col items-center justify-center">
    <img className="brightness-[.33] w-full" src={greyscalebanner.src}></img>
    <h1>text to go on top of image</h1>
    </section>
  </div>
  </MantineProvider>
  )
}