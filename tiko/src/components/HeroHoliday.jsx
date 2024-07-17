// src/components/HeroSection.jsx
const HeroSection = () => {
  return (
    <div className="flex relative w-full h-60 md:h-96 lg:h-[600px] mt-[90px] lg:mt-[50px] bg-gray-300">
      <img
        src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8MTYxNzg4NTI3Mg&ixlib=rb-1.2.1&q=80&w=1080" // Replace with an actual high-resolution image URL
        alt="Holiday Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-2 flex flex-col justify-center items-center text-white">
        <h1 className=" text-3xl md:text-5xl lg:text-4xl font-bold mb-2">Discover Your Next Adventure</h1>
        <p className="text-lg md:text-xl mb-4">Explore amazing holiday packages and experiences.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
