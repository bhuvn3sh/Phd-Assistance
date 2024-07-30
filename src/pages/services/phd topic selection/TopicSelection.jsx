import React, { useEffect, useRef } from "react";
import Topbar from "../../../components/topbar/Topbar";
import Footer from "../../../components/footer/Footer";
import "./topicselection.css";

function TopicSelection() {
  return (
    <>
      <Topbar />

      <section
        className="hero-wrap hero-wrap-2 d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url(./assets/bg-8.jpg)",
          backgroundPosition: "50% 0%",
        }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="about-cap ftco-animate pt-100 fadeInUp ftco-animated">
                <h2>Topic Selection Mentoring Service </h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/">Phd Dissertation</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="description">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="">
                <h2 className="text-center">
                  Specialized PhD Topic Selection Service
                </h2>
                <p>
                  Are you in search of a well-researched and original PhD
                  research topic? Do you want to engage in brainstorming
                  sessions with experts to select a topic that perfectly
                  encapsulates your entire research study? Are you aiming to
                  choose a research topic that justifies your complete PhD
                  dissertation? You've come to the right place.
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="">
                <p>
                  Selecting a PhD research topic is a challenging and crucial
                  decision that significantly impacts an academic career,
                  requiring years of investment. Many students, especially from
                  non-English speaking countries like China, Brazil, Singapore,
                  Malaysia, Indonesia, and other Asian nations, find the process
                  hectic and frustrating. A well-researched, unique dissertation
                  topic with a clear research goal necessitates extensive
                  literature review of peer-reviewed and online sources. The
                  chosen topic should align with the candidate's passion,
                  interest, and knowledge, avoiding overly general or overly
                  specific subjects to ensure originality and sufficient
                  available information. PhD Assistance recommends selecting
                  topics of personal interest previously encountered in seminar
                  papers, journal articles, or coursework.
                </p>
                <p>
                  Engaging with experts who have studied the topic can
                  significantly enhance your PhD research. At PhD Assistance,
                  our team of qualified research professionals offers trusted
                  PhD mentoring support, helping you choose the right topic from
                  a list provided by an advisor or through personalized
                  consultation. Our experienced advisors guide you in
                  identifying issues that generate curiosity and converting them
                  into research questions. With skills to select topics based on
                  current gaps and needs, our international team of writers and
                  researchers, hailing from top-ranked universities in the US,
                  UK, and India, ensures the selection of a PhD research topic
                  and title that align with your specialized discipline and
                  research goals.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src="./assets/person_1.jpg" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="service-types">
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-7 heading-section text-center">
              <span className="subheading">Service Description</span>
              <h2>We Offer Three Level of Services</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4" style={{ height: '300px'}}>
              <div className="pricing-1 pricing-animate pricing-fadeUp pricing-animated services-description" style={{ minHeight: '255px'}}>
                <div className="block-7 w-100">
                  <div className="text-center">
                    <span className="price">
                      <span className="number" style={{ fontSize:'35px'}}>Basic</span>
                    </span>
                    <span className="topic-selection d-block"></span>
                    <p>3-4 topics along with the research aim</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-1 pricing-animate pricing-fadeUp pricing-animated services-description">
                <div className="block-7 w-100">
                  <div className="text-center">
                    <span className="price">
                      <span className="number" style={{ fontSize:'35px'}}>Advanced</span>
                    </span>
                    <span className="topic-selection d-block"></span>
                    <p>One standard topic selection and 500 words outline with research aim, objectives, literature review, research methodology, data analysis guidelines and references lists (upgradable)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-1 pricing-animate pricing-fadeUp pricing-animated services-description">
                <div className="block-7 w-100">
                  <div className="text-center">
                    <span className="price">
                      <span className="number" style={{ fontSize:'35px'}}>Extended</span>
                    </span>
                    <span className="topic-selection d-block"></span>
                    <p>One standard topic with 1000 words along with advanced features and expected contribution, research gap, and bibliography for additional reading (upgradable)</p>
                    {/* <a
                      href="/order-now"
                      className="btn btn-primary d-block px-2 py-3"
                    >
                      Order Now
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default TopicSelection;
