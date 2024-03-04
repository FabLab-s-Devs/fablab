'use client'
import { getPeriodCountByDate, getReservations } from "@/lib/actions/reservation.actions"
import { cn, filterReservationsForWeek } from "@/lib/utils";
import { format } from "date-fns";
import { useEffect, useState } from "react";

function PickPeriod({ date, selectedPeriod, setSelectedPeriod }: any) {
    const [periods, setPeriods] = useState({
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0
    });
    const periodsMap = {
        "1": "09:00 - 12:00",
        "2": "12:00 - 15:00",
        "3": "15:00 - 18:00",
        "4": "18:00 - 21:00"
    }
    const handlePeriodClick = (periodKey: string) => {
        setSelectedPeriod(periodKey === selectedPeriod ? selectedPeriod : periodKey);
    };

    useEffect(() => {
        const getPeriods = async () => {
            const perDB = await getPeriodCountByDate(date);
            console.log(perDB);
            return setPeriods(perDB)
        }
        getPeriods().catch(console.error);

    }, []);

    return (
        <div className="flex flex-col gap-2 items-start justify-center w-full">
            <h2 className="text-[14px] text-start font-medium text-foreground">
                Pick The Period
            </h2>
            <div className="w-full space-y-1">
                {
                    Object.keys(periods).map((period) => (
                        <div key={period} onClick={() => handlePeriodClick(period)} className={cn("p-2 flex justify-between items-center w-full rounded-sm", selectedPeriod === period ? "bg-blue-200" :"bg-slate-100")}>
                            <div>
                                {periodsMap[period as keyof typeof periodsMap]}
                            </div>
                            <div className="font-light text-[14px]">
                                {periods[period as keyof typeof periods]}/12
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default PickPeriod