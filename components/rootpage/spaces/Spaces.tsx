import Image from "next/image"
import chabab from '@/public/assets/fablabpic.png'
import blob from '@/public/assets/bbb.svg'
import Link from "next/link"

function Spaces() {
  return (
   <div className="bg-amber-50 py-9">
     <div className='md:max-w-7xl md:mx-auto grid-cols-2 gap-4 items-center'>
      <div className="w-full md:w-1/2">
        <Image
          className="absolute right-3 -z-10"
          src="/assets/zwak.svg"
          width={70}
          height={92}
          alt="Random decoration"
        />
      </div>
      <div className="md:flex text-center md:text-start text-foreground gap-5 items-center justify-between">
      <div className="w-full md:w-1/2">
  <h2 className='text-amber-500 text-center mx-4 md:text-start mt-6 font-bold text-2xl md:text-5xl lg:text-6xl mb-2'>
    Cultivate Innovation and Shape the  <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-900 text-transparent bg-clip-text">Future</span> 
  </h2>
  <p className="hidden md:flex text-justify mx-4 mb-5 md:text-justify"> Reflects our commitment to nurturing new ideas and crafting innovative solutions. Together, we strive to achieve our aspirations and bring about positive change. Join us in shaping a better tomorrow</p>
  <Link href="/" className="px-3 mx-4 py-1 bg-amber-500 text-white hover:bg-amber-600 rounded-sm">
    Register Now
  </Link>
</div>

        <div className="w-full md:w-auto md:flex justify-center items-center relative">
          <Image src={chabab} className="absolute inset-2 webkit webkitimg" alt="Fablab pic" width={600} />
          <Image src={blob} alt="Fablab pic " width={600} />
        </div>
      </div>
    </div>
   </div>
  )
}

export default Spaces
