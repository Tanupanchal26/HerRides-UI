'use client';
import { useState } from 'react';

const ViewAllRidesModal = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ridesPerPage = 10;

  const allRides = [
    { id: 1, rider: 'Sarah Johnson', driver: 'Mike Wilson', route: 'IGI Airport → Connaught Place', status: 'Active', time: '10:30 AM', fare: '₹450' },
    { id: 2, rider: 'John Doe', driver: 'Lisa Chen', route: 'Select City Mall → Dwarka', status: 'En Route', time: '11:15 AM', fare: '₹320' },
    { id: 3, rider: 'Emma Davis', driver: 'Tom Brown', route: 'Cyber Hub → Metro Station', status: 'Waiting', time: '09:45 AM', fare: '₹280' },
    { id: 4, rider: 'Alex Smith', driver: 'Jane Wilson', route: 'Leela Palace → IGI Airport', status: 'Completed', time: '12:00 PM', fare: '₹520' },
    { id: 5, rider: 'Maria Garcia', driver: 'David Lee', route: 'Ryan International → Vasant Kunj', status: 'Active', time: '02:30 PM', fare: '₹180' },
    { id: 6, rider: 'James Brown', driver: 'Anna White', route: 'AIIMS → Phoenix Mall', status: 'En Route', time: '03:15 PM', fare: '₹240' },
    { id: 7, rider: 'Linda Taylor', driver: 'Chris Green', route: 'Lodhi Gardens → Cyber City', status: 'Completed', time: '04:00 PM', fare: '₹350' },
    { id: 8, rider: 'Robert Wilson', driver: 'Emily Davis', route: 'New Delhi Station → Hotel Taj', status: 'Cancelled', time: '05:20 PM', fare: '₹290' },
    { id: 9, rider: 'Jennifer Lee', driver: 'Mark Johnson', route: 'DLF Mall → Mumbai Airport', status: 'Active', time: '06:10 PM', fare: '₹480' },
    { id: 10, rider: 'Michael Chen', driver: 'Sophie Miller', route: 'Bandra → Andheri Office', status: 'Waiting', time: '07:30 PM', fare: '₹220' },
    { id: 11, rider: 'Jessica White', driver: 'Ryan Taylor', route: 'Mumbai Airport → Powai Hotel', status: 'En Route', time: '08:15 PM', fare: '₹380' },
    { id: 12, rider: 'Daniel Garcia', driver: 'Amy Brown', route: 'Worli Office → Juhu Beach', status: 'Completed', time: '09:00 PM', fare: '₹160' },
    { id: 13, rider: 'Ashley Davis', driver: 'Kevin Wilson', route: 'Phoenix MarketCity → Pune Station', status: 'Active', time: '09:45 PM', fare: '₹270' },
    { id: 14, rider: 'Christopher Lee', driver: 'Rachel Green', route: 'Koregaon Park → Hinjewadi', status: 'Waiting', time: '10:20 PM', fare: '₹310' },
    { id: 15, rider: 'Amanda Miller', driver: 'Jason Taylor', route: 'Viman Nagar → Pune Airport', status: 'En Route', time: '11:00 PM', fare: '₹550' },
    { id: 16, rider: 'Brian Anderson', driver: 'Kelly Martinez', route: 'Bangalore Airport → Koramangala', status: 'Active', time: '06:00 AM', fare: '₹195' },
    { id: 17, rider: 'Nicole Thompson', driver: 'Steven Clark', route: 'Whitefield → UB City Mall', status: 'Completed', time: '07:30 AM', fare: '₹125' },
    { id: 18, rider: 'Kevin Rodriguez', driver: 'Michelle Lewis', route: 'Indiranagar → Majestic', status: 'En Route', time: '08:45 AM', fare: '₹420' },
    { id: 19, rider: 'Stephanie Walker', driver: 'Andrew Hall', route: 'Electronic City → Cubbon Park', status: 'Waiting', time: '09:15 AM', fare: '₹85' },
    { id: 20, rider: 'Timothy Young', driver: 'Laura Allen', route: 'Forum Mall → Fortis Hospital', status: 'Active', time: '10:00 AM', fare: '₹340' },
    { id: 21, rider: 'Rachel King', driver: 'Joshua Wright', route: 'Hyderabad Airport → Hitec City', status: 'Cancelled', time: '11:30 AM', fare: '₹210' },
    { id: 22, rider: 'Gregory Scott', driver: 'Samantha Lopez', route: 'Banjara Hills → Gachibowli', status: 'Completed', time: '01:00 PM', fare: '₹380' },
    { id: 23, rider: 'Melissa Hill', driver: 'Brandon Adams', route: 'Jubilee Hills → Hyderabad Airport', status: 'En Route', time: '02:15 PM', fare: '₹495' },
    { id: 24, rider: 'Jonathan Baker', driver: 'Christina Nelson', route: 'Oakridge School → Kondapur', status: 'Active', time: '03:30 PM', fare: '₹165' },
    { id: 25, rider: 'Kimberly Carter', driver: 'Matthew Mitchell', route: 'Chennai Airport → T Nagar', status: 'Waiting', time: '04:45 PM', fare: '₹275' },
    { id: 26, rider: 'Anthony Perez', driver: 'Jennifer Roberts', route: 'Express Avenue → Velachery', status: 'Completed', time: '05:00 PM', fare: '₹230' },
    { id: 27, rider: 'Elizabeth Turner', driver: 'Daniel Phillips', route: 'Anna Nagar → Chennai Airport', status: 'Active', time: '06:30 PM', fare: '₹365' },
    { id: 28, rider: 'Ryan Campbell', driver: 'Ashley Parker', route: 'OMR Office → Marina Beach', status: 'En Route', time: '07:45 PM', fare: '₹290' },
    { id: 29, rider: 'Michelle Evans', driver: 'Christopher Edwards', route: 'Adyar → Central Station', status: 'Waiting', time: '08:00 PM', fare: '₹155' },
    { id: 30, rider: 'David Collins', driver: 'Amanda Stewart', route: 'Phoenix MarketCity → Besant Nagar', status: 'Cancelled', time: '09:30 PM', fare: '₹120' },
    { id: 31, rider: 'Lisa Sanchez', driver: 'Justin Morris', route: 'Kolkata Airport → Park Street', status: 'Active', time: '10:15 PM', fare: '₹445' },
    { id: 32, rider: 'Mark Rogers', driver: 'Brittany Reed', route: 'Salt Lake → Howrah Station', status: 'Completed', time: '11:45 PM', fare: '₹205' },
    { id: 33, rider: 'Karen Cook', driver: 'Tyler Bailey', route: 'New Market → Sector V', status: 'En Route', time: '12:30 AM', fare: '₹185' },
    { id: 34, rider: 'Paul Rivera', driver: 'Megan Cooper', route: 'Kochi Airport → Marine Drive', status: 'Waiting', time: '01:15 AM', fare: '₹410' },
    { id: 35, rider: 'Sandra Richardson', driver: 'Jacob Cox', route: 'Ernakulam → Fort Kochi', status: 'Active', time: '02:00 AM', fare: '₹325' },
    { id: 36, rider: 'Steven Ward', driver: 'Kayla Howard', route: 'Kakkanad → Kochi Airport', status: 'Completed', time: '03:45 AM', fare: '₹240' },
    { id: 37, rider: 'Donna Torres', driver: 'Nathan Peterson', route: 'Jaipur Airport → City Palace', status: 'Cancelled', time: '04:30 AM', fare: '₹175' },
    { id: 38, rider: 'Charles Gray', driver: 'Alexis Ramirez', route: 'Amber Fort → Hawa Mahal', status: 'En Route', time: '05:15 AM', fare: '₹135' },
    { id: 39, rider: 'Helen James', driver: 'Jordan Watson', route: 'Malviya Nagar → Jaipur Airport', status: 'Active', time: '06:45 AM', fare: '₹520' },
    { id: 40, rider: 'Kenneth Brooks', driver: 'Taylor Kelly', route: 'Johari Bazaar → Nahargarh Fort', status: 'Waiting', time: '07:00 AM', fare: '₹95' },
    { id: 41, rider: 'Dorothy Sanders', driver: 'Austin Price', route: 'Ahmedabad Airport → Maninagar', status: 'Completed', time: '08:30 AM', fare: '₹160' },
    { id: 42, rider: 'Jose Bennett', driver: 'Hailey Wood', route: 'Sabarmati → Gandhinagar', status: 'Active', time: '09:00 AM', fare: '₹475' },
    { id: 43, rider: 'Nancy Wood', driver: 'Caleb Barnes', route: 'Vastrapur → Ahmedabad Airport', status: 'En Route', time: '10:45 AM', fare: '₹220' },
    { id: 44, rider: 'Larry Ross', driver: 'Destiny Henderson', route: 'SG Highway → Law Garden', status: 'Waiting', time: '12:15 PM', fare: '₹190' },
    { id: 45, rider: 'Betty Henderson', driver: 'Cameron Coleman', route: 'Chandigarh Airport → Sector 17', status: 'Cancelled', time: '01:30 PM', fare: '₹395' },
    { id: 46, rider: 'Gary Jenkins', driver: 'Jasmine Perry', route: 'Elante Mall → Rock Garden', status: 'Active', time: '02:45 PM', fare: '₹255' },
    { id: 47, rider: 'Sharon Powell', driver: 'Ethan Long', route: 'Mohali → Chandigarh Airport', status: 'Completed', time: '04:00 PM', fare: '₹310' },
    { id: 48, rider: 'Frank Patterson', driver: 'Gabrielle Hughes', route: 'Sukhna Lake → Panchkula', status: 'En Route', time: '05:30 PM', fare: '₹145' },
    { id: 49, rider: 'Cynthia Flores', driver: 'Isaiah Washington', route: 'Lucknow Airport → Hazratganj', status: 'Waiting', time: '06:15 PM', fare: '₹285' },
    { id: 50, rider: 'Harold Butler', driver: 'Paige Simmons', route: 'Gomti Nagar → Lucknow Airport', status: 'Active', time: '07:30 PM', fare: '₹435' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-500';
      case 'En Route': return 'bg-blue-500';
      case 'Completed': return 'bg-gray-500';
      case 'Cancelled': return 'bg-red-500';
      case 'Waiting': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const totalPages = Math.ceil(allRides.length / ridesPerPage);
  const startIndex = (currentPage - 1) * ridesPerPage;
  const currentRides = allRides.slice(startIndex, startIndex + ridesPerPage);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">All Rides</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rider</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fare</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentRides.map((ride) => (
                  <tr key={ride.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">
                          {ride.rider.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="font-medium text-gray-900">{ride.rider}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">{ride.driver}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">{ride.route}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs text-white font-medium ${getStatusColor(ride.status)}`}>
                        {ride.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">{ride.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{ride.fare}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
                      <button className="text-green-600 hover:text-green-800 mr-3">Track</button>
                      <button className="text-red-600 hover:text-red-800">Cancel</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <p className="text-gray-600">
              Showing {startIndex + 1}-{Math.min(startIndex + ridesPerPage, allRides.length)} of {allRides.length} rides
            </p>
            <div className="flex space-x-2">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'border hover:bg-gray-50'}`}
                >
                  {i + 1}
                </button>
              ))}
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllRidesModal;