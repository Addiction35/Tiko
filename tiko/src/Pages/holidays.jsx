// src/pages/HolidaysPage.jsx
import HolidayCard from '../components/HolidayCard';
import HeroSection from '../components/HeroHoliday';

const holidays = [
  {
    id: 1,
    title: 'Beach Getaway',
    image: 'https://cdn.pixabay.com/photo/2018/05/28/22/11/message-in-a-bottle-3437294_1280.jpg',
    description: 'Enjoy a relaxing beach vacation with family and friends.',
    price: '$499',
  },
  {
    id: 2,
    title: 'Mountain Adventure',
    image: 'https://cdn.pixabay.com/photo/2019/11/23/03/08/valley-4646114_640.jpg',
    description: 'Experience the thrill of hiking and exploring the mountains.',
    price: '$399',
  },
  // Add more holiday packages here
];

const HolidaysPage = () => {
  return (
    <main className="container mx-auto px-0 py-8">
      <HeroSection />
      <h1 className="flex text-4xl justify-center font-bold mb-8 mt-8">Holiday Packages</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {holidays.map(holiday => (
          <HolidayCard key={holiday.id} holiday={holiday} />
        ))}
      </div>
    </main>
  );
};

export default HolidaysPage;
