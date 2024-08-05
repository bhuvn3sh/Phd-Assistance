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
import Faqs from "./pages/faqs/Faqs";
import PhdDissertation from "./pages/services/phd dissertation/PhdDissertation";
import TopicSelection from "./pages/services/phd topic selection/TopicSelection";
import ProblemIdentification from "./pages/services/problem identification/ProblemIdentification";
import ResearchProposal from "./pages/services/research proposal/ResearchProposal";
import PilotStudy from "./pages/services/pilot study/PilotStudy";
<<<<<<< Updated upstream
import PhdDissertationFull from "./pages/services/phd-dissertation-full/PhdDissertationFull";
import PhdDissertationPart from "./pages/services/phd-dissertation-part/PhdDissertationPart";
import PhdConsultation from "./pages/services/phd consultation/PhdConsultation";
import VivaVoce from "./pages/services/viva voce/VivaVoce";

=======
import Faqs from "./pages/faq/Faqs";
>>>>>>> Stashed changes

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

      <Route
        path="/services/phd-dissertation"
        element={<PhdDissertation />}
      />
      <Route
        path="/services/phd-dissertation/phd-topic-selection"
        element={<TopicSelection />}
      />
      <Route
        path="/services/phd-dissertation/problem-identification"
        element={<ProblemIdentification />}
      />
      <Route
        path="/services/phd-dissertation/research-proposal"
        element={<ResearchProposal />}
      />
      <Route
        path="/services/phd-dissertation/pilot-study"
        element={<PilotStudy />}
      />
<<<<<<< Updated upstream
      <Route
        path="/services/phd-dissertation/phd-dissertation-full"
        element={<PhdDissertationFull />}
      />
      <Route
        path="/services/phd-dissertation/phd-dissertation-part"
        element={<PhdDissertationPart />}
      />
      <Route
        path="/services/phd-dissertation/phd-consultation"
        element={<PhdConsultation />}
      />
      <Route
        path="/services/phd-dissertation/viva-voce"
        element={<VivaVoce />}
      />
      <Route path="/faqs" element={<Faqs />} />
=======
      <Route path="/pages/faq/Faqs" element={<Faqs />} />
>>>>>>> Stashed changes
    </Routes>
  </BrowserRouter>
);
