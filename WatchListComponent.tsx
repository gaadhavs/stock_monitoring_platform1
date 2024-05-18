// WatchlistComponent.tsx
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

interface Stock {
  symbol: string;
  price: number;
}

interface WatchlistProps {
  watchlist: Stock[];
}

const WatchlistComponent: React.FC<WatchlistProps> = ({ watchlist }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Symbol</TableCell>
          <TableCell>Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {watchlist.map(stock => (
          <TableRow key={stock.symbol}>
            <TableCell>{stock.symbol}</TableCell>
            <TableCell>{stock.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default WatchlistComponent;
