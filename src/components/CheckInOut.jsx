// src/components/VenueDropdown.js
import React, { useState } from "react";
import notable from "../assets/notable.png";
import cafe from "../assets/cafe.jpg";

const CheckInOut = () => {
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Sample venue data with descriptions
  const venues = [
    {
      id: 1,
      name: "Grand Ballroom",
      description: "Elegant space with crystal chandeliers",
      capacity: "500 guests",
      location: "Downtown",
    },
    {
      id: 2,
      name: "Skyline Pavilion",
      description: "Modern venue with panoramic city views",
      capacity: "300 guests",
      location: "Business District",
    },
    {
      id: 3,
      name: "Garden Terrace",
      description: "Outdoor space with floral arrangements",
      capacity: "200 guests",
      location: "Riverside",
    },
    {
      id: 4,
      name: "Seaside Hall",
      description: "Beachfront venue with ocean views",
      capacity: "350 guests",
      location: "Coastal Area",
    },
    {
      id: 5,
      name: "Mountain Lodge",
      description: "Rustic venue with fireplace and wooden accents",
      capacity: "150 guests",
      location: "Mountain Resort",
    },
    {
      id: 6,
      name: "Tech Hub Conference Center",
      description: "State-of-the-art facility with AV equipment",
      capacity: "400 guests",
      location: "Innovation Park",
    },
    {
      id: 7,
      name: "Vineyard Estate",
      description: "Charming venue surrounded by vineyards",
      capacity: "250 guests",
      location: "Wine Country",
    },
    {
      id: 8,
      name: "Historic Mansion",
      description: "Elegant 19th-century architecture",
      capacity: "180 guests",
      location: "Heritage District",
    },
    {
      id: 9,
      name: "Modern Art Gallery",
      description: "Contemporary space with rotating exhibits",
      capacity: "220 guests",
      location: "Arts Quarter",
    },
    {
      id: 10,
      name: "Rooftop Lounge",
      description: "Trendy urban space with city skyline views",
      capacity: "120 guests",
      location: "Downtown",
    },
  ];

  const handleSelect = (venue) => {
    setSelectedVenue(venue);
    setIsOpen(false);
  };

  return (
    <div className=" mb-14 p-6 dark:bg-gray-700 dark:border-gray-600 min-h-screen">
      <div className="flex items-center justify-center space-x-3 mb-2">
        <div className="flex items-center justify-center w-60 h-20  ">
          <img className="w-89  " src={notable} alt="" />
        </div>
      </div>

      <div>
        <h1 className="text-4xl pb-3 font-bold text-white">Check In</h1>

        <p className="leading-normal text-xl pb-2 max-w-lg   text-gray-900 dark:text-white">
          Check in to be visible and start conversation
        </p>
      </div>
      <div className="relative  pb-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-2 mt-2 w-full text-white bg-amber-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 text-center inline-flex items-center justify-between transition-all duration-200"
          type="button"
        >
          <span>{selectedVenue ? selectedVenue.name : "Select a venue"}</span>
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        {/* Dropdown Menu - Scrollable for long lists */}
        {isOpen && (
          <div
            className=" dark:bg-gray-200 dark:border-gray-700   z-20 absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
            style={{ maxHeight: "320px" }}
          >
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 className="font-medium text-gray-800">Available Venues</h3>
              <p className="text-xs text-gray-500 mt-1">
                Scroll to see all options
              </p>
            </div>

            <div className="overflow-y-auto" style={{ maxHeight: "260px" }}>
              <ul className="py-2 text-sm text-gray-700">
                {venues.map((venue) => (
                  <li key={venue.id}>
                    <button
                      onClick={() => handleSelect(venue)}
                      className={`w-full text-left px-4 py-3 hover:bg-blue-50 flex justify-between items-start transition-colors ${
                        selectedVenue?.id === venue.id
                          ? "bg-blue-50 border-l-4 border-blue-500"
                          : ""
                      }`}
                    >
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">
                          {venue.name}
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          {venue.description}
                        </div>
                      </div>
                      <div className="text-right text-xs">
                        <div className="text-gray-900">{venue.capacity}</div>
                        <div className="text-gray-500 mt-1">
                          {venue.location}
                        </div>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Selected Venue Card */}
      {selectedVenue && (
        <div className="dark:bg-gray-700 dark:border-gray-400 rounded-lg border border-gray-400 overflow-hidden shadow-sm transition-all duration-300">
          <div className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {selectedVenue.name}
                </h3>
                <p className="text-white">{selectedVenue.description}</p>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {selectedVenue.location}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="dark:bg-gray-700  dark:border-gray-400 rounded-lg border      p-3 -">
                <div className="text-xs text-white">Capacity</div>
                <div className="font-medium">{selectedVenue.capacity}</div>
              </div>
              <div className="dark:bg-gray-700 border dark:border-gray-400 p-3 rounded-lg">
                <div className="text-xs text-white">Status</div>
                <div className="font-medium text-green-500">Available</div>
              </div>
            </div>

            <div className="mt-5 flex space-x-3">
              <button className="flex-1 bg-amber-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Check In
              </button>
              <button
                onClick={() => setSelectedVenue(null)}
                className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-lg border border-gray-300 transition-colors"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}

      {!selectedVenue && (
        <div className="  text-center p-2 border-2 border-dashed border-gray-300 rounded-lg">
          <div className=" flex items-center justify-center  ">
            <img
              className=" max-md:w-full w-xl px-1 py-1 text-center inline-flex items-center justify-between "
              src={cafe}
              alt=""
            />
          </div>
          <h3 className=" mt-2 text-lg font-medium text-white">
            No venue selected
          </h3>
          <p className="mt-1 text-white">
            Choose a venue from the dropdown above
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckInOut;
