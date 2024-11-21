// Footer component file
// first, import react
import React from 'react'

// we also need to import the image
import whitelogo from '../images/whitelogo.png'

export default function Footer() {
    return (
        <footer className="flex flex-col items-center p-4 bg-[#111111] text-[#EEEEEE]">
            <img className="h-[32px] mb-6" src={whitelogo.src}/>
            <p className="mb-3">Contact us via email at <a className="underline" href="mailto:info@adviserelite.com">info@adviserelite.com</a></p>
            <p className="mb-3">Follow us on <a className="underline" target="_blank" href="https://www.linkedin.com/company/adviserelite/">Linkedin</a></p>
            <p className="mb-3">Copyright &copy;2024 Adviser Elite, LLC. All rights reserved.</p>
            <p className="mb-3">
                <a className="underline">Privacy Policy</a>
                <span className="ml-1 mr-1"> | </span>
                <a className="underline">Terms of Use</a>
                <span className="ml-1 mr-1"> | </span>
                <a className="underline">Disclaimers</a>
            </p>
        </footer>
    )
}