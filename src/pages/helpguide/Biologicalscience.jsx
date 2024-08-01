import { useState } from "react";
import React, { useEffect, useRef } from "react";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import "./bilogicalscience.css";
import MyModal from "./MyModal";
function Biologicalscience() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                <h2>Biological & Science </h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="{Home}">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Help-Guide</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        class="auto-container"
        style={{ marginLeft: "250px", marginRight: "80px" }}
      >
        <div class="row clearfix">
          <div
            class="default-service-block item-margin-bot-10 col-md-6 col-sm-6 col-xs-12"
            style={{
              paddingTop: "50px",
              paddingRight: "50px",
              paddingLeft: "40px",
            }}
          >
            <div
              class="inner-box fadeInLeft"
              style={{ background: "#a87c7c none repeat scroll 0 0" }}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <h3 style={{ color: "#000", textAlign: "center" }}>
                <div
                  className="fa-solid fa-seedling"
                  style={{ marginRight: "14px" }}
                ></div>
                {""}Agricultural Sciences
              </h3>
              <div
                class="text"
                style={{
                  color: "white",
                  textAlign: "center",
                }}
              >
                Agricultural science focuses on optimizing crop production, soil
                health, and sustainable farming practices. It integrates
                biology, chemistry, and technology to enhance food security and
                environmental stewardship.{""}
              </div>
              <div>
                <button className="read-more-btn" onClick={handleShow} style={{ border: 'none'}}>
                  Get Inquiry
                </button>
                <MyModal show={show} handleClose={handleClose} />
              </div>
            </div>
          </div>

          <div
            class="default-service-block item-margin-bot-10 col-md-6 col-sm-6 col-xs-12"
            style={{
              paddingTop: "50px",
              paddingRight: "50px",
              paddingLeft: "10px",
            }}
          >
            <div
              class="inner-box fadeInLeft"
              style={{ background: "#a87c7c none repeat scroll 0 0" }}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <h3 style={{ color: "#000000", textAlign: "center" }}>
                {" "}
                <div
                  className="fa-solid fa-flask-vial"
                  style={{ marginRight: "14px" }}
                ></div>
                Biochemistry & Bioinformatics{" "}
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Biochemistry explores the chemical processes within living
                organisms, shedding light on cellular functions and molecular
                interactions.{" "}
              </div>
              <div>
                <button className="read-more-btn" onClick={handleShow} style={{ border: 'none'}}>
                  Get Inquiry
                </button>
                <MyModal show={show} handleClose={handleClose} />
              </div>
            </div>
          </div>

          <div
            class="default-service-block item-margin-bot-10 col-md-6 col-sm-6 col-xs-12"
            style={{
              paddingTop: "20px",
              paddingRight: "50px",
              paddingLeft: "40px",
            }}
          >
            <div
              class="inner-box fadeInLeft"
              style={{ background: "#a87c7c none repeat scroll 0 0" }}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <h3 style={{ color: "#000000", textAlign: "center" }}>
                {" "}
                <div
                  className="fa-solid fa-smoking"
                  style={{ marginRight: "14px" }}
                ></div>
                Cancer / Oncology
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Cancer research and oncology involve studying the mechanisms of
                cancer development and progression, and devising treatments to
                combat various types of cancer.
              </div>
              <div>
                <button className="read-more-btn" onClick={handleShow} style={{ border: 'none'}}>
                  Get Inquiry
                </button>
                <MyModal show={show} handleClose={handleClose} />
              </div>
            </div>
          </div>
          <div
            class="default-service-block item-margin-bot-10 col-md-6 col-sm-6 col-xs-12"
            style={{
              paddingTop: "20px",
              paddingRight: "50px",
              paddingLeft: "10px",
            }}
          >
            <div
              class="inner-box fadeInLeft"
              style={{ background: "#a87c7c none repeat scroll 0 0" }}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <h3 style={{ color: "#000000", textAlign: "center" }}>
                <div
                  className="fa-solid fa-dna"
                  style={{ marginRight: "14px" }}
                ></div>
                Genetics
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Genetics examines the inheritance and variation of traits in
                living organisms, focusing on DNA, genes, and chromosomes. This
                field advances our understanding of hereditary conditions and
                the genetic basis of diseases.{" "}
              </div>
              <div>
                <button className="read-more-btn" onClick={handleShow} style={{ border: 'none'}}>
                  Get Inquiry
                </button>
                <MyModal show={show} handleClose={handleClose} />
              </div>
            </div>
          </div>

          <div
            class="default-service-block item-margin-bot-10 col-md-6 col-sm-6 col-xs-12"
            style={{
              paddingTop: "20px",
              paddingRight: "50px",
              paddingLeft: "40px",
            }}
          >
            <div
              class="inner-box fadeInLeft"
              style={{ background: "#a87c7c none repeat scroll 0 0" }}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <h3 style={{ color: "#000000", textAlign: "center" }}>
                <div
                  className="fa-solid fa-notes-medical"
                  style={{ marginRight: "14px" }}
                ></div>
                Medical / Clinical Science
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Medical and clinical science focuses on diagnosing, treating,
                and preventing diseases through rigorous scientific research and
                clinical trials. It bridges the gap between laboratory research
                and patient care.{" "}
              </div>
              <div>
                <button className="read-more-btn" onClick={handleShow} style={{ border: 'none'}}>
                  Get Inquiry
                </button>
                <MyModal show={show} handleClose={handleClose} />
              </div>
            </div>
          </div>

          <div
            class="default-service-block item-margin-bot-10 col-md-6 col-sm-6 col-xs-12"
            style={{
              paddingTop: "20px",
              paddingRight: "50px",
              paddingLeft: "10px",
            }}
          >
            <div
              class="inner-box fadeInLeft"
              style={{ background: "#a87c7c none repeat scroll 0 0" }}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <h3 style={{ color: "#000", textAlign: "center" }}>
                <div
                  className="fa-solid fa-atom"
                  style={{ marginRight: "14px" }}
                ></div>
                Obstretrics, Gynecology & Reproduction
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Obstetrics, gynecology, and reproduction focus on women's
                health, particularly during pregnancy, childbirth, and the
                postpartum period.{" "}
              </div>
              <div>
                <button className="read-more-btn" onClick={handleShow} style={{ border: 'none'}}>
                  Get Inquiry
                </button>
                <MyModal show={show} handleClose={handleClose} />
              </div>
            </div>
          </div>

          <div
            class="default-service-block item-margin-bot-10 col-md-6 col-sm-6 col-xs-12"
            style={{
              paddingTop: "20px",
              paddingRight: "50px",
              paddingLeft: "40px",
            }}
          >
            <div
              class="inner-box fadeInLeft"
              style={{ background: "#a87c7c none repeat scroll 0 0" }}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <h3 style={{ color: "#000", textAlign: "center" }}>
                <div
                  className="fa-solid fa-microscope"
                  style={{ marginRight: "14px" }}
                ></div>
                Molecular Biology
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Molecular biology investigates the molecular mechanisms within
                cells, including DNA replication, translation, and cell
                signaling. This field provides insights into how genetic
                information is regulated and expressed.{" "}
              </div>
              <div>
                <button className="read-more-btn" onClick={handleShow} style={{ border: 'none'}}>
                  Get Inquiry
                </button>
                <MyModal show={show} handleClose={handleClose} />
              </div>
            </div>
          </div>

          <div
            class="default-service-block item-margin-bot-10 col-md-6 col-sm-6 col-xs-12"
            style={{
              paddingTop: "20px",
              paddingRight: "50px",
              paddingLeft: "10px",
            }}
          >
            <div
              class="inner-box fadeInLeft"
              style={{ background: "#a87c7c none repeat scroll 0 0" }}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <h3 style={{ color: "#000", textAlign: "center" }}>
                <div
                  className="fa-solid fa-flask-vial"
                  style={{ marginRight: "14px" }}
                ></div>
                Neuroscience / Neurology
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Neuroscience and neurology study the nervous system, including
                the brain, spinal cord, and neural networks. These fields aim to
                understand the biological basis of behavior, cognition, and
                neurological disorders.{" "}
              </div>
              <div>
                <button className="read-more-btn" onClick={handleShow} style={{ border: 'none'}}>
                  Get Inquiry
                </button>
                <MyModal show={show} handleClose={handleClose} />
              </div>
            </div>
          </div>

          <div
            class="default-service-block item-margin-bot-10 col-md-6 col-sm-6 col-xs-12"
            style={{
              paddingTop: "20px",
              paddingRight: "50px",
              paddingLeft: "40px",
            }}
          >
            <div
              class="inner-box fadeInLeft"
              style={{ background: "#a87c7c none repeat scroll 0 0" }}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <h3 style={{ color: "#000", textAlign: "center" }}>
                <div
                  className="fa-solid fa-volleyball"
                  style={{ marginRight: "14px" }}
                ></div>
                Physiology & Sports science
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Physiology and sports science examine how the body functions and
                responds to physical activity, focusing on improving athletic
                performance and overall health.{" "}
              </div>
              <div>
                <button className="read-more-btn" onClick={handleShow} style={{ border: 'none'}}>
                  Get Inquiry
                </button>
                <MyModal show={show} handleClose={handleClose} />
              </div>
            </div>
          </div>

          <div
            class="default-service-block item-margin-bot-10 col-md-6 col-sm-6 col-xs-12"
            style={{
              paddingTop: "20px",
              paddingRight: "50px",
              paddingLeft: "10px",
            }}
          >
            <div
              class="inner-box fadeInLeft"
              style={{ background: "#a87c7c none repeat scroll 0 0" }}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <h3 style={{ color: "#000", textAlign: "center" }}>
                {" "}
                <div
                  className="fa-solid fa-user-doctor"
                  style={{ marginRight: "14px" }}
                ></div>
                Public Health & Epidemiology{" "}
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Public health and epidemiology focus on improving population
                health through disease prevention, health promotion, and the
                study of disease patterns.{" "}
              </div>
              <div>
                <button className="read-more-btn" onClick={handleShow} style={{ border: 'none'}}>
                  Get Inquiry
                </button>
                <MyModal show={show} handleClose={handleClose} />
              </div>
            </div>
          </div>

          <div
            class="default-service-block item-margin-bot-10 col-md-6 col-sm-6 col-xs-12"
            style={{
              paddingTop: "20px",
              paddingRight: "50px",
              paddingLeft: "40px",
            }}
          >
            <div
              class="inner-box fadeInLeft"
              style={{ background: "#a87c7c none repeat scroll 0 0" }}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <h3 style={{ color: "#000", textAlign: "center" }}>
                <div
                  className="fa-solid fa-syringe"
                  style={{ marginRight: "14px" }}
                ></div>
                Immunology
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Immunology studies the immune system's structure, function, and
                responses to pathogens and diseases. This field seeks to
                understand immune mechanisms.{" "}
              </div>
              <div>
                <button className="read-more-btn" onClick={handleShow} style={{ border: 'none'}}>
                  Get Inquiry
                </button>
                <MyModal show={show} handleClose={handleClose} />
              </div>
            </div>
          </div>

          <div
            class="default-service-block item-margin-bot-10 col-md-6 col-sm-6 col-xs-12"
            style={{
              paddingTop: "20px",
              paddingRight: "50px",
              paddingLeft: "10px",
            }}
          >
            <div
              class="inner-box fadeInLeft"
              style={{ background: "#a87c7c none repeat scroll 0 0" }}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <h3 style={{ color: "#000", textAlign: "center" }}>
                {" "}
                <div
                  className="fa-solid fa-dna"
                  style={{ marginRight: "14px" }}
                ></div>
                Biotechnology{" "}
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Biotechnology leverages biological systems and organisms to
                develop innovative products and technologies, impacting fields
                like medicine, agriculture, and industry.{" "}
              </div>
              <div>
                <button className="read-more-btn" onClick={handleShow} style={{ border: 'none'}}>
                  Get Inquiry
                </button>
                <MyModal show={show} handleClose={handleClose} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingBottom: "40px" }}></div>
      <Footer />
    </>
  );
}
export default Biologicalscience;
