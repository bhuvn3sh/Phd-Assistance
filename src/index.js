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
import PhdDissertationFull from "./pages/services/phd-dissertation-full/PhdDissertationFull";
import PhdDissertationPart from "./pages/services/phd-dissertation-part/PhdDissertationPart";
import PhdConsultation from "./pages/services/phd consultation/PhdConsultation";
import VivaVoce from "./pages/services/viva voce/VivaVoce";
import DataAnalysis from "./pages/services/data analytics/DataAnalysis";
import QuantitativeStatistics from "./pages/services/quantitative statistics/QuantitativeStatistics";
import ContentAnalysis from "./pages/services/content analysis/ContentAnalysis";
import Biostatistics from "./pages/services/biostatistics/Biostatistics";
import Econometrics from "./pages/services/econometrics/Econometrics";
import BigDataAnalysis from "./pages/services/big data analysis/BigDataAnalysis";
import SoftwareProgramming from "./pages/services/software programming/SoftwareProgramming";
import ComputerProgramming from "./pages/services/computer programming/ComputerProgramming";
import Coursework from "./pages/services/coursework/Coursework";
import AbstractService from "./pages/services/abstract service/AbstractService";
import Assignment from "./pages/services/assignment/Assignment";
import InterimReport from "./pages/services/interim report/InterimReport";
import ExamNotes from "./pages/services/exam notes/ExamNotes";
import Synopsis from "./pages/services/synopsis/Synopsis";
import Powerpoint from "./pages/services/powerpoint/Powerpoint";
import LiteratureReview from "./pages/services/literature review/LiteratureReview";
import ReferencesCollection from "./pages/services/references collection/ReferencesCollection";
import ConceptualFramework from "./pages/services/conceptual framework/ConceptualFramework";
import TheoreticalFramework from "./pages/services/theoretical framework/TheoreticalFramework";
import AnnotatedBib from "./pages/services/annotated bibliography/AnnotatedBib";
import TheoremDevelopment from "./pages/services/theorem development/TheoremDevelopment";
import GapIdentification from "./pages/services/gap identification/GapIdentification";
import LawWriting from "./pages/industries/law writing/LawWriting";
import ArtsAndHumanities from "./pages/industries/arts and humanities/ArtsAndHumanities";
import MedicineHealth from "./pages/industries/medicine and health/MedicineHealth";
import BusinessAndManagement from "./pages/industries/business and management/BuisnessAndManagement";
import Economics from "./pages/industries/economics/Economics";
import ComputerScience from "./pages/industries/computer science/ComputerScience";
import EngineeringAndTech from "./pages/industries/engineering/EngineeringTech";
import Biology from "./pages/industries/biology/Biology";

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

      <Route path="/services/phd-dissertation" element={<PhdDissertation />} />
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

      <Route path="/services/phd-data-analytics" element={<DataAnalysis />} />
      <Route
        path="/services/phd-data-analytics/quantitative-statistics"
        element={<QuantitativeStatistics />}
      />
      <Route
        path="/services/phd-data-analytics/content-analysis"
        element={<ContentAnalysis />}
      />
      <Route
        path="/services/phd-data-analytics/biostatistics"
        element={<Biostatistics />}
      />
      <Route
        path="/services/phd-data-analytics/econometrics"
        element={<Econometrics />}
      />
      <Route
        path="/services/phd-data-analytics/big-data-analysis"
        element={<BigDataAnalysis />}
      />
      <Route
        path="/services/phd-data-analytics/software-programming"
        element={<SoftwareProgramming />}
      />
      <Route
        path="/services/phd-data-analytics/computer-programming"
        element={<ComputerProgramming />}
      />

      <Route path="/services/phd-coursework" element={<Coursework />} />
      <Route
        path="/services/phd-coursework/abstract"
        element={<AbstractService />}
      />
      <Route
        path="/services/phd-coursework/assignment"
        element={<Assignment />}
      />
      <Route
        path="/services/phd-coursework/interim-report"
        element={<InterimReport />}
      />
      <Route
        path="/services/phd-coursework/exam-notes"
        element={<ExamNotes />}
      />
      <Route
        path="/services/phd-coursework/synopsis-preperation"
        element={<Synopsis />}
      />
      <Route
        path="/services/phd-coursework/power-point"
        element={<Powerpoint />}
      />

      <Route
        path="/services/phd-literature-review"
        element={<LiteratureReview />}
      />
      <Route
        path="/services/phd-literature-review/references-collection"
        element={<ReferencesCollection />}
      />
      <Route
        path="/services/phd-literature-review/conceptual-framework"
        element={<ConceptualFramework />}
      />
      <Route
        path="/services/phd-literature-review/theoretical-framework"
        element={<TheoreticalFramework />}
      />
      <Route
        path="/services/phd-literature-review/annotated-bibliography"
        element={<AnnotatedBib />}
      />
      <Route
        path="/services/phd-literature-review/theorem-development"
        element={<TheoremDevelopment />}
      />
      <Route
        path="/services/phd-literature-review/gap-identification"
        element={<GapIdentification />}
      />

      <Route
        path="/industries/academic-law-writing"
        element={<LawWriting />}
      />
      <Route
        path="/industries/arts-and-humanities"
        element={<ArtsAndHumanities />}
      />
      <Route
        path="/industries/medicine-and-health"
        element={<MedicineHealth />}
      />
      <Route
        path="/industries/business-and-management"
        element={<BusinessAndManagement />}
      />
      <Route
        path="/industries/economics-and-finance"
        element={<Economics />}
      />
      <Route
        path="/industries/computer-science"
        element={<ComputerScience />}
      />
      <Route
        path="/industries/engineering-and-technology"
        element={<EngineeringAndTech />}
      />
      <Route
        path="/industries/biology-and-science"
        element={<Biology />}
      />
    </Routes>
  </BrowserRouter>
);
