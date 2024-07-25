import React, { useEffect, useRef } from "react";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import "./healthmedical.css";
function Healthmedical() {
  return (
    <>
      <Topbar />
      <section
        class="hero-wrap hero-wrap-2"
        style={{
          backgroundImage: "url(./assets/bg-8.jpg)",
          backgroundPosition: "50% 0%",
        }}
      >
        <div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text align-items-end justify-content-center">
            <div class="col-md-9 ftco-animate mb-5 text-center fadeInUp ftco-animated">
              <p class="breadcrumbs mb-0">
                <span class="mr-2">
                  <a href="index.html" style={{ color: "white" }}>
                    Home <i class="fa fa-chevron-right"></i>
                  </a>
                </span>{" "}
                <span style={{ color: "white" }}>
                  Help-Guide <i class="fa fa-chevron-right"></i>
                </span>
              </p>
              <h1 class="mb-0 bread" style={{ color: "white" }}>
                Health and Medical
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div
        class="auto-container"
        style={{ marginLeft: "40px", marginRight: "80px" }}
      >
        <div class="row clearfix">
          <div
            class="default-service-block item-margin-bot-10 col-md-6 col-sm-6 col-xs-12"
            style={{
              paddingTop: "50px",
              paddingRight: "50px",
              paddingLeft: "20px",
            }}
          >
            <a href="#" data-toggle="modal" data-target="#myModal"></a>
            <div
              class="inner-box fadeInLeft"
              style={{ background: "#736363 none repeat scroll 0 0" }}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <a href="#" data-toggle="modal" data-target="#myModal">
                <h3 style={{ color: "white", textAlign: "center" }}>
                  {" "}
                  Nursing
                </h3>
                <div
                  class="text"
                  style={{ color: "white", textAlign: "center" }}
                >
                  Nursing program prepares you to achieve the career goal as an
                  independent researcher on the nursing care to protect
                  vulnerable communities and nursing Knowledge development.{""}
                </div>
              </a>
              <a
                href="javascript: void(0);"
                data-toggle="modal"
                data-target="#myModal"
                class="read-more-btn guide"
              >
                Get Inquiry
              </a>
            </div>
          </div>

          <div
            class="default-service-block item-margin-bot-10 col-md-6 col-sm-6 col-xs-12"
            style={{
              paddingTop: "50px",
              paddingRight: "50px",
              paddingLeft: "20px",
            }}
          >
            <a href="#" data-toggle="modal" data-target="#myModal"></a>
            <div
              class="inner-box fadeInLeft"
              style={{ background: "#736363 none repeat scroll 0 0" }}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <a href="#" data-toggle="modal" data-target="#myModal">
                <h3 style={{ color: "white", textAlign: "center" }}>
                  {" "}
                  Clinical Pharmocology{" "}
                </h3>
                <div
                  class="text"
                  style={{ color: "white", textAlign: "center" }}
                >
                  Clinical pharmacology program is an integrated science both
                  basic and clinical, will enable to gain the skills and
                  knowledge to examine the safety of new medical products for
                  human studies.{" "}
                </div>
              </a>
              <a
                href="javascript: void(0);"
                data-toggle="modal"
                data-target="#myModal"
                class="read-more-btn guide"
              >
                Get Inquiry
              </a>
            </div>
          </div>

          <div
            class="default-service-block item-margin-bot-10 col-md-6 col-sm-6 col-xs-12"
            style={{
              paddingTop: "20px",
              paddingRight: "50px",
              paddingLeft: "20px",
            }}
          >
            <a href="#" data-toggle="modal" data-target="#myModal"></a>
            <div
              class="inner-box fadeInLeft"
              style={{ background: "#736363 none repeat scroll 0 0" }}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <a href="#" data-toggle="modal" data-target="#myModal">
                <h3 style={{ color: "white", textAlign: "center" }}>
                  {" "}
                  Public Health
                </h3>
                <div
                  class="text"
                  style={{ color: "white", textAlign: "center" }}
                >
                  Students are pursuing public health gain skills and knowledge
                  in the public health discipline such as epidemiology, health
                  policy & management, environment health, biostatistics, and
                  social and behavioral sciences.
                </div>
              </a>
              <a
                href="javascript: void(0);"
                data-toggle="modal"
                data-target="#myModal"
                class="read-more-btn guide"
              >
                Get Inquiry
              </a>
            </div>
          </div>
          <div
            class="default-service-block item-margin-bot-10 col-md-6 col-sm-6 col-xs-12"
            style={{
              paddingTop: "20px",
              paddingRight: "50px",
              paddingLeft: "20px",
            }}
          >
            <a href="#" data-toggle="modal" data-target="#myModal"></a>
            <div
              class="inner-box fadeInLeft"
              style={{ background: "#736363 none repeat scroll 0 0" }}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <a href="#" data-toggle="modal" data-target="#myModal">
                <h3 style={{ color: "white", textAlign: "center" }}>
                  Food Science & Nutrition
                </h3>
                <div
                  class="text"
                  style={{ color: "white", textAlign: "center" }}
                >
                  The food science and nutrition program is designed for
                  individuals who are a desire to pursue a graduate degree in
                  related science. Particularly, it is intended for the
                  individual who wants to gain .{" "}
                </div>
              </a>
              <a
                href="javascript: void(0);"
                data-toggle="modal"
                data-target="#myModal"
                class="read-more-btn guide"
              >
                Get Inquiry
              </a>
            </div>
          </div>

          <div
            class="default-service-block item-margin-bot-10 col-md-6 col-sm-6 col-xs-12"
            style={{
              paddingTop: "20px",
              paddingRight: "50px",
              paddingLeft: "20px",
            }}
          >
            <a href="#" data-toggle="modal" data-target="#myModal"></a>
            <div
              class="inner-box fadeInLeft"
              style={{ background: "#736363 none repeat scroll 0 0" }}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <a href="#" data-toggle="modal" data-target="#myModal">
                <h3 style={{ color: "white", textAlign: "center" }}>
                  Complimentary & Alternative Medicine
                </h3>
                <div
                  class="text"
                  style={{ color: "white", textAlign: "center" }}
                >
                  Complementary and alternative (CAM) medicine course aims to
                  deal with various medical practices and products that implied
                  to be extreme conventional clinical care.{" "}
                </div>
              </a>
              <a
                href="javascript: void(0);"
                data-toggle="modal"
                data-target="#myModal"
                class="read-more-btn guide"
              >
                Get Inquiry
              </a>
            </div>
          </div>

          <div
            class="default-service-block item-margin-bot-10 col-md-6 col-sm-6 col-xs-12"
            style={{
              paddingTop: "20px",
              paddingRight: "50px",
              paddingLeft: "20px",
            }}
          >
            <a href="#" data-toggle="modal" data-target="#myModal"></a>
            <div
              class="inner-box fadeInLeft"
              style={{ background: "#736363 none repeat scroll 0 0" }}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <a href="#" data-toggle="modal" data-target="#myModal">
                <h3 style={{ color: "white", textAlign: "center" }}>
                  Psychology & Psychiatry
                </h3>
                <div
                  class="text"
                  style={{ color: "white", textAlign: "center" }}
                >
                  Psychology & Psychiatry program explore studies between the
                  mind and its relationship to the human behavior and emotions.
                  The program mainly aims at the understanding science of
                  several mental states{" "}
                </div>
              </a>
              <a
                href="javascript: void(0);"
                data-toggle="modal"
                data-target="#myModal"
                class="read-more-btn guide"
              >
                Get Inquiry
              </a>
            </div>
          </div>

          <div
            class="default-service-block item-margin-bot-10 col-md-6 col-sm-6 col-xs-12"
            style={{
              paddingTop: "20px",
              paddingRight: "50px",
              paddingLeft: "20px",
            }}
          >
            <a href="#" data-toggle="modal" data-target="#myModal"></a>
            <div
              class="inner-box fadeInLeft"
              style={{ background: "#736363 none repeat scroll 0 0" }}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <a href="#" data-toggle="modal" data-target="#myModal">
                <h3 style={{ color: "white", textAlign: "center" }}>
                  Politics & Sociology
                </h3>
                <div
                  class="text"
                  style={{ color: "white", textAlign: "center" }}
                >
                  Politics & Sociology programs incorporate the perspective of
                  political science and sociology to address critical attributes
                  and fundamental issues of political and social change in this
                  21st-century society.{" "}
                </div>
              </a>
              <a
                href="javascript: void(0);"
                data-toggle="modal"
                data-target="#myModal"
                class="read-more-btn guide"
              >
                Get Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Healthmedical;
