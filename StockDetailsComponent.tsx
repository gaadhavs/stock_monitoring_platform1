import React, { useState, useEffect } from 'react';
import { fetchStockDetails } from '../api';

interface StockDetails {
  symbol: string;
  name: string;
  price: number;
  change: number;
}

const StockDetailsComponent: React.FC<{ symbol: string }> = ({ symbol }) => {
  const [stockDetails, setStockDetails] = useState<StockDetails | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const details = await fetchStockDetails(symbol);
      setStockDetails(details);
    };
    fetchData();
  }, [symbol]);

  if (!stockDetails) return null;

  return (
    <div>
      <h2>{stockDetails.name} ({stockDetails.symbol})</h2>
      <p>Price: {stockDetails.price}</p>
      <p>Change: {stockDetails.change}%</p>
    </div>
  );
};

export default StockDetailsComponent;
