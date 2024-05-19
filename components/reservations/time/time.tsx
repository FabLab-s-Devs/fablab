import Image from 'next/image'


export default function Time() {
    return (
        <div className="text-center my-6">
            <p className='text-[#313771] font-bold text-5xl'>You have</p>
            <div className="flex justify-center space-x-12 items-center">
                <Image src="/assets/reservations/rev1.png" width={200} height={200} alt="Hackathon" className="my-10" priority />
                <div className='flex space-x-12 text-white bg-[#313771] p-6 rounded-2xl text-4xl shadow-[#313771] shadow-[0px_2px_64px_0px_#9747ff4d]
'>
                    <div className="flex flex-col items-center">
                        <div>1</div>
                        <div>Hours</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div>59</div>
                        <div>Minutes</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div>59</div>
                        <div>Seconds</div>
                    </div>
                </div>
                <Image src="/assets/reservations/rev1.png" width={200} height={200} alt="Hackathon" className="my-10" priority />

            </div>
            <p className='text-[#313771] font-bold text-5xl'>To Finish</p>
        </div>
    )

}