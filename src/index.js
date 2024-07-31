import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Healthmedical from "./pages/helpguide/Healthmedical";
import Engineering from "./pages/helpguide/Engineering";
import "bootstrap/dist/css/bootstrap.min.css";
import Biologicalscience from "./pages/helpguide/Biologicalscience";
import Buisness from "./pages/helpguide/Buisness";
import Finance from "./pages/helpguide/Finance";
import Pricing from "./pages/pricing/Pricing";
import Order from "./pages/order-now/Order";
import TopicSelection from "./pages/services/phd topic selection/TopicSelection";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/order-now" element={<Order />} />
      <Route path="/health-medical" element={<Healthmedical />} />
      <Route path="/biological-science" element={<Biologicalscience />} />
      <Route path="/engineering" element={<Engineering />} />
      <Route path="/buisness" element={<Buisness />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/services/phd-dissertation/phd-topic-selection" element={<TopicSelection />} />
    </Routes>
  </BrowserRouter>
);
