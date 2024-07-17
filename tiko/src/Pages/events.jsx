// src/pages/EventsPage.jsx
import EventCard from '../components/EventsCard';

const events = [
  {
    id: 1,
    image: 'https://cdn.pixabay.com/photo/2017/12/08/11/53/event-party-3005668_640.jpg',
    title: 'Music Concert',
    date: 'July 24, 2024',
    location: 'Nairobi, Kenya',
    description: 'Join us for an unforgettable music concert featuring top artists.',
    price: '$50'
  },
  {
    id: 2,
    image: 'https://cdn.pixabay.com/photo/2023/11/17/14/40/street-art-8394476_640.jpg',
    title: 'Art Exhibition',
    date: 'August 5, 2024',
    location: 'Mombasa, Kenya',
    description: 'Experience the finest art from renowned artists around the world.',
    price: '$30'
  },
  {
    id: 2,
    image: 'https://cdn.pixabay.com/photo/2016/11/18/15/44/audience-1835431_640.jpg',
    title: 'Ukwala Concert',
    date: 'December 19, 2024',
    location: 'Kilimani, Kenya',
    description: 'Join for An Exclusive Weekend Concert. Time To Enjoy',
    price: '$70'
  },
  {
    id: 2,
    image: 'http://www.travelstart.co.ke/blog/wp-content/uploads/2014/03/Safari-Rally.jpg',
    title: 'Safari Rally',
    date: 'june 5, 2024',
    location: 'Naivasha, Kenya',
    description: 'For all car buffs, the Safari Rally is one of the most popular events in the Kenyan calendar with both the young and old alike',
    price: '$9000'
  },
];

const EventsPage = () => {
  return (
    <main className="container mx-auto px-1 py-2">
      <h1 className="text-4xl font-bold mb-8">Events</h1>
      <div className=" flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 hover:shadow-lg">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
};

export default EventsPage;

