'use client';
import RidesTrendLineChart from '../../components/RidesTrendLineChart';
import RevenueChart from '../../components/RevenueChart';
import DriverPerformanceChart from '../../components/DriverPerformanceChart';

const Reports = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
        <p className="text-gray-600 mt-2">Comprehensive insights and data visualization</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <RidesTrendLineChart />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">💰</span>
              <h3 className="text-xl font-bold text-gray-900">Revenue Analytics</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">Monthly revenue for the past 12 months with highest and lowest markers</p>
            <RevenueChart />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">👨💼</span>
              <h3 className="text-xl font-bold text-gray-900">Driver Performance</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">Individual driver performance scores for the latest quarter</p>
            <DriverPerformanceChart />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Geographic Distribution</h3>
          <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">🗺️</div>
              <p className="text-gray-600">Geographic Map Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;