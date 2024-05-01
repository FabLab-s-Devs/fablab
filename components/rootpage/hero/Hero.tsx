import Image from "next/image";
import Link from "next/link";
import vector from "@/public/vector.png";
import { currentUser } from "@clerk/nextjs/server";
import ReserveButton from "@/components/rootpage/reserve/reserveButton";
import { getTeamByChef } from "@/lib/actions/team.actions";

async function Hero() {
    const user = await currentUser();
	const fullUser = {
        teamId: null,
        email: user?.emailAddresses[0].emailAddress || "",
    };

	if (user) {
		const team = await getTeamByChef(fullUser.email);
		fullUser.teamId = team ? team._id : null;
	}

    return (
        <div>
            <div className="bg-heroBg bg-cover bg-center bg-no-repeat container-s pb-10 md:pb-0 bg-white md:h-[70vh] flex justify-center items-center relative">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="container mt-16 md:mt-0 mx-auto px-4 lg:grid lg:grid-cols-1 lg:gap-8 justify-center items-center relative z-10">
                    <div className="text-center lg:text-left lg:bg-cover lg:bg-no-repeat lg:bg-center lg:bg-opacity-50 lg:w-full lg:h-full lg:flex lg:flex-col lg:justify-center lg:p-8 lg:py-16">
                        <div className="text-center">
                            <h1 className="text-3xl max-w-5xl text-center mx-auto md:text-7xl  font-bold mb-4 text-white text-transparent bg-clip-text">
                                Unleash Your{" "}
                                <span className="text-amber-500">
                                    Creativity
                                </span>{" "}
                                in Fablab Universiapolis
                            </h1>
                            <div>
                                {user ? (
                                    <ReserveButton user={fullUser} />
                                ) : (
                                    <Link
                                        href="/sign-in"
                                        className="mr-3 px-3 py-2 bg-amber-500 text-white hover:bg-amber-600 rounded-sm"
                                    >
                                        Reserve Now
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="hidden absolute inset-0 justify-center items-center">
                        <Image src={vector} alt="Vector" width={600} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
