import Image from "next/image"
import Link from "next/link"
function Header() {
  return (
    <div className="container-s tablet:container-t laptop:container-pc py-2">
      <div className="flex items-center justify-between ">
        <Image
          width={36}
          height={32}
          alt="Fablab UIA Logo"
          src="/logo.svg"
        />

        <Link href="/" className="text-primary-foreground font-medium px-2 py-1 bg-primary text-[12px] rounded-sm">
          Sign In
        </Link>
      </div>
    </div>
  )
}

export default Header