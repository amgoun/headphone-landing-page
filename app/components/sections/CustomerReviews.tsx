import Image from "next/image";

import _05 from "../../../public/images/_05.png";
import _03 from "../../../public/images/_03.png";
import _02 from "../../../public/images/_02.png";
import _01 from "../../../public/images/_01.png";
import _000 from "../../../public/images/_000.png";
import avatar_01 from "../../../public/images/avatar_01.png";
import avatar_02 from "../../../public/images/avatar_02.png";
import avatar_03 from "../../../public/images/avatar_03.png";
import { StarIcon } from "@heroicons/react/24/solid";

const customerReviews = () => {
  return (
    <section id="testmonials" className="max-container max-ms:mt-12 ">
      <div className="flex flex-col  gap-5">
        <h2 className=" text-4xl font-palanquin font-bold">
          <span className="text-primary">What People</span> Say About Us
        </h2>
        <p>
          experiance top-notch quality and style with our sought-afre selection.{" "}
          <br />
          discover a world of elegant design and value
        </p>
      </div>
      <div className=" grid grid-cols-1  lg:grid-cols-3 py-4 px-12  mt-12 gap-14">
        <div className=" flex flex-col justify-center text-center items-center bg-white px-4 py-4 mt-20 rounded-md">
          <Image
            src={avatar_02}
            width={100}
            height={100}
            alt="avatar"
            className="object-contain relative z-10 rounded-full border-8 border-blue-50 -mt-[70px]"
          />

          <div>
            <p className="font-semibold text-lg py-4"> Michael Anderson</p>
            <p className="leading-7 text-gray-500">
              These headphones deliver outstanding sound with rich bass and
              crystal-clear highs. They are comfortable for long wear and excel
              at noise-cancellation.
            </p>
          </div>
          <div className="flex gap-2 mt-5 items-center">
              <StarIcon className="w-5 h-5 fill-primary" />
              <p className="text-xl leading-normal text-gray-500 font-montserrat">
                (5.0)
              </p>
            </div>
        </div>
        <div className=" flex flex-col justify-center text-center items-center bg-white px-4 py-4 mt-20 rounded-md">
          <Image
            src={avatar_01}
            width={100}
            height={100}
            alt="avatar"
            className="object-contain relative z-10 rounded-full border-8 border-blue-50 -mt-[70px]"
          />

          <div>
            <p className="font-semibold text-lg py-4"> David Taylor</p>
            <p className="leading-7 text-gray-500">
              These headphones deliver outstanding sound with rich bass and
              crystal-clear highs. They are comfortable for long wear and excel
              at noise-cancellation.
            </p>
          
          </div>
          <div className="flex gap-2 mt-5 items-center">
              <StarIcon className="w-5 h-5 fill-primary" />
              <p className="text-xl leading-normal text-gray-500 font-montserrat">
                (4.5)
              </p>
            </div>
        </div>
        <div className=" flex flex-col justify-center text-center items-center bg-white px-4 py-4 mt-20 rounded-md">
          <Image
            src={avatar_03}
            width={100}
            height={100}
            alt="avatar"
            className="object-contain relative z-10 rounded-full border-8 border-blue-50 -mt-[70px]"
          />

          <div>
            <p className="font-semibold text-lg py-4">Amelia Smith</p>
            <p className="leading-7 text-gray-500">
              These headphones deliver outstanding sound with rich bass and
              crystal-clear highs. They are comfortable for long wear and excel
              at noise-cancellation.
            </p>
          </div>
          <div className="flex gap-2 mt-5 items-center">
              <StarIcon className="w-5 h-5 fill-primary" />
              <p className="text-xl leading-normal text-gray-500 font-montserrat">
                (5.0)
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default customerReviews;
