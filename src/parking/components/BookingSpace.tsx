import { useState } from 'react';
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const BookingSpace = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSpot, setSelectedSpot] = useState('');

  // Mock data for booked spots - in a real app, this would come from your backend
  const bookedSpots = [
    { spot: 'A1', licensePlate: 'ABC123', duration: '08:00' },
    { spot: 'B2', licensePlate: 'XYZ789', duration: '02:00' },
    { spot: 'C3', licensePlate: 'DEF456', duration: '00:30' }
  ];

  const parkingSpots = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'];

  const getBookingDetails = (spot : string) => {
    return bookedSpots.find(booking => booking.spot === spot);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Parkiaser</h2>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <ChevronLeft className="h-5 w-5 text-gray-500" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <ChevronRight className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <div className="relative">
                <input
                  type="time"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                />
                <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <button className="w-full bg-blue-500 text-white py-2.5 px-4 rounded-lg hover:bg-blue-600 transition-colors">
              Book Spot
            </button>
          </div>

          <div className="col-span-2">
            <div className="grid grid-cols-3 gap-4">
              {parkingSpots.map((spot) => {
                const bookingDetails = getBookingDetails(spot);
                const isBooked = !!bookingDetails;

                return (
                  <button
                    key={spot}
                    onClick={() => !isBooked && setSelectedSpot(spot)}
                    className={`relative p-6 rounded-xl border transition-all ${
                      isBooked 
                        ? 'bg-blue-50 border-blue-200'
                        : selectedSpot === spot
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-200'
                    }`}
                  >
                    <div className="absolute top-3 right-3">
                      <div className={`h-2 w-2 rounded-full ${isBooked ? 'bg-blue-500' : 'bg-gray-300'}`} />
                    </div>
                    <div className="flex flex-col items-center">
                      <MapPin className={`h-6 w-6 mb-2 ${isBooked ? 'text-blue-500' : 'text-gray-400'}`} />
                      <span className={`text-sm font-medium ${isBooked ? 'text-blue-700' : 'text-gray-600'}`}>
                        {spot}
                      </span>
                      {isBooked && (
                        <div className="mt-2 text-center">
                          <div className="text-xs font-medium text-blue-600">{bookingDetails.licensePlate}</div>
                          <div className="text-xs text-gray-500">{bookingDetails.duration}</div>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Parking Rates</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-gray-50">
            <span className="text-sm text-gray-600">1 Hour</span>
            <p className="text-lg font-semibold text-gray-900">$2.00</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50">
            <span className="text-sm text-gray-600">4 Hours</span>
            <p className="text-lg font-semibold text-gray-900">$7.00</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50">
            <span className="text-sm text-gray-600">8 Hours</span>
            <p className="text-lg font-semibold text-gray-900">$12.00</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50">
            <span className="text-sm text-gray-600">Full Day</span>
            <p className="text-lg font-semibold text-gray-900">$20.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSpace;