"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

function Header() {

  const [Click,setClick] = useState(false);
  const toggleNavbar = () => {
    setClick(!Click)
  }

  return (
    <div>
    <div className=" flex items-center justify-between max-w-7xl mx-auto py-4 px-3 md:px-5">
      <div className="">
      <Link href="/" className="text-black">
        <Image
            className="h-auto"
            width={0}
            height={0}
            style={{width:'50px', height: "auto" }}
            alt="Fablab UIA Logo"
            src="/logo.svg"
          />        
      </Link>
        
      </div>
      <div className="hidden  md:flex gap-5 ">
        <Link href="/" className="hover:text-amber-500 text-black">
          Home
        </Link>
        <Link href="/" className="text-black hover:text-amber-500">
          About Us
        </Link>
        <Link href="/projects" className="text-black hover:text-amber-500">
          Projects
        </Link>
        <Link href="/" className="text-black hover:text-amber-500">
          News
        </Link>
        <Link href="/" className="text-black hover:text-amber-500">
          Contact Us
        </Link>
      </div>

      
      <div>
      <Link href="/" className="hidden md:block text-primary-foreground font-medium px-2 py-1 bg-primary text-[15 px] rounded-sm">
          Sign In
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button className="inline-flex items-center justify-center p-2
        rounded-md text-black hover:text-black focus:outline-none
        focus:ring-2 focus:ring-inset focus:ring-black" onClick={toggleNavbar}>
          {Click? (
            <svg  className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor" >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ):(
            <svg  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"/>
</svg>
          )}
        </button>
          
      </div>
    </div>
    {
            Click && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 text-black bg-white text-center">
                <Link href="/" className=" hover:text-amber-500 block">
                  Home
                </Link>
                <Link href="/" className=" hover:text-amber-500 block">
                  About Us
                </Link>
                <Link href="/projects" className=" hover:text-amber-500 block">
                  Projects
                </Link>
                <Link href="/" className=" hover:text-amber-500 block">
                  News
                </Link>
                <Link href="/" className=" hover:text-amber-500 block">
                  Contact Us
                </Link>
                </div>
              </div>  
            )
          }
    </div>
  )
}

export default Header