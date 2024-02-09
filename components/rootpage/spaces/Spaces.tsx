import Image from "next/image"

const SpacesData: {title:string, source:string, description:string}[] = [
    {
        source: "/assets/spaces/expo.png",
        title: "Espace d’Exposition",
        description: "Building a supportive and inclusive environment that encourages knowledge sharing, networking, and the exchange of ideas."
    },
    {
        source: "/assets/spaces/idea.png",
        title: "Espace d’Ideation",
        description: "Building a supportive and inclusive environment that encourages knowledge sharing, networking, and the exchange of ideas."
    },
    {
        source: "/assets/spaces/proto.png",
        title: "Espace de Prototypage",
        description: "Building a supportive and inclusive environment that encourages knowledge sharing, networking, and the exchange of ideas."
    }
]

function Space({title, source, description}: {title:string, source:string, description:string}) {
    return (
        <div className="p-3 flex gap-2 justify-start items-center w-full shadow-default rounded-sm">
            <Image
            width={60}
            height={85}
            src={source}
            alt="Ilustration"
            className=" bg-cover bg-center"
            />

            <div className="flex flex-col gap-1 items-start justify-start text-start">
                <h3 className="text-[20px] font-bold">
                     {title}
                </h3>
                <p className="text-[10px]">
                    {description}
                </p>
            </div>
        </div>
    )
}

function Spaces() {
  return (
    <div className='container-s tablet:container-t laptop:container-pc relative pt-10 pb-5'>
        <Image
        className="absolute right-3 -z-10"
        src="/assets/zwak.svg"
        width={70}
        height={92}
        alt="Random decoration"
        />
        <div className="flex flex-col text-center text-foreground gap-5">
            <h2 className='text-4xl font-bold'>
                Nos Espaces
            </h2>
            <div className="flex flex-col gap-3 items-center justify-center">
                {
                    SpacesData.map(function (data, i) {
                        return (<Space key={`space-${i}`} title={data.title} source={data.source} description={data.description}/>)
                    })
                }
            </div>

        </div>
    </div>
  )
}

export default Spaces