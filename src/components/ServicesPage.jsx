import React from "react";
import HeroSection from "./HeroSection";
import { Col, Container, Row } from "react-bootstrap";
import service_offer from "../assets/images/png/service_offer.png";
import WebDevelopment from "../assets/images/png/WebDevelopment.png";
import AppDevelopment from "../assets/images/png/AppDevelopment.png";
import AppDesigning from "../assets/images/png/AppDesigning.png";
import Web_top from "../assets/images/svg/Web_top.svg";
import Web_bottom from "../assets/images/svg/Web_bottom.svg";
import ExploreArrow from "../assets/images/svg/ExploreArrow.svg";

function ServicesPage() {
  const data = {
    name: "Services",
  };
  return (
    <>
      <HeroSection myData={data} />
      <section className="py-md-5 my-5">
        <Container>
          <Row className=" justify-content-between align-items-center flex-column-reverse flex-md-row">
            <Col xs={12} md={6}>
              <h2
                className=" ff_Roboto fw-bold fs_8xl text_secondary pt-4 pt-md-0"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-offset="0"
              >
                Services we offer
              </h2>
              <p
                className=" ff_Roboto fw-normal fs_xl text_dark pt-3"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                We provide businesses all over the world with end-to-end
                next-generation IT services and solutions for all industry
                verticals. As a reputable provider of information technology
                services, we have the knowledge and know-how to build attractive
                exposure that generates profitable revenue for you to provide
                high-value solutions.
              </p>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={5}
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-offset="0"
            >
              <img className=" w-100" src={service_offer} alt="service_offer" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-md-5 my-5">
        <Container>
          <Row className=" px_xsm_5 px-md-0">
            <Col
              xs={12}
              md={6}
              lg={4}
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-offset="200"
              className=" position-relative py-2"
            >
              <img
                className=" position-absolute top-0 start-0"
                src={Web_top}
                alt="Web_top"
              />
              <img
                className=" position-absolute bottom-0 end-0"
                src={Web_bottom}
                alt="Web_bottom"
              />
              <div className=" box_shadow_Services p-3 my-1 position-relative index_1 h-100">
                <div className="text-center">
                  <img src={WebDevelopment} alt="WebDevelopment" />
                  <h2 className=" ff_Roboto fw_medium fs_3xl text_dark pt-3">
                    Web Development
                  </h2>
                </div>
                <p className=" ff_Roboto fw-normal fs_xl text_lightdark pt-4">
                  We create and provide high-quality, responsive websites that
                  are available on the web, mobile devices, and tablets. Our
                  websites range from simple webpages to large portals.
                </p>
                <ul className="ListImage mb-0">
                  <li className=" ff_Roboto fw-normal fs_xl text_lightdark pb-2 ps-2">
                    React Development
                  </li>
                  <li className=" ff_Roboto fw-normal fs_xl text_lightdark pb-2  ps-2">
                    <span className="">HTML / CSS Development</span>
                  </li>
                  <li className=" ff_Roboto fw-normal fs_xl text_lightdark pb-2  ps-2">
                    Wordpress Development
                  </li>
                  <li className=" ff_Roboto fw-normal fs_xl text_lightdark pb-2  ps-2">
                    Laravel Development
                  </li>
                  <li className=" ff_Roboto fw-normal fs_xl text_lightdark pb-2  ps-2">
                    UI/UX Development
                  </li>
                  <li className=" ff_Roboto fw-normal fs_xl text_lightdark pb-2  ps-2">
                    Corporate Website Development
                  </li>
                </ul>
                <div className=" d-flex align-items-center justify-content-end">
                  <img
                    className="lr_animtion"
                    src={ExploreArrow}
                    alt="ExploreArrow"
                  />
                  <a
                    href="#"
                    className=" ff_Roboto fw-normal fs_lg text_secondary ms-2 Read_hover"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={4}
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-offset="200"
              className=" position-relative py-2  mt-4 mt-md-0"
            >
              <img
                className=" position-absolute top-0 start-0"
                src={Web_top}
                alt="Web_top"
              />
              <img
                className=" position-absolute bottom-0 end-0"
                src={Web_bottom}
                alt="Web_bottom"
              />
              <div className=" box_shadow_Services p-3 my-1 position-relative index_1 h-100">
                <div className="text-center">
                  <img src={AppDevelopment} alt="AppDevelopment" />
                  <h2 className=" ff_Roboto fw_medium fs_3xl text_dark pt-3">
                    App Development
                  </h2>
                </div>
                <p className=" ff_Roboto fw-normal fs_xl text_lightdark pt-4">
                  We offer user-focused and incredibly alluring mobile app
                  solutions that are tailored for every business model,
                  including iPhone and Android apps.
                </p>
                <ul className="ListImage mb-0">
                  <li className=" ff_Roboto fw-normal fs_xl text_lightdark pb-2 ps-2">
                    Flutter Development
                  </li>
                  <li className=" ff_Roboto fw-normal fs_xl text_lightdark pb-2  ps-2">
                    React Native Development
                  </li>
                  <li className=" ff_Roboto fw-normal fs_xl text_lightdark pb-2  ps-2">
                    Android / IOS Application
                  </li>
                  <li className=" ff_Roboto fw-normal fs_xl text_lightdark pb-2  ps-2">
                    Cross Platform Application
                  </li>
                  <li className=" ff_Roboto fw-normal fs_xl text_lightdark pb-2  ps-2">
                    UI/ UX Design
                  </li>
                  <li className=" ff_Roboto fw-normal fs_xl text_lightdark pb-2  ps-2">
                    App Maintenance
                  </li>
                </ul>
                <div className=" d-flex align-items-center justify-content-end">
                  <img
                    className="lr_animtion"
                    src={ExploreArrow}
                    alt="ExploreArrow"
                  />
                  <a
                    href="#"
                    className=" ff_Roboto fw-normal fs_lg text_secondary ms-2 Read_hover"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={4}
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="500"
              data-aos-offset="200"
              className=" position-relative py-2 mt-4 mt-lg-0"
            >
              <img
                className=" position-absolute top-0 start-0"
                src={Web_top}
                alt="Web_top"
              />
              <img
                className=" position-absolute bottom-0 end-0"
                src={Web_bottom}
                alt="Web_bottom"
              />
              <div className=" box_shadow_Services p-3 my-1 position-relative index_1 h-100">
                <div className="text-center">
                  <img src={AppDesigning} alt="AppDesigning" />
                  <h2 className=" ff_Roboto fw_medium fs_3xl text_dark pt-3">
                    Web / App Designing
                  </h2>
                </div>
                <p className=" ff_Roboto fw-normal fs_xl text_lightdark pt-4">
                  With the exquisite precision of our knowledge, we design great
                  digital experiences for startups, small businesses, and
                  medium-sized enterprises.
                </p>
                <ul className="ListImage mb-0">
                  <li className=" ff_Roboto fw-normal fs_xl text_lightdark pb-2 ps-2">
                    Responsive Web and App Design
                  </li>
                  <li className=" ff_Roboto fw-normal fs_xl text_lightdark pb-2  ps-2">
                    Design Themes
                  </li>
                  <li className=" ff_Roboto fw-normal fs_xl text_lightdark pb-2  ps-2">
                    Corporate Websites Design
                  </li>
                  <li className=" ff_Roboto fw-normal fs_xl text_lightdark pb-2  ps-2">
                    Forms and Email Templates
                  </li>
                  <li className=" ff_Roboto fw-normal fs_xl text_lightdark pb-2  ps-2">
                    E-commerce Web / App Design
                  </li>
                  <li className=" ff_Roboto fw-normal fs_xl text_lightdark pb-2  ps-2">
                    Other UI / UX Designing
                  </li>
                </ul>
                <div className=" d-flex align-items-center justify-content-end">
                  <img
                    className="lr_animtion"
                    src={ExploreArrow}
                    alt="ExploreArrow"
                  />
                  <a
                    href="#"
                    className=" ff_Roboto fw-normal fs_lg text_secondary ms-2 Read_hover"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <div className="px_xsm_5">
            <h2
              className=" ff_Roboto fw_medium fs_5xl text_secondary pb-lg-3 pt-5 mt-lg-5"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-offset="200"
            >
              Web Development Services
            </h2>
            <Row>
              <Col xs={12} sm={6} lg={3}>
                <ul className="mb-0 ListImageRed ps-3">
                  <li
                    className="ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      React Development
                    </span>
                  </li>
                  <li
                    className="ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      HTML / Css Development
                    </span>
                  </li>
                  <li
                    className="ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="300"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Wordpress Development
                    </span>
                  </li>
                  <li
                    className="ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="400"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      JavaScript Development
                    </span>
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={6} lg={3}>
                <ul className="mb-0 ListImageRed ps-3">
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Laravel Development
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Blog Website Development
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="300"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Event Website Development
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="400"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Hotel and Booking Websites
                    </span>
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={6} lg={3}>
                <ul className="mb-0 ListImageRed ps-3">
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      E-commerce development
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Portfolio Development
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="300"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      School Management
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="400"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Corporate Website Development
                    </span>
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={6} lg={3}>
                <ul className="mb-0 ListImageRed ps-3">
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Business Website Development
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Personal Website Development
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Education Website Development
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
            <h2
              className=" ff_Roboto fw_medium fs_5xl text_secondary pb-lg-3 pt-5"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-offset="100"
            >
              App Development Services
            </h2>
            <Row>
              <Col xs={12} sm={6} lg={3}>
                <ul className="mb-0 ListImageRed ps-3">
                  <li
                    className="ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Flutter Development
                    </span>
                  </li>
                  <li
                    className="ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      React Native Development
                    </span>
                  </li>
                  <li
                    className="ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="300"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Android / IOS Development
                    </span>
                  </li>
                  <li
                    className="ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="400"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Hybrid App Development
                    </span>
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={6} lg={3}>
                <ul className="mb-0 ListImageRed ps-3">
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Vehicle Booking App
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Delivery App
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="300"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Logistics App
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="400"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Home Service App
                    </span>
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={6} lg={3}>
                <ul className="mb-0 ListImageRed ps-3">
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Beauty Service App
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Doctor & Appointment App
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="300"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      E-Learning App
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="400"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Taxi On-Demand App
                    </span>
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={6} lg={3}>
                <ul className="mb-0 ListImageRed ps-3">
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      E-commerce App Development
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Food Order App Development
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="300"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Social Media App Development
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="400"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Matrimony App Development
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
            <h2
              className=" ff_Roboto fw_medium fs_5xl text_secondary pb-lg-3 pt-5"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-offset="100"
            >
              Web / App Designing Services
            </h2>
            <Row>
              <Col xs={12} sm={6} lg={3}>
                <ul className="  ps-3 mb-0 ListImageRed">
                  <li
                    className="ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Figma Designing
                    </span>
                  </li>
                  <li
                    className="ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Adobe XD Designing
                    </span>
                  </li>
                  <li
                    className="ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="300"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      CorelDraw Designing
                    </span>
                  </li>
                  <li
                    className="ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="400"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Photoshop / Video Editing
                    </span>
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={6} lg={3}>
                <ul className="mb-0 ListImageRed ps-3">
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      E-commerce Design
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Portfolio Design
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="300"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Blog Website Design
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="400"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Business Website Design
                    </span>
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={6} lg={3}>
                <ul className="mb-0 ListImageRed ps-3">
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Delivery App UI Design
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Logistic App UI
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="300"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Design Dating App UI Design
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="400"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Social Media App Design
                    </span>
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={6} lg={3}>
                <ul className="mb-0 ListImageRed ps-3">
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Chatting App Design
                    </span>
                  </li>
                  <li
                    className=" ps-2 pt-2"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-offset="100"
                  >
                    <span className="ff_Roboto fw-normal fs_lg text_dark opacity_07">
                      Educational App Design
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ServicesPage;
