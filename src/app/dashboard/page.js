'use client';
import { useState } from 'react';
import WeeklyRevenueChart from '../../components/WeeklyRevenueChart';
import HourlyRidesChart from '../../components/HourlyRidesChart';
import ViewAllRidesModal from '../../components/ViewAllRidesModal';

const Dashboard = () => {
  const [showAllRides, setShowAllRides] = useState(false);

  const stats = [
    {
      title: 'Total Rides',
      value: '2,847',
      change: '+12.5%',
      subtitle: 'from last month',
      changeColor: 'text-green-600',
      bgColor: 'bg-blue-50',
      icon: '🚗'
    },
    {
      title: 'Active Drivers',
      value: '1,234',
      change: '+8.2%',
      subtitle: 'online now',
      changeColor: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: '👨💼'
    },
    {
      title: 'Revenue',
      value: '₹4,56,789',
      change: '+15.3%',
      subtitle: 'this month',
      changeColor: 'text-green-600',
      bgColor: 'bg-purple-50',
      icon: '💰'
    },
    {
      title: 'Customer Rating',
      value: '4.8',
      change: '+0.2',
      subtitle: 'average rating',
      changeColor: 'text-green-600',
      bgColor: 'bg-yellow-50',
      icon: '⭐'
    }
  ];

  const ongoingRides = [
    { rider: 'Sarah Johnson', avatar: 'SJ', route: 'Connaught Place → IGI Airport', status: 'Active', statusColor: 'bg-green-500' },
    { rider: 'John Doe', avatar: 'JD', route: 'Select City Mall → Dwarka', status: 'En Route', statusColor: 'bg-blue-500' },
    { rider: 'Emma Davis', avatar: 'ED', route: 'Cyber Hub → Metro Station', status: 'Waiting', statusColor: 'bg-orange-500' },
    { rider: 'Brian Anderson', avatar: 'BA', route: 'DU North Campus → Khan Market', status: 'Active', statusColor: 'bg-green-500' },
    { rider: 'Nicole Thompson', avatar: 'NT', route: 'Gold Gym → Sector 18', status: 'Completed', statusColor: 'bg-gray-500' },
    { rider: 'Kevin Rodriguez', avatar: 'KR', route: 'Mumbai Airport → Bandra', status: 'En Route', statusColor: 'bg-blue-500' },
    { rider: 'Stephanie Walker', avatar: 'SW', route: 'Andheri → Powai', status: 'Waiting', statusColor: 'bg-orange-500' },
    { rider: 'Timothy Young', avatar: 'TY', route: 'Phoenix Mall → AIIMS', status: 'Active', statusColor: 'bg-green-500' },
    { rider: 'Rachel King', avatar: 'RK', route: 'Gurgaon → Railway Station', status: 'Cancelled', statusColor: 'bg-red-500' },
    { rider: 'Gregory Scott', avatar: 'GS', route: 'Leela Palace → CP Metro', status: 'Completed', statusColor: 'bg-gray-500' },
    { rider: 'Melissa Hill', avatar: 'MH', route: 'Lodhi Gardens → IGI T3', status: 'En Route', statusColor: 'bg-blue-500' },
    { rider: 'Jonathan Baker', avatar: 'JB', route: 'Ryan International → Home', status: 'Active', statusColor: 'bg-green-500' },
    { rider: 'Kimberly Carter', avatar: 'KC', route: 'DLF Mall → Cyber City', status: 'Waiting', statusColor: 'bg-orange-500' },
    { rider: 'Anthony Perez', avatar: 'AP', route: 'Fortis Hospital → Vasant Kunj', status: 'Completed', statusColor: 'bg-gray-500' },
    { rider: 'Elizabeth Turner', avatar: 'ET', route: 'Bangalore Airport → Koramangala', status: 'Active', statusColor: 'bg-green-500' },
    { rider: 'Ryan Campbell', avatar: 'RC', route: 'Whitefield → UB City Mall', status: 'En Route', statusColor: 'bg-blue-500' },
    { rider: 'Michelle Evans', avatar: 'ME', route: 'Indiranagar → Majestic', status: 'Waiting', statusColor: 'bg-orange-500' },
    { rider: 'David Collins', avatar: 'DC', route: 'Forum Mall → Cubbon Park', status: 'Cancelled', statusColor: 'bg-red-500' },
    { rider: 'Lisa Sanchez', avatar: 'LS', route: 'Hyderabad Airport → Hitec City', status: 'Active', statusColor: 'bg-green-500' },
    { rider: 'Mark Rogers', avatar: 'MR', route: 'Oakridge School → Banjara Hills', status: 'Completed', statusColor: 'bg-gray-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <div className="bg-white border-b border-gray-100 px-8 py-5">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 text-xl">
              🔔
            </button>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              SA
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.bgColor} p-6 rounded-xl shadow-sm relative`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">{stat.title}</h3>
                  <p className="text-3xl font-black text-gray-900">{stat.value}</p>
                </div>
                <span className="text-2xl opacity-60">{stat.icon}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-bold ${stat.changeColor}`}>{stat.change}</span>
                <span className="text-xs text-gray-500 font-medium">{stat.subtitle}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Weekly Revenue Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Weekly Revenue</h3>
            <WeeklyRevenueChart />
          </div>

          {/* Hourly Rides Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Hourly Rides</h3>
            <p className="text-sm text-gray-500 mb-6">Hourly rides comparison analytics</p>
            <HourlyRidesChart />
          </div>
        </div>

        {/* Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Ongoing Rides */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Ongoing Rides</h3>
            <div className="space-y-3 mb-6 max-h-96 overflow-y-auto pr-2">
              {ongoingRides.map((ride, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">
                    {ride.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 text-sm truncate">{ride.rider}</p>
                    <p className="text-xs text-gray-500 font-medium truncate">{ride.route}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs text-white font-bold ${ride.statusColor} shadow-sm flex-shrink-0`}>
                    {ride.status}
                  </span>
                </div>
              ))}
            </div>
            <button 
              onClick={() => setShowAllRides(true)}
              className="w-full text-blue-600 text-sm font-bold hover:text-blue-700 py-2"
            >
              View All Rides
            </button>
          </div>

          {/* Emergency Alerts */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 text-lg">🆘</span>
              </div>
              <h3 className="text-xl font-bold text-red-600">SOS Alert</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl mb-6">
              <p className="font-bold text-gray-900 mb-1">No active alerts</p>
              <p className="text-sm text-gray-500">All riders are safe</p>
            </div>
            <button className="w-full bg-red-600 text-white py-3 px-4 rounded-xl font-bold hover:bg-red-700 shadow-sm mb-3">
              Take Action
            </button>
            <p className="text-xs text-gray-400 text-center font-medium">No other alerts</p>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-100">
              <h4 className="text-2xl font-black text-gray-900 mb-1">23</h4>
              <p className="text-sm text-gray-600 font-medium mb-1">drivers awaiting approval</p>
              <p className="text-xs text-yellow-700 font-bold">Pending Verifications</p>
            </div>
            <div className="bg-orange-50 p-5 rounded-xl border border-orange-100">
              <h4 className="text-2xl font-black text-gray-900 mb-1">12</h4>
              <p className="text-sm text-gray-600 font-medium mb-1">tickets need attention</p>
              <p className="text-xs text-orange-700 font-bold">Open Complaints</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-lg">💳</span>
                <h4 className="text-2xl font-black text-gray-900">₹1,24,500</h4>
              </div>
              <p className="text-sm text-gray-600 font-medium mb-1">to be processed</p>
              <p className="text-xs text-blue-700 font-bold">Pending Payouts</p>
            </div>
            <button className="w-full bg-gray-900 text-white py-4 px-4 rounded-xl font-bold hover:bg-gray-800 shadow-sm">
              Send Notifications
            </button>
          </div>
        </div>
      </div>
      
      <ViewAllRidesModal 
        isOpen={showAllRides} 
        onClose={() => setShowAllRides(false)} 
      />
    </div>
  );
};

export default Dashboard;