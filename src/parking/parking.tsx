import { useState } from 'react';
import { Car, UserPlus, Users, Search } from 'lucide-react';
import BookingSpace from './components/BookingSpace.js';
import VehicleRegistration from './components/VehicleRegistration.js';
import VisitorParking from './components/VisitorParking.js';
import { useSelector } from 'react-redux';
import { RootState } from '../Store/store.js';

function Parking() {
  const [activeView, setActiveView] = useState('booking');
  const isDarkMode = useSelector((state: RootState) => state.toggleDarkmode.isDarkMode);
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Car className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Parking Management</span>
            </div>
            <div className="flex items-center">
              <div className="hidden md:flex relative mx-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveView('booking')}
            className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
              activeView === 'booking'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <Car className="mr-2 h-5 w-5" />
            Parking
          </button>
          <button
            onClick={() => setActiveView('registration')}
            className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
              activeView === 'registration'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <UserPlus className="mr-2 h-5 w-5" />
            Register Vehicle
          </button>
          <button
            onClick={() => setActiveView('visitor')}
            className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
              activeView === 'visitor'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <Users className="mr-2 h-5 w-5" />
            Visitor Parking
          </button>
        </div>

        <main>
          {activeView === 'booking' && <BookingSpace />}
          {activeView === 'registration' && <VehicleRegistration />}
          {activeView === 'visitor' && <VisitorParking />}
        </main>
      </div>
    </div>
  );
}

export default Parking;