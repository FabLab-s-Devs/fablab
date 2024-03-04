import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { cn, getWeekDate } from "@/lib/utils"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format, isSunday, isWithinInterval } from "date-fns"

function PickDate({date, setDate}: any) {
    return (
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
                            date < new Date() || isSunday(date) || !isWithinInterval(date, getWeekDate())
                        }
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default PickDate