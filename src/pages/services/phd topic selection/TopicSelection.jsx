import React, { useEffect, useRef } from "react";
import Topbar from "../../../components/topbar/Topbar";
import Footer from "../../../components/footer/Footer";
import "./topicselection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";

function TopicSelection() {
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
                <h2>Topic Selection Mentoring Service </h2>
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
                <h2 className="text-center">
                  Specialized PhD Topic Selection Service
                </h2>
                <p>
                  Are you in search of a well-researched and original PhD
                  research topic? Do you want to engage in brainstorming
                  sessions with experts to select a topic that perfectly
                  encapsulates your entire research study? Are you aiming to
                  choose a research topic that justifies your complete PhD
                  dissertation? You've come to the right place.
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="">
                <p>
                  Selecting a PhD research topic is a challenging and crucial
                  decision that significantly impacts an academic career,
                  requiring years of investment. Many students, especially from
                  non-English speaking countries like China, Brazil, Singapore,
                  Malaysia, Indonesia, and other Asian nations, find the process
                  hectic and frustrating. A well-researched, unique dissertation
                  topic with a clear research goal necessitates extensive
                  literature review of peer-reviewed and online sources. The
                  chosen topic should align with the candidate's passion,
                  interest, and knowledge, avoiding overly general or overly
                  specific subjects to ensure originality and sufficient
                  available information. PhD Assistance recommends selecting
                  topics of personal interest previously encountered in seminar
                  papers, journal articles, or coursework.
                </p>
                <p>
                  Engaging with experts who have studied the topic can
                  significantly enhance your PhD research. At PhD Assistance,
                  our team of qualified research professionals offers trusted
                  PhD mentoring support, helping you choose the right topic from
                  a list provided by an advisor or through personalized
                  consultation. Our experienced advisors guide you in
                  identifying issues that generate curiosity and converting them
                  into research questions. With skills to select topics based on
                  current gaps and needs, our international team of writers and
                  researchers, hailing from top-ranked universities in the US,
                  UK, and India, ensures the selection of a PhD research topic
                  and title that align with your specialized discipline and
                  research goals.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="../../../../assets/person_1.jpg"
                alt=""
                className="img-fluid"
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
                    <p>3-4 topics along with the research aim</p>
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
                      One standard topic selection and 500 words outline with
                      research aim, objectives, literature review, research
                      methodology, data analysis guidelines and references lists
                      (upgradable)
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
                      One standard topic with 1000 words along with advanced
                      features and expected contribution, research gap, and
                      bibliography for additional reading (upgradable)
                    </p>
                    {/* <a
                      href="/order-now"
                      className="btn btn-primary d-block px-2 py-3"
                    >
                      Order Now
                    </a> */}
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
                <h5>Complete Thesis Writing Service</h5>
                <p>
                  Our complete thesis writing service covers everything from
                  initial research and drafting to final editing and formatting.
                  We ensure your thesis meets the highest academic standards.
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

      <section className="process-flow" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-7 heading-section text-center">
              <span className="subheading">Order Process</span>
              <h2 style={{ color: "#a87c7c" }}>
                Easily Order Your Ph.D. Dissertation{" "}
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <img
              src="../../../../assets/process-flow.jpg"
              alt="Phd process flow"
              style={{ marginBottom: "50px" }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default TopicSelection;
