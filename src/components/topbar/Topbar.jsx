import "./topbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./custom-style.css";
import React, { useEffect } from "react";
import "./StellarComponent.jsx";

function Topbar() {
  return (
    <>
      <link rel="stylesheet" href="./custom-styles.css"></link>
      <div class="wrap">
        <div class="container">
          <div class="row">
            <div class="col-md-6 d-flex align-items-center">
              <p class="mb-0 phone pl-md-2" style={{ color: "white" }}>
                <span
                  class="fa fa-phone mr-1"
                  style={{ color: "white" }}
                ></span>{" "}
                +91-9176966446&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span
                  class="fa fa-paper-plane mr-1"
                  style={{ color: "white" }}
                ></span>{" "}
                info@phdassistance.com
              </p>
            </div>
            <div class="col-md-6 d-flex justify-content-md-end">
              <div class="social-media">
                <p class="mb-0 d-flex">
                  <a
                    href="https://www.facebook.com/phdassistance/"
                    class="d-flex align-items-center justify-content-center"
                  >
                    <span class="fa fa-facebook">
                      <i class="sr-only">Facebook</i>
                    </span>
                  </a>
                  <a
                    href="https://twitter.com/phdassistance/"
                    class="d-flex align-items-center justify-content-center"
                  >
                    <span class="fa fa-twitter">
                      <i class="sr-only">Twitter</i>
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/phdassistance/"
                    class="d-flex align-items-center justify-content-center"
                  >
                    <span class="fa fa-instagram">
                      <i class="sr-only">Instagram</i>
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/phd-assistance"
                    class="d-flex align-items-center justify-content-center"
                  >
                    <span class="fa fa-linkedin">
                      <i class="sr-only">Linkedin</i>
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav
        class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div class="container">
          <a href="/">
            <img
              src="\assets\WhatsApp Image 2024-08-01 at 16.02.08_f5fe37b9.jpg"
              alt="Counselor Logo"
              style={{ height: "40px" }}
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="oi oi-menu"></span> Menu
          </button>

          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a href="/" class="nav-link">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="/about" class="nav-link">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a href="/" class="nav-link">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a href="services.html" class="nav-link">
                  Industries
                </a>
              </li>
              <li class="nav-item">
                <a href="/pricing" class="nav-link">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a href="blog.html" class="nav-link">
                  Help-Guide
                </a>
              </li>
              <li class="nav-item">
                <a href="/contact" class="nav-link">
                  Contact Us
                </a>
              </li>
              <li class="nav-item">
                <a href="/faqs" class="nav-link">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
}

export default Topbar;
