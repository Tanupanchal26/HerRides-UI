'use client';

const HourlyRidesChart = () => {
  const data = [
    { time: '6-9AM', rides: 45 },
    { time: '9AM-12PM', rides: 78 },
    { time: '12-3PM', rides: 65 },
    { time: '3-6PM', rides: 92 },
    { time: '6-9PM', rides: 110 },
    { time: '9PM-12AM', rides: 85 },
    { time: '12-3AM', rides: 35 },
    { time: '3-6AM', rides: 20 }
  ];

  const maxRides = Math.max(...data.map(d => d.rides));
  const chartHeight = 200;
  const chartWidth = 480;
  const barWidth = 45;
  const barSpacing = 8;

  return (
    <div className="relative w-full h-64">
      <svg width={chartWidth} height={chartHeight} className="w-full h-full">
        <defs>
          <linearGradient id="purpleBarGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7"/>
            <stop offset="100%" stopColor="#9333ea"/>
          </linearGradient>
          <filter id="barShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.1"/>
          </filter>
        </defs>
        
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map(i => (
          <line 
            key={i}
            x1="50" 
            y1={40 + (i * (chartHeight - 80) / 4)} 
            x2={chartWidth - 40} 
            y2={40 + (i * (chartHeight - 80) / 4)}
            stroke="#f3f4f6" 
            strokeWidth="1"
          />
        ))}
        
        {/* Bars */}
        {data.map((d, i) => {
          const barHeight = (d.rides / maxRides) * (chartHeight - 80);
          const x = 60 + (i * (barWidth + barSpacing));
          const y = chartHeight - 40 - barHeight;
          
          return (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill="url(#purpleBarGradient)"
                rx="4"
                ry="4"
                filter="url(#barShadow)"
                className="hover:opacity-80 transition-opacity cursor-pointer"
              />
              
              {/* X-axis labels */}
              <text
                x={x + barWidth / 2}
                y={chartHeight - 15}
                textAnchor="middle"
                className="text-xs fill-gray-500 font-medium"
                transform={`rotate(-45, ${x + barWidth / 2}, ${chartHeight - 15})`}
              >
                {d.time}
              </text>
            </g>
          );
        })}
        
        {/* Y-axis labels */}
        {[0, 1, 2, 3, 4].map(i => {
          const value = (maxRides / 4) * (4 - i);
          return (
            <text
              key={i}
              x="35"
              y={45 + (i * (chartHeight - 80) / 4)}
              textAnchor="end"
              className="text-xs fill-gray-500 font-medium"
            >
              {Math.round(value)}
            </text>
          );
        })}
        
        {/* Y-axis title */}
        <text
          x="15"
          y={chartHeight / 2}
          textAnchor="middle"
          className="text-xs fill-gray-500 font-medium"
          transform={`rotate(-90, 15, ${chartHeight / 2})`}
        >
          Rides
        </text>
      </svg>
    </div>
  );
};

export default HourlyRidesChart;