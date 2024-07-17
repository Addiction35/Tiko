// src/pages/FlightsPage.jsx

const FlightsPage = () => {
  return (
    <main className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8">Find Flights</h1>

      {/* Flight Search Section */}
      <section className="bg-white p-6 rounded shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Search Flights</h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="from" className="block text-gray-700">From</label>
            <input
              type="text"
              id="from"
              className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Departure City"
              required
            />
          </div>
          <div>
            <label htmlFor="to" className="block text-gray-700">To</label>
            <input
              type="text"
              id="to"
              className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Arrival City"
              required
            />
          </div>
          <div>
            <label htmlFor="departure" className="block text-gray-700">Departure Date</label>
            <input
              type="date"
              id="departure"
              className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="return" className="block text-gray-700">Return Date</label>
            <input
              type="date"
              id="return"
              className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="roundTrip"
              className="mr-2"
            />
            <label htmlFor="roundTrip" className="text-gray-700">Round Trip</label>
          </div>
          <button
            type="submit"
            className="col-span-1 sm:col-span-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Search Flights
          </button>
        </form>
      </section>

      {/* Flight Results Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Available Flights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Flight Card */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white rounded shadow-md p-4 transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
              <h3 className="text-lg font-semibold">Flight XYZ {index + 1}</h3>
              <p className="text-gray-600">From: City A - To: City B</p>
              <p className="text-gray-600">Departure: 10:00 AM</p>
              <p className="text-gray-600">Arrival: 12:00 PM</p>
              <p className="text-gray-600">Duration: 2h</p>
              <p className="text-blue-600 font-bold">$200</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FlightsPage;
