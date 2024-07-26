import React, { useEffect, useRef } from "react";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import "./pricing.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";

function Pricing() {
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
                <h2>Pricing & Plans</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/pricing">Pricing</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing bg-light">
        <div className="container">
          <div className="row justify-content-center pb-5 mb-3">
            <div className="col-md-7 heading-section text-center pricing-animate pricing-fadeUp pricing-animated">
              <span className="subheading">Price & Plans</span>
              <h2>Affordable Packages</h2>
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
                    <div className="pricing-1 pricing-animate pricing-fadeUp pricing-animated">
                      <div className="block-7 w-100">
                        <div className="text-center">
                          <span className="price">
                            <sup>$</sup>
                            <span className="number">100</span>
                            <sub>/topic</sub>
                          </span>
                          <span className="topic-selection d-block">
                            PhD Topic Selection
                          </span>
                          <ul className="pricing-text mb-5">
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Individual Counseling
                            </li>
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Couples Therapy
                            </li>
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Family Therapy
                            </li>
                          </ul>
                          <a
                            href="/order-now"
                            className="btn btn-primary d-block px-2 py-3"
                          >
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="pricing-1 pricing-animate pricing-fadeUp pricing-animated">
                      <div className="block-7 w-100">
                        <div className="text-center">
                          <span className="price">
                            <sup>$</sup>
                            <span className="number">490</span>
                            <sub>/1500 words</sub>
                          </span>
                          <span className="topic-selection d-block">
                            PhD Proposal
                          </span>
                          <ul className="pricing-text mb-5">
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Individual Counseling
                            </li>
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Couples Therapy
                            </li>
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Family Therapy
                            </li>
                          </ul>
                          <a
                            href="/order-now"
                            className="btn btn-primary d-block px-2 py-3"
                          >
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="pricing-1 pricing-animate pricing-fadeUp pricing-animated">
                      <div className="block-7 w-100">
                        <div className="text-center">
                          <span className="price">
                            <sup>$</sup>
                            <span className="number">685</span>
                            <sub>/5500 words</sub>
                          </span>
                          <span className="topic-selection d-block">
                            PhD Literature Review
                          </span>
                          <ul className="pricing-text mb-5">
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Individual Counseling
                            </li>
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Couples Therapy
                            </li>
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Family Therapy
                            </li>
                          </ul>
                          <a
                            href="/order-now"
                            className="btn btn-primary d-block px-2 py-3"
                          >
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="pricing-1 pricing-animate pricing-fadeUp pricing-animated">
                      <div className="block-7 w-100">
                        <div className="text-center">
                          <span className="price">
                            <sup>$</sup>
                            <span className="number">633</span>
                            <sub>4500 words</sub>
                          </span>
                          <span className="topic-selection d-block">
                          PhD Research Methodology
                          </span>
                          <ul className="pricing-text mb-5">
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Individual Counseling
                            </li>
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Couples Therapy
                            </li>
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Family Therapy
                            </li>
                          </ul>
                          <a
                            href="/order-now"
                            className="btn btn-primary d-block px-2 py-3"
                          >
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="pricing-1 pricing-animate pricing-fadeUp pricing-animated">
                      <div className="block-7 w-100">
                        <div className="text-center">
                          <span className="price">
                            <sup>$</sup>
                            <span className="number">830</span>
                            <sub>/topic</sub>
                          </span>
                          <span className="topic-selection d-block">
                            PhD Statistical Analysis
                          </span>
                          <ul className="pricing-text mb-5">
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Individual Counseling
                            </li>
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Couples Therapy
                            </li>
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Family Therapy
                            </li>
                          </ul>
                          <a
                            href="/order-now"
                            className="btn btn-primary d-block px-2 py-3"
                          >
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="pricing-1 pricing-animate pricing-fadeUp pricing-animated">
                      <div className="block-7 w-100">
                        <div className="text-center">
                          <span className="price">
                            <sup>$</sup>
                            <span className="number">980</span>
                            <sub>/2000 words</sub>
                          </span>
                          <span className="topic-selection d-block">
                            PhD Manuscript
                          </span>
                          <ul className="pricing-text mb-5">
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Individual Counseling
                            </li>
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Couples Therapy
                            </li>
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Family Therapy
                            </li>
                          </ul>
                          <a
                            href="/order-now"
                            className="btn btn-primary d-block px-2 py-3"
                          >
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="pricing-1 pricing-animate pricing-fadeUp pricing-animated">
                      <div className="block-7 w-100">
                        <div className="text-center">
                          <span className="price">
                            <sup>$</sup>
                            <span className="number">1440</span>
                            <sub>/12000 words</sub>
                          </span>
                          <span className="topic-selection d-block">
                            PhD Dissertation Editing
                          </span>
                          <ul className="pricing-text mb-5">
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Individual Counseling
                            </li>
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Couples Therapy
                            </li>
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Family Therapy
                            </li>
                          </ul>
                          <a
                            href="/order-now"
                            className="btn btn-primary d-block px-2 py-3"
                          >
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="pricing-1 pricing-animate pricing-fadeUp pricing-animated">
                      <div className="block-7 w-100">
                        <div className="text-center">
                          <span className="price">
                            <sup>$</sup>
                            <span className="number">1940</span>
                            <sub>/25000 words</sub>
                          </span>
                          <span className="topic-selection d-block">
                            PhD Thesis
                          </span>
                          <ul className="pricing-text mb-5">
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Individual Counseling
                            </li>
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Couples Therapy
                            </li>
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Family Therapy
                            </li>
                          </ul>
                          <a
                            href="/order-now"
                            className="btn btn-primary d-block px-2 py-3"
                          >
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="pricing-1 pricing-animate pricing-fadeUp pricing-animated">
                      <div className="block-7 w-100">
                        <div className="text-center">
                          <span className="price">
                            <sup>$</sup>
                            <span className="number">390</span>
                            <sub>/2500 words</sub>
                          </span>
                          <span className="topic-selection d-block">
                          PhD Coursework
                          </span>
                          <ul className="pricing-text mb-5">
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Individual Counseling
                            </li>
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Couples Therapy
                            </li>
                            <li>
                              <span className="fa fa-check mr-2"></span>
                              Family Therapy
                            </li>
                          </ul>
                          <a
                            href="/order-now"
                            className="btn btn-primary d-block px-2 py-3"
                          >
                            Order Now
                          </a>
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

      <Footer />
    </>
  );
}

export default Pricing;
