import React, { useEffect, useRef } from "react";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import "./contact.css";
function Contact() {
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
                <h2>Contact Us</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/contact">Contact</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section bg-light">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="wrapper px-md-4">
                <div class="row mb-5">
                  <div class="col-md-3">
                    <div class="dbox w-100 text-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span
                          class="fa fa-map-marker"
                          style={{ color: "white" }}
                        ></span>
                      </div>
                      <div class="text">
                        <p>
                          <span>Address:</span> INDIA 10, Kutty Street,
                          Nungambakkam Chennai – 600 034
                        </p>
                        <p>UK 10 Park Place, Manchester M4 4EY</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="dbox w-100 text-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span
                          class="fa fa-phone"
                          style={{ color: "white" }}
                        ></span>
                      </div>
                      <div class="text">
                        <p>
                          <span>Phone:</span>{" "}
                          <a href="tel://1234567920">India: +91-9176966446</a>
                        </p>
                        <p>
                          <a href="tel://1234567920">UK: +44 7537144372</a>
                        </p>
                        <p>
                          <a href="tel://1234567920">
                            Landline: +91-44-4212 4284
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="dbox w-100 text-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span
                          class="fa fa-paper-plane"
                          style={{ color: "white" }}
                        ></span>
                      </div>
                      <div class="text">
                        <p>
                          <span>Email:</span>{" "}
                          <a href="mailto:info@yoursite.com">
                            info@phdassistance.com
                          </a>
                        </p>
                        <p>
                          <span>For Feedback:</span>{" "}
                          <a href="mailto:info@yoursite.com">
                            feedback@phdassistance.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="dbox w-100 text-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span
                          class="fa fa-globe"
                          style={{ color: "white" }}
                        ></span>
                      </div>
                      <div class="text">
                        <p>
                          <span>Website</span>{" "}
                          <a href="#">www.phdassistance.com</a>
                        </p>
                        <p>
                          <span>Skype</span> <a href="#">PhD Assistance</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row no-gutters">
                  <div class="col-md-7">
                    <div class="contact-wrap w-100 p-md-5 p-4">
                      <h3 class="mb-4">Contact Us</h3>
                      <form
                        method="POST"
                        id="contactForm"
                        name="contactForm"
                        class="contactForm"
                      >
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="label" for="name">
                                Full Name
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                name="name"
                                id="name"
                                placeholder="Name"
                              ></input>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="label" for="email">
                                Email Address
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                              ></input>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <label class="label" for="subject">
                                Subject
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                              ></input>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <label class="label" for="#">
                                Message
                              </label>
                              <textarea
                                name="message"
                                class="form-control"
                                id="message"
                                cols="30"
                                rows="4"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <input
                                type="submit"
                                value="Send Message"
                                class="btn btn-primary"
                              ></input>
                              <div class="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-md-5 order-md-first d-flex align-items-stretch"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Contact;
