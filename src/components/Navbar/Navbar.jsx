import { useState } from 'react';
import DropDown from "./DropDown";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-between items-center py-5 px-6 sm:px-10 bg-white shadow-md">
      <div>
        <img className="h-11" src="/images/logo.svg" alt="logo" />
      </div>
      <div className="flex items-center gap-5 text-[#6D6E71] hidden md:flex">
        <a href="#" className="font-poppins font-normal">Find Suppliers</a>
        <DropDown />
        <button className="border border-[#00732F] text-[#00732F] px-3 py-2 rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 focus:ring font-bold font-inter">Login/Sign Up</button>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-16 right-0 w-full bg-white shadow-md md:hidden">
          <div className="flex flex-col items-center py-4">
            <a href="#" className="font-poppins font-normal py-2">Find Suppliers</a>
            <DropDown />
            <button className="border border-[#00732F] text-[#00732F] px-3 py-2 rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 focus:ring font-bold font-inter">Login/Sign Up</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
