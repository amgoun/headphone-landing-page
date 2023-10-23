'use client'

import Button from "../Button";
import Image from "next/image";
import { statistics } from "../../constants/index";
import heed_2 from "../../../public/images/heed_2.png";
import _01 from "../../../public/images/_01.png";
import Focal from "../../../public/images/Focal.png";
import { useState } from "react";

import { motion } from 'framer-motion'



const Hero = () => {
   const  [headImg, setHeadImg ] = useState(heed_2)

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen  gap-10 max-container p-2"
    >
      <div className="relative xl:w-2/5 flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-primary mt-10">
          {" "}
          expolre our collections
        </p>
        <h1 className="mt-10 font-planguin text-8xl max-sm:text-[4.5rem] max-sm:leading-[5.1rem] font-bold">
          best selection of
          <br />
          <span className=" xl:whitespace-nowrap relative z-10 pr-10 text-primary">
            headphones
          </span>
      
        </h1>
        <p className="font-montserrat text-gray-500 text-lg leading-8 mt-6 mb-14 sm:max-x-sm">
          After 3 years of gruelling R&D, the HEDDphone successor is finally
          here. Lighter, infinitely more comfortable and insanely good sound.
        </p>
        <Button />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className=" leading-7 font-monserrat text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex relative flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-white bg-hero bg-cover ">
        <motion.img
        initial={{opacity:0, x:20}}
        animate={{opacity:1, x:0, transition:{delay:0.6}}}
          src='images/heed_2.png'
          width={610}
          height={500}
          alt="heed"
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 py-4 px-4">
        <Image
          src={heed_2}
          width={150}
          height={300}
          alt="heed"
          className="object-contain relative z-10 rounded-md bg-gray-50 border-2 hover:hover:shadow-lg  py-2 px-2"
        />
        <Image
          src={Focal}
          width={150}
          height={300}
          alt="heed"
          className="object-contain relative z-10  rounded-md bg-gray-50   border-2 hover:hover:shadow-lg py-2 px-2"
        />
        <Image
          src={_01}
          width={150}
          height={300}
          alt="heed"
          className="object-contain relative z-10 bg-gray-50  rounded-md  border-2 hover:hover:shadow-lg py-2 px-2"
        />
        </div>
      </div>
    </section>
  );
};

export default Hero;
