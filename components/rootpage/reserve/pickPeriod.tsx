'use client'
import { getPeriodCountByDate, getReservations } from "@/lib/actions/reservation.actions"
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface Periods {
    [key: string]: number;
}
interface PeriodsMap {
    [key: string]: string;
}
function PickPeriod({ date, selectedPeriod, setSelectedPeriod }: any) {
    const max = 12;
    const [periods, setPeriods] = useState<Periods>({
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0
    });

    const periodsMap:PeriodsMap = {
        "1": "09:00 - 12:00",
        "2": "12:00 - 15:00",
        "3": "15:00 - 18:00",
        "4": "18:00 - 21:00"
    };

    const handlePeriodClick = (periodKey: string) => {
        if (periods[periodKey] < max) {
            setSelectedPeriod(periodKey === selectedPeriod ? selectedPeriod : periodKey);
        }
    };

    useEffect(() => {
        const getPeriods = async () => {
            const perDB = await getPeriodCountByDate(date);
            setPeriods(perDB);
        }
        getPeriods().catch(console.error);
    }, [date]);

    

    return (
        <div className="flex flex-col gap-2 items-start justify-center w-full">
            <h2 className="text-[14px] text-start font-medium text-foreground">
                Choisissez la période
            </h2>
            <div className="w-full space-y-1">
                {Object.keys(periods).map((period: string) => {
                    const isFull = periods[period] >= max;
                    return (
                        <div
                            key={period}
                            onClick={() => handlePeriodClick(period)}
                            className={cn(
                                "p-2 flex justify-between items-center w-full rounded-sm",
                                selectedPeriod === period
                                    ? "bg-blue-200"
                                    : isFull
                                    ? "bg-red-500 text-white"
                                    : "bg-slate-100"
                            )}
                        >
                            <div>{periodsMap[period]}</div>
                            <div className="font-light text-[14px]">
                                {isFull ? "Complet" : `${periods[period]}/${max}`}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default PickPeriod