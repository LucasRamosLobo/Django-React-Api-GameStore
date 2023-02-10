import './App.css';
import ProductList from './components/Listcard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Orders from './components/Orders';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/order" element={<Orders />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;