import './App.css';
import ProductList from './components/Listcard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;