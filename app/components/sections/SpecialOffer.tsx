

import Image from "next/image";
import man from "../../../public/images/man.png";

const SpecialOffer = () => {
  return (
    <section
      id="about"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container "
    >
    
      <div className=" flex flex-1 justify-center items-center">
      <Image
          src={man}
          width={733}
          height={687}
          alt="heed"
          className="object-contain relative z-10"
        />
      </div>
      <div className=" flex  flex-1 flex-col">
        <h2></h2>

        <h2 className="mt-10 font-planguin text-4xl capitalize font-bold lg:max-w-lg">
        Focal Bathys
        </h2>
        <p className="mt-4 lg:max-w-lg font-monserrat text-gray-500 leading-7">
          Enjoy sound immersion and freedom of movement with Focals first wireless Active Noise Cancelling Hi-Fi headphone the Bathys.
        </p>
        <div  className="flex mt-24  text-gray-500 font-monserrat leading-7   bg-amber">
          <div className=" flext flex-col  px-2 md:px-8 py-4 border-e-[3px] border-solid border-gray-300  ">
            <p className="text-sm">Cup Style</p>
            <p className="capitalized mt-2 text-lg">Closed-back</p>
          </div>
          <div className=" flext flex-col px-2 md:px-8 py-4 border-e-[3px] border-solid border-gray-300 ">
            <p className="text-sm">Wearing Style</p>
            <p className="capitalized mt-2 text-lg">Over-ear</p>
          </div>
          <div className=" flext flex-col  px-2 md:px-8 py-4 border-e-[3px] border-solid border-gray-300 ">
            <p className="text-sm">Driver Type</p>
            <p className="capitalized mt-2 text-lg">Dynamic</p>
          </div>
          <div className=" flext flex-col  px-2 md:px-8   py-4 border-e-[3px] border-solid border-gray-300 ">
            <p className="text-sm">Connectivity</p>
            <p className="capitalized mt-2 text-lg">Wireless</p>
          </div>
          
        </div>
        <div className=" mt-11">
          <button className=" flex py-4 px-7 bg-primary font-montserrat leading-none text-lg rounded-full gap-4 justify-center items-center text-white mt-4 lg:max-w-lg">
            View Detail
          </button>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer