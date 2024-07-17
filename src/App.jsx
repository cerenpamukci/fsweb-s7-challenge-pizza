import React, { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import OrderPage from './OrderPage';
import SuccessPage from './SuccessPage';

export default function App() {
  const [accepted, setAccepted] = useState();
  return (
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<OrderPage setter={setAccepted} state={accepted} />} />
        <Route path="/success" element={<SuccessPage state={accepted} />} />
      </Routes>
    
  );
}
