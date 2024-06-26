import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/ChartComponent';
import About from './components/StockDetailsComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
