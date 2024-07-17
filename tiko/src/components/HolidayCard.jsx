// src/components/HolidayCard.jsx
import PropTypes from 'prop-types';

const HolidayCard = ({ holiday }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
      <img className="w-full h-48 object-cover" src={holiday.image} alt={holiday.title} />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{holiday.title}</h2>
        <p className="text-gray-700 text-base">{holiday.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold">{holiday.price}</span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

HolidayCard.propTypes = {
  holiday: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default HolidayCard;
