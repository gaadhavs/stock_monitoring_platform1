import axios from 'axios';


interface ChartData {
  date: string;
  price: number;
}

interface StockDetails {
  symbol: string;
  name: string;
  price: number;
  change: number;
}

const API_URL = 'http://your-backend-url/api/';

export const getWatchlistPrices = async (userId: number) => {
  const response = await axios.get(`${API_URL}watchlist/${userId}/prices/`);
  return response.data;
};

export const fetchHistoricalData = async (symbol: string): Promise<ChartData[]> => {
  // Implementation for fetching historical data
  // Example: Replace this with your actual API call
  const response = await fetch(`https://api.example.com/historical-data/${symbol}`);
  const data = await response.json();
  return data;
};

export const fetchStockDetails = async (symbol: string): Promise<StockDetails> => {
  // Implementation for fetching stock details
  // Example: Replace this with your actual API call
  const response = await fetch(`https://api.example.com/stock-details/${symbol}`);
  const data = await response.json();
  return data;
};
