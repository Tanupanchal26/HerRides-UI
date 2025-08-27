'use client';
import { useState, useEffect } from 'react';

const RidesTrendChart = () => {
  const [selectedRange, setSelectedRange] = useState('7d');
  const [viewMode, setViewMode] = useState('daily');
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [animationOffset, setAnimationOffset] = useState(0);
  const [animatedData, setAnimatedData] = useState(null);

  const baseData = {
    daily: {
      '7d': [
        { date: '2024-01-15', rides: 245, label: 'Jan 15', baseRides: 245 },
        { date: '2024-01-16', rides: 289, label: 'Jan 16', baseRides: 289 },
        { date: '2024-01-17', rides: 312, label: 'Jan 17', baseRides: 312 },
        { date: '2024-01-18', rides: 278, label: 'Jan 18', baseRides: 278 },
        { date: '2024-01-19', rides: 356, label: 'Jan 19', baseRides: 356 },
        { date: '2024-01-20', rides: 398, label: 'Jan 20', baseRides: 398 },
        { date: '2024-01-21', rides: 423, label: 'Jan 21', baseRides: 423 }
      ],
      '30d': [
        { date: '2024-01-01', rides: 234, label: 'Jan 1', baseRides: 234 },
        { date: '2024-01-08', rides: 267, label: 'Jan 8', baseRides: 267 },
        { date: '2024-01-15', rides: 312, label: 'Jan 15', baseRides: 312 },
        { date: '2024-01-22', rides: 389, label: 'Jan 22', baseRides: 389 },
        { date: '2024-01-29', rides: 423, label: 'Jan 29', baseRides: 423 }
      ]
    },
    weekly: {
      '30d': [
        { date: '2024-01-01', rides: 1890, label: 'Week 1', baseRides: 1890 },
        { date: '2024-01-08', rides: 2145, label: 'Week 2', baseRides: 2145 },
        { date: '2024-01-15', rides: 2398, label: 'Week 3', baseRides: 2398 },
        { date: '2024-01-22', rides: 2567, label: 'Week 4', baseRides: 2567 }
      ],
      '90d': [
        { date: '2023-10-01', rides: 8450, label: 'Oct W1', baseRides: 8450 },
        { date: '2023-11-01', rides: 9234, label: 'Nov W1', baseRides: 9234 },
        { date: '2023-12-01', rides: 10567, label: 'Dec W1', baseRides: 10567 }
      ]
    },
    monthly: {
      '90d': [
        { date: '2023-10-01', rides: 8450, label: 'October', baseRides: 8450 },
        { date: '2023-11-01', rides: 9234, label: 'November', baseRides: 9234 },
        { date: '2023-12-01', rides: 10567, label: 'December', baseRides: 10567 }
      ]
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationOffset(prev => prev + 0.08);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const baseCurrentData = baseData[viewMode]?.[selectedRange] || baseData.daily['7d'];
    
    const animated = baseCurrentData.map((point, index) => ({
      ...point,
      rides: Math.max(0, point.baseRides + Math.sin(animationOffset + index * 0.7) * (point.baseRides * 0.1))
    }));
    
    setAnimatedData(animated);
  }, [animationOffset, viewMode, selectedRange]);

  const getCurrentData = () => {
    return animatedData || baseData[viewMode]?.[selectedRange] || baseData.daily['7d'];
  };

  const currentData = getCurrentData();
  const maxRides = Math.max(...currentData.map(d => d.rides));
  const minRides = Math.min(...currentData.map(d => d.rides));
  const totalRides = currentData.reduce((sum, d) => sum + d.rides, 0);
  const avgRides = Math.round(totalRides / currentData.length);
  const peakDay = currentData.reduce((max, d) => d.rides > max.rides ? d : max);

  const createDataPath = () => {
    let path = '';
    currentData.forEach((point, index) => {
      const x = (index / (currentData.length - 1)) * 100;
      const y = 100 - ((point.rides - minRides) / (maxRides - minRides)) * 75;
      
      if (index === 0) {
        path += `M ${x} ${y}`;
      } else {
        path += ` L ${x} ${y}`;
      }
    });
    return path;
  };

  const createTrendline = () => {
    const n = currentData.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;
    
    currentData.forEach((point, index) => {
      sumX += index;
      sumY += point.rides;
      sumXY += index * point.rides;
      sumXX += index * index;
    });
    
    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;
    
    const startY = 100 - ((intercept - minRides) / (maxRides - minRides)) * 75;
    const endY = 100 - ((slope * (n - 1) + intercept - minRides) / (maxRides - minRides)) * 75;
    
    return `M 0 ${startY} L 100 ${endY}`;
  };

  const getYAxisLabels = () => {
    const step = (maxRides - minRides) / 4;
    return [
      Math.round(maxRides),
      Math.round(maxRides - step),
      Math.round(maxRides - 2 * step),
      Math.round(maxRides - 3 * step),
      Math.round(minRides)
    ];
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      {/* Header with Controls */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 space-y-4 lg:space-y-0">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Rides Trend Analysis</h3>
          <p className="text-sm text-gray-500">Interactive trendline chart with data insights</p>
        </div>
        
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          {/* View Mode Toggle */}
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            {['daily', 'weekly', 'monthly'].map(mode => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                  viewMode === mode
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Date Range Filter */}
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            {Object.keys(data[viewMode] || {}).map(range => (
              <button
                key={range}
                onClick={() => setSelectedRange(range)}
                className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                  selectedRange === range
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {range === '7d' ? '7 Days' : range === '30d' ? '30 Days' : '90 Days'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-blue-700 font-medium">Total Rides</p>
              <p className="text-2xl font-bold text-blue-600">{totalRides.toLocaleString()}</p>
            </div>
            <div className="text-blue-500 text-xl">📊</div>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-green-700 font-medium">Average per {viewMode.slice(0, -2)}</p>
              <p className="text-2xl font-bold text-green-600">{avgRides.toLocaleString()}</p>
            </div>
            <div className="text-green-500 text-xl">📈</div>
          </div>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-purple-700 font-medium">Peak Period</p>
              <p className="text-2xl font-bold text-purple-600">{peakDay.rides.toLocaleString()}</p>
              <p className="text-xs text-purple-500">{peakDay.label}</p>
            </div>
            <div className="text-purple-500 text-xl">🏆</div>
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative">
        <div className="absolute -left-16 top-1/2 transform -rotate-90 text-sm font-medium text-gray-600">
          Ride Count
        </div>
        
        <div className="relative h-80 bg-gray-50 rounded-lg border p-6">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Grid Lines */}
            {[0, 25, 50, 75, 100].map(y => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="100"
                y2={y}
                stroke="#e5e7eb"
                strokeWidth="0.5"
                opacity="0.6"
              />
            ))}
            
            {/* Animated Trendline */}
            <path
              d={createTrendline()}
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity="0.8"
              className="transition-all duration-150 ease-linear"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;10;0"
                dur="4s"
                repeatCount="indefinite"
              />
            </path>
            
            {/* Animated Data Line */}
            <path
              d={createDataPath()}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-150 ease-linear"
            >
              <animate
                attributeName="stroke-width"
                values="3;4;3"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
            
            {/* Data Points */}
            {currentData.map((point, index) => {
              const x = (index / (currentData.length - 1)) * 100;
              const y = 100 - ((point.rides - minRides) / (maxRides - minRides)) * 75;
              
              return (
                <g key={index}>
                  <circle
                    cx={x}
                    cy={y}
                    r="5"
                    fill="#3b82f6"
                    stroke="white"
                    strokeWidth="2"
                    className="cursor-pointer hover:r-7 transition-all duration-150 ease-linear"
                    onMouseEnter={() => setHoveredPoint({ ...point, x, y })}
                    onMouseLeave={() => setHoveredPoint(null)}
                  >
                    <animate
                      attributeName="r"
                      values="5;6.5;5"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="fill-opacity"
                      values="1;0.7;1"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              );
            })}
          </svg>

          {/* Interactive Tooltip */}
          {hoveredPoint && (
            <div
              className="absolute bg-gray-900 text-white px-4 py-3 rounded-lg text-sm pointer-events-none z-20 shadow-xl"
              style={{
                left: `${hoveredPoint.x}%`,
                top: `${hoveredPoint.y}%`,
                transform: 'translate(-50%, -130%)'
              }}
            >
              <div className="text-center">
                <p className="font-semibold text-blue-300">{hoveredPoint.label}</p>
                <p className="text-lg font-bold">{hoveredPoint.rides.toLocaleString()}</p>
                <p className="text-xs text-gray-300">rides</p>
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          )}

          {/* Y-Axis Labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-600 -ml-12">
            {getYAxisLabels().map((label, index) => (
              <span key={index} className="font-medium">{label.toLocaleString()}</span>
            ))}
          </div>

          {/* X-Axis Labels */}
          <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-600 mt-3">
            {currentData.map((point, index) => (
              <span key={index} className="font-medium transform -rotate-45 origin-top-left">
                {point.label}
              </span>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-4 text-sm font-medium text-gray-600">
          Date ({viewMode} view)
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center items-center space-x-8 mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-1 bg-blue-600 rounded"></div>
          <span className="text-sm text-gray-700 font-medium">Actual Rides</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-1 bg-red-500 border-dashed border-t-2 border-red-500"></div>
          <span className="text-sm text-gray-700 font-medium">Trend Line</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full border-2 border-white"></div>
          <span className="text-sm text-gray-700 font-medium">Data Points</span>
        </div>
      </div>
    </div>
  );
};

export default RidesTrendChart;