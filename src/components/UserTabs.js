'use client';

const UserTabs = ({ activeTab, setActiveTab, driverCount, riderCount }) => {
  return (
    <div className="flex border-b border-gray-200 mb-8">
      <button
        onClick={() => setActiveTab('drivers')}
        className={`px-8 py-4 font-bold text-base border-b-3 transition-all duration-200 ${
          activeTab === 'drivers'
            ? 'border-blue-600 text-blue-600 bg-blue-50'
            : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'
        }`}
      >
        Drivers ({driverCount})
      </button>
      <button
        onClick={() => setActiveTab('riders')}
        className={`px-8 py-4 font-bold text-base border-b-3 transition-all duration-200 ${
          activeTab === 'riders'
            ? 'border-blue-600 text-blue-600 bg-blue-50'
            : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'
        }`}
      >
        Riders ({riderCount})
      </button>
    </div>
  );
};

export default UserTabs;