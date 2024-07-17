// src/pages/ServicesPage.jsx

const ServicesPage = () => {
  return (
    <main className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
      <ul className="mt-4 list-disc list-inside text-gray-600">
        <li>Event ticket booking</li>
        <li>Travel ticket booking</li>
        <li>Hotel reservations</li>
        <li>Event management services</li>
      </ul>
      <p className="mt-2 text-gray-600">
        We offer a wide range of services to ensure that your ticketing and booking needs are met efficiently and effectively.
      </p>
    </main>
  );
}

export default ServicesPage;
