import React, { useEffect, useRef } from "react";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import "./order.css";

function Order() {
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
                  <h2>Place Order</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="/order-now">Order Now</a>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section">
            <div className="container">
                <div className="row clearfix">
                    <div className="column form-column col-lg-7 col-md-7 col-md-offset-3 col-sm-6 col-xs-12">
                        <div className="default-form style-two">
                            <form id="porder_form" method="post" name="porder_form" onSubmit="return validate_porder();">
                                <div className="row clearfix">
                                    <div className="col-md-12 col-sm-12 co-xs-12 form-group">
                                        <select id="project_name" name="project_name">
                                            <option value="0">Project</option>
                                            <option value="1">Literature Review</option>
                                            <option value="2">Research Methodology</option>
                                            <option value="3">Data Collection</option>
                                            <option value="4">Systematic Review</option>
                                            <option value="5">Questionnaire Development</option>
                                            <option value="6">Coding & Algorithm-Implementation</option>
                                            <option value="7">Meta-Analysis</option>
                                            <option value="8">Discussion & Conclusions</option>
                                            <option value="9">Power Point Presentation</option>
                                            <option value="10">Online Tutoring/Consultation</option>
                                            <option value="11">Manuscript writing/development/editing/peer-review</option>
                                        </select>
                                        <span id="project_msg"></span>
                                    </div>
                                    <div className="col-md-12 col-sm-12 co-xs-12 form-group">
                                        <input id="project_summery" type="text" name="project_summery" placeholder="Project Summary" />
                                        <span id="summery_msg"></span>
                                    </div>
                                    <div className="col-md-12 col-sm-12 co-xs-12 form-group">
                                        <input id="project_deadline" className="m-ctrl-medium date-picker hasDatepicker" type="text" name="project_deadline" placeholder="Project Deadline" />
                                        <span id="deadline_msg"></span>
                                    </div>
                                    <div className="col-md-6 col-sm-6 co-xs-6 form-group">
                                        <input id="project_address1" type="text" name="project_address1" placeholder="Billing Address Line 1" />
                                        <span id="address1_msg"></span>
                                    </div>
                                    <div className="col-md-6 col-sm-6 co-xs-6 form-group">
                                        <input id="project_address2" type="text" name="project_address2" placeholder="Billing Address Line 2" />
                                        <span id="address2_msg"></span>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="col-md-6 col-sm-6 co-xs-6 form-group">
                                        <select id="project_country" name="project_country" class="selectpicker countrypicker"></select>
                                        <span id="address2_msg"></span>
                                    </div>
                                    <div className="col-md-6 col-sm-6 co-xs-6 form-group">
                                        <input id="project_state" type="text" name="project_state" placeholder="State" />
                                        <span id="state_msg"></span>
                                    </div>
                                    <div className="col-md-6 col-sm-6 co-xs-6 form-group">
                                        <input id="project_city" type="text" name="project_city" placeholder="City" />
                                        <span id="city_msg"></span>
                                    </div>
                                    <div className="col-md-6 col-sm-6 co-xs-6 form-group">
                                        <input id="project_pcode" type="text" name="project_pcode" placeholder="Postal Code" />
                                        <span id="pcode_msg"></span>
                                    </div>
                                    <div className="col-md-6 col-sm-6 co-xs-6 form-group">
                                        <input id="project_pname" type="text" name="project_pname" placeholder="Full Name" />
                                        <span id="pname_msg"></span>
                                    </div>
                                    <div className="col-md-6 col-sm-6 co-xs-6 form-group">
                                        <input id="project_pemail" type="email" name="project_pemail" placeholder="Email Address" />
                                        <span id="pemail_msg"></span>
                                    </div>
                                    <div className="col-md-12 col-sm-12 co-xs-12 form-group">
                                        <input id="project_pcontact" className="isNumber" type="text" name="project_pcontact" placeholder="Phone" />
                                        <span id="pcontact_msg"></span>
                                    </div>
                                    <span id="TxtBoxUSD"></span>
                                    <span id="TxtBoxINR"></span>
                                </div>
                                <div className="order-button">
                                  <button id="submit" className="theme-btn btn-style" type="submit" name="submit">Place Your Order</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  
        <Footer />
      </>
    );
  }
  
  export default Order;