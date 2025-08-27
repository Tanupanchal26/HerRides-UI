'use client';
import { useState, useEffect } from 'react';

const RevenueChart = () => {
  const [animationOffset, setAnimationOffset] = useState(0);
  const [animatedData, setAnimatedData] = useState([]);
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const baseData = [
    { month: 'Aug', revenue: 1240000 },
    { month: 'Sep', revenue: 1380000 },
    { month: 'Oct', revenue: 1520000 },
    { month: 'Nov', revenue: 1680000 },
    { month: 'Dec', revenue: 1950000 },
    { month: 'Jan', revenue: 1420000 },
    { month: 'Feb', revenue: 1580000 },
    { month: 'Mar', revenue: 1720000 },
    { month: 'Apr', revenue: 1890000 },
    { month: 'May', revenue: 2100000 },
    { month: 'Jun', revenue: 1980000 },
    { month: 'Jul', revenue: 2250000 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationOffset(prev => prev + 0.08);
      
      setAnimatedData(
        baseData.map((item, index) => ({
          ...item,
          revenue: Math.max(800000, item.revenue + Math.sin(animationOffset + index * 0.5) * 100000)
        }))
      );
    }, 150);

    return () => clearInterval(interval);
  }, [animationOffset]);

  const currentData = animatedData.length > 0 ? animatedData : baseData;
  const maxValue = Math.max(...currentData.map(d => d.revenue));
  const minValue = Math.min(...currentData.map(d => d.revenue));
  
  const highestMonth = currentData.reduce((max, d) => d.revenue > max.revenue ? d : max);
  const lowestMonth = currentData.reduce((min, d) => d.revenue < min.revenue ? d : min);
  
  const formatCurrency = (value) => `₹${(value / 100000).toFixed(1)}L`;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      {/* Simple Header */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-1">Revenue Analytics</h3>
        <p className="text-sm text-gray-600">Monthly revenue over the past 12 months</p>
      </div>

      {/* Chart Container */}
      <div className="relative bg-white rounded border border-gray-100 p-4">
        <div className="h-64 relative">
          <svg viewBox="0 0 400 200" className="w-full h-full">
            {/* Grid lines */}
            {[1, 2, 3, 4].map(i => (
              <line 
                key={i}
                x1="40" 
                y1={30 + (i * 35)} 
                x2="360" 
                y2={30 + (i * 35)}
                stroke="#f3f4f6" 
                strokeWidth="1"
              />
            ))}
            
            {/* Main line */}
            <path
              d={currentData.map((d, i) => {
                const x = 40 + (i * 27);
                const y = 170 - ((d.revenue - minValue) / (maxValue - minValue)) * 120;
                return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
              }).join(' ')}
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />

            {/* Data points */}
            {currentData.map((d, i) => {
              const x = 40 + (i * 27);
              const y = 170 - ((d.revenue - minValue) / (maxValue - minValue)) * 120;
              const isHighest = d.revenue === highestMonth.revenue;
              const isLowest = d.revenue === lowestMonth.revenue;
              
              return (
                <g key={i}>
                  <circle
                    cx={x}
                    cy={y}
                    r="4"
                    fill="#3b82f6"
                    stroke="#ffffff"
                    strokeWidth="2"
                    className="cursor-pointer hover:r-6 transition-all duration-200"
                    onMouseEnter={() => setHoveredPoint({ ...d, x, y, isHighest, isLowest })}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                  {(isHighest || isLowest) && (
                    <text
                      x={x}
                      y={y - 15}
                      textAnchor="middle"
                      className="text-xs fill-gray-600 font-medium"
                    >
                      {isHighest ? 'Highest' : 'Lowest'}
                    </text>
                  )}
                </g>
              );
            })}

            {/* X-axis labels */}
            {currentData.map((d, i) => {
              const x = 40 + (i * 27);
              return (
                <text
                  key={i}
                  x={x}
                  y="190"
                  textAnchor="middle"
                  className="text-xs fill-gray-600"
                >
                  {d.month}
                </text>
              );
            })}

            {/* Y-axis labels */}
            {[0, 25, 50, 75, 100].map((percent, i) => {
              const value = minValue + ((maxValue - minValue) * percent / 100);
              const y = 170 - (percent * 1.2);
              return (
                <text
                  key={i}
                  x="30"
                  y={y + 4}
                  textAnchor="end"
                  className="text-xs fill-gray-600"
                >
                  {formatCurrency(value)}
                </text>
              );
            })}
          </svg>

          {/* Simple Tooltip */}
          {hoveredPoint && (
            <div
              className="absolute bg-gray-900 text-white px-3 py-2 rounded text-sm z-30 pointer-events-none"
              style={{
                left: `${(hoveredPoint.x / 400) * 100}%`,
                top: `${(hoveredPoint.y / 200) * 100}%`,
                transform: 'translate(-50%, -120%)'
              }}
            >
              <div className="font-medium">{hoveredPoint.month}</div>
              <div>{formatCurrency(hoveredPoint.revenue)}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;