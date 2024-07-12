import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import "./home.css";

function Home() {
  return (
    <>
      <Topbar />

      <div className="header">
        <div
          className="hero-wrap"
          style={{
            backgroundImage: "url(./assets/bg-2.jpg)",
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
                    style={{ fontSize: "50px", fontWeight: 600 }}
                  >
                    {" "}
                    Your PhD Research Journey Starts Here !{" "}
                  </h1>
                  <p
                    className="mb-4"
                    style={{ fontSize: "18px", color: "rgba(0, 0, 0, 0.8)" }}
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
                        backgroundColor: "#ADBBDA",
                        color: "#141619",
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
                      }}
                    >
                      Hire a Reasearcher
                    </a>
                  </p>
                </div>
              </div>
              <a
                href="https://vimeo.com/45830194"
                className="d-flex justify-content-end align-items-center"
                style={{
                  marginRight: "200px",
                  color: "#fff",
                  marginBottom: "200px",
                  paddingBottom: "300px",
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
                  <p>
                    Talk to our experts to rewrite your thesis or manuscript at
                    any stage of your research or from scratch.
                  </p>
                  <a
                    href="https://www.phdassistance.com/services/phd-dissertation/"
                    className="mx-5"
                    style={{ color: "white" }}
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
                  <p>
                    Consult us for statistical analyses, biostatistics or coding
                    & algorithm development-related services.
                  </p>
                  <a
                    href="https://www.phdassistance.com/services/phd-dissertation/"
                    className="mx-5"
                    style={{ color: "white" }}
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
                  <p>
                    Our experts edit your thesis and manuscripts, ensuring that
                    they are easy to understand and acceptable for publication.
                  </p>
                  <a
                    href="https://www.phdassistance.com/services/phd-dissertation/"
                    className="mx-5"
                    style={{ color: "white" }}
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
                  <p>
                    Need consultation services on an hourly basis, use our hire
                    a research assistant service. Easy and flexible.
                  </p>
                  <a
                    href="https://www.phdassistance.com/services/phd-dissertation/"
                    className="mx-5"
                    style={{ color: "white" }}
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

      <section className="analysis">
        <div className="container">
          <div className=" row justify-content-center pb-5">
            <div className="heading-section text-center ftco-animate fadeInUp ftco-animated">
              <h1 style={{ fontWeight: 600, color: "#8697c4" }}>
                Check at what stage you’re into & Analyse how you can fit into
                our engagement model
              </h1>
              <p style={{ fontWeight: 400, color: "grey" }}>
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
                        backgroundColor: "#ede8f5",
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
                        backgroundColor: "#ede8f5",
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
                        backgroundColor: "#ede8f5",
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
                        backgroundColor: "#ede8f5",
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
                        backgroundColor: "#ede8f5",
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
                        backgroundColor: "#ede8f5",
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
                        backgroundColor: "#ede8f5",
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
                        backgroundColor: "#ede8f5",
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

      <section style={{ margin: '0px 200px'}}>
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 img img-3 d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url( ./assets/blog-banner.png )" }}
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
                <a className="play-video popup-vimeo d-flex align-items-center mt-4 " href="https://youtu.be/0OOA1ShNJn8">
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
      
      <Footer />
    </>
  );
}

export default Home;
