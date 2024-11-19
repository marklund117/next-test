
// Navbar component file
// useState requires us to define this as a client component
'use client'
// first, import React
import React from 'react'
// we also need useState
import { useState, useEffect } from 'react'

// next, import the link component from next (hmmm)
import Link from 'next/link'

// create a component named Navbar
export default function Navbar () {

    const [isOpen, setIsOpen] = useState(false)

    return (
        // we will use a normal nav element with an unordered list
        // note the lack of <a> tags since we are using the Link component
        <nav className="flex p-4 h-[56px] shadow-sm md:justify-between md:items-center">
            <a href="/" className="text-xl font-bold mr-4">Adviser Elite</a>
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="border rounded-lg p-1">
                    X
                </button>
            </div>
            <ul className={`list-none flex md:flex-row gap-4
                ${isOpen ? 'flex-col md:flex-row' : 'hidden md:flex'}`
            }>
                <li>
                    <Link className="transition hover:transiton-all duration-300 hover:bg-[#0098f1] text-slate-100 rounded-lg bg-[#0078be] px-4 py-2" href="/services">
                        Services
                    </Link>
                </li>
                <li>
                    <Link className="transition hover:transiton-all duration-300 hover:bg-[#0098f1] text-slate-100 rounded-lg bg-[#0078be] px-4 py-2" href="/">
                        Link 2
                    </Link>
                </li>
                <li>
                    <Link className="transition hover:transiton-all duration-300 hover:bg-[#0098f1] text-slate-100 rounded-lg bg-[#0078be] px-4 py-2" href="/">
                        Link 3
                    </Link>
                </li>
            </ul>
        </nav>
    )
}