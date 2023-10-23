import Image from "next/image";

import _05 from "../../../public/images/_05.png";
import _03 from "../../../public/images/_03.png";
import _02 from "../../../public/images/_02.png";
import _01 from "../../../public/images/_01.png";
import Focal from "../../../public/images/Focal.png";
import { StarIcon } from "@heroicons/react/24/solid";

const PoplarProduct = () => {
  return (
    <section id="popular" className="max-container max-ms:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className=" text-4xl font-palanquin font-bold">
          <span className="text-primary">Popular</span> Products
        </h2>
        <p>
          experiance top-notch quality and style with our sought-afre
          selection. <br/>discover a world of elegant design and value
        </p>
      </div>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 mt-14  justify-items-center ">
        <div>
          <Image
            src={_01}
            width={280}
            height={280}
            alt="heed"
            className="object-contain relative z-10 rounded-md bg-hero2   hover:border-2  hover:border-primary hover:shadow-lg py-2 px-2 "
          />
          <div className="flex gap-2 mt-5 items-center">
            <StarIcon className="w-5 h-5 fill-primary" />
            <p className="text-xl leading-normal text-gray-500 font-montserrat">
              (4.5)
            </p>
          </div>
          <div>
            <p className="upercase text-sm font-palanquin text-gray-500 mt-4">
             Hifiman
            </p>
            <h3 className="text-2xl leading-normal font-palanquin font-semibold">
            Hifiman HE1000 V2 {" "}
            </h3>
            <p className="mt-2 text-2xl leading-normal font-semibold font-montserrat text-primary">$1,399 </p>
          </div>
        </div>
        <div>
          <Image
            src={_02}
            width={280}
            height={280}
            alt="heed"
            className="object-contain relative z-10  rounded-md bg-hero2  hover:border-2 hover:border-primary hover:shadow-lg py-2 px-2"
          />
          <div className="flex gap-2 mt-5 items-center">
            <StarIcon className="w-5 h-5 fill-primary" />
            <p className="text-xl leading-normal text-gray-500 font-montserrat">
              (4.4)
            </p>
          </div>
          <div>
            <p className="upercase text-sm font-palanquin text-gray-500 mt-4">
              Dan Clark Audio 
            </p>
            <h3 className="text-2xl leading-normal font-palanquin font-semibold">
            Dan Clark Audio AEON 2 {" "}
            </h3>
            <p className="mt-2 text-2xl leading-normal font-semibold font-montserrat text-primary">$899.99 </p>
          </div>
        </div>
        <div>
          <Image
            src={_05}
            width={280}
            height={280}
            alt="heed"
            className="object-contain relative z-10  rounded-md bg-hero2 bg-no-repeat  hover:border-2 hover:border-primary hover:shadow-lg py-2 px-2"
          />
          <div className="flex gap-2 mt-5 items-center">
            <StarIcon className="w-5 h-5 fill-primary" />
            <p className="text-xl leading-normal text-gray-500 font-montserrat">
              (5.0)
            </p>
          </div>
          <div>
            <p className="upercase text-sm font-palanquin text-gray-500 mt-4">
             Hifiman 
            </p>
            <h3 className="text-2xl leading-normal font-palanquin font-semibold">
             Hifiman Arya Headphones {" "}
            </h3>
            <p className="mt-2 text-2xl leading-normal font-semibold font-montserrat text-primary">$999</p>
          </div>
        </div>
        <div>
          <Image
            src={Focal}
            width={280}
            height={280}
            alt="heed"
            className="object-contain relative z-10  rounded-md bg-hero2  hover:border-2 hover:border-primary hover:shadow-lg py-2 px-2"
          />
          <div className="flex gap-2 mt-5 items-center">
            <StarIcon className="w-5 h-5 fill-primary" />
            <p className="text-xl leading-normal text-gray-500 font-montserrat">
              (4.5)
            </p>
          </div>
          <div>
            <p className="upercase text-sm font-palanquin text-gray-500 mt-4">
             Focal 
            </p>
            <h3 className="text-2xl leading-normal font-palanquin font-semibold">
            Focal Clear Mg Headphones{" "}
            </h3>
            <p className="mt-2 text-2xl leading-normal font-semibold font-montserrat text-primary">$1,499 </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoplarProduct;
