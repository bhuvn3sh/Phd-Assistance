import { useState } from "react";
import React, { useEffect, useRef } from "react";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import "./engineering.css";
import MyModal from "./MyModal";

function Engineering() {
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
                <h2>Engineering </h2>
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
                  className="fa-solid fa-dna"
                  style={{ marginRight: "14px" }}
                ></div>
                {""}Biomedical Engineering
              </h3>
              <div
                class="text"
                style={{
                  color: "white",
                  textAlign: "center",
                }}
              >
                Biomedical engineering integrates principles of engineering with
                biological sciences to advance healthcare treatment and
                monitoring.{""}
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
                  className="fa-solid fa-leaf"
                  style={{ marginRight: "14px" }}
                ></div>
                Environmental Engineering{" "}
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Environmental engineering focuses on designing and implementing
                solutions to protect and improve the natural environment. It
                involves managing resources.{" "}
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
                  className="fa-solid fa-trowel-bricks"
                  style={{ marginRight: "14px" }}
                ></div>
                Civil and Structural Engineering
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Civil and Structural Engineering involves the design,
                construction, and maintenance of infrastructure such as
                buildings, bridges, roads, and dams.
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
                  className="fa-solid fa-flask"
                  style={{ marginRight: "14px" }}
                ></div>
                Chemical Engineering
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Chemical Engineering applies principles of chemistry, physics,
                and mathematics to design and operate processes that convert raw
                materials into valuable products.{" "}
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
                  className="fa-solid fa-industry"
                  style={{ marginRight: "14px" }}
                ></div>
                Manufacturing & Materials Science
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Manufacturing and Materials Science involves the development,
                production, and optimization of materials and manufacturing
                processes.{" "}
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
                  className="fa-solid fa-microscope"
                  style={{ marginRight: "14px" }}
                ></div>
                Nanotechnology
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Nanotechnology involves manipulating matter at the atomic and
                molecular scale to create materials and devices with novel
                properties and functions.{" "}
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
                  className="fa-solid fa-hammer"
                  style={{ marginRight: "14px" }}
                ></div>
                Mechanical Engineering
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Mechanical Engineering is the design and manufacturing of
                mechanical systems and devices. It combines principles of
                physics to create solutions for mechanical problems.{" "}
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
                  className="fa-solid fa-computer"
                  style={{ marginRight: "14px" }}
                ></div>
                Software Engineering
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Software Engineering focuses on the systematic design,
                development, testing, and maintenance of software applications
                and systems.{" "}
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
                  className="fa-solid fa-tty"
                  style={{ marginRight: "14px" }}
                ></div>
                Telecommunications
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Telecommunications involves the transmission and reception of
                information over various forms of communication networks,
                including wired, wireless, and satellite systems.{" "}
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
                  className="fa-solid fa-network-wired"
                  style={{ marginRight: "14px" }}
                ></div>
                Electrical and Electronic{" "}
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Electrical and Electronic Engineering involves the study and
                application of electrical systems, circuits, and electronic
                devices.{" "}
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
                  className="fa-solid fa-cloud"
                  style={{ marginRight: "14px" }}
                ></div>
                Data Mining / Image Mining / Cloud Computing
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Data Mining involves extracting valuable patterns and insights
                from large datasets using techniques like statistical analysis,
                machine learning, and data visualization.{" "}
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
                  className="fa-solid fa-computer"
                  style={{ marginRight: "14px" }}
                ></div>
                Computer Science Engineering{" "}
              </h3>
              <div class="text" style={{ color: "white", textAlign: "center" }}>
                Computer Science Engineering focuses on the theory, design,
                development, and application of computer systems. It covers
                areas such as algorithms and innovate in areas like artificial
                intelligence.{" "}
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
export default Engineering;
