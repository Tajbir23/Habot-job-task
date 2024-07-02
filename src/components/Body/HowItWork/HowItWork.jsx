

const HowItWorks = () => {
  return (
    <div className="px-4 py-16 sm:px-8 md:px-16 lg:px-24 bg-white text-center font-poppins">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">How it works?</h2>
      <p className="text-sm sm:text-base md:text-lg mb-12 max-w-3xl mx-auto">Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 [&>*:nth-child(odd)]:bg-[#E8FBFF]">
        <div className="flex flex-col items-center justify-center gap-10 p-5">
          <img src="/images/role.svg" alt="role" className="text-6xl text-orange-500 " />
          <h3 className="text-xs sm:text-sm md:text-xl font-medium ">Select Your Role and Sign Up</h3>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 p-5">
          <img src="/images/post.svg" alt="role" className="text-6xl text-orange-500 " />
          <h3 className="text-xs sm:text-sm md:text-xl font-medium ">Buyers Post Your Requirements</h3>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 p-5">
          <img src="/images/review.svg" alt="role" className="text-6xl text-orange-500 " />
          <h3 className="text-xs sm:text-sm md:text-xl font-medium "> Review, Select, and Contact the Best Suppliers</h3>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 p-5">
          <img src="/images/notified.svg" alt="role" className="text-6xl text-orange-500 " />
          <h3 className="text-xs sm:text-sm md:text-xl font-medium ">Suppliers Complete your profile and get notified for opportunities</h3>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 p-5">
          <img src="/images/contact.svg" alt="role" className="text-6xl text-orange-500 " />
          <h3 className="text-xs sm:text-sm md:text-xl font-medium ">Contact to Buyers and Share your Quote for the service</h3>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 p-5">
          <img src="/images/parties.svg" alt="role" className="text-6xl text-orange-500 " />
          <h3 className="text-xs sm:text-sm md:text-xl font-medium ">Both the Parties can Connect and Make Business Leave a Feedback</h3>
        </div>
        
      </div>
    </div>
  );
}

export default HowItWorks;
