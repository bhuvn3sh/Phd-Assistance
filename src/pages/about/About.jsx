import React, { useEffect, useRef } from "react";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import "./about.css";

function About() {
  const countersRef = useRef([]);

  useEffect(() => {
    const animateNumber = (element, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(
          progress * (end - start) + start
        ).toLocaleString();
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const endValue = parseInt(target.getAttribute("data-number"), 10);
          animateNumber(target, 0, endValue, 7000);
          observer.unobserve(target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.95,
    });

    countersRef.current.forEach((counter) => observer.observe(counter));
  }, []);
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
                <h2>About us</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="{Home}">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">About Us</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="about-us"
        style={{ margin: "0px 200px", paddingTop: "100px" }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 img img-3 d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url( ./assets/blog.jpg )" }}
            ></div>
            <div className="col-md-6 wrap-about px-md-5 py-5 bg-light">
              <div className="heading-section">
                <span className="subheading"> Welcome to Phd Assistance </span>
                <h2 className="mb-4">Best Dissertation Writing Services.</h2>
                <p>
                  PhD Assistance, is world’s reputed academic guidance provider
                  for the past 15 years have guided more than 4,500 Ph.D.
                  scholars and 10,500 Masters Students across the globe. We
                  support students, research scholars, entrepreneurs, and
                  professionals from various organizations in providing
                  consistently high-quality writing and data analytical services
                  every time.{" "}
                </p>
                <p>
                  The motive of PhD Assistance is to enable scholars and take
                  them out of tough situations along with providing them full
                  satisfaction. In addition, we also offer university (only UGC
                  recognized) admission support for various national and
                  international universities, selection of guides/supervisor
                  (UGC recognized), job placement for scholars who have
                  successfully completed and pursuing their PhDs.{" "}
                </p>
                <a
                  className="play-video popup-vimeo d-flex align-items-center mt-4 "
                  href="https://youtu.be/0OOA1ShNJn8"
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className=" fa fa-play "></span>
                  </div>
                  <span className="watch">Take a look at our process flow</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section-counter" className="counter">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
              <div className="block-18 py-4 mb-4">
                <div className="text align-items-center">
                  <strong
                    className="number"
                    data-number="3000"
                    ref={(el) => (countersRef.current[0] = el)}
                  >
                    3,000
                  </strong>
                  <span>Satisfied & Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
              <div className="block-18 py-4 mb-4">
                <div className="text align-items-center">
                  <strong
                    className="number"
                    data-number="15"
                    ref={(el) => (countersRef.current[1] = el)}
                  >
                    15
                  </strong>
                  <span>Years of Experience in Business</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
              <div className="block-18 py-4 mb-4">
                <div className="text align-items-center">
                  <strong
                    className="number"
                    data-number="200"
                    ref={(el) => (countersRef.current[2] = el)}
                  >
                    200
                  </strong>
                  <span>Qualified Researchers</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
              <div className="block-18 py-4 mb-4">
                <div className="text align-items-center">
                  <strong
                    className="number"
                    data-number="40"
                    ref={(el) => (countersRef.current[3] = el)}
                  >
                    40
                  </strong>
                  <span>Service Points</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="about-us fix pt-10 section-padding30">
        <div className="support-wrapper align-items-end">
          <div className="left-content">
            <div className="section-tittle section-tittle2 mb-55">
              <div className="front-text">
                <h2>Who we are</h2>
              </div>
              <span className="back-text">About us</span>
            </div>
            <div className="about-caption">
              <p className="pera-top">
                PhD Assistance, is world’s reputed academic guidance provider
                for the past 15 years have guided more than 4,500 Ph.D. scholars
                and 10,500 Masters Students across the globe. We support
                students, research scholars, entrepreneurs, and professionals
                from various organizations in providing consistently
                high-quality writing and data analytical services every time.
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default About;
