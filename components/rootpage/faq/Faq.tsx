import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const FaqsData: { question: string; answer: string }[] = [
    {
        question: "Quelles sont les machines disponibles ?",
        answer: "Nous disposons d'une variété d'équipements pour répondre à vos besoins en fabrication et en prototypage. Notre parc machine comprend : 5 imprimantes 3D, 2 machines CNC pour PCB, une machine CNC standard, une découpeuse laser, et une station de soudage, entre autres.",
    },
    {
        question:
            "Combien de réservations puis-je effectuer par semaine/jour ?",
        answer: "Chaque équipe a droit à deux réservations par semaine. Chaque réservation dure trois heures. Vous pouvez choisir parmi les plages horaires suivantes : de 09h00 à 12h00, de 12h00 à 15h00, de 15h00 à 18h00, et de 18h00 à 21h00, selon les disponibilités. Si les responsables du fablab ne sont pas disponibles, ils peuvent reprogrammer votre réservation après avoir discuté avec vous pour déterminer le meilleur moment.",
    },
    {
        question:
            "Combien de membres de chaque équipe peuvent entrer en même temps ?",
        answer: "Seuls deux membres de chaque équipe sont autorisés à entrer simultanément. Ils peuvent se relayer, mais il est important de maintenir ce nombre à deux à tout moment, car l'espace devient rapidement encombré et désordonné. De plus, il est souvent observé que, même en présence de plusieurs personnes, seules deux travaillent activement tandis que les autres observent.",
    },
    {
        question:
            "La réservation est-elle uniquement pour les étudiants de deuxième année pour le projet intégrateur ?",
        answer: "Actuellement, les réservations sont exclusivement réservées aux étudiants de deuxième année travaillant sur leur projet pour le module 'projet intégrateur'. Toute autre personne souhaitant utiliser nos installations doit nous contacter directement.",
    },
];


function FaqItem({question, answer, myValue}: {question:string, answer:string, myValue: string}) {
    return (
        <AccordionItem value={myValue} >
            <AccordionTrigger className="text-start">{question}</AccordionTrigger>
            <AccordionContent className="text-start">
                {answer}
            </AccordionContent>
        </AccordionItem>
    )
}

function Faq() {
  return (
    <div className='relative py-10'>
        <Image
        className="absolute -left-3 -z-10"
        src="/assets/zwak.svg"
        width={70}
        height={92}
        alt="Random decoration"
        />
        <div className="mx-6 md:w-1/2 md:mx-auto ">

        <div className="flex flex-col text-center text-foreground gap-5">
            <h2 className='text-amber-500 mt-6 font-bold text-4xl md:text-6xl mb-2'>
                Frequently asked questions
            </h2>
            <Accordion type="single" collapsible>
                {
                    FaqsData.map(function ({question, answer}, i) {
                        return (<FaqItem key={`item-${i}`}  myValue={`item-${i}`} question={question} answer={answer} />)
                    })
                }
            </Accordion>

        </div>
        </div>
    </div>
  )
}

export default Faq