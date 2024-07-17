// src/App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './shared/Headers';
import Footer from './shared/Footers';
import HomePage from './Pages/Home';
import EventsPage from './Pages/events';
import HolidaysPage from './Pages/holidays';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contacts';
import FlightsPage from './Pages/Flights';
import HotelsPage from './Pages/Hotels';
import BlogPage from './Pages/Blogs';

const App = () => {
  return (
    <Router>
      <div className="flex bg-white flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/Holidays" element={<HolidaysPage />} />
          <Route path="/Flights" element={<FlightsPage />} />
          <Route path="/Hotels" element={<HotelsPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="Blogs" element={<BlogPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


