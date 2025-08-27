'use client';
import { useState, useEffect } from 'react';

const RidesTrendLineChart = () => {
  const [animationOffset, setAnimationOffset] = useState(0);
  const [animatedData, setAnimatedData] = useState([]);

  const baseData = [
    { month: 'Jan', rides: 2340, x: 60 },
    { month: 'Feb', rides: 2670, x: 120 },
    { month: 'Mar', rides: 3120, x: 180 },
    { month: 'Apr', rides: 2890, x: 240 },
    { month: 'May', rides: 3450, x: 300 },
    { month: 'Jun', rides: 3780, x: 360 },
    { month: 'Jul', rides: 2450, x: 420 },
    { month: 'Aug', rides: 2890, x: 480 },
    { month: 'Sep', rides: 3120, x: 540 },
    { month: 'Oct', rides: 2780, x: 600 },
    { month: 'Nov', rides: 3560, x: 660 },
    { month: 'Dec', rides: 3980, x: 720 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationOffset(prev => prev + 0.1);
      
      setAnimatedData(prevData => 
        baseData.map((item, index) => ({
          ...item,
          rides: Math.max(1000, item.rides + Math.sin(animationOffset + index * 0.6) * 300)
        }))
      );
    }, 120);

    return () => clearInterval(interval);
  }, [animationOffset]);

  const currentData = animatedData.length > 0 ? animatedData : baseData;
  const maxValue = Math.max(...currentData.map(d => d.rides));
  const chartHeight = 300;
  const chartWidth = 780;

  const getY = (value) => chartHeight - 60 - ((value / maxValue) * (chartHeight - 120));

  const pathData = currentData.map((d, i) => {
    const y = getY(d.rides);
    return i === 0 ? `M ${d.x} ${y}` : `L ${d.x} ${y}`;
  }).join(' ');

  const areaPath = `${pathData} L ${currentData[currentData.length - 1].x} ${chartHeight - 60} L ${currentData[0].x} ${chartHeight - 60} Z`;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
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
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-700 font-medium">Total Rides</p>
              <p className="text-2xl font-bold text-blue-600 transition-all duration-1000">{currentData.reduce((sum, d) => sum + d.rides, 0).toLocaleString()}</p>
            </div>
            <div className="text-blue-500 text-2xl animate-bounce">📊</div>
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-100 transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-700 font-medium">Monthly Average</p>
              <p className="text-2xl font-bold text-green-600 transition-all duration-1000">{Math.round(currentData.reduce((sum, d) => sum + d.rides, 0) / currentData.length).toLocaleString()}</p>
            </div>
            <div className="text-green-500 text-2xl animate-pulse">📈</div>
          </div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-700 font-medium">Peak Month</p>
              <p className="text-2xl font-bold text-purple-600 transition-all duration-1000">{Math.max(...currentData.map(d => d.rides)).toLocaleString()}</p>
            </div>
            <div className="text-purple-500 text-2xl animate-bounce">🏆</div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-80">
        <svg width={chartWidth} height={chartHeight} className="w-full h-full">
          <defs>
            <linearGradient id="blueLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.6"/>
              <stop offset="50%" stopColor="#dbeafe" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          
          {/* Grid lines */}
          {[0, 1, 2, 3, 4, 5].map(i => (
            <line 
              key={i}
              x1="50" 
              y1={60 + (i * (chartHeight - 120) / 5)} 
              x2={chartWidth - 50} 
              y2={60 + (i * (chartHeight - 120) / 5)}
              stroke="#f3f4f6" 
              strokeWidth="1"
            />
          ))}
          
          {/* Area fill */}
          <path
            d={areaPath}
            fill="url(#blueLineGradient)"
            className="transition-all duration-120 ease-linear"
          />
          
          {/* Animated Blue Line */}
          <path
            d={pathData}
            stroke="#3b82f6"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-120 ease-linear"
          >
            <animate
              attributeName="stroke-width"
              values="4;5;4"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Animated Data points */}
          {currentData.map((d, i) => (
            <circle
              key={i}
              cx={d.x}
              cy={getY(d.rides)}
              r="6"
              fill="#3b82f6"
              stroke="#ffffff"
              strokeWidth="3"
              className="transition-all duration-120 ease-linear cursor-pointer hover:r-8"
            >
              <animate
                attributeName="r"
                values="6;8;6"
                dur="2.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill-opacity"
                values="1;0.7;1"
                dur="1.8s"
                repeatCount="indefinite"
              />
            </circle>
          ))}
          
          {/* X-axis labels */}
          {currentData.map((d, i) => (
            <text
              key={i}
              x={d.x}
              y={chartHeight - 25}
              textAnchor="middle"
              className="text-xs fill-gray-600 font-medium"
            >
              {d.month}
            </text>
          ))}
          
          {/* Y-axis labels */}
          {[0, 1, 2, 3, 4, 5].map(i => {
            const value = (maxValue / 5) * (5 - i);
            return (
              <text
                key={i}
                x="35"
                y={65 + (i * (chartHeight - 120) / 5)}
                textAnchor="end"
                className="text-xs fill-gray-600 font-medium"
              >
                {Math.round(value / 1000)}k
              </text>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default RidesTrendLineChart;