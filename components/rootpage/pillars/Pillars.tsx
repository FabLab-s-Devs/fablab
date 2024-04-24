import Image from "next/image";
import img1 from '@/public/assets/ai.png';
import img2 from '@/public/assets/think.png';
import img3 from '@/public/assets/tech.png';

function Pillars() {
    return (
      <div className=" py-8 md:py-15 mb-5">
        {/* <div className="md:max-w-7xl mx-5 md:mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-amber-500 mt-6 font-bold text-3xl md:text-6xl">Bring your visions to life.</h1>
            <span className="text-blue-500">Transform your ideas into reality</span>
          </div>
          <div className="md:flex md:flex-row md:items-center gap-10 ">
            <div className="bg-gray-100  hover:bg-gray-50  w-full md:w-1/3 px-4 py-7 text-black">
              <div className="justify-center m-2 items-center flex">
                <Image  src={img1} alt="" width={70} />
              </div>
              <div className="text-center md:text-center">
                <h1 className="text-blue-700 font-bold m-2 text-2xl md:text-3xl">Innovation</h1>
                <p className="px-3 text-sm md:text-lg">Fostering creativity and cutting-edge ideas through collaborative projects, access to tech, and innovative thinking.</p>
              </div>
            </div>
            <div className="bg-gray-100  hover:bg-gray-50 w-full md:w-1/3 px-4 py-7 text-black">
              <div className="justify-center m-2 items-center flex">
                <Image  src={img2} alt="" width={70} />
              </div>
              <div className="text-center md:text-center ">
                <h1 className="text-blue-700 font-bold m-2 text-2xl md:text-3xl">Ideation</h1>
                <p className="text-sm md:text-lg px-3">Empowering individuals with hands-on learning experiences and skill development in science, technology, engineering.</p>
              </div>
            </div>
            <div className="bg-gray-100  hover:bg-gray-50 w-full md:w-1/3 px-4 py-7 text-black">
              <div className="justify-center m-2 items-center flex">
                <Image  src={img3} alt="" width={70} />
              </div>
              <div className="text-center md:text-center">
                <h1 className="text-blue-700 font-bold m-2 text-2xl md:text-3xl">Fabrication</h1>
                <p className="px-3 text-sm md:text-lg">Offering state-of-the-art machines to enable precision fabrication, empowering users to bring their designs to life</p>
              </div>
            </div>
            
          </div>
        </div> */}
      </div>
    );
  }
  
  export default Pillars;
  
  