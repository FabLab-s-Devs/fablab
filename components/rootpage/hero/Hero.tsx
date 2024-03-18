import { auth } from "@/auth";
import ReserveButton from "@/components/rootpage/reserve/reserveButton/reserveButton"
import SignInBtn from "../signInBtn";

async function Hero() {
    const session = await auth();
    var signedIn = false;
    if (session?.user) {
        signedIn = true;
    }
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
                    signedIn ?
                        <ReserveButton user={session?.user} />
                        :
                        <SignInBtn>
                            <button type="submit" className="text-primary- font-medium px-2 py-2 bg-primary text-[12px] rounded-md shadow-cta">Reserve Now</button>
                        </SignInBtn>

                }
            </div>
        </div>
    )
}

export default Hero