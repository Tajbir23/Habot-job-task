import { IoIosCheckmarkCircle } from "react-icons/io";

const Buyer = () => {
  return (
    <ul className="mt-10 flex flex-col gap-2 text-[16px] sm:text-[18px] md:text-[20px]">
      <li className="flex gap-2 items-center">
        <IoIosCheckmarkCircle className="text-[#00732F] text-lg md:text-xl" /> 
        <span>Post your requirements.</span>
      </li>
      <li className="flex gap-2 items-center">
        <IoIosCheckmarkCircle className="text-[#00732F] text-lg md:text-xl" /> 
        <span>Sit back for multiple suppliers to contact you.</span>
      </li>
      <li className="flex gap-2 items-center">
        <IoIosCheckmarkCircle className="text-[#00732F] text-lg md:text-xl" /> 
        <span>Choose among the suppliers based on the ratings and reviews.</span>
      </li>
    </ul>
  );
}

export default Buyer;
