import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import "./home.css";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
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
                    Your PhD Research Journey Starts Here!{" "}
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
                      href="/order-now"
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
                    href="/services/phd-dissertation"
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
                    href="/services/phd-data-analytics"
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
                    href="/services/phd-dissertation"
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
                    href="/services/phd-dissertation/phd-consultation"
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
      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center pb-5">
            <div class="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
              <span class="subheading">Services</span>
              <h2>How It Works</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 d-flex align-items-stretch ftco-animate fadeInUp ftco-animated">
              <div class="services-2 text-center">
                <div class="icon-wrap">
                  <div class="number d-flex align-items-center justify-content-center">
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
                </div>
                <h2> Requirements</h2>
                <p>
                  You raise your request via an email to your Single Point Of
                  Contact (SPOC) from Amura.
                </p>
              </div>
            </div>
            <div class="col-md-3 d-flex align-items-stretch ftco-animate fadeInUp ftco-animated">
              <div class="services-2 text-center">
                <div class="icon-wrap">
                  <div class="number d-flex align-items-center justify-content-center">
                    <span>02</span>
                  </div>
                  <div className="icon d-flex align-items-center justify-content-center">
                    <div className="calender">
                      <EngineeringOutlinedIcon
                        style={{ fontSize: 70, color: "#141619" }}
                      />
                    </div>
                  </div>
                </div>
                <h2> Execution</h2>
                <p>That SPOC then gets the work done from the internal teams</p>
              </div>
            </div>
            <div class="col-md-3 d-flex align-items-stretch ftco-animate fadeInUp ftco-animated">
              <div class="services-2 text-center">
                <div class="icon-wrap">
                  <div class="number d-flex align-items-center justify-content-center">
                    <span>03</span>
                  </div>
                  <div className="icon d-flex align-items-center justify-content-center">
                    <div className="calender">
                      <VerifiedOutlinedIcon
                        style={{ fontSize: 70, color: "#141619" }}
                      />
                    </div>
                  </div>
                </div>
                <h2> Quality Checks</h2>
                <p>
                  The work goes through rigorous quality checks by every team's
                  manager and finally the SPOC
                </p>
              </div>
            </div>
            <div class="col-md-3 d-flex align-items-stretch ftco-animate fadeInUp ftco-animated">
              <div class="services-2 text-center">
                <div class="icon-wrap">
                  <div class="number d-flex align-items-center justify-content-center">
                    <span>04</span>
                  </div>
                  <div className="icon d-flex align-items-center justify-content-center">
                    <div className="calender">
                      <LocalShippingOutlinedIcon
                        style={{ fontSize: 70, color: "#141619" }}
                      />
                    </div>
                  </div>
                </div>
                <h2> Delivery</h2>
                <p>
                  It is emailed back/a download link is sent to you, meeting
                  previous agreed-upon deadlines
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <div class="container" style={{ paddingTop: "50px", paddingBottom: '70px' }}>
        <div class="row">
          <div className="row justify-content-center pb-5">
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
          </div>
        </div>
        <div class="row" style={{ marginLeft: "20px", marginTop: "30px" }}>
          <div class="col-lg-3 col-md-4">
            <div class="single-latest-news">
              <div class="latest-news-bg news-bg-2"></div>
              <div class="news-text-box">
                <div className="boxdesign1">
                  <div
                    style={{ paddingBottom: "20px", paddingLeft: "10px" }}
                  ></div>
                  <h2
                    style={{
                      fontSize: "16px",
                      textAlign: "center",
                      paddingTop: "10px",
                      backgroundColor: "#e5d8d8",
                      paddingBottom: "5px",
                      marginLeft: "20px",
                      marginRight: "15px",
                    }}
                  >
                    JERRY
                  </h2>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src="./assets/Jerry.png"
                      height="70"
                      style={{
                        marginBottom: "20px",
                      }}
                    />
                  </div>

                  <p
                    style={{
                      marginBottom: "20px",
                      color: "grey",
                      textAlign: "center",
                      paddingBottom: "20px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    ” I am done with my thesis; I need an expert to review &
                    provide external comments & addressing those after a mutual
                    agreement “{" "}
                  </p>
                  <h2
                    style={{
                      fontSize: "16px",
                      textAlign: "center",
                      paddingTop: "10px",
                      backgroundColor: "#e5d8d8",
                      paddingBottom: "10px",
                      marginLeft: "20px",
                      marginRight: "15px",
                    }}
                  >
                    External Peer Review & Addressing Comments Support
                  </h2>
                  <div style={{ paddingBottom: "10px" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div class="single-latest-news">
              <div class="latest-news-bg news-bg-2"></div>
              <div class="news-text-box">
                <div className="boxdesign1">
                  <div
                    style={{ paddingBottom: "20px", paddingLeft: "10px" }}
                  ></div>
                  <h2
                    style={{
                      fontSize: "16px",
                      textAlign: "center",
                      paddingTop: "10px",
                      backgroundColor: "#e5d8d8",
                      paddingBottom: "5px",
                      marginLeft: "20px",
                      marginRight: "15px",
                    }}
                  >
                    LISSA
                  </h2>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src="./assets/Lissa.png"
                      height="70"
                      style={{
                        marginBottom: "20px",
                      }}
                    />
                  </div>

                  <p
                    style={{
                      marginBottom: "20px",
                      color: "grey",
                      textAlign: "center",
                      paddingBottom: "20px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    “I find it difficult to identify the latest articles for my
                    research study. I am not aware of how to extract articles
                    and synthesize them. “{" "}
                  </p>
                  <h2
                    style={{
                      fontSize: "16px",
                      textAlign: "center",
                      paddingTop: "10px",
                      backgroundColor: "#e5d8d8",
                      paddingBottom: "10px",
                      marginLeft: "20px",
                      marginRight: "15px",
                    }}
                  >
                    Article Extraction & Annotated Bibliography Services
                  </h2>
                  <div style={{ paddingBottom: "10px" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div class="single-latest-news">
              <div class="latest-news-bg news-bg-2"></div>
              <div class="news-text-box">
                <div className="boxdesign1">
                  <div
                    style={{ paddingBottom: "20px", paddingLeft: "10px" }}
                  ></div>
                  <h2
                    style={{
                      fontSize: "16px",
                      textAlign: "center",
                      paddingTop: "10px",
                      backgroundColor: "#e5d8d8",
                      paddingBottom: "5px",
                      marginLeft: "20px",
                      marginRight: "15px",
                    }}
                  >
                    SAM
                  </h2>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src="./assets/Sam.png"
                      height="70"
                      style={{
                        marginBottom: "20px",
                      }}
                    />
                  </div>

                  <p
                    style={{
                      marginBottom: "20px",
                      color: "grey",
                      textAlign: "center",
                      paddingBottom: "20px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    I have written more than 300 pages, and I need someone who
                    can sit with me and work along with it to edit my thesis. “
                  </p>
                  <h2
                    style={{
                      fontSize: "16px",
                      textAlign: "center",
                      paddingTop: "10px",
                      backgroundColor: "#e5d8d8",
                      paddingBottom: "10px",
                      marginLeft: "20px",
                      marginRight: "15px",
                    }}
                  >
                    HIRE A RESEARCHER
                  </h2>
                  <div style={{ paddingBottom: "10px" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div class="single-latest-news">
              <div class="latest-news-bg news-bg-2"></div>
              <div class="news-text-box">
                <div className="boxdesign1">
                  <div
                    style={{ paddingBottom: "20px", paddingLeft: "10px" }}
                  ></div>
                  <h2
                    style={{
                      fontSize: "16px",
                      textAlign: "center",
                      paddingTop: "10px",
                      backgroundColor: "#e5d8d8",
                      paddingBottom: "5px",
                      marginLeft: "20px",
                      marginRight: "15px",
                    }}
                  >
                    ROBERT
                  </h2>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src="./assets/Robert.png"
                      height="70"
                      style={{
                        marginBottom: "20px",
                      }}
                    />
                  </div>

                  <p
                    style={{
                      marginBottom: "20px",
                      color: "grey",
                      textAlign: "center",
                      paddingBottom: "20px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    ” I have developed a questionnaire and got data; it seems
                    when I run the analyses, I could not able to get the results
                    that I am looking for. “{" "}
                  </p>
                  <h2
                    style={{
                      fontSize: "16px",
                      textAlign: "center",
                      paddingTop: "10px",
                      backgroundColor: "#e5d8d8",
                      paddingBottom: "10px",
                      marginLeft: "20px",
                      marginRight: "15px",
                    }}
                  >
                    Stastical Analysis services
                  </h2>
                  <div style={{ paddingBottom: "10px" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className="services-area"
        style={{ padding: "0 130px", marginBottom: "100px" }}
      >
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-8 text-center heading-section">
              <span className="subheading">Our Services</span>
              <h2 className="mb-3" style={{ color: "#7e6363" }}>
                We Can Help You With These Situations
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div className="single-service-cap">
                <div className="service-img">
                  <img
                    src="./assets/service1.jpg"
                    alt="Dissertation Services"
                  />
                </div>
                <div className="service-cap">
                  <h4>
                    <a href="/services/phd-dissertation" style={{ textDecoration: "none" }}>
                      Dissertation Services
                    </a>
                  </h4>
                  <a
                    className="more-btn"
                    href="/services/phd-dissertation"
                    style={{ textDecoration: "none" }}
                  >
                    Read More <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div className="single-service-cap">
                <div className="service-img">
                  <img src="./assets/service2.jpg" alt="Public Support" />
                </div>
                <div className="service-cap">
                  <h4>
                    <a href="/services/phd-dissertation/phd-consultation" style={{ textDecoration: "none" }}>
                      Public Support
                    </a>
                  </h4>
                  <a
                    className="more-btn"
                    href="/services/phd-dissertation/phd-consultation"
                    style={{ textDecoration: "none" }}
                  >
                    Read More <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div className="single-service-cap">
                <div className="service-img">
                  <img
                    src="./assets/services1.jpg"
                    alt="Statistical Analysis"
                  />
                </div>
                <div className="service-cap">
                  <h4>
                    <a href="/services/phd-data-analytics" style={{ textDecoration: "none" }}>
                      Statistical Analysis
                    </a>
                  </h4>
                  <a
                    className="more-btn"
                    href="/services/phd-data-analytics"
                    style={{ textDecoration: "none" }}
                  >
                    Read More <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div className="single-service-cap">
                <div className="service-img">
                  <img
                    src="./assets/service4.jpg"
                    alt="Coding & Algorithm Services"
                  />
                </div>
                <div className="service-cap">
                  <h4>
                    <a href="/services/phd-data-analytics/computer-programming" style={{ textDecoration: "none" }}>
                      Coding & Algorithm Services
                    </a>
                  </h4>
                  <a
                    className="more-btn"
                    href="/services/phd-data-analytics/computer-programming"
                    style={{ textDecoration: "none" }}
                  >
                    Read More <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="single-service-cap">
                <div className="service-img">
                  <img src="./assets/service8.jpg" alt="Data Collection" />
                </div>
                <div className="service-cap">
                  <h4>
                    <a href="" style={{ textDecoration: "none" }}>
                      Data Collection
                    </a>
                  </h4>
                  <a
                    className="more-btn"
                    href=""
                    style={{ textDecoration: "none" }}
                  >
                    Read More <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="single-service-cap">
                <div className="service-img">
                  <img
                    src="./assets/service6.jpg"
                    alt="Editing & Peer Reviewing"
                  />
                </div>
                <div className="service-cap">
                  <h4>
                    <a href="/services/phd-literature-review" style={{ textDecoration: "none" }}>
                      Editing & Peer Reviewing
                    </a>
                  </h4>
                  <a
                    className="more-btn"
                    href="/services/phd-literature-review"
                    style={{ textDecoration: "none" }}
                  >
                    Read More <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="single-service-cap">
                <div className="service-img">
                  <img
                    src="./assets/service7.jpg"
                    alt="Research Support Service"
                  />
                </div>
                <div className="service-cap">
                  <h4>
                    <a href="" style={{ textDecoration: "none" }}>
                      Research Support Service
                    </a>
                  </h4>
                  <a
                    className="more-btn"
                    href=""
                    style={{ textDecoration: "none" }}
                  >
                    Read More <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="single-service-cap">
                <div className="service-img">
                  <img src="./assets/service8.jpg" alt="Course Work" />
                </div>
                <div className="service-cap">
                  <h4>
                    <a href="/services/phd-coursework" style={{ textDecoration: "none" }}>
                      Course Work
                    </a>
                  </h4>
                  <a
                    className="more-btn"
                    href="/services/phd-coursework"
                    style={{ textDecoration: "none" }}
                  >
                    Read More <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section" style={{ padding: "0 60px" }}>
        <div className="container" style={{ padding: "0 60px" }}>
          <div className="row">
            <div
              className="col-md-6 img img-3 d-flex justify-content-center align-items-center"
              style={{
                backgroundImage: "url(./assets/blog.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="col-md-6 wrap-about px-md-5 py-5 bg-light">
              <div className="heading-section">
                <span className="subheading">Welcome to PhD Assistance</span>
                <h2 className="mb-4">Best Dissertation Writing Services.</h2>
                <p>
                  The research journey is messy, full of difficulties and
                  surprises, hard work, beginnings and some form of closure.
                  ‘PhDAssistance Research Lab’ travels as part of this journey
                  by supervising and mentoring PhD researchers across the globe.
                </p>
                <p>
                  With years of experience in the industry, we have framed our
                  work standards, including PhD service engagement models, to
                  ensure smooth collaboration between our experts and our
                  clients.
                </p>
                <a
                  className="play-video popup-vimeo d-flex align-items-center mt-4"
                  href="https://youtu.be/0OOA1ShNJn8"
                  style={{ textDecoration: "none" }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-play"></span>
                  </div>
                  <span className="watch">Take a look at our process flow</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container" style={{ paddingTop: "50px" }}>
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

      <section className="testimony-section">
        <div
          className="img img-bg border"
          style={{ backgroundImage: "url(../../../../assets/bg-5.jpg)" }}
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
                  slidesPerView={2}
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
                          I can say that it was a pleasant experience in which
                          Phdassistance displayed flexibility in adapting to our
                          needs and presented an exceptional report that met all
                          of our expectations. Personally, I appreciated the
                          team's prompt follow-up, and we will undoubtedly
                          contact them if additional research assistance is
                          required.
                        </p>
                        <div className="d-flex align-items-center">
                          <div
                            className="user-img"
                            style={{
                              backgroundImage:
                                "url(../../../../assets/person_1.jpg)",
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
                          My friend recommended that I use your service just
                          when I was about to give up on my dissertation.
                          Because I was trapped and didn't know what to do, the
                          suggestion came at a good moment. I'm now a PhD
                          holder, and I'm overjoyed about it. Thank you for your
                          help
                        </p>
                        <div className="d-flex align-items-center">
                          <div
                            className="user-img"
                            style={{
                              backgroundImage:
                                "url(../../../../assets/person_2.jpg)",
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
                          I'd want to express my gratitude to Phdassistance for
                          their invaluable assistance in developing our
                          programme. Everyone was courteous, competent, and
                          diligent. I was able to meet our deadline thanks to
                          them, and I want to continue working with them in the
                          future.
                        </p>
                        <div className="d-flex align-items-center">
                          <div
                            className="user-img"
                            style={{
                              backgroundImage:
                                "url(../../../../assets/person_3.jpg)",
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
                          I can say that it was a pleasant experience in which
                          Phdassistance displayed flexibility in adapting to our
                          needs and presented an exceptional report that met all
                          of our expectations. Personally, I appreciated the
                          team's prompt follow-up, and we will undoubtedly
                          contact them if additional research assistance is
                          required.
                        </p>
                        <div className="d-flex align-items-center">
                          <div
                            className="user-img"
                            style={{
                              backgroundImage:
                                "url(../../../../assets/person_1.jpg)",
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
                          My friend recommended that I use your service just
                          when I was about to give up on my dissertation.
                          Because I was trapped and didn't know what to do, the
                          suggestion came at a good moment. I'm now a PhD
                          holder, and I'm overjoyed about it. Thank you for your
                          help
                        </p>
                        <div className="d-flex align-items-center">
                          <div
                            className="user-img"
                            style={{
                              backgroundImage:
                                "url(../../../../assets/person_2.jpg)",
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
                          I'd want to express my gratitude to Phdassistance for
                          their invaluable assistance in developing our
                          programme. Everyone was courteous, competent, and
                          diligent. I was able to meet our deadline thanks to
                          them, and I want to continue working with them in the
                          future.
                        </p>
                        <div className="d-flex align-items-center">
                          <div
                            className="user-img"
                            style={{
                              backgroundImage:
                                "url(../../../../assets/person_3.jpg)",
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
                          I'd want to express my gratitude to Phdassistance for
                          their invaluable assistance in developing our
                          programme. Everyone was courteous, competent, and
                          diligent. I was able to meet our deadline thanks to
                          them, and I want to continue working with them in the
                          future.
                        </p>
                        <div className="d-flex align-items-center">
                          <div
                            className="user-img"
                            style={{
                              backgroundImage:
                                "url(../../../../assets/person_1.jpg)",
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
        className="appointment-section"
        style={{ backgroundImage: "url(./assets/bg-7.jpg)" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 half animate fadeInUp animated">
              <h2 className="mb-4 text-center">
                Send a Message & Get in touch!
              </h2>
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
                    <div className="form-group text-center">
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
                    width="300px"
                    height="150px"
                  ></img>
                  <h5 style={{ textAlign: "center", color: "#7e6363" }}>
                    PhD Research Directions For 2022 In Nutritional Aspects Of
                    Sarcopenia..
                  </h5>
                  <p
                    class="excerpt"
                    style={{ textAlign: "center", color: "#a87c7c" }}
                  >
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
                    width="300px"
                    height="150px"
                  ></img>
                  <h5 style={{ textAlign: "center", color: "#736363" }}>
                    A Bibliometric Examination Of Chemotherapy Operations
                    Management..
                  </h5>

                  <p
                    class="excerpt"
                    style={{ textAlign: "center", color: "#a87c7c" }}
                  >
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
                    width="300px"
                    height="150px"
                    className="image"
                  />
                  <h5 style={{ textAlign: "center", color: "#736363" }}>
                    Prediction Of Glioblastoma Survival Using Techniques Based
                    On Pre-Operative..
                  </h5>

                  <p
                    class="excerpt"
                    style={{ textAlign: "center", color: "#A87c7c" }}
                  >
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
      <div class="Published-in" style={{ paddingBottom: "50px" }}>
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
