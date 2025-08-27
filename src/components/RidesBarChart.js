'use client';
import { useState, useEffect } from 'react';

const RidesBarChart = () => {
  const [timeRange, setTimeRange] = useState('6months');
  const [chartType, setChartType] = useState('bar');
  const [category, setCategory] = useState('all');
  const [hoveredBar, setHoveredBar] = useState(null);
  const [animatedData, setAnimatedData] = useState([]);

  const baseData = {
    '6months': [
      { period: 'Jul', rides: 2450, premium: 980, standard: 1470 },
      { period: 'Aug', rides: 2890, premium: 1156, standard: 1734 },
      { period: 'Sep', rides: 3120, premium: 1248, standard: 1872 },
      { period: 'Oct', rides: 2780, premium: 1112, standard: 1668 },
      { period: 'Nov', rides: 3560, premium: 1424, standard: 2136 },
      { period: 'Dec', rides: 3980, premium: 1592, standard: 2388 }
    ],
    '12months': [
      { period: 'Jan', rides: 2340, premium: 936, standard: 1404 },
      { period: 'Feb', rides: 2670, premium: 1068, standard: 1602 },
      { period: 'Mar', rides: 3120, premium: 1248, standard: 1872 },
      { period: 'Apr', rides: 2890, premium: 1156, standard: 1734 },
      { period: 'May', rides: 3450, premium: 1380, standard: 2070 },
      { period: 'Jun', rides: 3780, premium: 1512, standard: 2268 },
      { period: 'Jul', rides: 2450, premium: 980, standard: 1470 },
      { period: 'Aug', rides: 2890, premium: 1156, standard: 1734 },
      { period: 'Sep', rides: 3120, premium: 1248, standard: 1872 },
      { period: 'Oct', rides: 2780, premium: 1112, standard: 1668 },
      { period: 'Nov', rides: 3560, premium: 1424, standard: 2136 },
      { period: 'Dec', rides: 3980, premium: 1592, standard: 2388 }
    ]
  };

  // Real-time data updates
  useEffect(() => {
    const updateData = () => {
      const base = baseData[timeRange];
      const updated = base.map(item => ({
        ...item,
        rides: Math.max(100, item.rides + Math.floor(Math.random() * 200 - 100)),
        premium: Math.max(50, item.premium + Math.floor(Math.random() * 50 - 25)),
        standard: Math.max(50, item.standard + Math.floor(Math.random() * 50 - 25))
      }));
      setAnimatedData(updated);
    };

    updateData();
    const interval = setInterval(updateData, 2000);
    return () => clearInterval(interval);
  }, [timeRange]);

  const currentData = animatedData.length > 0 ? animatedData : baseData[timeRange];
  const maxRides = Math.max(...currentData.map(d => d.rides));
  const totalRides = currentData.reduce((sum, d) => sum + d.rides, 0);
  const avgRides = Math.round(totalRides / currentData.length);

  const getBarHeight = (rides) => Math.max(5, (rides / maxRides) * 100);
  const getAverageLinePosition = () => (avgRides / maxRides) * 100;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 space-y-4 lg:space-y-0">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <h2 className="text-2xl font-bold text-gray-900">Rides Trend</h2>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600 font-medium">Live</span>
            </div>
          </div>
          <p className="text-sm text-gray-600">Real-time monthly ride counts</p>
        </div>
        
        {/* Controls */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="6months">Last 6 Months</option>
            <option value="12months">Last 12 Months</option>
          </select>
          
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Rides</option>
            <option value="premium">Premium Only</option>
            <option value="standard">Standard Only</option>
          </select>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-700 font-medium">Total Rides</p>
              <p className="text-2xl font-bold text-blue-600 transition-all duration-1000">{totalRides.toLocaleString()}</p>
            </div>
            <div className="text-blue-500 text-2xl animate-bounce">📊</div>
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-100 transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-700 font-medium">Monthly Average</p>
              <p className="text-2xl font-bold text-green-600 transition-all duration-1000">{avgRides.toLocaleString()}</p>
            </div>
            <div className="text-green-500 text-2xl animate-pulse">📈</div>
          </div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-700 font-medium">Peak Month</p>
              <p className="text-2xl font-bold text-purple-600 transition-all duration-1000">{maxRides.toLocaleString()}</p>
            </div>
            <div className="text-purple-500 text-2xl animate-bounce">🏆</div>
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative">
        <div className="absolute -left-16 top-1/2 transform -rotate-90 text-sm font-semibold text-gray-700">
          Ride Count
        </div>
        
        <div className="relative h-80 bg-gray-50 rounded-lg border p-6">
          {/* Chart Content */}
          <div className="relative h-full flex items-end justify-between px-2">
            {/* Average Line */}
            <div 
              className="absolute left-0 right-0 border-t-2 border-red-500 border-dashed z-10 transition-all duration-1000"
              style={{ bottom: `${getAverageLinePosition()}%` }}
            >
              <span className="absolute -right-16 -top-3 text-xs font-semibold text-red-600 bg-white px-2 py-1 rounded shadow-sm animate-pulse">
                Average
              </span>
            </div>

            {/* Animated Bars */}
            {currentData.map((item, index) => {
              const barHeight = getBarHeight(item.rides);
              return (
                <div
                  key={`${item.period}-${index}`}
                  className="flex flex-col items-center space-y-2 flex-1 max-w-16"
                  onMouseEnter={() => setHoveredBar(item)}
                  onMouseLeave={() => setHoveredBar(null)}
                >
                  {/* Animated Bar */}
                  <div className="relative w-full flex justify-center">
                    <div
                      className="bg-blue-600 hover:bg-blue-700 rounded-t-sm cursor-pointer shadow-sm transition-all duration-1000 ease-out transform hover:scale-110"
                      style={{ 
                        height: `${barHeight}%`,
                        width: '32px',
                        minHeight: '8px',
                        animation: `barGrow 1s ease-out ${index * 0.1}s both`
                      }}
                    />
                  </div>
                  
                  {/* X-Axis Label */}
                  <span className="text-xs font-semibold text-gray-700">
                    {item.period}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Interactive Tooltip */}
          {hoveredBar && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-3 rounded-lg shadow-xl z-20 animate-fadeIn">
              <div className="text-center">
                <p className="font-semibold text-blue-300">{hoveredBar.period}</p>
                <p className="text-lg font-bold">{hoveredBar.rides.toLocaleString()}</p>
                <p className="text-xs text-gray-300">total rides</p>
                {category === 'all' && (
                  <div className="mt-2 text-xs">
                    <p>Premium: {hoveredBar.premium.toLocaleString()}</p>
                    <p>Standard: {hoveredBar.standard.toLocaleString()}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        
        <div className="text-center mt-4 text-sm font-semibold text-gray-700">
          Time Period (Months)
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center items-center space-x-8 mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-blue-600 rounded animate-pulse"></div>
          <span className="text-sm text-gray-700 font-medium">Live Rides</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-0.5 bg-red-500 border-dashed border-t-2 border-red-500 animate-pulse"></div>
          <span className="text-sm text-gray-700 font-medium">Average Line</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes barGrow {
          from {
            height: 0;
            transform: scaleY(0);
          }
          to {
            height: var(--final-height);
            transform: scaleY(1);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, -10px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default RidesBarChart;