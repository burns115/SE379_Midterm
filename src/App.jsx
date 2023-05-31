import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import FetchingData from './components/FetchingData';
import Cart from './pages/Cart';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route exact path="/fetchingData" element={<FetchingData/>} />
        <Route path="/productDetail/:id" element={<ProductDetail/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
