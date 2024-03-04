import ReserveButton from "@/components/rootpage/reserve/reserveButton/reserveButton"

function Hero() {
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
                <ReserveButton/>
            </div>
        </div>
    )
}

export default Hero