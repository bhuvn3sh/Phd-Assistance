import { useState } from "react";
import React, { useEffect, useRef } from "react";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import "./finance.css";
import MyModal from "./MyModal";

function Finance() {
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
                <h2>Finance & Others </h2>
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
        style={{ marginLeft: "140px", marginRight: "80px" }}
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
                  className="fa-solid fa-coins"
                  style={{ marginRight: "14px" }}
                ></div>
                {""}Accounting & Finance
              </h3>
              <div
                class="text"
                style={{
                  color: "white",
                  textAlign: "center",
                }}
              >
                Accounting involves the systematic recording, reporting, and
                analysis of financial transactions to provide accurate financial
                information for decision-making. {""}
              </div>
              <div>
                <button className="read-more-btn" onClick={handleShow}>
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
                  className="fa-solid fa-people-group"
                  style={{ marginRight: "14px" }}
                ></div>
                Marketing{" "}
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Marketing involves the strategies and tactics used to identify,
                create, and satisfy customer needs and desires. It encompasses
                market research, branding, advertising.{" "}
              </div>
              <div>
                <button className="read-more-btn" onClick={handleShow}>
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
                  className="fa-solid fa-location-dot"
                  style={{ marginRight: "14px" }}
                ></div>
                Tourism & Hospitality
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Tourism involves the travel and activities of people visiting
                places for leisure, business, or other purposes. It focuses on
                providing enjoyable and memorable experiences,.
              </div>
              <div>
                <button className="read-more-btn" onClick={handleShow}>
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
                  className="fa-solid fa-language"
                  style={{ marginRight: "14px" }}
                ></div>
                English
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                English involves the study and use of the English language,
                including its literature, linguistics, and composition. It
                encompasses analyzing literary works.{" "}
              </div>
              <div>
                <button className="read-more-btn" onClick={handleShow}>
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
                  className="fa-solid fa-monument"
                  style={{ marginRight: "14px" }}
                >
                  History{" "}
                </div>
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                History is the study of past events, societies, and cultures. It
                involves researching and interpreting historical evidence to
                understand how previous occurrences have shaped the present.{" "}
              </div>
              <div>
                <button className="read-more-btn" onClick={handleShow}>
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
                  className="fa-solid fa-monument"
                  style={{ marginRight: "14px" }}
                ></div>
                Classics & Ancient History
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Classics & Ancient History focuses on the study of ancient
                civilizations, particularly those of Greece and Rome. It
                involves analyzing historical texts.{" "}
              </div>
              <div>
                <button className="read-more-btn" onClick={handleShow}>
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
                  className="fa-solid fa-gavel"
                  style={{ marginRight: "14px" }}
                ></div>
                Law
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                {" "}
              </div>
              <div>
                Law involves the study and practice of the legal system,
                encompassing the rules and principles that govern society. It
                includes areas such as criminal law, civil law.
                <button className="read-more-btn" onClick={handleShow}>
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
                  className="fa-solid fa-book"
                  style={{ marginRight: "14px" }}
                ></div>
                Operational Research
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Operational Research (OR) applies advanced analytical methods to
                help make better decisions. It involves using techniques such as
                mathematical modeling, statistics.{" "}
              </div>
              <div>
                <button className="read-more-btn" onClick={handleShow}>
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
export default Finance;
