"use client"
import { useState } from "react"
import Link from "next/link"
import { format } from "date-fns"
import { DialogTrigger, Dialog, DialogContent } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { IoCalendarOutline as CalendarIcon } from "react-icons/io5";


function Hero() {
    const [date, setDate] = useState<Date>()

    return (
        <div className="container-s tablet:container-t laptop:container-pc heroBg py-5">
            <div className="w-full h-full text-center text-primary-foreground flex flex-col items-center justify-center gap-5">
                <div className="flex flex-col items-center justify-center gap-1">
                    <h1 className="text-[24px] font-semibold">
                        Unleash Your Creativity in Fablab Universiapolis
                    </h1>
                    <p className="text-[12px] font-light">
                        Where Ideas Take Flight and Dreams Transform into Reality. Join Us Now
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Hero