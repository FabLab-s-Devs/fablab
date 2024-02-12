import Image from "next/image"

const ProjectsData: { title: string, source: string, description: string }[] = [
    {
        source: "/assets/projects/project1.jpg",
        title: "Hackathon Winners",
        description: "Le Premier Prix du Hackathon #Universiapolis accueille des étudiants de l' #polytechnique_agadir (un appareil du #fablab ) pour projeter du CGM pour prévenir les hypo/hyperglycémies et proposer des doses de correction. Un chèque de 10 000 dirhams a été offert par #Akkodis Maroc et un forfait incubation d'une valeur de 30 000 dirhams à #lastartupstation Bravo à ceux qui le recherchent !"
    },
    {
        source: "/assets/projects/project1.jpg",
        title: "Hackathon Winners",
        description: "Le Premier Prix du Hackathon #Universiapolis accueille des étudiants de l' #polytechnique_agadir (un appareil du #fablab ) pour projeter du CGM pour prévenir les hypo/hyperglycémies et proposer des doses de correction. Un chèque de 10 000 dirhams a été offert par #Akkodis Maroc et un forfait incubation d'une valeur de 30 000 dirhams à #lastartupstation Bravo à ceux qui le recherchent !"
    }
]

function Project({ title, source, description }: { title: string, source: string, description: string }) {
    return (
        <div className="relative flex gap-2 items-center justify-center shadow-default rounded-sm flex-col h-fit rounded-b-md">
                <Image src={source} width={150} height={150} objectFit="cover" alt="Ilustration" className="rounded-t-md h-50 w-full" />
                <div className="p-3 text-start flex flex-col items-center justify-center">
                    <h3 className="text-[24px] font-bold">
                        {title}
                    </h3>
                    <p className="text-[16px] text-ellipsis overflow-hidden line-clamp-4">
                        {description}
                    </p>
                    <button className="border-2 rounded-xl border-slate-700 mt-2 p-1 text-m">Read More</button>
                </div>
        </div>
        
    )
}


function Projects() {
    return (
        <div className='container-s tablet:container-t laptop:container-pc relative pt-10 pb-5'>
            <div className='flex flex-col text-center  items-center justify-center'>
                <h2 className='text-4xl font-bold mb-4'>
                    Nos projets
                </h2>
                <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 gap-3  items-center justify-center">
                {
                    ProjectsData.map(function (data, i) {
                        return (<Project key={`space-${i}`} title={data.title} source={data.source} description={data.description}/>)
                    })
                }
                </div>
                <button className="underline text-3xl p-4 font-sans">See More...</button>

            </div>
        </div>
    )
}

export default Projects