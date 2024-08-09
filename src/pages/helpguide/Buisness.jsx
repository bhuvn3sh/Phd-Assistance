import { useState } from "react";
import React, { useEffect, useRef } from "react";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import "./buisness.css";
import MyModal from "./MyModal";

function Buisness() {
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
                <h2>BUSINESS & MANAGEMENT & HUMANITIES </h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
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
                  className="fa-solid fa-building-columns"
                  style={{ marginRight: "14px" }}
                ></div>
                {""}Development Studies
              </h3>
              <div
                class="text"
                style={{
                  color: "white",
                  textAlign: "center",
                }}
              >
                Development Studies explores the processes and challenges of
                socio-economic development in various regions. It examines
                policies .{""}
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
                  className="fa-solid fa-school"
                  style={{ marginRight: "14px" }}
                ></div>
                Education{" "}
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                ChatGPT Education involves the processes of teaching, learning,
                and developing knowledge, skills, and values in individuals. It
                encompasses formal schooling.{" "}
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
                  className="fa-solid fa-person"
                  style={{ marginRight: "14px" }}
                ></div>
                Human Resource Management
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Human Resource Management (HRM) involves the strategic approach
                to managing an organization’s workforce. It includes recruiting,
                training.
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
                  className="fa-solid fa-circle-info"
                  style={{ marginRight: "14px" }}
                ></div>
                IT / Strategic Marketing
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                IT (Information Technology) focuses on the use of computers,
                networks, and software to manage and process information. It
                involves the development.{" "}
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
                  className="fa-solid fa-thumbs-up"
                  style={{ marginRight: "14px" }}
                ></div>
                Social Work, Social Policy & Administration
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Social Work focuses on helping individuals, families, and
                communities improve their well-being and address social issues
                through direct support.{" "}
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
                  className="fa-solid fa-language"
                  style={{ marginRight: "14px" }}
                ></div>
                Modern Languages & Linguistics
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Modern Languages involves the study and use of contemporary
                languages, focusing on proficiency in speaking, writing, and
                understanding various languages.{" "}
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
                  className="fa-solid fa-chart-simple"
                  style={{ marginRight: "14px" }}
                ></div>
                Philosophy
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                {" "}
              </div>
              <div>
                Philosophy is the systematic study of fundamental questions
                about existence, knowledge, values, reason, and ethics. It
                explores concepts and theories through critical thinking.
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
                  className="fa-solid fa-notes-medical"
                  style={{ marginRight: "14px" }}
                ></div>
                Health Sciences
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Health Sciences encompasses the study and application of various
                disciplines related to human health and well-being. It includes
                fields such as medicine, nursing, public health.{" "}
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
                  className="fa-solid fa-earth-africa"
                  style={{ marginRight: "14px" }}
                ></div>
                The Middle East & African Studies (MENA)
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Middle East and African Studies (MENA) focuses on the
                historical, cultural, political, and social dynamics of the
                Middle East and North Africa region. It involves analyzing
                regional issues, including geopolitics.{" "}
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
                  className="fa-solid fa-sitemap"
                  style={{ marginRight: "14px" }}
                ></div>
                Architecture & The Built Environment{" "}
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Architecture & The Built Environment involves the design,
                planning, and construction of buildings and structures. It
                focuses on creating functional and human needs.{" "}
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
export default Buisness;
