// main page file
// first, import React
import React from 'react'

// import tailwind global CSS
import './styles/globals.css'

// import banner image
import greyscalebanner from './images/greyscalebanner.png'

// here's the main dish
export default function Page() {
  return <div className="h-[100vh]">
    <section className="flex flex-col items-center justify-center">
    <img className="brightness-[.33] w-full" src={greyscalebanner.src}></img>
    <h1>text to go on top of image</h1>
    </section>
  </div>
}