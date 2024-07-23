import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import "./home.css";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";

function Home() {
  return (
    <>
      <Topbar />

      <div className="header">
        <div
          className="hero-wrap"
          style={{
            backgroundImage: "url(./assets/imageedit_1_6807744610.jpg)",
            backgroundPosition: "50% 0%",
          }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay"></div>
          <div className="container">
            <div classNameName="row no-gutters slider-text align-items-center">
              <div className="col-md-6 ftco-animate d-flex align-items-end fadeInUp ftco-animated">
                <div
                  className="text w-100"
                  style={{ marginTop: "200px", marginLeft: "40px" }}
                >
                  <h1
                    className="mb-4"
                    style={{
                      fontSize: "50px",
                      fontWeight: 600,
                      color: "#ffffff",
                    }}
                  >
                    {" "}
                    Your PhD Research Journey Starts Here !{" "}
                  </h1>
                  <p
                    className="mb-4"
                    style={{ fontSize: "18px", color: "#ffffff" }}
                  >
                    The research journey is messy, full of difficulties and
                    surprises, hard work, beginnings and some form of closure.
                    ‘PhDAssistance Research Lab’ travels as part of this journey
                    by supervising and mentoring PhD researchers across the
                    globe.
                  </p>
                  <p>
                    <a
                      href="#"
                      className="btn py-2 px-4"
                      style={{
                        backgroundColor: "#7E6363",
                        color: "#ffffff",
                        borderRadius: "1",
                        textDecoration: "none",
                      }}
                    >
                      Request a Quote
                    </a>{" "}
                    <a
                      href="#"
                      className="btn btn-dark py-2 px-4"
                      style={{
                        color: "#fff",
                        borderRadius: "1",
                        textDecoration: "none",
                        marginLeft: "20px",
                        backgroundColor: "#A87C7C",
                      }}
                    >
                      Hire a Reasearcher
                    </a>
                  </p>
                </div>
              </div>
              <a
                href="https://vimeo.com/45830194"
                class="img-video popup-vimeo d-flex align-items-center justify-content-center"
                style={{
                  color: "#3E3232",
                  marginLeft: "950px",
                }}
              >
                <span className="fa fa-play"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section class="ftco-intro">
        <div
          class="container"
          style={{
            width: "100%",
            marginRight: "auto",
            marginLeft: "auto",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          <div class="row no-gutters ">
            <div class="col-md-3 d-flex">
              <div class="intro aside-stretch d-lg-flex w-60">
                <div class="icon">
                  <span class="fa-regular fa-bookmark"></span>
                </div>
                <div class="text">
                  <h2>Writing & Rewriting</h2>
                  <p style={{ color: "#ffffff" }}>
                    Talk to our experts to rewrite your thesis or manuscript at
                    any stage of your research or from scratch.
                  </p>
                  <a
                    href="https://www.phdassistance.com/services/phd-dissertation/"
                    className=" btn btn-dark py-2 px-4"
                    style={{ color: "white", backgroundColor: "#503C3C" }}
                  >
                    {" "}
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3 d-flex" style={{ marginLeft: "0px" }}>
              <div class="intro color-1 d-lg-flex w-60">
                <div class="icon">
                  <span class="fa-solid fa-magnifying-glass-chart"></span>
                </div>
                <div class="text">
                  <h2>Statistical Analysis </h2>
                  <p style={{ color: "#ffffff" }}>
                    Consult us for statistical analyses, biostatistics or coding
                    & algorithm development-related services.
                  </p>
                  <a
                    href="https://www.phdassistance.com/services/phd-dissertation/"
                    className=" btn btn-dark py-2 px-4"
                    style={{ color: "white", backgroundColor: "#503C3C" }}
                  >
                    {" "}
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3 d-flex">
              <div class="intro color-1 d-flex w-60">
                <div class="icon">
                  <span class="fa-regular fa-folder-open"></span>
                </div>
                <div class="text">
                  <h2>Peer Reviewing & Editing </h2>
                  <p style={{ color: "#ffffff" }}>
                    Our experts edit your thesis and manuscripts, ensuring that
                    they are easy to understand and acceptable for publication.
                  </p>
                  <a
                    href="https://www.phdassistance.com/services/phd-dissertation/"
                    className=" btn btn-dark py-2 px-4"
                    style={{ color: "white", backgroundColor: "#503C3C" }}
                  >
                    {" "}
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3 d-flex">
              <div class="intro color-1 d-lg-flex w-60">
                <div class="icon">
                  <span class="fa-regular fa-folder"></span>
                </div>
                <div class="text">
                  <h2>Consulting Services </h2>
                  <p style={{ color: "#ffffff" }}>
                    Need consultation services on an hourly basis, use our hire
                    a research assistant service. Easy and flexible.
                  </p>
                  <a
                    href="https://www.phdassistance.com/services/phd-dissertation/"
                    className=" btn btn-dark py-2 px-4"
                    style={{ color: "white", backgroundColor: "#503C3C" }}
                  >
                    {" "}
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-7 heading-section text-center">
              <span className="subheading">Services</span>
              <h2>How It Works</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="services-2 text-center">
                <div className="icon-wrap">
                  <div className="number d-flex align-items-center justify-content-center">
                    <span>01</span>
                  </div>
                  <div className="icon d-flex align-items-center justify-content-center">
                    <div className="calender">
                      <FactCheckOutlinedIcon
                        style={{
                          fontSize: 70,
                          color: "#141619",
                          fontWeight: "400",
                        }}
                      />
                    </div>
                  </div>
                  <h2>Requirements</h2>
                  <p>
                    {" "}
                    You raise your request via an email to your Single Point Of
                    Contact (SPOC) from Amura{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="services-2 text-center">
                <div className="icon-wrap">
                  <div className="number d-flex align-items-center justify-content-center">
                    <span>02</span>
                  </div>
                  <div className="icon d-flex align-items-center justify-content-center">
                    <div className="calender">
                      <EngineeringOutlinedIcon
                        style={{ fontSize: 70, color: "#141619" }}
                      />
                    </div>
                  </div>
                  <h2>Execution</h2>
                  <p>
                    {" "}
                    That SPOC then gets the work done from the internal teams{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="services-2 text-center">
                <div className="icon-wrap">
                  <div className="number d-flex align-items-center justify-content-center">
                    <span>03</span>
                  </div>
                  <div className="icon d-flex align-items-center justify-content-center">
                    <div className="calender">
                      <VerifiedOutlinedIcon
                        style={{ fontSize: 70, color: "#141619" }}
                      />
                    </div>
                  </div>
                  <h2>Quality Checks</h2>
                  <p>
                    {" "}
                    The work goes through rigorous quality checks by every
                    team's manager and finally the SPOC{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="services-2 text-center">
                <div className="icon-wrap">
                  <div className="number d-flex align-items-center justify-content-center">
                    <span>04</span>
                  </div>
                  <div className="icon d-flex align-items-center justify-content-center">
                    <div className="calender">
                      <LocalShippingOutlinedIcon
                        style={{ fontSize: 70, color: "#141619" }}
                      />
                    </div>
                  </div>
                  <h2>Delivery</h2>
                  <p>
                    {" "}
                    It is emailed back/a download link is sent to you, meeting
                    previous agreed-upon deadlines{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="analysis">
        <div className="container">
          <div className=" row justify-content-center pb-5">
            <div className="heading-section text-center ftco-animate fadeInUp ftco-animated">
              <h1 style={{ fontWeight: 600, color: "#503c3c" }}>
                Check at what stage you’re into & Analyse how you can fit into
                our engagement model
              </h1>
              <p style={{ fontWeight: 400, color: "#A87C7C" }}>
                The research journey is messy, full of difficulties and
                surprises, hard work, beginnings and some form of closure.
                ‘PhDAssistance’ travels as part of this journey by supervising
                and mentoring researchers across the globe.{" "}
              </p>
            </div>
            <div style={{ marginLeft: "180px", marginTop: "30px" }}>
              <div className="row">
                <div
                  className="person col-md-4 d-flex align-items-stretch"
                  style={{
                    maxWidth: "20%",
                    margin: "0 10px 0 10px",
                  }}
                >
                  <div className="analysis1 text-center">
                    <h2
                      className="my-3"
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        backgroundColor: "#e5d8d8",
                        padding: "5px",
                      }}
                    >
                      JERRY
                    </h2>
                    <img
                      src="./assets/Jerry.png"
                      height="80"
                      style={{ marginBottom: "20px" }}
                    />
                    <p style={{ marginBottom: "20px", color: "grey" }}>
                      ” I am done with my thesis; I need an expert to review &
                      provide external comments & addressing those after a
                      mutual agreement “{" "}
                    </p>
                    <h2
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "20px",
                        margin: "30px 0 20px 0",
                        padding: "10px 0 10px 0",
                        backgroundColor: "#e5d8d8",
                      }}
                    >
                      External Peer Review & Addressing Comments Support
                    </h2>
                  </div>
                </div>
                <div
                  className="person col-md-4 d-flex align-items-stretch"
                  style={{
                    maxWidth: "20%",
                    margin: "0 10px 0 10px",
                  }}
                >
                  <div className="analysis1 text-center">
                    <h2
                      className="my-3"
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        backgroundColor: "#e5d8d8",
                        padding: "5px",
                      }}
                    >
                      LISSA
                    </h2>
                    <img
                      src="./assets/Lissa.png"
                      height="80"
                      style={{ marginBottom: "20px" }}
                    />
                    <p style={{ marginBottom: "20px", color: "grey" }}>
                      “I find it difficult to identify the latest articles for
                      my research study. I am not aware of how to extract
                      articles and synthesize them. “{" "}
                    </p>
                    <h2
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "20px",
                        margin: "30px 0 20px 0",
                        padding: "10px 0 10px 0",
                        backgroundColor: "#e5d8d8",
                      }}
                    >
                      Article Extraction & Annotated Bibliography Services
                    </h2>
                  </div>
                </div>
                <div
                  className="person col-md-4 d-flex align-items-stretch"
                  style={{
                    maxWidth: "20%",
                    margin: "0 10px 0 10px",
                  }}
                >
                  <div className="analysis1 text-center">
                    <h2
                      className="my-3"
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        backgroundColor: "#e5d8d8",
                        padding: "5px",
                      }}
                    >
                      SAM
                    </h2>
                    <img
                      src="./assets/Sam.png"
                      height="80"
                      style={{ marginBottom: "20px" }}
                    />
                    <p style={{ marginBottom: "20px", color: "grey" }}>
                      ” I have written more than 300 pages, and I need someone
                      who can sit with me and work along with it to edit my
                      thesis. “{" "}
                    </p>
                    <h2
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "20px",
                        margin: "30px 0 20px 0",
                        padding: "10px 0 10px 0",
                        backgroundColor: "#e5d8d8",
                      }}
                    >
                      Hire a Researcher
                    </h2>
                  </div>
                </div>
                <div
                  className="person col-md-4 d-flex align-items-stretch"
                  style={{
                    maxWidth: "20%",
                    margin: "0 10px 0 10px",
                  }}
                >
                  <div className="analysis1 text-center">
                    <h2
                      className="my-3"
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        backgroundColor: "#e5d8d8",
                        padding: "5px",
                      }}
                    >
                      ROBERT
                    </h2>
                    <img
                      src="./assets/Robert.png"
                      height="80"
                      style={{ marginBottom: "20px" }}
                    />
                    <p style={{ marginBottom: "20px", color: "grey" }}>
                      ” I have developed a questionnaire and got data; it seems
                      when I run the analyses, I could not able to get the
                      results that I am looking for. “{" "}
                    </p>
                    <h2
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "20px",
                        margin: "30px 0 20px 0",
                        padding: "10px 0 10px 0",
                        backgroundColor: "#e5d8d8",
                      }}
                    >
                      Statistical Analysis services.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="services-area"
        style={{ margin: "0px 200px 100px 200px" }}
      >
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-8 text-center heading-section ">
              <span className="subheading">Our Services</span>
              <h2 className="mb-3" style={{ color: "#7e6363" }}>
                We Can Help You With These Situations
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3 mb-4">
              <div className="single-service-cap">
                <div className="service-img">
                  <img src="./assets/service1.jpg" />
                </div>
                <div className="service-cap">
                  <h4>
                    <a href="">Dissertation Services</a>
                  </h4>
                  <a className="more-btn" href="">
                    Read More
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 mb-4">
              <div className="single-service-cap">
                <div className="service-img">
                  <img src="./assets/service2.jpg" />
                </div>
                <div className="service-cap">
                  <h4>
                    <a href="">Public Support</a>
                  </h4>
                  <a className="more-btn" href="">
                    Read More
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 mb-4">
              <div className="single-service-cap">
                <div className="service-img">
                  <img src="./assets/services1.jpg" />
                </div>
                <div className="service-cap">
                  <h4>
                    <a href="">Statistical Analysis</a>
                  </h4>
                  <a className="more-btn" href="">
                    Read More
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 mb-4">
              <div className="single-service-cap">
                <div className="service-img">
                  <img src="./assets/service4.jpg" />
                </div>
                <div className="service-cap">
                  <h4>
                    <a href="">Coding & AlgorithmServices</a>
                  </h4>
                  <a className="more-btn" href="">
                    Read More
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3">
              <div className="single-service-cap">
                <div className="service-img">
                  <img src="./assets/service8.jpg" />
                </div>
                <div className="service-cap">
                  <h4>
                    <a href="">Data Collection</a>
                  </h4>
                  <a className="more-btn" href="">
                    Read More
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3">
              <div className="single-service-cap">
                <div className="service-img">
                  <img src="./assets/service6.jpg" />
                </div>
                <div className="service-cap">
                  <h4>
                    <a href="">Editing & Peering Reviewing</a>
                  </h4>
                  <a className="more-btn" href="">
                    Read More
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3">
              <div className="single-service-cap">
                <div className="service-img">
                  <img src="./assets/service7.jpg" />
                </div>
                <div className="service-cap">
                  <h4>
                    <a href="">Research Support Service</a>
                  </h4>
                  <a className="more-btn" href="">
                    Read More
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3">
              <div className="single-service-cap">
                <div className="service-img">
                  <img src="./assets/service8.jpg" />
                </div>
                <div className="service-cap">
                  <h4>
                    <a href="">Course Work</a>
                  </h4>
                  <a className="more-btn" href="">
                    Read More
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ margin: "0px 200px" }}>
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 img img-3 d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url( ./assets/blog.jpg )" }}
            ></div>
            <div className="col-md-6 wrap-about px-md-5 py-5 bg-light">
              <div className="heading-section">
                <span className="subheading"> Welcome to Phd Assistance </span>
                <h2 className="mb-4">Best Dissertation Writing Services.</h2>
                <p>
                  The research journey is messy, full of difficulties and
                  surprises, hard work, beginnings and some form of closure.
                  ‘PhDAssistance Research Lab’ travels as part of this journey
                  by supervising and mentoring PhD researchers across the globe.{" "}
                </p>
                <p>
                  With years of experience in the industry, we have framed our
                  work standards, including PhD service engagement models, to
                  ensure smooth collaboration between our experts and our
                  clients.{" "}
                </p>
                <a
                  className="play-video popup-vimeo d-flex align-items-center mt-4 "
                  href="https://youtu.be/0OOA1ShNJn8"
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className=" fa fa-play "></span>
                  </div>
                  <span className="watch">Take a look at our process flow</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div class="container">
        <div class="row mb-5">
          <div class="col-sm-12 col-md">
            <div class="ftco-footer-widget mb-4">
              <ul class="ftco-footer-social list-unstyled mt-2"></ul>
            </div>
          </div>

          <div class="col-sm-12 col-md">
            <div class="ftco-footer-widget mb-4 ml-md-4">
              <h4 class="ftco-heading-2">Whom We Work For</h4>
              <ul class="list-unstyled">
                <li>
                  <span class="fa fa-chevron-right mr-2"></span> Research
                  Scholors
                </li>
                <li>
                  <span class="fa fa-chevron-right mr-2"></span>Supervisors
                </li>
                <li>
                  <span class="fa fa-chevron-right mr-2"></span>Litreature
                  Publishers
                </li>
                <li>
                  <span class="fa fa-chevron-right mr-2"></span>PhD Research
                  Universities
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-12 col-md">
            <div class="ftco-footer-widget mb-4">
              <ul class="list-unstyled">
                <li>
                  <a href="https://www.phdassistance.com/blog/">
                    <span class="fa fa-chevron-right mr-2"></span>Supply Chain
                  </a>
                </li>
                <li>
                  <a href="https://www.phdassistance.com/industries/">
                    <span class="fa fa-chevron-right mr-2"></span>Computer
                    Science
                  </a>
                </li>
                <li>
                  <a href="https://www.phdassistance.com/pricing/">
                    <span class="fa fa-chevron-right mr-2"></span>Physics
                  </a>
                </li>
                <li>
                  <a href="https://www.phdassistance.com/insights/">
                    <span class="fa fa-chevron-right mr-2"></span>Chemistry
                  </a>
                </li>
                <li>
                  <a href="https://www.phdassistance.com/help-guide/">
                    <span class="fa fa-chevron-right mr-2"></span>Biology
                  </a>
                </li>
                <li>
                  <a href="https://www.phdassistance.com/sample-work/">
                    <span class="fa fa-chevron-right mr-2"></span>Information
                    Service
                  </a>
                </li>
                <li>
                  <a href="https://www.phdassistance.com/faq/">
                    <span class="fa fa-chevron-right mr-2"></span>Economics
                  </a>
                </li>
                <li>
                  <a href="https://www.phdassistance.com/career/">
                    <span class="fa fa-chevron-right mr-2"></span>Psycology
                  </a>
                </li>
                <li>
                  <a href="https://www.phdassistance.com/contact-us/">
                    <span class="fa fa-chevron-right mr-2"></span>More Subjects
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-12 col-md">
            <div class="ftco-footer-widget mb-4">
              <div class="block-23 mb-3">
                <ul class="list-unstyled">
                  <li>
                    <span class="#"></span>
                    <span class="fa fa-phone mr-1"></span>Medicine
                  </li>
                  <li>
                    <span class="#"></span>
                    <span class="fa fa-phone mr-1"></span>Biochemistry
                  </li>
                  <li>
                    <span class="#"></span>
                    <span class="fa fa-phone mr-1"></span>Human Resources
                  </li>
                  <li>
                    <span class="#"></span>
                    <span class="fa fa-phone mr-1"></span>Food Sciences
                  </li>
                  <li>
                    <span class="#"></span>
                    <span class="fa fa-phone mr-1"></span>Geology
                  </li>
                  <li>
                    <span class="#"></span>
                    <span class="fa fa-paper-plane mr-1 ml-4"></span>{" "}
                    Engineering
                  </li>
                  <li>
                    <span class="#"></span>
                    <span class="fa fa-paper-plane mr-1 ml-4"></span> Education
                  </li>
                  <li>
                    <span class="#"></span>
                    <span class="fa fa-paper-plane mr-1 ml-4"></span> Sociology
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 text-center">
            <div class="section-title">
              <h2
                style={{
                  color: "#503C3C",
                  fontWeight: "14px",
                  textAlign: "center",
                  paddingTop: "40px",
                }}
              >
                Our Sample & Example Works Speaks
              </h2>
              <h5
                style={{
                  textAlign: "center",
                  paddingTop: "11px",
                  color: "#A87C7C",
                }}
              >
                We've worked on so many great PhD projects for our clients
                across the globe, and we're proud of every single tast that we
                carry out
              </h5>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="single-latest-news">
              <div class="latest-news-bg news-bg-2"></div>
              <div class="news-text-box">
                <div className="boxdesign">
                  <img
                    src="https://www.phdassistance.com/wp-content/uploads/2024/06/Site20Images-01.png"
                    width="315px"
                    height="200px"
                  ></img>
                  <h4 style={{ textAlign: "center" }}>More Subjects</h4>
                  <p class="excerpt" style={{ textAlign: "center" }}>
                    Rebuttal letter that we drafted for the successful
                    submission and publication of the journal
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-latest-news">
              <div class="latest-news-bg news-bg-2"></div>
              <div class="news-text-box">
                <div className="boxdesign">
                  <img
                    src="https://svg.template.creately.com/jlm6ynsq1"
                    width="315px"
                    height="200px"
                  ></img>
                  <h4 style={{ textAlign: "center" }}>Theoretical Framework</h4>
                  <p class="excerpt" style={{ textAlign: "center" }}>
                    Clear and concise framework with dependent & independent
                    variables
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-latest-news">
              <div class="latest-news-bg news-bg-2"></div>
              <div class="news-text-box">
                <div className="boxdesign">
                  <img
                    src="https://www.slideteam.net/media/catalog/product/cache/1280x720/f/r/framework_of_exploratory_research_methodology_slide01.jpg"
                    width="315px"
                    height="200px"
                  ></img>
                  <h4 style={{ textAlign: "center" }}>
                    Research methodology framework
                  </h4>
                  <p class="excerpt" style={{ textAlign: "center" }}>
                    Possible steps to carry out the research methodology, but it
                    should ensure it meets your objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="PhD-assistance-by-country">
      //   <div class="container">
      //     <h3
      //       style={{ marginTop: "50px", textAlign: "left", color: "#3E3232" }}
      //     >
      //       Phdassistance by country
      //     </h3>
      //     <div class="row">
      //       <div class="col-md-3 offset-md-2"></div>
      //     </div>
      //     <div class="row">
      //       <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
      //         <div class="service-box">
      //           <i>
      //             <img
      //               src="https://imgs.search.brave.com/K1MF7Lovvswe-qk3Kf-MGdcoexPRuFA7sb1gwMYPMXQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzQ0LzMxLzMw/LzM2MF9GXzQ0MzEz/MDc3X3NHbXd5WElT/cEZWc0NtcEt2bndF/eFBxNkZGM3FzSGRh/LmpwZw"
      //               width="250px"
      //               height="150px"
      //               style={{
      //                 border: "2px  black",
      //                 boxShadow: "0 14px 18px rgba(62,50,50)",
      //               }}
      //             />
      //           </i>
      //           <h5 style={{ textAlign: "center", color: "#3E3232" }}>
      //             France
      //           </h5>
      //         </div>
      //       </div>
      //       <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
      //         <div class="service-box">
      //           <i>
      //             <img
      //               src="https://imgs.search.brave.com/dm9uzFmRldDOnjHdXUxozXQ9yZQQY0vpu8-lcSg6Xuo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzg0LzE1LzM4/LzM2MF9GXzg0MTUz/ODM1X2szdEZQNDVi/YjJUVkM5dDROODRm/cEFvNDFjYk5Lenl2/LmpwZw"
      //               width="250px"
      //               height="150px"
      //               style={{
      //                 border: "2px  black",
      //                 boxShadow: "0 14px 18px rgba(62,50,50)",
      //               }}
      //             />
      //           </i>
      //           <h5 style={{ textAlign: "center", color: "#3E3232" }}>
      //             Germany
      //           </h5>
      //         </div>
      //       </div>
      //       <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
      //         <div class="service-box">
      //           <i>
      //             <img
      //               src="https://imgs.search.brave.com/LfavTojkB-NhEPjLCMH4u1pK3LsmwlSCsVpENDEeBuc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDk1/MjA3NTc3L3Bob3Rv/L2R1Ymxpbi1jaXR5/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1GVUctMUktcWNy/NDJTeXF4Mng2M1RI/VUpJSmloUDBNRXN1/bU1FUTVncUFjPQ"
      //               width="250px"
      //               height="150px"
      //               style={{
      //                 border: "2px  black",
      //                 boxShadow: "0 14px 18px rgba(62,50,50)",
      //               }}
      //             />
      //           </i>
      //           <h5 style={{ textAlign: "center", color: "#3E3232" }}>
      //             Ireland
      //           </h5>
      //         </div>
      //       </div>
      //       <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
      //         <div class="service-box">
      //           <i>
      //             <img
      //               src="https://imgs.search.brave.com/39UbrIh7chIsChRHOXKPkfvmbMdyF3fXfXsx-5_jH64/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzFlL0F1Y2tsYW5k/X0NiZF8oMjE3NDAz/NzUzKS5qcGVn"
      //               width="250px"
      //               height="150px"
      //               style={{
      //                 border: "2px  black",
      //                 boxShadow: "0 14px 18px rgba(62,50,50)",
      //               }}
      //             />
      //           </i>
      //           <h5 style={{ textAlign: "center", color: "#3E3232" }}>
      //             NewZealand
      //           </h5>
      //         </div>
      //       </div>
      //       <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
      //         <div class="service-box">
      //           <i>
      //             <img
      //               src="https://imgs.search.brave.com/ew8qmYAF6y9dCz0JqqgxAxEdJAscMyb-SjzIbRLlHTI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU1/NDQ1MzEyL3Bob3Rv/L2xvbmRvbi1vbi10/aGUtbW92ZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9ZzRD/bEwydGpIQTJOSm5o/M3RlMmM5ZFM5ZHVq/WGs3QkJ6WDBhYU4z/OGRVcz0"
      //               width="250px"
      //               height="150px"
      //               style={{
      //                 border: "2px  black",
      //                 boxShadow: "0 14px 18px rgba(62,50,50)",
      //               }}
      //             />
      //           </i>
      //           <h5 style={{ textAlign: "center", color: "#3E3232" }}>UK</h5>
      //         </div>
      //       </div>
      //       <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
      //         <div class="service-box">
      //           <i>
      //             <img
      //               src="https://imgs.search.brave.com/tsWTX9zvSmOntXlXy8oF5cjbCzk_x2ZGaBcI5KBz65s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzU2LzY5LzQy/LzM2MF9GXzI1NjY5/NDI4NF9Ya2hRRmFK/NDJZNjRpRWNxbUhz/akFHdlNmZGxBNksy/VC5qcGc"
      //               width="250px"
      //               height="150px"
      //               style={{
      //                 border: "2px  black",
      //                 boxShadow: "0 14px 18px rgba(62,50,50)",
      //               }}
      //             />
      //           </i>
      //           <h5 style={{ textAlign: "center", color: "#3E3232" }}>USA</h5>
      //         </div>
      //       </div>
      //       <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
      //         <div class="service-box">
      //           <i>
      //             <img
      //               src="https://imgs.search.brave.com/KApwCOTfmic2-DUG3WeCxbKDjEUVXricpSLgGK64_-Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDY4/OTk0MjM5L3Bob3Rv/L3N5ZG5leS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9MTZB/bkg3MFNhYUhoMDJH/elRTckl0RXhyRE5Y/bTNaVTFYbnJ6TDhS/bzZQVT0"
      //               width="250px"
      //               height="150px"
      //               padding="3px 3px 3px 3px"
      //               style={{
      //                 border: "2px  black",
      //                 boxShadow: "0 14px 18px rgba(62,50,50)",
      //               }}
      //             />
      //           </i>
      //           <h5 style={{ textAlign: "center", color: "#3E3232" }}>
      //             Australia
      //           </h5>
      //         </div>
      //       </div>
      //       <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
      //         <div class="service-box">
      //           <i>
      //             <img
      //               src="https://imgs.search.brave.com/B2fVxi33yeElRlquuNitxbeeWh-zz9UVNi0BxQ5437E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODc0/NjYxOTYyL3Bob3Rv/L3Rvcm9udG8tZG93/bi10b3duLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1Fb2Rt/OWlJOVk2c1JzUTNH/cC0tUnh2UDRnSURm/aVZlaXBaWjlXOTB1/UzY4PQ"
      //               width="250px"
      //               height="150px"
      //               style={{
      //                 border: "2px  black",
      //                 boxShadow: "0 14px 18px rgba(62,50,50)",
      //               }}
      //             />
      //           </i>
      //           <h5 style={{ textAlign: "center", color: "#3E3232" }}>
      //             Canada
      //           </h5>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
     </div> */}

      <section className="testimony-section">
        <div
          className="img img-bg border"
          style={{ backgroundImage: "url(./assets/bg-5.jpg)" }}
        ></div>
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center heading-section heading-section-white pt-5">
              <span className="subheading">Testimonial</span>
              <h2 className="mb-3">Happy Clients</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="carousel-testimony">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 2500,
                  }}
                  speed={500}
                  loop={true}
                  modules={[Pagination, Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="testimony-wrap py-4">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-quote-left"></span>
                      </div>
                      <div className="text">
                        <p className="mb-4">
                          Mollit anim laborum duis au dolor in voluptcate velit
                          ess cillum dolore eu lore dsu quality mollit anim
                          laborumuis au dolor in voluptate velit cillu.
                        </p>
                        <div className="d-flex align-items-center">
                          <div
                            className="user-img"
                            style={{
                              backgroundImage: "url(./assets/person_1.jpg)",
                            }}
                          ></div>
                          <div className="pl-3 client-details">
                            <p className="name">Salim Al-Gailani</p>
                            <span className="position">Journal Submission</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimony-wrap py-4">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-quote-left"></span>
                      </div>
                      <div className="text">
                        <p className="mb-4">
                          Mollit anim laborum duis au dolor in voluptcate velit
                          ess cillum dolore eu lore dsu quality mollit anim
                          laborumuis au dolor in voluptate velit cillu.
                        </p>
                        <div className="d-flex align-items-center">
                          <div
                            className="user-img"
                            style={{
                              backgroundImage: "url(./assets/person_2.jpg)",
                            }}
                          ></div>
                          <div className="pl-3 client-details">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimony-wrap py-4">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-quote-left"></span>
                      </div>
                      <div className="text">
                        <p className="mb-4">
                          Mollit anim laborum duis au dolor in voluptcate velit
                          ess cillum dolore eu lore dsu quality mollit anim
                          laborumuis au dolor in voluptate velit cillu.
                        </p>
                        <div className="d-flex align-items-center">
                          <div
                            className="user-img"
                            style={{
                              backgroundImage: "url(./assets/person_3.jpg)",
                            }}
                          ></div>
                          <div className="pl-3 client-details">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimony-wrap py-4">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-quote-left"></span>
                      </div>
                      <div className="text">
                        <p className="mb-4">
                          Mollit anim laborum duis au dolor in voluptcate velit
                          ess cillum dolore eu lore dsu quality mollit anim
                          laborumuis au dolor in voluptate velit cillu.
                        </p>
                        <div className="d-flex align-items-center">
                          <div
                            className="user-img"
                            style={{
                              backgroundImage: "url(./assets/person_1.jpg)",
                            }}
                          ></div>
                          <div className="pl-3 client-details">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimony-wrap py-4">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-quote-left"></span>
                      </div>
                      <div className="text">
                        <p className="mb-4">
                          Mollit anim laborum duis au dolor in voluptcate velit
                          ess cillum dolore eu lore dsu quality mollit anim
                          laborumuis au dolor in voluptate velit cillu.
                        </p>
                        <div className="d-flex align-items-center">
                          <div
                            className="user-img"
                            style={{
                              backgroundImage: "url(./assets/person_2.jpg)",
                            }}
                          ></div>
                          <div className="pl-3 client-details">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimony-wrap py-4">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-quote-left"></span>
                      </div>
                      <div className="text">
                        <p className="mb-4">
                          Mollit anim laborum duis au dolor in voluptcate velit
                          ess cillum dolore eu lore dsu quality mollit anim
                          laborumuis au dolor in voluptate velit cillu.
                        </p>
                        <div className="d-flex align-items-center">
                          <div
                            className="user-img"
                            style={{
                              backgroundImage: "url(./assets/person_3.jpg)",
                            }}
                          ></div>
                          <div className="pl-3 client-details">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimony-wrap py-4">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-quote-left"></span>
                      </div>
                      <div className="text">
                        <p className="mb-4">
                          Mollit anim laborum duis au dolor in voluptcate velit
                          ess cillum dolore eu lore dsu quality mollit anim
                          laborumuis au dolor in voluptate velit cillu.
                        </p>
                        <div className="d-flex align-items-center">
                          <div
                            className="user-img"
                            style={{
                              backgroundImage: "url(./assets/person_1.jpg)",
                            }}
                          ></div>
                          <div className="pl-3 client-details">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="appointment-section img"
        style={{ backgroundImage: "url(./assets/bg-7.jpg)" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row" style={{ margin: '0 60px'}}>
            <div className="col-md-6 half animate fadeInUp animated">
              <h2 className="mb-4">Send a Message & Get in touch!</h2>
              <form action="#" className="appointment">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <div className="form-field">
                        <div className="select-wrap">
                          <div className="icon">
                            <span className="fa fa-chevron-down"></span>
                          </div>
                          <select name="" id="" className="form-control">
                            <option value="">Services</option>
                            <option value="">Phd Dissertation</option>
                            <option value="">Data Analytics</option>
                            <option value="">Coursework</option>
                            <option value="">Editing Services</option>
                            <option value="">Literature Review</option>
                            <option value="">Manuscript</option>
                            <option value="">Phd Research Methodology</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="7"
                        className="form-control"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Send message"
                        className="btn btn-primary py-3 px-4"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 text-center">
            <div class="section-title">
              <h3 style={{ marginTop: "50px", color: "#3E3232" }}>
                Blog & News
              </h3>

              <p
                style={{
                  color: "#7E6363",
                  fontSize: "16px",
                  alignContent: "end",
                }}
              >
                <strong>
                  We are passionate about the work we do, which is why we
                  regulary research and update our blog with original content
                  keep you updated with industry news.
                </strong>
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="single-latest-news">
              <div class="latest-news-bg news-bg-2"></div>
              <div class="news-text-box">
                <div className="box">
                  <img
                    src="https://imgs.search.brave.com/oHqgLIu4p5MRRDAQg6P1bY7nNyaaogc9phygWA3il1Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM3/MDkwMjg0My9waG90/by9zZW5pb3Itd29t/YW4tYW5kLWRpYWJl/dGVzLXRlc3Rlci1z/ZXQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWJ6eGliTC1S/V2NJd0hVUUZGOGMw/RGQtemppMlJ1SVBi/a3QzLTBJcVowcVE9"
                    width="315px"
                    height="200px"
                  ></img>
                  <h4 style={{ textAlign: "center" }}>
                    PhD Research Directions For 2022 In Nutritional Aspects Of
                    Sarcopenia..
                  </h4>
                  <p class="excerpt" style={{ textAlign: "center" }}>
                    About 25% of adults over 65 have type 2 diabetes mellitus
                    (T2DM), a significant health burden for the senior
                    population..
                  </p>
                  <a
                    href="https://www.phdassistance.com/blog/phd-research-directions-for-2022-in-nutritional-aspects-of-sarcopenia-in-diabetes/"
                    className="btn btn-dark py-2 px-4"
                    style={{
                      color: "#fff",
                      borderRadius: "1",
                      textDecoration: "none",
                      marginLeft: "60px",
                      backgroundColor: "#A87C7C",
                    }}
                  >
                    Research Proposal
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-latest-news">
              <div class="latest-news-bg news-bg-2"></div>
              <div class="news-text-box">
                <div className="box">
                  <img
                    src="https://imgs.search.brave.com/eh7VTuydgJxbRO4dxTTvkMj_F6viD74Pb1GUppc03QI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/NzMyMzYyMi92aWRl/by9jYW5jZXItY2Vs/bHMtdmlzLmpwZz9z/PTY0MHg2NDAmaz0y/MCZjPXZiV3J3LTVK/M1l5M1MtTlBiWHg0/Yks2VFB6YThaeExr/QzAxcW5GTVZJblU9"
                    width="315px"
                    height="200px"
                  ></img>
                  <h4 style={{ textAlign: "center" }}>
                    A Bibliometric Examination Of Chemotherapy Operations
                    Management..
                  </h4>

                  <p class="excerpt" style={{ textAlign: "center" }}>
                    Cancer care providers face several operational issues across
                    the world. From screening and diagnosis to therapy,
                    operations ..
                  </p>
                  <a
                    href="https://www.phdassistance.com/blog/a-bibliometric-examination-of-chemotherapy-operations-management-phd-research-directions-for-2022/"
                    className="btn btn-dark py-2 px-4"
                    style={{
                      color: "#fff",
                      borderRadius: "1",
                      textDecoration: "none",
                      marginLeft: "60px",
                      backgroundColor: "#A87C7C",
                    }}
                  >
                    Research Proposal
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="single-latest-news">
              <div class="latest-news-bg news-bg-2"></div>
              <div class="news-text-box">
                <div className="box">
                  <img
                    src="https://imgs.search.brave.com/XwrvqQby0QGuy3JITFpjZa_M-loAOyEVcvwKizAWlCk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTQ0/NTY1NDYvcGhvdG8v/YS0zLWQtaW1hZ2Ut/b2YtYS1odW1hbi1z/a3VsbC1hbmQtYnJh/aW4tZGVwaWN0aW5n/LWNhbmNlci5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9TVJZ/SkVNMUxWcU5NM0o1/OFMwMm85eGhLbFBP/VFVDWWVWV0ZiUEJp/Ml82bz0"
                    width="315px"
                    height="200px"
                    className="image"
                  />
                  <h4 style={{ textAlign: "center" }}>
                    Prediction Of Glioblastoma Survival Using Techniques Based
                    On Pre-Operative..
                  </h4>

                  <p class="excerpt" style={{ textAlign: "center" }}>
                    Glioblastoma multiforme (GBM) is a grade IV brain tumour
                    with a short survival rate. To execute precision surgery
                    followed by…
                  </p>
                  <a
                    href="https://www.phdassistance.com/blog/prediction-of-glioblastoma-survival-using-techniques-based-on-pre-operative-brain-mri-imaging-phd-research-directions-for-2022/"
                    className="btn btn-dark py-2 px-4"
                    style={{
                      color: "#fff",
                      borderRadius: "1",
                      textDecoration: "none",
                      marginLeft: "60px",
                      backgroundColor: "#A87C7C",
                    }}
                  >
                    Research Proposal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="Our guarantee">
        <div
          class="container"
          style={{
            marginLeft: "100px",
            marginRight: "150px",
          }}
        >
          <h1 style={{ textAlign: "center", paddingTop: "50px" }}>
            Our Guarantee
          </h1>
          <h3 style={{ textAlign: "center", paddingTop: "15px" }}>
            What We promise , we deliver exactly the same
          </h3>
          <p style={{ textAlign: "center" }}>
            PhD. Assistance Research Lab assists in framing the PhD research
            proposal as per the standard university guidelines. We have assisted
            researchers pursuing their PhD from universities across the globe,
            such as the UK, the USA, Netherlands, Australia, UAE, Dubai, Kenya,
            Nigeria, China, Russia and many more countries. We are aware of the
            guidelines set by different universities and strictly follow the
            same.
            <br></br>Further, we are aware of the plagiarism tolerance policy
            and therefore strive to ensure that all the papers sent to our
            clients are original. Our Qualified and experienced
            writers/researchers ensure to deliver your work with
            100%confidentiality, on-time delivery, and 100% match with the
            initial requirement
          </p>
          <div class="row">
            <div class="col-md-3 offset-md-2"></div>
          </div>
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <div class="service-box">
                <i>
                  <img
                    src="https://www.phdassistance.com/wp-content/uploads/2024/06/Plagiarism-Free.png"
                    width="50px"
                    height="50px"
                    style={{
                      border: "2px  black",
                      boxShadow: "0 5px 5px rgba(62,50,50)",
                    }}
                  />
                </i>
                <h6 style={{ color: "#3E3232" }}>Plagiarism Free</h6>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <div class="service-box">
                <i>
                  <img
                    src="https://www.phdassistance.com/wp-content/uploads/2024/06/Unlimited-Support.png"
                    width="50px"
                    height="50px"
                    style={{
                      border: "2px  black",
                      boxShadow: "0 5px 5px rgba(62,50,50)",
                    }}
                  />
                </i>
                <h6 style={{ color: "#3E3232" }}>Unlimited Support</h6>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <div class="service-box">
                <i>
                  <img
                    src="https://www.phdassistance.com/wp-content/uploads/2024/06/On-time-delivery.png"
                    width="50px"
                    height="50px"
                    style={{
                      border: "2px  black",
                      boxShadow: "0 5px 5px rgba(62,50,50)",
                    }}
                  />
                </i>
                <h6 style={{ color: "#3E3232" }}>On-time delivery</h6>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <div class="service-box">
                <i>
                  <img
                    src="https://www.phdassistance.com/wp-content/uploads/2024/06/Subject-Matter-Expertise.png"
                    width="50px"
                    height="50px"
                    style={{
                      border: "2px  black",
                      boxShadow: "0 5px 5px rgba(62,50,50)",
                    }}
                  />
                </i>
                <h6 style={{ color: "#3E3232" }}>Subject Matter Expertise</h6>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="service-box">
                <i>
                  <img
                    src="https://www.phdassistance.com/wp-content/uploads/2024/06/Plagiarism-Free.png"
                    width="50px"
                    height="50px"
                    style={{
                      border: "2px  black",
                      boxShadow: "0 5px 5px rgba(62,50,50)",
                    }}
                  />
                </i>
                <h6 style={{ color: "#3E3232" }}>
                  Communicate with your writer
                </h6>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="service-box">
                <i>
                  <img
                    src="https://www.phdassistance.com/wp-content/uploads/2024/06/Updated-academic-resources.png"
                    width="50px"
                    height="50px"
                    style={{
                      border: "2px  black",
                      boxShadow: "0 5px 5px rgba(62,50,50)",
                    }}
                  />
                </i>
                <h6 style={{ color: "#3E3232" }}>Updated academic resources</h6>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="service-box">
                <i>
                  <img
                    src="https://www.phdassistance.com/wp-content/uploads/2024/06/Free-research-articles-supply-.png"
                    width="50px"
                    height="50px"
                    style={{
                      border: "2px  black",
                      boxShadow: "0 5px 5px rgba(62,50,50)",
                    }}
                  />
                </i>
                <h6 style={{ color: "#3E3232" }}>
                  Free research articles supply{" "}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="Published-in">
        <div class="container">
          <h3
            style={{ marginTop: "50px", textAlign: "left", color: "#3E3232" }}
          >
            Published in
          </h3>
          <div class="row">
            <div class="col-md-3 offset-md-2"></div>
          </div>
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <div class="service-box">
                <i>
                  <img
                    src="https://www.phdassistance.com/wp-content/uploads/2024/06/abfd.png"
                    width="250px"
                    height="150px"
                    style={{
                      border: "2px  black",
                      boxShadow: "0 14px 18px rgba(62,50,50)",
                    }}
                  />
                </i>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <div class="service-box">
                <i>
                  <img
                    src="https://www.phdassistance.com/wp-content/uploads/2024/06/rhrehare.png"
                    width="250px"
                    height="150px"
                    style={{
                      border: "2px  black",
                      boxShadow: "0 14px 18px rgba(62,50,50)",
                    }}
                  />
                </i>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <div class="service-box">
                <i>
                  <img
                    src="https://www.phdassistance.com/wp-content/uploads/2024/06/agfg.png"
                    width="250px"
                    height="150px"
                    style={{
                      border: "2px  black",
                      boxShadow: "0 14px 18px rgba(62,50,50)",
                    }}
                  />
                </i>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <div class="service-box">
                <i>
                  <img
                    src="https://www.phdassistance.com/wp-content/uploads/2024/06/abfd.png"
                    width="250px"
                    height="150px"
                    style={{
                      border: "2px  black",
                      boxShadow: "0 14px 18px rgba(62,50,50)",
                    }}
                  />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
