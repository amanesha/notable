import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import notable from '../assets/notable.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  //const navigate = useNavigate();
  const dropdownRef = useRef(null);
  
  // Get current user from localStorage
  const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {
    name: 'John Doe',
    email: 'john@example.com'
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    //navigate('/login');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white border-b border-gray-400 dark:bg-gray-700 dark:border-gray-600">
      <div className="   max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        {/* Logo and Brand Name */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-500 rounded-lg">
            <img className="w-full h-full object-contain" src={notable} alt="Notable Logo" />
          </div>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Notable
          </span>
        </a>

        {/* Avatar Dropdown */}
        <div className="flex items-center md:order-2 relative" ref={dropdownRef}>
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="User"
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 z-50 w-48  bg-white rounded-lg shadow border-gray-100 dark:bg-gray-700 dark:divide-gray-600">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  {currentUser.name}
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  {currentUser.email}
                </span>
              </div>
              <ul className="py-2">
                <li>
                  <a
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;