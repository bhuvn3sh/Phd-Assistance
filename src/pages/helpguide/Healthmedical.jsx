import { useState } from "react";
import React, { useEffect, useRef } from "react";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import "./healthmedical.css";
import MyModal from "./MyModal";

function Healthmedical() {
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
                <h2>Health & Medical </h2>
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
                  className="fa-solid fa-user-doctor"
                  style={{ marginRight: "14px" }}
                ></div>
                {""}Nursing
              </h3>
              <div
                class="text"
                style={{
                  color: "white",
                  textAlign: "center",
                }}
              >
                Nursing program prepares you to achieve the career goal as an
                independent researcher on the nursing care to protect vulnerable
                communities and nursing Knowledge development. {""}
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
                  className="fa-solid fa-stethoscope"
                  style={{ marginRight: "14px" }}
                ></div>
                Clinical Pharmocology{" "}
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Clinical pharmacology program is an integrated science both
                basic and clinical, will enable to gain the skills and knowledge
                to examine the safety of new medical products for human studies.{" "}
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
                  className="fa-solid fa-suitcase-medical"
                  style={{ marginRight: "14px" }}
                ></div>
                Public Health
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                {" "}
                Students are pursuing public health gain skills and knowledge in
                the public health discipline such as epidemiology, health policy
                & management, environment health.
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
                  className="fa-solid fa-virus"
                  style={{ marginRight: "14px" }}
                ></div>
                Food Science & Nutrition
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                The food science and nutrition program is designed for
                individuals who are a desire to pursue a graduate degree in
                related science.{" "}
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
                  className="fa-solid fa-tablets"
                  style={{ marginRight: "14px" }}
                ></div>
                Complimentary & Alternative Medicine{" "}
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Complementary and alternative (CAM) medicine course aims to deal
                with various medical practices and products that implied to be
                extreme conventional clinical care.{" "}
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
                  className="fa-solid fa-brain"
                  style={{ marginRight: "14px" }}
                ></div>
                Psychology & Psychiatry
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Psychology & Psychiatry program explore studies between the mind
                and its relationship to the human behavior and emotions. The
                program mainly aims at the understanding science of several
                mental states.{" "}
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
                  className="fa-solid fa-democrat"
                  style={{ marginRight: "14px" }}
                ></div>
                Politics & Sociology
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                {" "}
              </div>
              <div>
                Politics & Sociology programs incorporate the perspective of
                political science and sociology to address critical attributes
                and fundamental issues of political and social change in this
                21st-century society.
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
export default Healthmedical;
