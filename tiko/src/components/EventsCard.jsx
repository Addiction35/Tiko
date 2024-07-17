// src/components/EventCard.jsx

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white event-card m-4 transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
        <img className="w-full h-40 object-cover" src={event.image} alt={event.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{event.title}</div>
          <p className="text-gray-700 text-base">{event.date}</p>
          <p className="text-gray-700 text-base">{event.location}</p>
          <p className="text-gray-700 text-base mt-2">{event.description}</p>
        </div>
        <div className="px-6 py-4 flex justify-between items-center">
          <Link to={`/events/${event.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Details
          </Link>
          <span className="text-gray-700 text-sm">{event.price}</span>
        </div>
      </div>
    );
  };

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventCard;
