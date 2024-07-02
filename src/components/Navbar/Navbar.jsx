import DropDown from "./DropDown"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-10 mx-10">
        <div>
            <img className="h-11" src="/images/logo.svg" alt="logo" />
        </div>
        <div className="flex items-center gap-5 text-[#6D6E71]">
            <a href="#" className="font-poppins font-normal" >Find Suppliers</a>
            <div>
            <DropDown />
            </div>
            <button className="border border-[#00732F] text-[#00732F] px-3 py-2 rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 focus:ring font-bold font-inter">Login/Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar