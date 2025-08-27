'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Payments = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    try {
      const response = await axios.get('https://68947828be3700414e134df3.mockapi.io/Driver');
      setDrivers(response.data);
    } catch (error) {
      console.error('Error fetching drivers:', error);
    } finally {
      setLoading(false);
    }
  };

  const pendingPayouts = [
    { id: 1, driver: drivers[0]?.name || 'Rajesh Kumar', amount: '₹4,250', rides: 28, date: '2025-01-15', status: 'Pending', bank: 'SBI ***4567', commission: '₹425' },
    { id: 2, driver: drivers[1]?.name || 'Priya Sharma', amount: '₹3,890', rides: 22, date: '2025-01-15', status: 'Pending', bank: 'HDFC ***8901', commission: '₹389' },
    { id: 3, driver: drivers[2]?.name || 'Amit Singh', amount: '₹5,200', rides: 35, date: '2025-01-14', status: 'Pending', bank: 'ICICI ***2345', commission: '₹520' },
    { id: 4, driver: drivers[3]?.name || 'Sunita Devi', amount: '₹2,750', rides: 18, date: '2025-01-14', status: 'Processing', bank: 'PNB ***6789', commission: '₹275' },
    { id: 5, driver: drivers[4]?.name || 'Vikram Yadav', amount: '₹6,100', rides: 42, date: '2025-01-13', status: 'Pending', bank: 'Axis ***3456', commission: '₹610' },
    { id: 6, driver: drivers[5]?.name || 'Meera Gupta', amount: '₹3,450', rides: 24, date: '2025-01-13', status: 'Pending', bank: 'BOI ***7890', commission: '₹345' },
  ];

  const paymentHistory = [
    { id: 1, user: 'Sarah Johnson', driver: 'Rajesh Kumar', amount: '₹450', method: 'UPI', status: 'Completed', date: '2025-01-15', time: '10:30 AM', transactionId: 'TXN123456789' },
    { id: 2, user: 'John Doe', driver: 'Priya Sharma', amount: '₹320', method: 'Credit Card', status: 'Completed', date: '2025-01-15', time: '11:45 AM', transactionId: 'TXN123456790' },
    { id: 3, user: 'Emma Davis', driver: 'Amit Singh', amount: '₹280', method: 'Wallet', status: 'Failed', date: '2025-01-14', time: '09:15 PM', transactionId: 'TXN123456791' },
    { id: 4, user: 'Alex Smith', driver: 'Sunita Devi', amount: '₹520', method: 'Debit Card', status: 'Completed', date: '2025-01-14', time: '02:20 PM', transactionId: 'TXN123456792' },
    { id: 5, user: 'Maria Garcia', driver: 'Vikram Yadav', amount: '₹380', method: 'UPI', status: 'Completed', date: '2025-01-14', time: '07:30 PM', transactionId: 'TXN123456793' },
    { id: 6, user: 'David Wilson', driver: 'Meera Gupta', amount: '₹650', method: 'Net Banking', status: 'Pending', date: '2025-01-13', time: '04:45 PM', transactionId: 'TXN123456794' },
    { id: 7, user: 'Lisa Anderson', driver: 'Rajesh Kumar', amount: '₹290', method: 'UPI', status: 'Completed', date: '2025-01-13', time: '12:15 PM', transactionId: 'TXN123456795' },
    { id: 8, user: 'Michael Brown', driver: 'Priya Sharma', amount: '₹420', method: 'Credit Card', status: 'Failed', date: '2025-01-12', time: '08:20 AM', transactionId: 'TXN123456796' },
  ];

  const earningsData = {
    today: { amount: 12450, rides: 89, commission: 1245 },
    week: { amount: 87320, rides: 623, commission: 8732 },
    month: { amount: 345680, rides: 2456, commission: 34568 },
    total: { amount: 1245600, rides: 8934, commission: 124560 }
  };

  const paymentMethods = [
    { method: 'UPI', percentage: 45, amount: '₹1,56,780', color: 'bg-green-500' },
    { method: 'Credit Card', percentage: 28, amount: '₹97,440', color: 'bg-blue-500' },
    { method: 'Debit Card', percentage: 15, amount: '₹52,230', color: 'bg-purple-500' },
    { method: 'Net Banking', percentage: 8, amount: '₹27,890', color: 'bg-orange-500' },
    { method: 'Wallet', percentage: 4, amount: '₹13,945', color: 'bg-pink-500' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Payments & Earnings</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl shadow-lg text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-medium opacity-90 mb-1">Total Earnings</h3>
              <p className="text-3xl font-bold">₹12,45,600</p>
            </div>
            <div className="text-3xl opacity-80">💰</div>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-green-200">↑ 15.3%</span>
            <span className="ml-2 opacity-90">vs last month</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl shadow-lg text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-medium opacity-90 mb-1">Today's Revenue</h3>
              <p className="text-3xl font-bold">₹1,24,50</p>
            </div>
            <div className="text-3xl opacity-80">📈</div>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-blue-200">89 rides</span>
            <span className="ml-2 opacity-90">completed</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-xl shadow-lg text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-medium opacity-90 mb-1">Pending Payouts</h3>
              <p className="text-3xl font-bold">₹25,640</p>
            </div>
            <div className="text-3xl opacity-80">⏳</div>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-orange-200">6 drivers</span>
            <span className="ml-2 opacity-90">awaiting</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-xl shadow-lg text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-medium opacity-90 mb-1">Commission Earned</h3>
              <p className="text-3xl font-bold">₹1,24,560</p>
            </div>
            <div className="text-3xl opacity-80">🏆</div>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-purple-200">10%</span>
            <span className="ml-2 opacity-90">avg rate</span>
          </div>
        </div>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Payment Methods Distribution */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Payment Methods</h3>
          <div className="space-y-4">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${method.color}`}></div>
                  <span className="font-medium text-gray-700">{method.method}</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">{method.amount}</div>
                  <div className="text-sm text-gray-500">{method.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Earnings Breakdown */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Earnings Breakdown</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">₹{earningsData.today.amount.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Today</div>
              <div className="text-xs text-green-600 mt-1">{earningsData.today.rides} rides</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">₹{earningsData.week.amount.toLocaleString()}</div>
              <div className="text-sm text-gray-600">This Week</div>
              <div className="text-xs text-blue-600 mt-1">{earningsData.week.rides} rides</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">₹{earningsData.month.amount.toLocaleString()}</div>
              <div className="text-sm text-gray-600">This Month</div>
              <div className="text-xs text-purple-600 mt-1">{earningsData.month.rides} rides</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">₹{earningsData.total.amount.toLocaleString()}</div>
              <div className="text-sm text-gray-600">All Time</div>
              <div className="text-xs text-orange-600 mt-1">{earningsData.total.rides} rides</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('pending')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'pending'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Pending Payouts
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'history'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Payment History
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'analytics'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Analytics
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Quick Stats */}
              <div className="lg:col-span-2 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="text-2xl font-bold text-green-700">₹87,320</div>
                    <div className="text-sm text-green-600">This Week</div>
                    <div className="text-xs text-gray-500 mt-1">623 transactions</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold text-blue-700">₹12,450</div>
                    <div className="text-sm text-blue-600">Today</div>
                    <div className="text-xs text-gray-500 mt-1">89 transactions</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <div className="text-2xl font-bold text-purple-700">₹8,732</div>
                    <div className="text-sm text-purple-600">Commission</div>
                    <div className="text-xs text-gray-500 mt-1">This week</div>
                  </div>
                </div>
                
                {/* Recent Transactions */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Recent Transactions</h4>
                  <div className="space-y-3">
                    {paymentHistory.slice(0, 5).map((payment) => (
                      <div key={payment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-sm">{payment.user.split(' ').map(n => n[0]).join('')}</span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{payment.user}</div>
                            <div className="text-sm text-gray-500">{payment.method} • {payment.time}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gray-900">{payment.amount}</div>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            payment.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                            payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {payment.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Top Drivers */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Top Earning Drivers</h4>
                <div className="space-y-3">
                  {pendingPayouts.slice(0, 5).map((driver, index) => (
                    <div key={driver.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        #{index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{driver.driver}</div>
                        <div className="text-sm text-gray-500">{driver.rides} rides</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{driver.amount}</div>
                        <div className="text-xs text-gray-500">Commission: {driver.commission}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'pending' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Pending Driver Payouts</h3>
                  <p className="text-sm text-gray-600 mt-1">Review and approve driver earnings</p>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-medium">
                    Approve All
                  </button>
                  <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 font-medium">
                    Export
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        <input type="checkbox" className="rounded" />
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Driver</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rides</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Commission</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bank</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {pendingPayouts.map((payout) => (
                      <tr key={payout.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input type="checkbox" className="rounded" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-bold text-xs">{payout.driver.split(' ').map(n => n[0]).join('')}</span>
                            </div>
                            <div className="font-medium text-gray-900">{payout.driver}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-bold text-gray-900">{payout.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">{payout.rides}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">{payout.commission}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">{payout.bank}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            payout.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {payout.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button className="text-green-600 hover:text-green-800 mr-3 font-medium">Approve</button>
                          <button className="text-red-600 hover:text-red-800 font-medium">Reject</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {activeTab === 'history' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Payment History</h3>
                  <p className="text-sm text-gray-600 mt-1">Complete transaction records</p>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium">
                    Export CSV
                  </button>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 font-medium">
                    Export PDF
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Transaction ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Driver</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Method</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date & Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {paymentHistory.map((payment) => (
                      <tr key={payment.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-600">{payment.transactionId}</td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{payment.user}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">{payment.driver}</td>
                        <td className="px-6 py-4 whitespace-nowrap font-bold text-gray-900">{payment.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                            {payment.method}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            payment.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                            payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {payment.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                          <div>{payment.date}</div>
                          <div className="text-xs text-gray-500">{payment.time}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Analytics</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Revenue Trends */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4">Revenue Trends</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Daily Average</span>
                      <span className="font-bold text-gray-900">₹12,450</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Weekly Growth</span>
                      <span className="font-bold text-green-600">+15.3%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Monthly Target</span>
                      <span className="font-bold text-blue-600">₹4,50,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Success Rate</span>
                      <span className="font-bold text-purple-600">94.2%</span>
                    </div>
                  </div>
                </div>
                
                {/* Top Performers */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4">Performance Metrics</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Transactions</span>
                      <span className="font-bold text-gray-900">8,934</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Failed Payments</span>
                      <span className="font-bold text-red-600">518 (5.8%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Avg Transaction</span>
                      <span className="font-bold text-blue-600">₹394</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Peak Hour</span>
                      <span className="font-bold text-purple-600">6-8 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payments;