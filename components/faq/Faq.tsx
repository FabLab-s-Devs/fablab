import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const FaqsData: {question:string, answer:string}[] = [
    {
        question: "When do you open?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione officia praesentium unde veniam cumque iste, aspernatur aliquid sapiente. Praesentium necessitatibus expedita a corporis labore quos nobis tempora nesciunt. Aut, aliquam."
    },
    {
        question: "What are the current machines?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione officia praesentium unde veniam cumque iste, aspernatur aliquid sapiente. Praesentium necessitatibus expedita a corporis labore quos nobis tempora nesciunt. Aut, aliquam."
    },
    {
        question: "How many reservations do i have per week?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione officia praesentium unde veniam cumque iste, aspernatur aliquid sapiente. Praesentium necessitatibus expedita a corporis labore quos nobis tempora nesciunt. Aut, aliquam."
    }
]


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
    <div className='container-s tablet:container-t laptop:container-pc relative py-10'>
        <Image
        className="absolute -left-3 -z-10"
        src="/assets/zwak.svg"
        width={70}
        height={92}
        alt="Random decoration"
        />
        <div className="flex flex-col text-center text-foreground gap-5">
            <h2 className='text-4xl font-bold'>
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
  )
}

export default Faq