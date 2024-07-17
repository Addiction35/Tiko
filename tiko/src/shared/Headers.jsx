// src/components/Header.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUserCircle, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/tiko-high-resolution-logo-transparent.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[hsl(180,100%,98%)] shadow-md fixed w-[100%] z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-sm font-poppins hover:drop-shadow-xl font-bold text-gray-800">
          <Link to="/">
            <img src={Logo} alt="Tiko" className="h-8 w-12" />Easy Secure Efficient
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-gray-800 md:hidden focus:outline-none"
        >
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-6 w-full  md:w-auto mt-4 md:mt-0`}
        >
          <Link to="/" className="text-gray-500 hover:text-gray-900 block md:inline-block">
            HOME
          </Link>
          <Link to="/events" className="text-gray-500 hover:text-gray-900 block md:inline-block">
            EVENTS
          </Link>
          <Link to="/holidays" className="text-gray-500 hover:text-gray-900 block md:inline-block">
            HOLIDAYS
          </Link>
          <Link to="/flights" className="text-gray-500 hover:text-gray-900 block md:inline-block">
            FLIGHTS
          </Link>
          <Link to="/hotels" className="text-gray-500 hover:text-gray-900 block md:inline-block">
            HOTELS
          </Link>
          <Link to="/blogs" className="text-gray-500 hover:text-gray-900 block md:inline-block">
            BLOGS
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="relative hidden mb-2 md:block">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-full py-2 px-4 pl-8 text-gray-800"
          />
          <FaSearch className="absolute left-2 top-2 text-gray-600" />
        </div>

        {/* User Account and Cart Links */}
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-gray-800 hover:text-blue-500 hidden md:block">
            Login
          </Link>
          <Link to="/register" className="text-gray-800 hover:text-blue-500 hidden md:block">
            Register
          </Link>
          <Link to="/cart" className="text-gray-800 hover:text-blue-500">
            <FaShoppingCart className="text-2xl" />
          </Link>
          <div className="relative hidden md:block">
            <FaUserCircle className="text-gray-800  hover:text-blue-500 text-2xl cursor-pointer" />
            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-48  border rounded-md shadow-lg hidden group-hover:block">
              <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Profile
              </Link>
              <Link to="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="relative mt-4 py-2 px-6 md:hidden">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-full py-2 px-4 pl-8 text-gray-800 w-full"
        />
        <FaSearch className="absolute left-8 top-2 text-gray-600" />
      </div>
    </header>
  );
};

export default Header;