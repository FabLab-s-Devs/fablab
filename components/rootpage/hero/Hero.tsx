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
                {
                    // Hada exemple dial dak l modal li kaytl3 bach iswlk 3la date
                    /*
                    <Dialog>
                        <DialogTrigger asChild>
                            <Link href="/" className="text-primary- font-medium px-2 py-2 bg-primary text-[12px] rounded-md shadow-cta">
                                Reserve Now
                            </Link>
                        </DialogTrigger>

                        <DialogContent className="px-6 flex items-start justify-center max-w-96 rounded-md flex-col gap-6">
                            <div className="flex flex-col gap-1 items-start justify-center">
                                <h2 className="text-[14px] text-start font-medium text-foreground">
                                    Pick The Date
                                </h2>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[336px] justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            disabled={(date) =>
                                                date < new Date()
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <div className="flex items-center justify-between w-full">
                                <button className="py-1 px-3 bg-slate-300/55 text-center text-background font-medium rounded-sm">
                                    prev
                                </button>
                                <button className="py-1 px-3 bg-primary text-center text-background font-medium rounded-sm">
                                    next
                                </button>
                            </div>
                        </DialogContent>

                    </Dialog>
                */
                }
            </div>
        </div>
    )
}

export default Hero