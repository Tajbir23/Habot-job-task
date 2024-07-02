import { FaBagShopping, FaLocationDot } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="text-white py-20 bg-[url('/images/hero.svg')] bg-cover bg-center bg-no-repeat flex flex-col gap-10 px-4 sm:px-10 md:px-20 lg:px-40">
      <div className="text-[32px] sm:text-[45px] md:text-[55px] text-center font-poppins font-normal">
        <h1 className="font-bold">Are You a Supplier?</h1>
        <h2 className="font-normal">Explore Matching Opportunities.</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
        <div className="flex items-center justify-center gap-2 bg-white rounded w-full md:w-auto">
          <FaBagShopping className="text-xl text-[#E7760D] ml-5" />
          <input type="text" className="text-black p-3 outline-none w-full md:w-60 lg:w-96" placeholder="Search your required service here" />
        </div>

        <div className="flex items-center justify-center gap-2 bg-white rounded w-full md:w-auto">
          <FaLocationDot className="text-xl text-[#E7760D] ml-5" />
          <input type="text" className="text-black p-3 outline-none w-full md:w-60 lg:w-96" placeholder="Search your desired location here" />
        </div>

        <button className="font-inter font-bold bg-[#00732F] px-4 py-3 rounded w-full md:w-auto md:px-6 lg:px-4">Search</button>
      </div>

      <div>
        <h1 className="font-poppins text-[14px] sm:text-[16px] md:text-[18px] text-center">
          <span className="font-bold">Are you a buyer? </span>
          <span className="font-normal underline">Click here if you are looking to post a requirement</span>
        </h1>
      </div>
    </div>
  );
}

export default Hero;
