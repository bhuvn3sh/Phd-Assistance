import React, { useEffect, useRef } from "react";
import Topbar from "../../../components/topbar/Topbar";
import Footer from "../../../components/footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";

function Coursework() {
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
                <h2>Ph.D. Coursework Services </h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/services/phd-coursework">Coursework</a>
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
                  Why Ph.D. Assistance for Ph.D. Coursework Services?
                </h2>
                <p>
                  Are you feeling an extremely hectic and frustrating with
                  coursework writing task? Not having time to meet the deadline
                  in writing the coursework assignment? Or Looking the ways to
                  impress the professor to improve your credits by increasing
                  the quality of your work? Enjoy the convenience by getting the
                  high-quality Coursework assignment help from Ph.D.
                  assistance.We empower the Ph.D. Research Student Community
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="">
                <p>
                  Writing Ph.D. coursework can be overwhelming, as it aims to
                  provide students with a broad knowledge base and essential
                  skills for their thesis. The coursework typically includes
                  research methodology, statistics, applied research methods,
                  scientific communication, management principles, social
                  ethics, review writing, presentation and seminar preparation,
                  rubric assignments, literature reviews, referencing styles,
                  research question formulation, and questionnaire development.
                  Engaging with experts who have studied the topic enhances your
                  research, making Ph.D. Assistance a trusted source for
                  international coursework support. Our experienced team offers
                  end-to-end services from Ph.D. admission to job placement,
                  leveraging state-of-the-art infrastructure, exclusive library
                  resources, and classroom facilities.
                </p>
                <p>
                  Our approach begins with understanding the student's country
                  of origin and their specific university or college curriculum
                  to tailor our services accordingly. We then assign a subject
                  matter expert with domain knowledge to the task, ensuring
                  accurate and timely completion. Regular updates and a single
                  point of contact streamline communication, while our process
                  includes understanding the topic, creating an outline,
                  gathering references, interpreting content, copy-editing, and
                  proofreading. At Ph.D. Assistance, we customize solutions to
                  meet all coursework requirements, providing comprehensive
                  support to overcome any writing challenges students may face.
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
              <h2>We Offer Various Coursework Services</h2>
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
                        <a href="/services/phd-coursework/abstract">
                          Ph.D. Abstract Writing
                        </a>
                      </span>
                    </span>
                    <span className="topic-selection d-block"></span>
                    <p>
                      An abstract is a summary written after completing your
                      study, as it is the first content read by examiners. At
                      Ph.D. Assistance, our experts help craft your abstract by
                      thoroughly reviewing your entire dissertation or
                      manuscript.
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
                        <a href="/services/phd-coursework/assignment">
                          Ph.D. Research Papers
                        </a>
                      </span>
                    </span>
                    <span className="topic-selection d-block"></span>
                    <p>
                      Ph.D. Assistance is a one-stop shop for all your research
                      paper writing needs, enhancing writing quality,
                      uniqueness, and ingenuity. We ensure prompt delivery with
                      meticulous investigation and research.
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
                        <a href="/services/phd-coursework/interim-report">Interim Report</a>
                      </span>
                    </span>
                    <span className="topic-selection d-block"></span>
                    <p>
                      An interim report includes a summary, progress
                      description, limited evaluation details, and an overview
                      of the financial situation. It also explains any delays or
                      deviations in plans and compares actual outcomes to
                      expected results.
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
                        <a href="/services/phd-coursework/exam-notes">Ph.D. Exam notes</a>
                      </span>
                    </span>
                    <span className="topic-selection d-block"></span>
                    <p>
                      Ph.D. Assistance offers exam note preparation, helping
                      students achieve high grades in internal assessments and
                      exams. These notes are designed to alleviate the pressure
                      of maintaining good academic performance.
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
                        <a href="/services/phd-coursework/synopsis-preperation">
                          Ph.D. Synopsis preparation
                        </a>
                      </span>
                    </span>
                    <span className="topic-selection d-block"></span>
                    <p>
                      A synopsis summarizes your thesis, presenting its
                      arguments and conclusions. Many Ph.D. candidates struggle
                      with this first impression for examiners, so it must be
                      high-quality and well-argued.
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
                        <a href="/services/phd-coursework/power-point">
                          PowerPoint Preparation
                        </a>
                      </span>
                    </span>
                    <span className="topic-selection d-block"></span>
                    <p>
                      Many students struggle with creating concise PowerPoint
                      presentations, often adding too much content and losing
                      key points. Ph.D. Assistance excels in crafting engaging
                      presentations that highlight relevant information with
                      compelling designs and graphics.
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
              <h3>Outstanding Ph.D. Coursework Features</h3>
            </div>
            <div className="col-md-4">
              <div className="service-features1">
                <i class="fa-solid fa-book-open-reader"></i>
                <h5>Build Questionnaire Free of costs</h5>
                <p>
                  Ph.D. Assistance offers free questionnaire and interview guide
                  development with your full Ph.D. dissertation order, including
                  all formats and validation.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-features1">
                <i class="fa-solid fa-book-bookmark"></i>
                <h5>Complete Primary Research</h5>
                <p>
                  Ph.D. Assistance helps you conduct primary research, including
                  surveys and interviews, managing the time and cost to enhance
                  your Ph.D. study.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="service-features1">
                <i class="fa-regular fa-square-check"></i>
                <h5>Free Appendices</h5>
                <p>
                  Appendices are crucial for validating your Ph.D. research. We
                  provide essential supporting materials like raw data,
                  technical figures, and detailed descriptions at no extra cost.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="service-features1">
                <i class="fa-solid fa-check-double"></i>
                <h5>0% Plagiarism content</h5>
                <p>
                  We ensure 100% plagiarism-free content by thoroughly scanning
                  your work with online tools, Turnitin, and WriteCheck to
                  maintain academic integrity.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-features1">
                <i class="fa-regular fa-circle-user"></i>
                <h5>Quality check</h5>
                <p>
                  We ensure accuracy by rigorously checking your dissertation
                  for language, technical terms, referencing, formatting, and
                  plagiarism.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-features1">
                <i class="fa-regular fa-pen-to-square"></i>
                <h5>Unlimited Revision</h5>
                <p>
                  We offer unlimited revisions, respecting feedback to enhance
                  your research, with revisions provided at no extra cost.
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

export default Coursework;
