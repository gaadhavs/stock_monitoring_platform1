import React, { useState, useEffect } from 'react';
import { fetchHistoricalData } from '../api';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface ChartData {
  date: string;
  price: number;
}

const ChartComponent: React.FC<{ symbol: string }> = ({ symbol }) => {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHistoricalData(symbol);
      setChartData(data);
    };
    fetchData();
  }, [symbol]);

  return (
    <div>
      <h2>Historical Price Chart</h2>
      <LineChart width={600} height={400} data={chartData}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default ChartComponent;
