import React, { useEffect, useRef } from "react";
import Topbar from "../../../components/topbar/Topbar";
import Footer from "../../../components/footer/Footer";
import "./phddissertationfull.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";

function PhdDissertationFull() {
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
                <h2>
                  Ph.D. Dissertation (Full) - End to End Mentoring Service{" "}
                </h2>
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
                <h2 className="text-center">Ph.D. Complete Research work</h2>
                <p>
                  Are you looking for an expert Ph.D. writer for specific
                  subjects of a doctoral degree?Then’ You’ve reached the right
                  destination.
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="">
                <p>
                  Writing a dissertation is a complex and challenging task that
                  requires meticulous attention to detail and adherence to
                  institutional guidelines. Ph.D. Assistance offers
                  comprehensive support for all stages of dissertation writing,
                  from selecting a research topic and crafting a research
                  proposal to developing the dissertation content. Our
                  end-to-end services include topic identification, literature
                  review, problem statement formulation, research design, data
                  collection, statistical analysis, discussion, results,
                  recommendations, and conclusion. We also assist with synopsis
                  preparation and PowerPoint presentations, ensuring your
                  dissertation meets all academic requirements.
                </p>
                <p>
                  At Ph.D. Assistance, we pride ourselves on delivering unique
                  and innovative dissertations tailored to the latest trends.
                  Our expert writers have successfully completed over 10,000
                  Ph.D. theses for students both in India and abroad, with a
                  commitment to confidentiality and quality. We also support
                  non-English speaking students from countries such as China,
                  Brazil, Singapore, Malaysia, and Indonesia. If you need help
                  with any aspect of your dissertation, from topic selection to
                  extensive literature searches, our services are designed to
                  provide the support you need from the comfort of your desk.
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
              <h2>We Offer Six Dissertation Services</h2>
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
                        <a href="/services/phd-dissertation/phd-topic-selection">
                          Ph.D. Topic Selection
                        </a>
                      </span>
                    </span>
                    <span className="topic-selection d-block"></span>
                    <p>
                      Choosing a Ph.D. research topic is a critical career
                      decision that requires careful consideration of its
                      long-term impact and potential.
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
                        <a href="/services/phd-dissertation/problem-identification">
                          Problem Identification
                        </a>
                      </span>
                    </span>
                    <span className="topic-selection d-block"></span>
                    <p>
                      At Ph.D. Assistance, we help you identify relevant
                      industry issues and research problems during the
                      literature review to ensure precise problem identification
                      for your thesis.
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
                        <a href="/services/phd-dissertation/research-proposal">
                          Research Proposal
                        </a>
                      </span>
                    </span>
                    <span className="topic-selection d-block"></span>
                    <p>
                      Crafting a research proposal for a dissertation is
                      challenging, prompting students to seek expert assistance
                      to navigate its complexities.
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
                        <a href="/services/phd-dissertation/phd-dissertation-part">
                          Ph.D. Dissertation (Part)
                        </a>
                      </span>
                    </span>
                    <span className="topic-selection d-block"></span>
                    <p>
                      We offer support for both full and partial dissertation
                      writing, including sections like the Introduction,
                      Literature Review, Methodology, Results, and Discussion.
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
                        <a href="/services/phd-dissertation/phd-consultation">
                          Ph.D. Consultation
                        </a>
                      </span>
                    </span>
                    <span className="topic-selection d-block"></span>
                    <p>
                      We help with choosing a guide and support a range of
                      subjects like Behavioral Science, Business Management,
                      Education, Health, Computer Science, Mathematics, and
                      Engineering Education.
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
                        <a href="/services/phd-dissertation/viva-voce">
                          Viva Voice
                        </a>
                      </span>
                    </span>
                    <span className="topic-selection d-block"></span>
                    <p>
                      The Ph.D. viva is a mandatory part of the examination,
                      typically held "behind closed doors," though some
                      institutions conduct "public" vivas with restricted
                      access.
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
              <h3>Outstanding Ph.D. Pilot Study Features</h3>
            </div>
            <div className="col-md-4">
              <div className="service-features1">
                <i class="fa-solid fa-book-open-reader"></i>
                <h5>Content validity</h5>
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
                <h5>Face Validity</h5>
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
                <h5>Construct Validity</h5>
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
                <h5>Reliability</h5>
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

export default PhdDissertationFull;
