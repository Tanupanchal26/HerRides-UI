'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserTabs from '../../components/UserTabs';
import UserFilters from '../../components/UserFilters';
import UserList from '../../components/UserList';
import UserProfileCard from '../../components/UserProfileCard';
import RideHistoryTable from '../../components/RideHistoryTable';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('drivers');
  const [selectedUser, setSelectedUser] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    state: '',
    city: '',
    status: ''
  });

  const rideHistory = [
    {
      route: 'Gita Mandir → Sabarmati Station',
      rider: 'kashish Singh',
      riderPhone: '+91 8976543210',
      fare: '5.6',
      distance: '4.6',
      dateTime: '12/5/2025 10:45',
      duration: '11'
    },
    {
      route: 'Airport → Downtown',
      rider: 'Priya Sharma',
      riderPhone: '+91 9876543210',
      fare: '8.2',
      distance: '7.2',
      dateTime: '12/4/2025 14:30',
      duration: '15'
    },
    {
      route: 'Mall → Station',
      rider: 'Rahul Kumar',
      riderPhone: '+91 7654321098',
      fare: '3.4',
      distance: '2.8',
      dateTime: '12/3/2025 09:15',
      duration: '8'
    },
    {
      route: 'Hospital → Home',
      rider: 'Anjali Patel',
      riderPhone: '+91 8765432109',
      fare: '4.8',
      distance: '3.2',
      dateTime: '12/2/2025 16:20',
      duration: '12'
    },
    {
      route: 'Office → Mall',
      rider: 'Vikram Singh',
      riderPhone: '+91 9988776655',
      fare: '6.2',
      distance: '5.1',
      dateTime: '12/1/2025 18:30',
      duration: '14'
    },
    {
      route: 'University → Home',
      rider: 'Neha Gupta',
      riderPhone: '+91 8877665544',
      fare: '2.8',
      distance: '1.9',
      dateTime: '11/30/2025 12:15',
      duration: '7'
    }
  ];

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      
      // Fetch drivers from Driver API
      const driverResponse = await axios.get('https://68947828be3700414e134df3.mockapi.io/Driver');
      const drivers = driverResponse.data.map(driver => ({
        id: driver.id,
        name: driver.name || 'Unknown Driver',
        email: driver.email || 'No email',
        phone: driver.phone || 'No phone',
        city: driver.city || 'Unknown',
        state: driver.state || 'Unknown',
        vehicle: driver.vehicle || 'Activa 5',
        status: driver.status || 'Verified',
        rides: driver.rides || Math.floor(Math.random() * 500) + 100,
        complaints: driver.complaints || Math.floor(Math.random() * 3),
        joined: driver.createdAt ? new Date(driver.createdAt).toLocaleDateString() : '1/1/2023',
        type: 'driver'
      }));
      
      // Fetch riders from Usermanagement API
      const riderResponse = await axios.get('https://n .mockapi.io/Usermanagement');
      const riders = riderResponse.data
        .filter(user => user.userType !== 'Driver')
        .map(rider => ({
          id: rider.id,
          name: rider.name || 'Unknown Rider',
          email: rider.email || 'No email',
          phone: rider.phone || 'No phone',
          city: rider.city || 'Unknown',
          state: rider.state || 'Unknown',
          vehicle: 'N/A',
          status: rider.status || 'Verified',
          rides: rider.rides || Math.floor(Math.random() * 200) + 10,
          complaints: rider.complaints || Math.floor(Math.random() * 2),
          joined: rider.createdAt ? new Date(rider.createdAt).toLocaleDateString() : '1/1/2023',
          type: 'rider'
        }));
      
      setUsers([...drivers, ...riders]);
      
      if (drivers.length > 0) {
        setSelectedUser(drivers[0]);
      } else if (riders.length > 0) {
        setSelectedUser(riders[0]);
      }
      setError(null);
    } catch (err) {
      setError('Failed to fetch users');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesTab = activeTab === 'drivers' ? user.type === 'driver' : user.type === 'rider';
    const matchesSearch = user.name.toLowerCase().includes(filters.search.toLowerCase());
    const matchesState = !filters.state || user.state === filters.state;
    const matchesCity = !filters.city || user.city === filters.city;
    const matchesStatus = !filters.status || user.status === filters.status;
    
    return matchesTab && matchesSearch && matchesState && matchesCity && matchesStatus;
  });

  const driverCount = users.filter(u => u.type === 'driver').length || 267;
  const riderCount = users.filter(u => u.type === 'rider').length || 86816;

  const handleDeactivate = (user) => {
    alert(`Deactivating user: ${user.name}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading users...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4 font-medium">{error}</p>
          <button 
            onClick={fetchUsers}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6 shadow-sm">
        <h1 className="text-4xl font-bold text-gray-900">User Management</h1>
        <p className="text-gray-600 mt-2 font-medium">Manage drivers and riders across the platform</p>
      </div>

      <div className="p-8">
        {/* Tabs */}
        <UserTabs 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          driverCount={driverCount}
          riderCount={riderCount}
        />

        {/* Filters */}
        <UserFilters filters={filters} setFilters={setFilters} />

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
          {/* User List */}
          <div className="xl:col-span-2">
            <UserList 
              users={filteredUsers}
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
            />
          </div>

          {/* User Details */}
          <div className="xl:col-span-3">
            <UserProfileCard 
              user={selectedUser}
              onDeactivate={handleDeactivate}
            />
            
            {selectedUser && (
              <RideHistoryTable rideHistory={rideHistory} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;