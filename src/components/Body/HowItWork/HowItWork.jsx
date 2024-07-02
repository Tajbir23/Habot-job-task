import { FaUserPlus, FaClipboardList, FaRegEdit, FaHandshake } from 'react-icons/fa';
import { MdOutlineRateReview } from 'react-icons/md';

const HowItWorks = () => {
  return (
    <div className="px-4 py-16 sm:px-8 md:px-16 lg:px-24 bg-white text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">How it works?</h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-12 max-w-3xl mx-auto">Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center p-4 bg-blue-100 rounded-lg shadow-md">
          <FaUserPlus className="text-6xl text-orange-500 mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Select Your Role and Sign Up</h3>
        </div>
        <div className="flex flex-col items-center p-4 bg-blue-100 rounded-lg shadow-md">
          <FaClipboardList className="text-6xl text-orange-500 mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Buyers Post Your Requirements</h3>
        </div>
        <div className="flex flex-col items-center p-4 bg-blue-100 rounded-lg shadow-md">
          <MdOutlineRateReview className="text-6xl text-orange-500 mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Review, Select, and Contact the Best Suppliers</h3>
        </div>
        <div className="flex flex-col items-center p-4 bg-blue-100 rounded-lg shadow-md">
          <FaRegEdit className="text-6xl text-orange-500 mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Suppliers Complete Your Profile and Get Notified for Opportunities</h3>
        </div>
        <div className="flex flex-col items-center p-4 bg-blue-100 rounded-lg shadow-md">
          <FaHandshake className="text-6xl text-orange-500 mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Both Parties Can Connect and Leave Feedback</h3>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
