'use client';

const RideHistoryTable = ({ rideHistory }) => {
  const getAvatarColor = (name) => {
    const colors = ['bg-blue-500', 'bg-emerald-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-orange-500'];
    return colors[name.length % colors.length];
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 mt-8">
      <div className="p-8 border-b border-gray-100">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">Ride History</h3>
        <p className="text-gray-500 text-base font-medium">See past timeline history</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-8 py-5 text-left text-sm font-bold text-gray-700 uppercase tracking-wide">Route</th>
              <th className="px-8 py-5 text-left text-sm font-bold text-gray-700 uppercase tracking-wide">Rider</th>
              <th className="px-8 py-5 text-left text-sm font-bold text-gray-700 uppercase tracking-wide">Fare</th>
              <th className="px-8 py-5 text-left text-sm font-bold text-gray-700 uppercase tracking-wide">Distance</th>
              <th className="px-8 py-5 text-left text-sm font-bold text-gray-700 uppercase tracking-wide">Date & Time</th>
              <th className="px-8 py-5 text-left text-sm font-bold text-gray-700 uppercase tracking-wide">Duration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rideHistory.map((ride, index) => (
              <tr key={index} className="hover:bg-blue-50 transition-all duration-200">
                <td className="px-8 py-6 text-base font-bold text-gray-900">
                  {ride.route}
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md ${getAvatarColor(ride.rider)}`}>
                      {ride.rider.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-base font-bold text-gray-900">{ride.rider}</p>
                      <p className="text-sm text-gray-500 font-medium">{ride.riderPhone}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6 text-base font-bold text-emerald-600">
                  ${ride.fare}
                </td>
                <td className="px-8 py-6 text-base text-gray-700 font-semibold">
                  {ride.distance} km
                </td>
                <td className="px-8 py-6 text-base text-gray-700 font-semibold">
                  {ride.dateTime}
                </td>
                <td className="px-8 py-6 text-base text-gray-700 font-semibold">
                  {ride.duration} min
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RideHistoryTable;