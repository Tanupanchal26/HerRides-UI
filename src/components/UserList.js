'use client';

const UserList = ({ users, selectedUser, setSelectedUser }) => {
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
    <div className="bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="p-4 border-b border-gray-100">
        <h3 className="font-bold text-gray-900 text-lg">Users</h3>
        <p className="text-sm text-gray-500">Select a user to view details</p>
      </div>
      <div className="overflow-y-auto max-h-[700px]">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => setSelectedUser(user)}
            className={`p-5 border-b border-gray-50 cursor-pointer transition-all duration-300 ${
              selectedUser?.id === user.id 
                ? 'bg-blue-50 border-l-4 border-l-blue-600 shadow-sm' 
                : 'hover:bg-gray-50 hover:shadow-sm'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md ${getAvatarColor(user.name)}`}>
                {user.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">{user.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">#{user.id}</p>
                    <p className="text-sm text-gray-600 mt-1 font-medium">{user.vehicle}</p>
                  </div>
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${getStatusColor(user.status)} shadow-sm`}>
                    {user.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;