import Image from "next/image"
import { IoSchoolOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { HiOutlineWrench } from "react-icons/hi2";
import { PiLightbulb } from "react-icons/pi";
import { ReactNode } from "react";

const PillarsData: {title:string, icon:ReactNode, description:string}[] = [
    {
        icon: <IoSchoolOutline size={25} color="#fff"/>,
        title: "Education",
        description: "Empowering individuals with hands-on learning experiences and skill development in science, technology, engineering."
    },
    {
        icon: <PiLightbulb size={25} color="#fff"/>,
        title: "Innovation",
        description: "Fostering creativity and cutting-edge ideas through collaborative projects and access to advanced technologies."
    },
    {
        icon: <GrGroup size={25} color="#fff"/>,
        title: "Community",
        description: "Building a supportive and inclusive environment that encourages knowledge sharing, networking, and the exchange of ideas."
    },
    {
        icon: <HiOutlineWrench size={25} color="#fff"/>,
        title: "Fabrication",
        description: "Offering state-of-the-art machines and equipment to enable precision fabrication, empowering users to bring their designs to life"
    }
]

function Pillar({title, icon, description}: {title:string, icon:ReactNode, description:string}) {
    return (
        <div className="px-2 py-3 flex flex-col gap-3 justify-center items-start max-w-[150px]">
            <div className="flex gap-2 items-center justify-start">
                <div className="p-1 bg-secondary rounded-lg">
                    {icon}
                </div>
                <h3 className="text-[16px] font-bold">
                    {title}
                </h3>
            </div>
            <p className="text-[11px] text-start">
                {description}
            </p>
        </div>
    )
}

function Pillars() {


  return (
    <div className='container-s tablet:container-t laptop:container-pc relative py-5'>
        <Image
        className="absolute -left-3"
        src="/assets/zwak.svg"
        width={70}
        height={92}
        alt="Random decoration"
        />
        <div className="flex flex-col text-center text-foreground gap-5">
            <h2 className='text-4xl font-bold'>
                Nos Pilliers
            </h2>
            <div className="flex gap-5 flex-wrap items-start justify-center">
                {
                    PillarsData.map(function (data, i) {
                        return (<Pillar key={`Pillar-${i}`} title={data.title} icon={data.icon} description={data.description}/>)
                    })
                }
            </div>

        </div>
    </div>
  )
}

export default Pillars