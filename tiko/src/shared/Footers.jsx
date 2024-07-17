// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import Logo from '../assets/tiko-high-resolution-logo-transparent.png'

const Footer = () => {
  return (
    <footer className="bg-[hsla(204,67%,53%,1)] h-40 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="flex justify-center text-lg font-bold">
              <img src={Logo} alt="" className='w-13 h-10' />Easy Secure Efficient</h3>
            <p className="text-sm font-normal font-poppins lg:text-lg">Connecting you with the best events and holiday packages. We Value Your Data And Privacy</p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/Events" className="hover:text-gray-300">Events</Link>
            <Link to="/Holidays" className="hover:text-gray-300">Holidays</Link>
            <Link to="/About" className="hover:text-gray-300">About</Link>
            <Link to="/Contact" className="hover:text-gray-300">Contact</Link>
          </nav>
        </div>
        <div className="mt-6 text-center text-sm">
          &copy; 2024 Tiko. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
