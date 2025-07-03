
import { HiLocationMarker, HiHome, HiUser, HiCheckCircle, HiHand } from 'react-icons/hi';

export default function CheckIn() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      {/* Header */}
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-6">
          <div className="text-yellow-500 text-3xl font-bold">⬢</div>
          <span className="text-2xl font-serif">notable</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">Check In</h1>
        <p className="text-gray-300 mb-6">Check in to be visible and start conversations.</p>

        {/* Button */}
        <button
          color="warning"
          className="w-full py-2 text-black font-semibold rounded-md"
        >
          I’m Here
        </button>

        {/* Location */}
        <div className="mt-8">
          <p className="text-sm text-gray-400 mb-2 font-medium">LOCATION</p>
          <div className="bg-gray-800 p-3 rounded-md flex items-center gap-2">
            <HiLocationMarker className="text-gray-300" />
            <span className="text-white">Roseleaf Café</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-gray-900 p-4 flex justify-between text-xs border-t border-gray-700">
        <div className="flex flex-col items-center text-gray-400">
          <HiHome className="text-xl" />
          Community
        </div>
        <div className="flex flex-col items-center text-yellow-500">
          <HiCheckCircle className="text-xl" />
          Check In
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <HiHand className="text-xl" />
          Hello
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <HiUser className="text-xl" />
          Profile
        </div>
      </div>
    </div>
  );
}
