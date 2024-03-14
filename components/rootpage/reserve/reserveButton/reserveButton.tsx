"use client"
import { DialogTrigger, Dialog, DialogContent } from "@/components/ui/dialog"
import Link from "next/link"
import { useState } from "react"
import PickDate from "@/components/rootpage/reserve/pickDate/pickDate"
import PickPeriod from "@/components/rootpage/reserve/pickPeriod/pickPeriod"
import { createTeam } from "@/lib/actions/team.actions"



function ReserveButton() {
  const [date, setDate] = useState<Date>(new Date());
  const [period, setPeriod] = useState<String>("1");
  const [pageIndex, setPageIndex] = useState<number>(0);

  const pages = [<PickDate date={date} setDate={setDate} />, <PickPeriod date={date} selectedPeriod={period} setSelectedPeriod={setPeriod} />]

  const nextButton = () => {
    if (pageIndex == pages.length - 1) {
      return;
    }

    setPageIndex(pageIndex + 1)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-primary- font-medium px-2 py-2 bg-primary text-[12px] rounded-md shadow-cta">
          Reserve Now
        </button>
      </DialogTrigger>

      <DialogContent className="px-6 flex items-start justify-center max-w-96 rounded-md flex-col gap-6">
        {
          pages[pageIndex]
        }
        <div className="flex items-center justify-between w-full">
          <button onClick={() => setPageIndex(pageIndex - 1)} disabled={pageIndex == 0} className="py-1 px-3 bg-slate-300/55 text-center text-background font-medium rounded-sm">
            prev
          </button>
          <button onClick={() => nextButton()} className="py-1 px-3 bg-primary text-center text-background font-medium rounded-sm">
            {pageIndex == pages.length - 1 ? "Confirm" : "Next"}
          </button>
        </div>
      </DialogContent>

    </Dialog>
  )
}

export default ReserveButton