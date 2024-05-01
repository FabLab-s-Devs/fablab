import Image from "next/image";
import img1 from "@/public/assets/ai.png";
import img2 from "@/public/assets/think.png";
import img3 from "@/public/assets/tech.png";

function Pillars() {
    return (
        <div className="py-8 md:py-15 mb-5" id="about">
            <div className="md:max-w-7xl mx-5 md:mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-amber-500 mt-6 font-bold text-3xl md:text-6xl">
                        Donnez vie à vos visions.
                    </h1>
                    <span className="text-blue-500">
                        Transformez vos idées en réalité
                    </span>
                </div>
                <div className="md:flex md:flex-row md:items-center gap-10 ">
                    <div className="bg-gray-100  hover:bg-gray-50  w-full md:w-1/3 px-4 py-7 text-black">
                        <div className="justify-center m-2 items-center flex">
                            <Image src={img1} alt="" width={70} />
                        </div>
                        <div className="text-center md:text-center">
                            <h1 className="text-blue-700 font-bold m-2 text-2xl md:text-3xl">
                                Innovation
                            </h1>
                            <p className="px-3 text-sm md:text-lg">
                                Favorisant la créativité et les idées de pointe
                                à travers des projets collaboratifs, l'accès à
                                la technologie et la pensée innovante.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-100  hover:bg-gray-50 w-full md:w-1/3 px-4 py-7 text-black">
                        <div className="justify-center m-2 items-center flex">
                            <Image src={img2} alt="" width={70} />
                        </div>
                        <div className="text-center md:text-center ">
                            <h1 className="text-blue-700 font-bold m-2 text-2xl md:text-3xl">
                                Idéation
                            </h1>
                            <p className="text-sm md:text-lg px-3">
                                Renforçant les individus avec des expériences
                                d'apprentissage pratiques et le développement de
                                compétences en science, technologie, ingénierie.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-100  hover:bg-gray-50 w-full md:w-1/3 px-4 py-7 text-black">
                        <div className="justify-center m-2 items-center flex">
                            <Image src={img3} alt="" width={70} />
                        </div>
                        <div className="text-center md:text-center">
                            <h1 className="text-blue-700 font-bold m-2 text-2xl md:text-3xl">
                                Fabrication
                            </h1>
                            <p className="px-3 text-sm md:text-lg">
                                Offrant des machines de pointe pour permettre
                                une fabrication de précision, donnant aux
                                utilisateurs le pouvoir de réaliser leurs
                                conceptions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pillars;
