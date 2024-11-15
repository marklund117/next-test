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
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        Link 1
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Link 2
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

