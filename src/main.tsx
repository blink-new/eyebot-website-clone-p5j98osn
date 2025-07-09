import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Prescriptions from './pages/Prescriptions';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster position="top-right" />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
