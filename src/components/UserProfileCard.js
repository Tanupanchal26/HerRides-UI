'use client';

const UserProfileCard = ({ user, onDeactivate }) => {
  if (!user) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 h-80 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <p className="text-gray-500 font-medium">Select a user to view details</p>
        </div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Verified': return 'bg-emerald-500 text-white';
      case 'Pending': return 'bg-amber-400 text-amber-900';
      case 'Rejected': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getAvatarColor = (name) => {
    const colors = ['bg-blue-500', 'bg-emerald-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-orange-500'];
    return colors[name.length % colors.length];
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
      <div className="flex items-start justify-between mb-10">
        <div className="flex items-center space-x-6">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg ${getAvatarColor(user.name)}`}>
            {user.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">{user.name}</h2>
            <p className="text-gray-600 text-xl font-medium">#{user.id} – {user.vehicle}</p>
          </div>
        </div>
        <button
          onClick={() => onDeactivate(user)}
          className="bg-red-600 text-white px-8 py-3 rounded-xl hover:bg-red-700 font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Deactivate
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="font-bold text-gray-900 mb-6 text-base">Contact Details</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-2">Email</p>
              <p className="text-base font-semibold text-gray-900">{user.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-2">Phone</p>
              <p className="text-base font-semibold text-gray-900">{user.phone}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="font-bold text-gray-900 mb-6 text-base">Location</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-2">City</p>
              <p className="text-base font-semibold text-gray-900">{user.city}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-2">State</p>
              <p className="text-base font-semibold text-gray-900">{user.state}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="font-bold text-gray-900 mb-6 text-base">Performance</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-2">Total Rides</p>
              <p className="text-base font-semibold text-gray-900">{user.rides} rides</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-2">Complaints</p>
              <p className="text-base font-bold text-red-600">{user.complaints} complaints</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-2">Joined Date</p>
              <p className="text-base font-semibold text-gray-900">{user.joined}</p>
            </div>
            <div className="pt-3">
              <span className={`inline-block px-4 py-2 rounded-xl text-sm font-bold shadow-md ${getStatusColor(user.status)}`}>
                {user.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;