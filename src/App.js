import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import Productpage from './page/Productpage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [authenticate, setAuthenticate] = useState(false)
  const PrivateRoute= () => {
    return authenticate == true?<UserPage/>:<Navigate to ="/login"/>
  }
  return (
    <div>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<Aboutpage/>}/>
      <Route path="/products" element={<Productpage/>}/>
      <Route path="/products/:id/:num" element={<ProductDetailPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/user" element={<PrivateRoute/>}/>
    </Routes>
    </div>
  );
}

export default App;
