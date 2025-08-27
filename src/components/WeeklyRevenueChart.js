'use client';
import { useState, useEffect } from 'react';

const WeeklyRevenueChart = () => {
  const baseData = [
    { day: 'Mon', value: 35000, x: 60 },
    { day: 'Tue', value: 42000, x: 120 },
    { day: 'Wed', value: 38000, x: 180 },
    { day: 'Thu', value: 48000, x: 240 },
    { day: 'Fri', value: 52000, x: 300 },
    { day: 'Sat', value: 45000, x: 360 },
    { day: 'Sun', value: 40000, x: 420 }
  ];

  const [data, setData] = useState(baseData);
  const [animationOffset, setAnimationOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationOffset(prev => prev + 0.1);
      
      setData(prevData => 
        prevData.map((item, index) => ({
          ...item,
          value: item.value + Math.sin(animationOffset + index * 0.5) * 2000
        }))
      );
    }, 100);

    return () => clearInterval(interval);
  }, [animationOffset]);

  const maxValue = Math.max(...data.map(d => d.value));
  const chartHeight = 200;
  const chartWidth = 480;

  const getY = (value) => chartHeight - 40 - ((value / maxValue) * (chartHeight - 80));

  const pathData = data.map((d, i) => {
    const y = getY(d.value);
    return i === 0 ? `M ${d.x} ${y}` : `L ${d.x} ${y}`;
  }).join(' ');

  const areaPath = `${pathData} L ${data[data.length - 1].x} ${chartHeight - 40} L ${data[0].x} ${chartHeight - 40} Z`;

  return (
    <div className="relative w-full h-64">
      <svg width={chartWidth} height={chartHeight} className="w-full h-full">
        <defs>
          <linearGradient id="blueAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="#dbeafe" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.1"/>
          </linearGradient>
        </defs>
        
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map(i => (
          <line 
            key={i}
            x1="40" 
            y1={40 + (i * (chartHeight - 80) / 4)} 
            x2={chartWidth - 40} 
            y2={40 + (i * (chartHeight - 80) / 4)}
            stroke="#f3f4f6" 
            strokeWidth="1"
          />
        ))}
        
        {/* Animated Area fill */}
        <path
          d={areaPath}
          fill="url(#blueAreaGradient)"
          className="transition-all duration-100 ease-linear"
        />
        
        {/* Animated Line */}
        <path
          d={pathData}
          stroke="#3b82f6"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-100 ease-linear"
        />
        
        {/* Animated Data points */}
        {data.map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={getY(d.value)}
            r="5"
            fill="#3b82f6"
            stroke="#ffffff"
            strokeWidth="2"
            className="hover:r-6 transition-all duration-100 ease-linear cursor-pointer"
          >
            <animate
              attributeName="r"
              values="5;6;5"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        ))}
        
        {/* X-axis labels */}
        {data.map((d, i) => (
          <text
            key={i}
            x={d.x}
            y={chartHeight - 15}
            textAnchor="middle"
            className="text-xs fill-gray-500 font-medium"
          >
            {d.day}
          </text>
        ))}
        
        {/* Y-axis labels */}
        {[0, 1, 2, 3, 4].map(i => {
          const value = (maxValue / 4) * (4 - i);
          return (
            <text
              key={i}
              x="25"
              y={45 + (i * (chartHeight - 80) / 4)}
              textAnchor="end"
              className="text-xs fill-gray-500 font-medium"
            >
              ₹{Math.round(value / 1000)}k
            </text>
          );
        })}
      </svg>
    </div>
  );
};

export default WeeklyRevenueChart;