"use client"
import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <div className=" flex align-center justify-between max-w-7xl mx-auto py-4 px-3 md:px-5">
      <div className="">
        <Image
          width={36}
          height={36}
          alt="Fablab UIA Logo"
          src="/logo.svg"
        />
        
        
      </div>
      <div className="hidden md:flex gap-5 ">
        <Link href="/" className="text-black">
          Home
        </Link>
        <Link href="/" className="text-black">
          About Us
        </Link>
        <Link href="/" className="text-black">
          Projects
        </Link>
        <Link href="/" className="text-black">
          News
        </Link>
        <Link href="/" className="text-black">
          Contact Us
        </Link>
      </div>

      <div>
      <Link href="/" className="text-primary-foreground font-medium px-2 py-1 bg-primary text-[15 px] rounded-sm">
          Sign In
        </Link>
      </div>
    </div>
  )
}

export default Header