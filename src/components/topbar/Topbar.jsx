import "./topbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function topbar() {
  return (
    <>
      <div className="topbar">
        <div className="top">
          <div className="wrap">
            <div class="container">
              <div class="row">
                <div class="col-md-6 d-flex align-items-center">
                  <p class="mb-0 phone pl-md-2">
                    <a
                      href="#"
                      class="mr-2"
                      style={{ textDecoration: "none", color: "#ffffff" }}
                    >
                      <span
                        class="fa fa-phone mr-1"
                        style={{ color: "#ffffff" }}
                      ></span>{" "}
                      +91-976966466
                    </a>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#ffffff" }}
                    >
                      <span
                        class="fa fa-paper-plane mr-1 ml-4"
                        style={{ color: "#ffffff" }}
                      ></span>{" "}
                      info@phdassistance.com
                    </a>
                  </p>
                </div>
                <div class="col-md-6 d-flex justify-content-md-end">
                  <div class="social-media">
                    <p class="mb-0 d-flex">
                      <a
                        href="https://www.facebook.com/phdassistance/"
                        class="d-flex align-items-center justify-content-center"
                        style={{ textDecoration: "none", color: "#ffffff" }}
                      >
                        <span class="fa fa-facebook">
                          <i class="sr-only">Facebook</i>
                        </span>
                      </a>
                      <a
                        href="https://x.com/phdassistance/"
                        class="d-flex align-items-center justify-content-center"
                        style={{ textDecoration: "none", color: "#ffffff" }}
                      >
                        <span class="fa fa-twitter">
                          <i class="sr-only">Twitter</i>
                        </span>
                      </a>
                      <a
                        href="https://www.instagram.com/phdassistance/"
                        class="d-flex align-items-center justify-content-center"
                        style={{ textDecoration: "none", color: "#ffffff" }}
                      >
                        <span class="fa fa-instagram">
                          <i class="sr-only">Instagram</i>
                        </span>
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UC-mKbdBTZNv5bBoXsMqxqkQ"
                        class="d-flex align-items-center justify-content-center"
                        style={{ textDecoration: "none", color: "#ffffff" }}
                      >
                        <span class="fa fa-youtube">
                          <i class="sr-only">Youtube</i>
                        </span>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/phd-assistance/"
                        class="d-flex align-items-center justify-content-center"
                        style={{ textDecoration: "none", color: "#ffffff" }}
                      >
                        <span class="fa fa-linkedin">
                          <i class="sr-only">LinkedIn</i>
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar
        expand="lg"
        id="ftco-navbar"
        style={{ backgroundColor: "#503C3C" }}
      >
        <Container>
          <Navbar.Brand href="#home" style={{ marginRight: "25px" }}>
            <img
              src="./assets/logo.png"
              width="90"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" style={{ marginLeft: "390px" }}>
              <Nav.Link href="#home" className="mx-2 text-light">
                About
              </Nav.Link>
              <NavDropdown
                title="Services"
                id="basic-nav-dropdown"
                className="mx-2 text-"
                style={{ color: "#141619" }}
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Industries"
                id="basic-nav-dropdown"
                className="mx-2 "
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home" className="mx-2 text-light">
                Pricing
              </Nav.Link>
              <Nav.Link href="#home" className="mx-2 text-light">
                Help-Guide
              </Nav.Link>
              <Nav.Link href="#home" className="mx-2 text-light">
                Contact
              </Nav.Link>
              <Nav.Link href="#home" className="mx-2 text-light">
                Hire A Research Assistant
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default topbar;
