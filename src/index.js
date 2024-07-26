import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Pricing from "./pages/pricing/Pricing";
import Order from "./pages/order-now/Order";
import Healthmedical from "./pages/helpguide/Healthmedical";

import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/order-now" element={<Order />} />
      <Route path="/health-medical" element={<Healthmedical />} />
    </Routes>
  </BrowserRouter>
);
