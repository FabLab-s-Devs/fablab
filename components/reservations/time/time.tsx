"use client"
import { getNextPeriodStart } from '@/lib/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';



export default function Time() {
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getNextPeriodStart().getTime() - new Date().getTime());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTimeLeft = (milliseconds: number) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return { hours, minutes, seconds };
    };

    const { hours, minutes, seconds } = formatTimeLeft(timeLeft);
    return (
        <div className="text-center flex items-center justify-center flex-col p-4">
            <div className="flex justify-between items-center w-full gap-4">
                <Image src="/assets/reservations/rev1.svg" width={200} height={200} alt="Hackathon" priority />
                <div className='flex flex-col gap-10 items-center justify-center'>
                    <p className='text-[#313771] font-bold text-5xl'>You have</p>
                    <div className='flex text-white bg-[#313771] p-5 rounded-2xl text-2xl shadow-[0px_2px_64px_0px_#9747ff75] gap-4'>
                        <div className="flex flex-col items-center">
                            <div>{hours}</div>
                            <div>Hours</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div>{minutes}</div>
                            <div>Minutes</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div>{seconds}</div>
                            <div>Seconds</div>
                        </div>
                    </div>
                    <p className='text-[#313771] font-bold text-5xl'>To Finish</p>  
                </div>
                <Image src="/assets/reservations/rev2.svg" width={220} height={170} alt="Hackathon" priority />

            </div>
        </div>
    )

}