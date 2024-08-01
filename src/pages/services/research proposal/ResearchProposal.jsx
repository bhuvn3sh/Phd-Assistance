import React, { useEffect, useRef } from "react";
import Topbar from "../../../components/topbar/Topbar";
import Footer from "../../../components/footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";

function ResearchProposal() {
  return (
    <>
      <Topbar />

      <section
        className="hero-wrap hero-wrap-2 d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url(../../../../assets/bg-8.jpg)",
          backgroundPosition: "50% 0%",
        }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="about-cap ftco-animate pt-100 fadeInUp ftco-animated">
                <h2>Ph.D. Research Proposal Mentoring Service </h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/">Phd Dissertation</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="description">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="">
                <h2 className="text-center">Ph.D. Research Proposal</h2>
                <p>
                  Are you facing difficulties in identifying the research
                  problems? Whether are you looking to narrowing or clarifying
                  the problems? And or Finding hard to point out the research
                  gap and ask good research question for problem identification
                  process?You have reached the right destination.
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="">
                <p>
                  Writing a research proposal is a critical component of the
                  Ph.D. application process, particularly in many international
                  universities where it influences decisions on acceptance into
                  DBA or doctoral programs. The proposal must make a strong
                  first impression, showcasing your potential as a researcher
                  and indicating your compatibility with potential mentors and
                  their research areas. Crafting a compelling research proposal
                  requires critical thinking, thorough analysis, and clear
                  communication, along with significant investment of time and
                  effort.
                </p>
                <p>
                  Our end-to-end assistance engages experts with relevant
                  educational backgrounds and extensive experience in the field,
                  ensuring your proposal effectively highlights your research
                  capabilities. This support is particularly beneficial for
                  those transitioning from industry or teaching roles, who may
                  lack the time or experience to compile and analyze academic
                  literature. Our Ph.D. experts help you select the right
                  problem statement, develop a robust theoretical framework,
                  formulate research questions, design appropriate
                  methodologies, and ensure the feasibility of your dissertation
                  within the Ph.D. timeframe.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="../../../../assets/person_1.jpg"
                alt=""
                className="img-fluid"
                style={{ height: "300px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="service-types">
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-7 heading-section text-center">
              <span className="subheading">Service Description</span>
              <h2>We Offer Three Level of Services</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4" style={{ height: "300px" }}>
              <div
                className="pricing-1 pricing-animate pricing-fadeUp pricing-animated services-description"
                style={{ minHeight: "255px" }}
              >
                <div className="block-7 w-100">
                  <div className="text-center">
                    <span className="price">
                      <span className="number" style={{ fontSize: "35px" }}>
                        Basic
                      </span>
                    </span>
                    <span className="topic-selection d-block"></span>
                    <p>
                      This two-page service plan focuses on finalizing the
                      research proposal title, defining broad research
                      objectives, outlining the problem, and proposing a
                      methodology. It includes a critical yet descriptive
                      evaluation to refine the research focus and approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-1 pricing-animate pricing-fadeUp pricing-animated services-description">
                <div className="block-7 w-100">
                  <div className="text-center">
                    <span className="price">
                      <span className="number" style={{ fontSize: "35px" }}>
                        Advanced
                      </span>
                    </span>
                    <span className="topic-selection d-block"></span>
                    <p>
                      This five-page service plan supports title finalization
                      and admission preparation, featuring a literature review,
                      gap analysis, and detailed methodology with up to 10
                      references. It focuses on critical analysis and
                      comprehensive description.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-1 pricing-animate pricing-fadeUp pricing-animated services-description">
                <div className="block-7 w-100">
                  <div className="text-center">
                    <span className="price">
                      <span className="number" style={{ fontSize: "35px" }}>
                        Extended
                      </span>
                    </span>
                    <span className="topic-selection d-block"></span>
                    <p>
                      This twelve-page service plan provides a detailed research
                      proposal format, including a thorough literature review,
                      gap analysis, methodology, and theoretical framework with
                      up to 25 references. It ensures in-depth critical
                      analysis, required before completing Ph.D. research.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-features">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3>Outstanding PhD Dissertation Topic Selection Features</h3>
            </div>
            <div className="col-md-4">
              <div className="service-features1">
                <i class="fa-solid fa-book-open-reader"></i>
                <h5>Comprehensive List of Well-Researched Topics</h5>
                <p>
                  We offer an extensive and meticulously curated list of
                  potential topics for your PhD research. Each topic is
                  thoroughly researched to ensure relevance and academic value.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-features1">
                <i class="fa-solid fa-book-bookmark"></i>
                <h5>Tailored Recommendations</h5>
                <p>
                  The goal and research objectives are developed through a
                  comprehensive literature review and problem statement
                  identification, utilizing statistics, news reports, textbooks,
                  historical data, and recent peer-reviewed scholarly articles.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="service-features1">
                <i class="fa-regular fa-square-check"></i>
                <h5>Flexibility in Topic Modification</h5>
                <p>
                  We understand that research evolves, so we allow for topic
                  modifications during the writing process and even after the
                  thesis is completed. This ensures your thesis stays aligned
                  with your latest findings and insights.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="service-features1">
                <i class="fa-solid fa-check-double"></i>
                <h5>Gap-Driven Exploration</h5>
                <p>
                  Our dissertation topics are based on research gaps and future
                  recommendations from previous studies. Each title reflects the
                  core problem, research questions, study area, findings,
                  design, ethnicity, and location.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-features1">
                <i class="fa-regular fa-circle-user"></i>
                <h5>Complimentary Topics with Thesis Commitment</h5>
                <p>
                  Commit to our full PhD thesis writing service, and we'll
                  provide you with a list of free topic suggestions. This offer
                  is designed to help you start your research journey without
                  any additional cost.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-features1">
                <i class="fa-regular fa-pen-to-square"></i>
                <h5>Customized Topic Selection</h5>
                <p>
                  We offer personalized topic selection tailored to the specific
                  suggestions and requirements of your supervisor or guide. This
                  ensures your research topic aligns perfectly with academic
                  expectations and guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mentors mt-2 pb-5">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-8">
              <div className="">
                <h2
                  className="mb-2"
                  style={{ color: "#503c3c", fontWeight: "600" }}
                >
                  PhD Mentors with adequate experience
                </h2>
                <p style={{ color: "#3a3a3a", textAlign: "justify" }}>
                  Ph.D. Assistant offers unique and affordable Ph.D.
                  dissertation mentoring services, providing dedicated research
                  assistants to handle preparatory and secretarial tasks,
                  enabling you to focus on core, innovative aspects of your
                  research. At a rate of $18 per hour, these assistants,
                  typically Ph.D. or post-graduate research scholars,
                  collaborate with you to offer valuable insights and support.
                  This service not only aids your research efficiency but also
                  supports the assistants financially during their studies.
                </p>
                <a href="/order-now" className="btn btn-primary">
                  Request a Quote
                </a>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="../../../../assets/service10.jpg"
                alt="Phd topic Selection"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="service-types" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-7 heading-section text-center">
              <span className="subheading">Additional Features</span>
              <h2>Along With Your Order, You Will Also Get the Following</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="pricing-1 pricing-animate pricing-fadeUp pricing-animated services-description">
                <div className="block-7 w-100">
                  <div className="text-center">
                    <span className="price">
                      <span className="number" style={{ fontSize: "35px" }}>
                        Fully Referenced
                      </span>
                    </span>
                    <span className="topic-selection d-block"></span>
                    <p>
                      All our academic mentoring ensures proper acknowledgment
                      of sources to aid readers in finding relevant materials
                      and to avoid plagiarism. References are primarily included
                      in the main body of your work, with the introduction and
                      conclusion focusing on original ideas. Citations are
                      in-text and linked to the full references at the end.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-1 pricing-animate pricing-fadeUp pricing-animated services-description">
                <div className="block-7 w-100">
                  <div className="text-center">
                    <span className="price">
                      <span className="number" style={{ fontSize: "35px" }}>
                        Formatting & Referencing
                      </span>
                    </span>
                    <span className="topic-selection d-block"></span>
                    <p>
                      The research report is formatted according to the specific
                      guidelines provided by the scholars, such as APA, MLA,
                      Harvard, or Oxford. This ensures proper citation to avoid
                      plagiarism, assign authority to statements, and improve
                      sentence structure. Additionally, we include a table of
                      contents, lists of tables and figures, and manage
                      footnotes or endnotes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-1 pricing-animate pricing-fadeUp pricing-animated services-description">
                <div className="block-7 w-100">
                  <div className="text-center">
                    <span className="price">
                      <span className="number" style={{ fontSize: "35px" }}>
                        Study Materials Sharing
                      </span>
                    </span>
                    <span className="topic-selection d-block"></span>
                    <p>
                      We not only deliver your ordered work but also provide all
                      reference materials used, including journal articles,
                      textbooks, dissertations, web pages, lectures, and more.
                      On request, we highlight key articles for better
                      understanding. Additional materials are shared via Google
                      Drive or Dropbox for future reference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimony-section" style={{ marginTop: "0px" }}>
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

      <Footer />
    </>
  );
}

export default ResearchProposal;
