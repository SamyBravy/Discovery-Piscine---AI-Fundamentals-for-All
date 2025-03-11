import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GlobalPopulationChart = () => {
  // Historical world population data (estimates)
  const populationData = [
    { year: 1, population: 0.23 },
    { year: 500, population: 0.21 },
    { year: 1000, population: 0.29 },
    { year: 1500, population: 0.46 },
    { year: 1600, population: 0.58 },
    { year: 1700, population: 0.68 },
    { year: 1800, population: 1.0 },
    { year: 1850, population: 1.26 },
    { year: 1900, population: 1.65 },
    { year: 1950, population: 2.5 },
    { year: 1960, population: 3.0 },
    { year: 1970, population: 3.7 },
    { year: 1980, population: 4.4 },
    { year: 1990, population: 5.3 },
    { year: 2000, population: 6.1 },
    { year: 2010, population: 6.9 },
    { year: 2020, population: 7.8 },
    { year: 2024, population: 8.1 }
  ];

  return (
    <div className="flex flex-col items-center w-full mt-2">
      <h2 className="text-2xl font-bold mb-4">Global Population Growth (1 CE - 2024)</h2>
      <div className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={populationData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="year" 
              label={{ value: 'Year', position: 'insideBottomRight', offset: -10 }} 
            />
            <YAxis 
              label={{ value: 'Population (billions)', angle: -90, position: 'insideLeft' }}
              domain={[0, 'auto']}
            />
            <Tooltip 
              formatter={(value) => [`${value} billion`, 'Population']}
              labelFormatter={(year) => `Year ${year} CE`}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="population" 
              stroke="#8884d8" 
              strokeWidth={2}
              activeDot={{ r: 8 }}
              name="World Population"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-6 text-sm max-w-3xl">
        <p className="font-semibold mb-2">Key Observations:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Population remained relatively stable at below 0.5 billion for most of human history until around 1500 CE</li>
          <li>The Industrial Revolution (late 1700s-1800s) corresponds with the beginning of accelerated growth</li>
          <li>The steepest population growth occurred after 1950 in what is often called the "population explosion"</li>
          <li>It took all of human history until ~1800 to reach 1 billion people</li>
          <li>In just the last ~200 years, population increased eightfold to over 8 billion</li>
        </ul>
      </div>
    </div>
  );
};

export default GlobalPopulationChart;
