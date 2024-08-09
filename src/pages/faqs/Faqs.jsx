import React, { useEffect, useRef } from "react";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import "./faqs.css";
function Faqs() {
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
                <h2>FAQs</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/contact">Faqs</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="sections_group">
        <div class="entry-content" itemprop="mainContentOfPage">
          <div
            class="section mcb-section   "
            style={{ paddingTop: "0px", paddingBottom: "0px" }}
          >
            <div class="section_wrapper mcb-section-inner">
              <div class="wrap mcb-wrap one  valign-top clearfix">
                <div class="mcb-wrap-inner">
                  <h3>FAQ (Frequently Asked Questions)</h3>

                  <div class="column mcb-column one column_accordion ">
                    <div class="accordion">
                      <div class="mfn-acc accordion_wrapper ">
                        <div class="question">
                          <div class="title">
                            What are the steps taken to protect my privacy?
                          </div>
                          <div class="answer">
                            PHD assistance has a high code for moral and ethical
                            responsibility; the company never shares anything
                            about the client's personal information, purchase
                            details or financial information with their
                            professor, friend/relative, a spammer or third party
                            under any circumstances.
                          </div>
                        </div>
                        <div class="question">
                          <div class="title">
                            <i class="icon-plus acc-icon-plus"></i>
                            <i class="icon-minus acc-icon-minus"></i>What are
                            your payment methods?
                          </div>
                          <div class="answer">
                            The company accepts Master Card, Visa, Diners, AMEX,
                            Switch or Solo and American Express Debit and Credit
                            Cards. It offers further convenience by offering to
                            carry out the customers' transaction through PayPal,
                            E-Checks and Western Union Money Transfer.
                          </div>
                        </div>
                        <div class="question">
                          <div class="title">
                            <i class="icon-plus acc-icon-plus"></i>
                            <i class="icon-minus acc-icon-minus"></i>Do you take
                            Payment in Installments?
                          </div>
                          <div class="answer">
                            Even though the company's prices are fairly low, to
                            be able to ensure its clients that the company is
                            trustworthy it offer its clients to pay in
                            installments.
                          </div>
                        </div>
                        <div class="question">
                          <div class="title">
                            <i class="icon-plus acc-icon-plus"></i>
                            <i class="icon-minus acc-icon-minus"></i>How do you
                            ensure that the dissertation is not plagiarized or
                            doesn't contain low quality content?
                          </div>
                          <div class="answer">
                            The company's Quality Assurance Officer runs each
                            dissertation on a strict Anti-Plagiarism Scanner and
                            sends the client the Anti Plagiarism Proof Report so
                            that the client is confident that the company's
                            dissertation is 100% Plagiarism-free and he/she can
                            submit it confidently.
                          </div>
                        </div>
                        <div class="question">
                          <div class="title">
                            <i class="icon-plus acc-icon-plus"></i>
                            <i class="icon-minus acc-icon-minus"></i>What is
                            your Refund Policy?
                          </div>
                          <div class="answer">
                            If PhD Assistance does not initiate any contact with
                            the client (such as by Confirmation Email) despite
                            the order being placed, the client is entitled to a
                            full refund of money paid.
                          </div>
                        </div>
                        <div class="question">
                          <div class="title">
                            <i class="icon-plus acc-icon-plus"></i>
                            <i class="icon-minus acc-icon-minus"></i>I need some
                            revisions. Will the writer adhere to my request?
                          </div>
                          <div class="answer">
                            The client's satisfaction means everything to the
                            company. It promise Unlimited Revisions to ensure
                            client's satisfaction and all instructions laid out
                            are followed throughout the dissertation.
                          </div>
                        </div>
                        <div class="question">
                          <div class="title">
                            <i class="icon-plus acc-icon-plus"></i>
                            <i class="icon-minus acc-icon-minus"></i>What is the
                            Ordering Procedure?
                          </div>
                          <div class="answer">
                            Simply fill out the Order Form given on the website
                            with as much detail as possible, as this will be
                            used to fulfill the client's order according to the
                            requirements. Fill in the contact details accurately
                            as the company's Customer Support Representative
                            will send the client an order confirmation email or
                            call back within 12-24 hours for any details that
                            the client may have missed.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Faqs;
