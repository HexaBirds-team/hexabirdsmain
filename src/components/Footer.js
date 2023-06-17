import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footer_logo from "../assets/images/svg/footer_logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="tr_to_black mt-5">
        <div className="bg_red_to_tr pt-5">
          <Container className="py-5">
            <Row className=" pb-lg-5">
              {" "}
              <Col
                xs={12}
                sm={6}
                lg={4}
                xl={3}
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-offset="0"
              >
                <div className=" position-relative p-4 footer_box rounded-5">
                  <img
                    className=" position-absolute start-50 translate-middle-x top_n_44"
                    src={footer_logo}
                    alt="footer_logo"
                  />
                  <p className=" ff_Roboto fw-normal fs_xl text_primary pt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas libero elit, auctor eget urna et, ultricies
                    imperdiet urna. Curabitur gravida.
                  </p>
                </div>
              </Col>
              <Col
                xs={12}
                sm={6}
                lg={3}
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="200"
                data-aos-offset="0"
              >
                <div className="ps-xl-5 pe-xl-1 pt-4 pt-lg-0">
                  <h2 className=" ff_Roboto fw-bold fs_2xl text_dark">
                    Office
                  </h2>
                  <p className=" ff_Roboto fw-normal fs_xl text_primary">
                    1st Floor, Bansal Complex, Opp. Local Bus Stand, Rishi
                    Nagar, Hisar - 125001
                  </p>
                  <a className="hover_svg" href="#">
                    <svg
                      width="28"
                      height="22"
                      viewBox="0 0 28 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.075 2.5C26.1125 2.9375 25.075 3.225 24 3.3625C25.1 2.7 25.95 1.65 26.35 0.3875C25.3125 1.0125 24.1625 1.45 22.95 1.7C21.9625 0.625 20.575 0 19 0C16.0625 0 13.6625 2.4 13.6625 5.3625C13.6625 5.7875 13.7125 6.2 13.8 6.5875C9.35005 6.3625 5.38755 4.225 2.75005 0.9875C2.28755 1.775 2.02505 2.7 2.02505 3.675C2.02505 5.5375 2.96255 7.1875 4.41255 8.125C3.52505 8.125 2.70005 7.875 1.97505 7.5V7.5375C1.97505 10.1375 3.82505 12.3125 6.27505 12.8C5.48846 13.0153 4.66267 13.0452 3.86255 12.8875C4.20206 13.9531 4.86697 14.8855 5.76382 15.5537C6.66067 16.2218 7.74436 16.5921 8.86255 16.6125C6.96709 18.113 4.61754 18.9241 2.20005 18.9125C1.77505 18.9125 1.35005 18.8875 0.925049 18.8375C3.30005 20.3625 6.12505 21.25 9.15005 21.25C19 21.25 24.4125 13.075 24.4125 5.9875C24.4125 5.75 24.4125 5.525 24.4 5.2875C25.45 4.5375 26.35 3.5875 27.075 2.5Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a className="ms-4 hover_svg" href="#">
                    <svg
                      width="14"
                      height="24"
                      viewBox="0 0 14 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.49744 23.875H8.49744V13.8625H13.0024L13.4974 8.8875H8.49744V6.375C8.49744 6.04348 8.62914 5.72554 8.86356 5.49112C9.09798 5.2567 9.41592 5.125 9.74744 5.125H13.4974V0.125H9.74744C8.08984 0.125 6.50013 0.78348 5.32802 1.95558C4.15592 3.12769 3.49744 4.7174 3.49744 6.375V8.8875H0.997441L0.502441 13.8625H3.49744V23.875Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a className="ms-4 hover_svg" href="#">
                    <svg
                      width="26"
                      height="18"
                      viewBox="0 0 26 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5 12.75L16.9875 9L10.5 5.25V12.75ZM24.95 2.9625C25.1125 3.55 25.225 4.3375 25.3 5.3375C25.3875 6.3375 25.425 7.2 25.425 7.95L25.5 9C25.5 11.7375 25.3 13.75 24.95 15.0375C24.6375 16.1625 23.9125 16.8875 22.7875 17.2C22.2 17.3625 21.125 17.475 19.475 17.55C17.85 17.6375 16.3625 17.675 14.9875 17.675L13 17.75C7.7625 17.75 4.5 17.55 3.2125 17.2C2.0875 16.8875 1.3625 16.1625 1.05 15.0375C0.8875 14.45 0.775 13.6625 0.7 12.6625C0.6125 11.6625 0.575 10.8 0.575 10.05L0.5 9C0.5 6.2625 0.7 4.25 1.05 2.9625C1.3625 1.8375 2.0875 1.1125 3.2125 0.8C3.8 0.6375 4.875 0.525 6.525 0.45C8.15 0.3625 9.6375 0.325 11.0125 0.325L13 0.25C18.2375 0.25 21.5 0.45 22.7875 0.8C23.9125 1.1125 24.6375 1.8375 24.95 2.9625Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a className="ms-4 hover_svg" href="#">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 7.375C11.8875 7.375 10.7999 7.7049 9.87492 8.32298C8.94989 8.94107 8.22892 9.81957 7.80318 10.8474C7.37744 11.8752 7.26604 13.0062 7.48308 14.0974C7.70013 15.1885 8.23585 16.1908 9.02252 16.9775C9.80919 17.7641 10.8115 18.2999 11.9026 18.5169C12.9938 18.734 14.1248 18.6226 15.1526 18.1968C16.1804 17.7711 17.0589 17.0501 17.677 16.1251C18.2951 15.2001 18.625 14.1125 18.625 13C18.6234 11.5086 18.0303 10.0788 16.9758 9.02424C15.9212 7.96968 14.4914 7.37655 13 7.375ZM13 15.8125C12.4437 15.8125 11.9 15.6476 11.4375 15.3385C10.9749 15.0295 10.6145 14.5902 10.4016 14.0763C10.1887 13.5624 10.133 12.9969 10.2415 12.4513C10.3501 11.9057 10.6179 11.4046 11.0113 11.0113C11.4046 10.6179 11.9057 10.3501 12.4513 10.2415C12.9969 10.133 13.5624 10.1887 14.0763 10.4016C14.5902 10.6145 15.0295 10.9749 15.3385 11.4375C15.6476 11.9 15.8125 12.4437 15.8125 13C15.8125 13.7459 15.5162 14.4613 14.9887 14.9887C14.4613 15.5162 13.7459 15.8125 13 15.8125ZM18.625 0.34375H7.375C5.51086 0.345921 3.7237 1.08741 2.40555 2.40555C1.08741 3.7237 0.345921 5.51086 0.34375 7.375V18.625C0.345921 20.4891 1.08741 22.2763 2.40555 23.5944C3.7237 24.9126 5.51086 25.6541 7.375 25.6562H18.625C20.4891 25.6541 22.2763 24.9126 23.5944 23.5944C24.9126 22.2763 25.6541 20.4891 25.6562 18.625V7.375C25.6541 5.51086 24.9126 3.7237 23.5944 2.40555C22.2763 1.08741 20.4891 0.345921 18.625 0.34375ZM22.8438 18.625C22.8438 19.7439 22.3993 20.8169 21.6081 21.6081C20.8169 22.3993 19.7439 22.8438 18.625 22.8438H7.375C6.25612 22.8438 5.18306 22.3993 4.39189 21.6081C3.60072 20.8169 3.15625 19.7439 3.15625 18.625V7.375C3.15625 6.25612 3.60072 5.18306 4.39189 4.39189C5.18306 3.60072 6.25612 3.15625 7.375 3.15625H18.625C19.7439 3.15625 20.8169 3.60072 21.6081 4.39189C22.3993 5.18306 22.8438 6.25612 22.8438 7.375V18.625ZM20.9688 6.90625C20.9688 7.27709 20.8588 7.6396 20.6528 7.94794C20.4467 8.25629 20.1539 8.49661 19.8113 8.63852C19.4687 8.78044 19.0917 8.81757 18.728 8.74522C18.3642 8.67288 18.0301 8.4943 17.7679 8.23207C17.5057 7.96985 17.3271 7.63576 17.2548 7.27204C17.1824 6.90833 17.2196 6.53133 17.3615 6.18872C17.5034 5.84611 17.7437 5.55327 18.0521 5.34724C18.3604 5.14122 18.7229 5.03125 19.0938 5.03125C19.591 5.03125 20.0679 5.22879 20.4196 5.58043C20.7712 5.93206 20.9688 6.40897 20.9688 6.90625Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </Col>
              <Col
                xs={6}
                lg={2}
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <ul className="ps-0 ps-lg-5 pt-lg-0 pt-4">
                  <li className=" ff_Roboto fw-bold fs_2xl text_dark">
                    Services
                  </li>
                  <li>
                    <Link to="/Services">
                      <a
                        className=" ff_Roboto fw-normal fs_xl text_primary mt-2 d-inline-block Read_hover"
                        href="#"
                      >
                        Websites
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Services">
                      <a
                        className=" ff_Roboto fw-normal fs_xl text_primary mt-2 d-inline-block Read_hover"
                        href="#"
                      >
                        Mobile Apps
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Services">
                      <a
                        className=" ff_Roboto fw-normal fs_xl text_primary mt-2 d-inline-block Read_hover"
                        href="#"
                      >
                        Backend
                      </a>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/Services">
                      <a
                        className=" ff_Roboto fw-normal fs_xl text_primary mt-2 d-inline-block Read_hover"
                        href="#"
                      >
                        CMS
                      </a>{" "}
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col
                xs={6}
                lg={3}
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="400"
                data-aos-offset="0"
              >
                <ul className="ps-0 ps-lg-5  pt-lg-0 pt-4">
                  <li className=" ff_Roboto fw-bold fs_2xl text_dark">
                    Quick Links
                  </li>
                  <li>
                    <Link to="/">
                      <a
                        className=" ff_Roboto fw-normal fs_xl text_primary mt-2 d-inline-block Read_hover"
                        href="#"
                      >
                        Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/About">
                      <a
                        className=" ff_Roboto fw-normal fs_xl text_primary mt-2 d-inline-block Read_hover"
                        href="#"
                      >
                        About
                      </a>{" "}
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/Projects">
                      <a
                        className=" ff_Roboto fw-normal fs_xl text_primary mt-2 d-inline-block Read_hover"
                        href="#"
                      >
                        Projects
                      </a>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/Career">
                      <a
                        className=" ff_Roboto fw-normal fs_xl text_primary mt-2 d-inline-block Read_hover"
                        href="#"
                      >
                        Career
                      </a>{" "}
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/Contact">
                      <a
                        className=" ff_Roboto fw-normal fs_xl text_primary mt-2 d-inline-block Read_hover"
                        href="#"
                      >
                        Contact
                      </a>{" "}
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="bg_ dark pt-5 pb-2 position-relative">
          <Container className=" d-flex  justify-content-between flex-column flex-sm-row pt-md-5 pt-3">
            <h2 className=" ff_Roboto fw-normal fs_16xl text_black_red text-uppercase position-absolute hexabirds_word start-50 translate-middle-x">
              HEXABIRDS
            </h2>
            <p
              className=" ff_Roboto fw-normal fs_xl text_primary text-center"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-offset="0"
            >
              © 2023 Hexabirds Private Limited. All rights reserved.
            </p>
            <p
              className=" ff_Roboto fw-normal fs_xl text_primary ps-4 text-center"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              Designed and Developed by HEXABIRDS
            </p>
          </Container>
        </div>
      </footer>
    </>
  );
}

export default Footer;
