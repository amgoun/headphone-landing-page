
import Image from "next/image";
import _03 from "../../../public/images/_03.png";
import super_quality_bg from "../../../public/images/super_quality_bg.png";
const SuperQuality = () => {
  return (
    <section
      id="super"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container  "
    >
      <div className=" flex  flex-1 flex-col">
        <h2></h2>

        <h2 className="mt-10 font-planguin text-4xl capitalize font-bold lg:max-w-lg">
          we provide you
          <span className="text-primary"> super</span> {""}
          quality
          <span className="text-primary"> headphones</span>
        </h2>
        <p className="mt-4 lg:max-w-lg font-monserrat text-gray-500 leading-7">
          After 3 years of gruelling R&D, the HEDDphone successor is finally
          here. Lighter, infinitely more comfortable and insanely good sound.
        </p>
        <p className="mt-6 lg:max-w-lg font-monserrat text-gray-500 leading-7">
          here. Lighter, infinitely more comfortable and insanely good sound.
        </p>
        <div className=" mt-11">
          <button className=" flex py-4 px-7 bg-primary font-montserrat leading-none text-lg rounded-full gap-4 justify-center items-center text-white mt-4 lg:max-w-lg">
            View Detail
          </button>
        </div>
      </div>
      <div className=" flex flex-1 justify-center items-center">
      <Image
          src={super_quality_bg}
          width={500}
          height={422}
          alt="heed"
          className="object-contain relative z-10"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
