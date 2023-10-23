import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1  lg:grid-cols-3 py-4 px-12 gap-8 gap-x-20 text-slate-200 font-palanquin">
        <div className="flex flex-col   px-4 py-4 ">
          <h3 className=" font-palanquin font-semibold text-xl py-4 leading-normal ">
            Sign up for our newsletter
          </h3>
          <p className="py-4 text-gray-400">
            Be the first to get notified about upcoming products, deals and
            giveaways.
          </p>
          <div className="flex gap-4 ">
            <input
              type="text"
              className="px-3 py-3 text-sm rounded-md flex-1 outline-none text-black"
              placeholder=" your email"
            />
            <button className="px-3 py-3 bg-primary rounded-md text-white">
              subscribe
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center  px-4 py-4  ">
          <h3 className=" font-palanquin font-semibold text-xl py-4 leading-normal">
            Sign up for our newsletter
          </h3>
          <ul className="flex flex-col gap-4 text-lg text-gray-400 leading-6">
            <li>365-day returns </li>
            <li>Track your order </li>
            <li>Shipping policy </li>
            <li>Refund policy </li>
            <li>FAQ </li>
            <li>Contact us </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center  px-4 py-4  ">
          <h3 className=" font-palanquin font-semibold text-xl py-4 leading-normal">
            Sign up for our newsletter
          </h3>
          <ul className="flex flex-col gap-4 text-lg text-gray-400 leading-6">
            <li>About Us </li>
            <li>The Headphone Community </li>
            <li>Buy Headphones, Help A Child Hear </li>
            <li>Terms Of Service </li>
            <li>Privacy Policy </li>
            <li>Accessibility Statement </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center py-4 w-full mt-6">
        <ul className=" flex justify-center items-center space-x-4">
          <li>
            <Image
              src="images/social/youtube.svg"
              width={32}
              height={32}
              alt="youtube"
              className="hover:opacity-[0.7]"
            />
          </li>
          <li>
            <Image
              src="images/social/instagram-48.svg"
              width={32}
              height={32}
              alt="instagram"
              className="hover:opacity-[0.7]"
            />
          </li>
          <li>
            <Image
              src="images/social/Twitter X.svg"
              width={28}
              height={28}
              alt="twitter"
              className="hover:opacity-[0.7]"
            />
          </li>
        </ul>
      </div>
      <p className=" flext py-3 text-center text-sm text-gray-400 ">
        Copyright © 2023 Amgoun Studio
      </p>
    </>
  );
};

export default Footer;
