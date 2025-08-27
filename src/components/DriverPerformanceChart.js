'use client';
import { useState, useEffect } from 'react';

const DriverPerformanceChart = () => {
  const [animatedData, setAnimatedData] = useState([]);
  const [animationOffset, setAnimationOffset] = useState(0);
  const [hoveredDriver, setHoveredDriver] = useState(null);

  const baseData = [
    { name: 'Rajesh K.', score: 92 },
    { name: 'Priya S.', score: 88 },
    { name: 'Amit P.', score: 76 },
    { name: 'Sunita M.', score: 94 },
    { name: 'Vikram R.', score: 58 },
    { name: 'Neha G.', score: 85 },
    { name: 'Ravi T.', score: 67 },
    { name: 'Kavya L.', score: 91 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationOffset(prev => prev + 0.05);
      
      setAnimatedData(
        baseData.map((item, index) => ({
          ...item,
          score: Math.max(30, Math.min(100, item.score + Math.sin(animationOffset + index * 0.3) * 2))
        }))
      );
    }, 200);

    return () => clearInterval(interval);
  }, [animationOffset]);

  const currentData = animatedData.length > 0 ? animatedData : baseData;
  const averageScore = currentData.reduce((sum, d) => sum + d.score, 0) / currentData.length;

  const getBarColor = (score) => {
    if (score >= 85) return '#10b981'; // Soft green for excellent
    return '#6b7280'; // Neutral gray
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      {/* Simple Header */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-1">Driver Performance</h3>
        <p className="text-sm text-gray-600">Performance scores by driver</p>
      </div>

      {/* Chart Container */}
      <div className="relative bg-white rounded border border-gray-100 p-4">
        <div className="relative h-64 flex items-end justify-between gap-2">
          {/* Average Line */}
          <div 
            className="absolute left-0 right-0 border-t border-gray-400 border-dotted z-10"
            style={{ bottom: `${(averageScore / 100) * 80 + 10}%` }}
          >
            <div className="absolute -right-16 -top-4 text-xs text-gray-600 bg-white px-1">
              Avg: {averageScore.toFixed(1)}
            </div>
          </div>

          {/* Driver Bars */}
          {currentData.map((driver, index) => {
            const barHeight = (driver.score / 100) * 80;
            const barColor = getBarColor(driver.score);
            
            return (
              <div
                key={`${driver.name}-${index}`}
                className="flex flex-col items-center flex-1 group"
              >
                {/* Bar */}
                <div className="relative w-full flex justify-center mb-2">
                  <div
                    className="cursor-pointer transition-all duration-300 hover:opacity-80"
                    style={{ 
                      height: `${barHeight}%`,
                      width: '32px',
                      minHeight: '8px',
                      backgroundColor: barColor
                    }}
                    onMouseEnter={() => setHoveredDriver(driver)}
                    onMouseLeave={() => setHoveredDriver(null)}
                  />
                </div>
                
                {/* Driver Name */}
                <div className="text-xs text-gray-700 text-center font-medium">
                  {driver.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-600 -ml-8">
          {[100, 75, 50, 25, 0].map((score, index) => (
            <span key={index} className="bg-white px-1">
              {score}
            </span>
          ))}
        </div>
      </div>
      
      {/* Simple Tooltip */}
      {hoveredDriver && (
        <div className="mt-4 bg-gray-50 rounded p-3 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">{hoveredDriver.name}</div>
              <div className="text-sm text-gray-600">Performance Score</div>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {Math.round(hoveredDriver.score)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DriverPerformanceChart;