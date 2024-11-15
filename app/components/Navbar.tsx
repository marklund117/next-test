// Navbar component file
// first, import React
import React from 'react'

// next, import the link component from next (hmmm)
import Link from 'next/link'

// create a component named Navbar
export default function Navbar () {
    return (
        // we will use a normal nav element with an unordered list
        // note the lack of <a> tags since we are using the Link component
        <nav className="flex p-4 h-[56px] shadow-sm">
            <span className="text-xl font-bold mr-4">Adviser Elite</span>
            <ul className="list-none flex gap-4">
                <li>
                    <Link className="transition hover:transiton-all duration-300 hover:bg-[#0098f1] text-slate-100 rounded-lg bg-[#0078be] px-4 py-2" href="/">
                        Link 1
                    </Link>
                </li>
                <li>
                    <Link className="transition hover:transiton-all duration-300 hover:bg-[#0098f1] text-slate-100 rounded-lg bg-[#0078be] px-4 py-2" href="/">
                        Link 2
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

