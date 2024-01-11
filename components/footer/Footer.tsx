import Image from "next/image"

function Footer() {
  return (
    <div className="px-5 py-7 w-screen bg-foreground text-background flex items-center text-nowrap justify-between  flex-wrap">
        <div className="flex gap-3 items-center justify-center">
            <Image
            width={36}
            height={32}
            alt="Fablab UIA Logo"
            src="/logo_white.svg"
            />
            <h2 className="text-[20px] font-medium">
                Fablab UIA
            </h2>
        </div>
        <div className="flex gap-1 items-center justify-center">
            <Image
            width={11}
            height={11}
            alt="Copyright Logo"
            src="/assets/copyright.svg"
            />
            <h2 className="text-[11px] font-medium">
            2024 Universiapolis. All rights reserved  
            </h2>
        </div>
        
    </div>
  )
}

export default Footer