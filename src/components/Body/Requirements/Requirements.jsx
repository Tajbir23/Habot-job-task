import { useState } from "react";
import Buyer from "./Buyer";
import Supplier from "./Supplier";

const Requirements = () => {
  const [toggle, setToggle] = useState("buyer");
  return (
    <div className="px-4 sm:px-8 md:px-16 py-10 bg-[#072F57] flex flex-col lg:flex-row gap-16 text-white font-poppins w-full">
      <div className="w-full lg:w-1/2">
        <iframe 
          width="100%" 
          height="315" 
          src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=7xTKo-u5Wd6tnMdX" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="flex justify-between mb-4">
          <button 
            onClick={() => setToggle('buyer')} 
            className={`text-[20px] sm:text-[24px] md:text-[26px] font-bold ${toggle === 'buyer' ? 'border-b-2 text-[#EB7150] border-[#EB7150]' : ''} px-4 sm:px-6 md:px-10 py-2`}
          >
            Buyer
          </button>
          <button 
            onClick={() => setToggle('supplier')} 
            className={`text-[20px] sm:text-[24px] md:text-[26px] font-bold ${toggle === 'supplier' ? 'border-b-2 text-[#EB7150] border-[#EB7150]' : ''} px-4 sm:px-6 md:px-10 py-2`}
          >
            Supplier
          </button>
        </div>
        <div>
          {toggle === 'buyer' ? <Buyer /> : <Supplier />}
        </div>
      </div>
    </div>
  );
}

export default Requirements;
