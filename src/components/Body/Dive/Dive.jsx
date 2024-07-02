

const Dive = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-10 gap-10">
      <div className="text-center md:text-left max-w-md">
        <h2 className="text-3xl font-bold mb-4">Ready to dive into <span className="text-purple-600">HABOT?</span></h2>
        <p className="text-gray-700 mb-6">
          Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.
        </p>
        <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
          Sign up Today!
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {['Abu Dhabi', 'Dubai', 'Sharjah & Ajman', 'Fujairah', 'Ras Al Khaimah', 'Umm Al Quwain'].map((city) => (
          <button
            key={city}
            className="border border-orange-500 py-2 px-4 rounded hover:bg-orange-100 transition"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dive;
