// src/pages/MainContent.jsx
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const HomePage = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,  // Enable navigation arrows
    prevArrow: <button className="slick-prev">Prev</button>, // Customize arrow
    nextArrow: <button className="slick-next">Next</button>,
  };

  return (
    <main className="container mx-auto px-0 py-8 w-full">
      {/* Hero Section with Carousel */}
      <section className="relative object-cover mb-5 mt-[120px] lg:mt-[50px] bg-gray-200">
        <Slider {...settings} >
          <div>
            <img src="https://cdn.pixabay.com/photo/2022/01/10/04/37/event-6927353_640.jpg" alt="Event 1" className="flex w-full h-64 object-cover " />
          </div>
          <div>
            <img src="https://cdn.pixabay.com/photo/2020/10/29/13/34/table-5696243_640.jpg" alt="Event 2" className="flex w-full h-64 object-cover " />
          </div>
        </Slider>
        <div className="absolute bottom-4 left-4">
          <h1 className="text-3xl lg:text-5xl font-bold text-white drop-shadow-lg">Explore Amazing Events & Holidays</h1>
          <p className="text-lg text-white mb-6 drop-shadow-lg">Book your tickets and enjoy unforgettable experiences.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-[84px] hover:bg-gray-300 hover:shadow-xl transition duration-300">
            Start Exploring
          </button>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="mb-8 px-5">
        <h2 className="text-4xl font-bold mb-6">Featured Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
              <img src="https://cdn.pixabay.com/photo/2020/10/29/13/34/table-5696243_640.jpg" alt="Event" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Event Title {index + 1}</h3>
                <p className="text-gray-600 mb-2">Date: March 10, 2024</p>
                <p className="text-gray-800 font-bold mb-2">Location: City, Venue</p>
                <p className="text-blue-600 text-lg font-bold">$50</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                  Buy Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Holiday Packages Section */}
      <section className='px-5'>
        <h2 className="text-4xl font-bold mb-6">Exciting Holiday Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
              <img src="https://media.istockphoto.com/id/1429367591/photo/a-family-on-summer-holidays-stands-by-the-swimming-pool-and-enjoys-the-beautiful-sunset.jpg?s=612x612&w=0&k=20&c=cbTQxS3AywGQdeHFb8eSK9WKA3QNPFdLmAen7qaJZNc=" alt="Holiday Package" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Holiday Package {index + 1}</h3>
                <p className="text-gray-600 mb-2">Includes flights and accommodation.</p>
                <p className="text-blue-600 text-lg font-bold">Starting from $200</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
