'use client';

const UserFilters = ({ filters, setFilters }) => {
  return (
    <div className="flex space-x-6 items-center mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="relative flex-1 max-w-sm">
        <input
          type="text"
          placeholder="Filter by name"
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          className="pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full text-sm font-medium shadow-sm"
        />
        <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      
      <select
        value={filters.state}
        onChange={(e) => setFilters({ ...filters, state: e.target.value })}
        className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm font-medium bg-white shadow-sm min-w-36"
      >
        <option value="">All States</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Delhi">Delhi</option>
      </select>

      <select
        value={filters.city}
        onChange={(e) => setFilters({ ...filters, city: e.target.value })}
        className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm font-medium bg-white shadow-sm min-w-32"
      >
        <option value="">All Cities</option>
        <option value="Kanpur">Kanpur</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Ahmedabad">Ahmedabad</option>
        <option value="Delhi">Delhi</option>
      </select>

      <select
        value={filters.status}
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm font-medium bg-white shadow-sm min-w-32"
      >
        <option value="">Status</option>
        <option value="Verified">Verified</option>
        <option value="Pending">Pending</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
};

export default UserFilters;