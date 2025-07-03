import  { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  // State management
  const [profileImage, setProfileImage] = useState(null);
  const [occupation, setOccupation] = useState('Product Designer');
  const [location, setLocation] = useState('San Francisco, CA');
  const [status, setStatus] = useState('Open to chat');
  const [isEditingOccupation, setIsEditingOccupation] = useState(false);
  const [isEditingLocation, setIsEditingLocation] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const fileInputRef = useRef(null);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle text field updates
  const handleUpdateOccupation = (e) => {
    if (e.key === 'Enter' || e.type === 'blur') {
      setIsEditingOccupation(false);
    }
  };

  const handleUpdateLocation = (e) => {
    if (e.key === 'Enter' || e.type === 'blur') {
      setIsEditingLocation(false);
    }
  };

  // Status options
  const statusOptions = [
    { id: 1, name: 'Open to chat', color: 'bg-green-500' },
    { id: 2, name: 'Coffee', color: 'bg-yellow-500' },
    { id: 3, name: 'Busy', color: 'bg-red-500' },
    { id: 4, name: 'Available', color: 'bg-blue-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 to-gray-600 flex items-center   justify-center px-4 py-8">
      <div className="min-h-screen  w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-400 p-6 text-white">
          <h1 className="text-2xl font-bold text-center pt-3 pb-7">Norma Profile</h1>
          {/* <p className="text-center text-blue-100 mt-1">Edit your professional information</p> */}
        </div>
        
        {/* Profile Content */}
        <div className="p-6 space-y-6">
          {/* Profile Image with Upload */}
          <div className="flex justify-center -mt-16">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="bg-gray-200 border-2 border-dashed rounded-full w-full h-full flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-12 w-12 text-gray-400" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => fileInputRef.current.click()}
                className="absolute bottom-2 right-0 bg-white text-blue-600 p-2 rounded-full shadow-md hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </button>
              
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                className="hidden"
                accept="image/*"
              />
            </div>
          </div>

          {/* Occupation Field */}
          <div className="text-center">
            {isEditingOccupation ? (
              <div className="flex justify-center">
                <input
                  type="text"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  onKeyDown={handleUpdateOccupation}
                  onBlur={handleUpdateOccupation}
                  autoFocus
                  className="text-xl font-bold text-gray-800 border-b-2 border-blue-500 outline-none text-center w-64 px-2 py-1"
                />
              </div>
            ) : (
              <h2 
                className="text-xl font-bold text-gray-800 cursor-pointer group inline-flex items-center"
                onClick={() => setIsEditingOccupation(true)}
              >
                {occupation}
                <span className="ml-2 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </span>
              </h2>
            )}
          </div>

          {/* Location Field */}
          <div className="text-center">
            {isEditingLocation ? (
              <div className="flex justify-center">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyDown={handleUpdateLocation}
                  onBlur={handleUpdateLocation}
                  autoFocus
                  className="text-gray-600 border-b-2 border-blue-500 outline-none text-center w-64 px-2 py-1"
                />
              </div>
            ) : (
              <p 
                className="text-gray-600 flex items-center justify-center cursor-pointer group"
                onClick={() => setIsEditingLocation(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {location}
                <span className="ml-2 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </span>
              </p>
            )}
          </div>

          {/* Status Dropdown */}
          <div className="flex justify-center relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
            >
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
              <span>{status}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-14 z-10 w-56 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
                {statusOptions.map(option => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setStatus(option.name);
                      setIsDropdownOpen(false);
                    }}
                    className="flex items-center w-full px-4 py-3 text-left text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <span className={`w-3 h-3 rounded-full mr-3 ${option.color}`}></span>
                    <span>{option.name}</span>
                    {status === option.name && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div className="bg-gray-50 rounded-xl p-4 mt-6">
            <h3 className="font-medium text-gray-700 mb-2">About Notable</h3>
            <p className="text-gray-600 text-sm">
              Experienced product designer with a passion for creating intuitive user experiences.
              Currently specializing in SaaS products and design systems.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 pt-4">
            <Link to={"/"} className="px-5 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-300">
              Logout
            </Link>
            <button className="px-5 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg shadow-md hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;