import React, { useState, useRef } from "react";
import Slider from "react-slick";
import hexabirds_intro from "../assets/Video/hexabirds_intro.mp4";
import Red_wave from "../assets/images/svg/Red_wave.svg";
import Quality from "../assets/images/png/Qservice.png";
import Expert_Team from "../assets/images/png/Expert_Team.png";
import Excellent_Support from "../assets/images/png/Excellent_Support.png";
import Management from "../assets/images/png/Management.png";
import TeamWork from "../assets/images/png/TeamWork.png";
import BalinaJosef from "../assets/images/png/BalinaJosef.png";
import Testimonials_wave from "../assets/images/png/Testimonials_wave.png";
import NextArrow from "../assets/images/svg/NextArrow.svg";
import PreArrow from "../assets/images/svg/PreArrow.svg";
import Red_Gubbare from "../assets/images/svg/Red_Gubbare.svg";
import yellow_circle from "../assets/images/svg/yellow_circle.svg";
import ListImageRed from "../assets/images/svg/ListImageRed.svg";
import Curve_line from "../assets/images/svg/Curve_line.svg";
import Girl_Images from "../assets/images/png/Girl_Images.png";
import TheBest from "../assets/images/png/TheBest.png";
import EmailGif from "../assets/images/Gif/EmailGif.gif";
import TestimonialsDummyData from "./TestimonialsDummyData";

import { Col, Container, Row } from "react-bootstrap";
import DummyData from "./DummyData";
import Footer from "./Footer";
function Hero() {
  const sliderRef1 = React.useRef(null);
  const sliderRef2 = React.useRef(null);
  const settings = {
    infinite: true,
    autoplaySpeed: 3000,
    speed: 800,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    // asNavFor: sliderRef2,
    // beforeChange: (oldIndex, i) => {},
  };
  const settings2 = {
    arrows: false,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 800,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    // asNavFor: sliderRef1,
  };
  const settings3 = {
    autoplay: true,
    infinite: true,
    arrows: false,
    slidesToScroll: 1,
    dots: false,
    className: "center",
    centerMode: true,
    slidesToShow: 1.68,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <>
      <section className=" position-relative">
        <div className="over_ley">
          <video
            src={hexabirds_intro}
            autoPlay
            loop
            muted
            className="w-100 video_overley mb-0"
          ></video>
        </div>
        <div className=" position-absolute top_22 start-50 translate-middle top-50 w-100 index_1">
          <Container>
            <div className="text-center">
              <h2 className=" ff_Hyeon fw-normal fs_4xl text_primary opacity_07">
                Ready for the Future
              </h2>
              <h2 className=" ff_Inter fw-bold fs_12xl text_primary">
                Where Innovation Meets
                <span className=" d-md-block">The Real World</span>
              </h2>
              <p className=" ff_Roboto fw-normal fs_3xl text_primary">
                With a smart combination of Creativity, Strategy and Technology;
                <span className=" d-md-block">
                  We help our clients to grow their startups
                </span>
              </p>
            </div>
          </Container>
        </div>
        <img
          className="Red_wave start-0 w-100 position-absolute "
          src={Red_wave}
          alt="Red_wave"
        />
        {/* <img
          className=" position-absolute top-50 translate-middle-y end-0
        "
          src={EmailGif}
          alt="EmailGif"
        /> */}
      </section>
      <section>
        <Container>
          <Row className=" px_xsm_5 px-sm-0">
            <Col xs={12} sm={6} lg={3} className="pt-5 mt-4">
              <div className="cards px-4 py-3 text-center position-relative h-100">
                <img
                  className=" position-absolute start-50 translate-middle-x top_px_n_57 "
                  src={Quality}
                  alt="Quality Service"
                />
                <h2 className=" ff_Inter fs_3xl fw_medium text_dark pb-3 mb-0 pt-5">
                  Quality Service
                </h2>
                <p className=" ff_Roboto fw-normal fs_xl text_dark">
                  We are always focused on Quality instead of Quantity
                </p>
              </div>
            </Col>
            <Col xs={12} sm={6} lg={3} className="pt-5 mt-4">
              <div className="cards px-4 py-3 text-center position-relative h-100">
                <img
                  className=" position-absolute start-50 translate-middle-x top_px_n_57 "
                  src={Expert_Team}
                  alt="Expert Team"
                />
                <h2 className=" ff_Inter fs_3xl fw_medium text_dark pb-3 mb-0 pt-5">
                  Expert Team
                </h2>
                <p className=" ff_Roboto fw-normal fs_xl text_dark">
                  Have the chance to speak with highly skilled developers.
                </p>
              </div>
            </Col>
            <Col xs={12} sm={6} lg={3} className="pt-5 mt-4">
              <div className="cards px-4 py-3 text-center position-relative h-100">
                <img
                  className=" position-absolute start-50 translate-middle-x top_px_n_57 "
                  src={Excellent_Support}
                  alt="Excellent Support"
                />
                <h2 className=" ff_Inter fs_3xl fw_medium text_dark pb-3 mb-0 pt-5">
                  Excellent Support
                </h2>
                <p className=" ff_Roboto fw-normal fs_xl text_dark">
                  We provide assistance every day of the week.
                </p>
              </div>
            </Col>
            <Col xs={12} sm={6} lg={3} className="pt-5 mt-4">
              <div className="cards px-4 py-3 text-center position-relative h-100">
                <img
                  className=" position-absolute start-50 translate-middle-x top_px_n_57 "
                  src={Management}
                  alt="Management"
                />
                <h2 className=" ff_Inter fs_3xl fw_medium text_dark pb-3 mb-0 pt-5">
                  Management
                </h2>
                <p className=" ff_Roboto fw-normal fs_xl text_dark">
                  Greatest management group you’ve ever worked with.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pb-5 ">
        <Container fluid className="pe-xl-0 py-5 my-md-5">
          <div className=" d-xl-flex pb-lg-5 mb-lg-5">
            <h2 className=" ff_Roboto fw_medium fs_11xl text_dark text-center writing_lr pt-5 mt-3">
              DEDICATED <span className=" d-xl-block">TEAM</span>
            </h2>
            <div className=" position-relative">
              <img className="w-100" src={TeamWork} alt="TeamWork" />
              <div className="bg_dark position_lg_absolute translate_middle_lg_x start-50 team_paragraph text-end p-4">
                <p className=" ff_Roboto fw-normal fs_2xl text_primary text-center px-md-2 mb_n_14 pb-3 pb-sm-0">
                  Our dedicated team is made up of professionals with diverse
                  backgrounds and complementary skills. Our team is passionate
                  about delivering high-quality work and providing exceptional
                  service to our clients. We pride ourselves on our ability to
                  collaborate effectively and communicate clearly, both with
                  each other and with our clients.
                </p>
                <svg
                  className="lr_animtion"
                  width="68"
                  height="16"
                  viewBox="0 0 68 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M67.7071 8.70711C68.0976 8.31658 68.0976 7.68342 67.7071 7.29289L61.3431 0.928932C60.9526 0.538408 60.3195 0.538408 59.9289 0.928932C59.5384 1.31946 59.5384 1.95262 59.9289 2.34315L65.5858 8L59.9289 13.6569C59.5384 14.0474 59.5384 14.6805 59.9289 15.0711C60.3195 15.4616 60.9526 15.4616 61.3431 15.0711L67.7071 8.70711ZM0 9L67 9V7L0 7L0 9Z"
                    fill="white"
                  />
                </svg>
                <a
                  className=" ff_Roboto fw-normal fs_2xl text_primary me-3 know_hover ps-3"
                  href="#"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className=" bg_red_to_tr py-5 mt-sm-5 ps-xl-4 position-relative">
        <Container fluid>
          <Row>
            <h2 className=" ff_Roboto fw-normal fs_14xl text_black_white text-uppercase text-center start-0 position-absolute Our_services">
              OUR SERVICES
            </h2>
            <Col xs={12} xl={10}>
              <Row>
                <Col xs={12} sm={6} lg={4} className="pt-sm-5">
                  <div className=" position-relative Service_card p-4 ps-5 h-100">
                    <h2 className=" ff_Roboto fw-normal fs_2xl text_primary">
                      Websites
                    </h2>
                    <p className=" ff_Roboto fw-normal fs_md text_primary opacity_07 pe-4 pe-xxl-5">
                      Nullam neque nibh, tempus et nisl ac, faucibus pretium
                      enim. Sed scelerisque urna a nisl vestibulum ultricies.
                    </p>{" "}
                    <svg
                      className="lr_animtion"
                      width="68"
                      height="16"
                      viewBox="0 0 68 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M67.7071 8.70711C68.0976 8.31658 68.0976 7.68342 67.7071 7.29289L61.3431 0.928932C60.9526 0.538408 60.3195 0.538408 59.9289 0.928932C59.5384 1.31946 59.5384 1.95262 59.9289 2.34315L65.5858 8L59.9289 13.6569C59.5384 14.0474 59.5384 14.6805 59.9289 15.0711C60.3195 15.4616 60.9526 15.4616 61.3431 15.0711L67.7071 8.70711ZM0 9L67 9V7L0 7L0 9Z"
                        fill="white"
                      />
                    </svg>
                    <a
                      className=" ff_Roboto fw-normal fs_md text_primary me-3 Read_hover ps-3"
                      href="#"
                    >
                      Read More
                    </a>
                    <span className="dots d-inline-block rounded-circle position-absolute top_10 start_10"></span>
                    <span className="dots d-inline-block rounded-circle position-absolute top_10 end_10"></span>
                    <span className="dots d-inline-block rounded-circle position-absolute bottom_10 start_10"></span>
                    <span className="dots d-inline-block rounded-circle position-absolute bottom_10 end_10"></span>
                  </div>
                </Col>
                <Col xs={12} sm={6} lg={4} className="pt-5">
                  <div className=" position-relative Service_card p-4 ps-5 h-100">
                    <h2 className=" ff_Roboto fw-normal fs_2xl text_primary">
                      Mobile App
                    </h2>
                    <p className=" ff_Roboto fw-normal fs_md text_primary opacity_07 pe-4 pe-xxl-5">
                      Nullam neque nibh, tempus et nisl ac, faucibus pretium
                      enim. Sed scelerisque urna a nisl vestibulum ultricies.
                    </p>{" "}
                    <svg
                      className="lr_animtion"
                      width="68"
                      height="16"
                      viewBox="0 0 68 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M67.7071 8.70711C68.0976 8.31658 68.0976 7.68342 67.7071 7.29289L61.3431 0.928932C60.9526 0.538408 60.3195 0.538408 59.9289 0.928932C59.5384 1.31946 59.5384 1.95262 59.9289 2.34315L65.5858 8L59.9289 13.6569C59.5384 14.0474 59.5384 14.6805 59.9289 15.0711C60.3195 15.4616 60.9526 15.4616 61.3431 15.0711L67.7071 8.70711ZM0 9L67 9V7L0 7L0 9Z"
                        fill="white"
                      />
                    </svg>
                    <a
                      className=" ff_Roboto fw-normal fs_md text_primary me-3 Read_hover ps-3"
                      href="#"
                    >
                      Read More
                    </a>
                    <span className="dots d-inline-block rounded-circle position-absolute top_10 start_10"></span>
                    <span className="dots d-inline-block rounded-circle position-absolute top_10 end_10"></span>
                    <span className="dots d-inline-block rounded-circle position-absolute bottom_10 start_10"></span>
                    <span className="dots d-inline-block rounded-circle position-absolute bottom_10 end_10"></span>
                  </div>
                </Col>
                <Col xs={12} sm={6} lg={4} className="pt-5">
                  <div className=" position-relative Service_card p-4 ps-5 h-100">
                    <h2 className=" ff_Roboto fw-normal fs_2xl text_primary">
                      Backend
                    </h2>
                    <p className=" ff_Roboto fw-normal fs_md text_primary opacity_07 pe-4 pe-xxl-5">
                      Nullam neque nibh, tempus et nisl ac, faucibus pretium
                      enim. Sed scelerisque urna a nisl vestibulum ultricies.
                    </p>{" "}
                    <svg
                      className="lr_animtion"
                      width="68"
                      height="16"
                      viewBox="0 0 68 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M67.7071 8.70711C68.0976 8.31658 68.0976 7.68342 67.7071 7.29289L61.3431 0.928932C60.9526 0.538408 60.3195 0.538408 59.9289 0.928932C59.5384 1.31946 59.5384 1.95262 59.9289 2.34315L65.5858 8L59.9289 13.6569C59.5384 14.0474 59.5384 14.6805 59.9289 15.0711C60.3195 15.4616 60.9526 15.4616 61.3431 15.0711L67.7071 8.70711ZM0 9L67 9V7L0 7L0 9Z"
                        fill="white"
                      />
                    </svg>
                    <a
                      className=" ff_Roboto fw-normal fs_md text_primary me-3 Read_hover ps-3"
                      href="#"
                    >
                      Read More
                    </a>
                    <span className="dots d-inline-block rounded-circle position-absolute top_10 start_10"></span>
                    <span className="dots d-inline-block rounded-circle position-absolute top_10 end_10"></span>
                    <span className="dots d-inline-block rounded-circle position-absolute bottom_10 start_10"></span>
                    <span className="dots d-inline-block rounded-circle position-absolute bottom_10 end_10"></span>
                  </div>
                </Col>
                <Col xs={12} sm={6} lg={4} className="pt-5">
                  <div className=" position-relative Service_card p-4 ps-5 h-100">
                    <h2 className=" ff_Roboto fw-normal fs_2xl text_primary">
                      E-Commerce
                    </h2>
                    <p className=" ff_Roboto fw-normal fs_md text_primary opacity_07 pe-4 pe-xxl-5">
                      Nullam neque nibh, tempus et nisl ac, faucibus pretium
                      enim. Sed scelerisque urna a nisl vestibulum ultricies.
                    </p>{" "}
                    <svg
                      className="lr_animtion"
                      width="68"
                      height="16"
                      viewBox="0 0 68 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M67.7071 8.70711C68.0976 8.31658 68.0976 7.68342 67.7071 7.29289L61.3431 0.928932C60.9526 0.538408 60.3195 0.538408 59.9289 0.928932C59.5384 1.31946 59.5384 1.95262 59.9289 2.34315L65.5858 8L59.9289 13.6569C59.5384 14.0474 59.5384 14.6805 59.9289 15.0711C60.3195 15.4616 60.9526 15.4616 61.3431 15.0711L67.7071 8.70711ZM0 9L67 9V7L0 7L0 9Z"
                        fill="white"
                      />
                    </svg>
                    <a
                      className=" ff_Roboto fw-normal fs_md text_primary me-3 Read_hover ps-3"
                      href="#"
                    >
                      Read More
                    </a>
                    <span className="dots d-inline-block rounded-circle position-absolute top_10 start_10"></span>
                    <span className="dots d-inline-block rounded-circle position-absolute top_10 end_10"></span>
                    <span className="dots d-inline-block rounded-circle position-absolute bottom_10 start_10"></span>
                    <span className="dots d-inline-block rounded-circle position-absolute bottom_10 end_10"></span>
                  </div>
                </Col>
                <Col xs={12} sm={6} lg={4} className="pt-5">
                  <div className=" position-relative Service_card p-4 ps-5 h-100">
                    <h2 className=" ff_Roboto fw-normal fs_2xl text_primary">
                      CMS Service
                    </h2>
                    <p className=" ff_Roboto fw-normal fs_md text_primary opacity_07 pe-4 pe-xxl-5">
                      Nullam neque nibh, tempus et nisl ac, faucibus pretium
                      enim. Sed scelerisque urna a nisl vestibulum ultricies.
                    </p>{" "}
                    <svg
                      className="lr_animtion"
                      width="68"
                      height="16"
                      viewBox="0 0 68 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M67.7071 8.70711C68.0976 8.31658 68.0976 7.68342 67.7071 7.29289L61.3431 0.928932C60.9526 0.538408 60.3195 0.538408 59.9289 0.928932C59.5384 1.31946 59.5384 1.95262 59.9289 2.34315L65.5858 8L59.9289 13.6569C59.5384 14.0474 59.5384 14.6805 59.9289 15.0711C60.3195 15.4616 60.9526 15.4616 61.3431 15.0711L67.7071 8.70711ZM0 9L67 9V7L0 7L0 9Z"
                        fill="white"
                      />
                    </svg>
                    <a
                      className=" ff_Roboto fw-normal fs_md text_primary me-3 Read_hover ps-3"
                      href="#"
                    >
                      Read More
                    </a>
                    <span className="dots d-inline-block rounded-circle position-absolute top_10 start_10"></span>
                    <span className="dots d-inline-block rounded-circle position-absolute top_10 end_10"></span>
                    <span className="dots d-inline-block rounded-circle position-absolute bottom_10 start_10"></span>
                    <span className="dots d-inline-block rounded-circle position-absolute bottom_10 end_10"></span>
                  </div>
                </Col>
                <Col xs={12} sm={6} lg={4} className="pt-5">
                  <div className=" position-relative Service_card p-4 ps-5 h-100">
                    <h2 className=" ff_Roboto fw-normal fs_2xl text_primary">
                      Wordpress
                    </h2>
                    <p className=" ff_Roboto fw-normal fs_md text_primary opacity_07 pe-4 pe-xxl-5">
                      Nullam neque nibh, tempus et nisl ac, faucibus pretium
                      enim. Sed scelerisque urna a nisl vestibulum ultricies.
                    </p>{" "}
                    <svg
                      className="lr_animtion"
                      width="68"
                      height="16"
                      viewBox="0 0 68 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M67.7071 8.70711C68.0976 8.31658 68.0976 7.68342 67.7071 7.29289L61.3431 0.928932C60.9526 0.538408 60.3195 0.538408 59.9289 0.928932C59.5384 1.31946 59.5384 1.95262 59.9289 2.34315L65.5858 8L59.9289 13.6569C59.5384 14.0474 59.5384 14.6805 59.9289 15.0711C60.3195 15.4616 60.9526 15.4616 61.3431 15.0711L67.7071 8.70711ZM0 9L67 9V7L0 7L0 9Z"
                        fill="white"
                      />
                    </svg>
                    <a
                      className=" ff_Roboto fw-normal fs_md text_primary me-3 Read_hover ps-3"
                      href="#"
                    >
                      Read More
                    </a>
                    <span className="dots d-inline-block rounded-circle position-absolute top_10 start_10"></span>
                    <span className="dots d-inline-block rounded-circle position-absolute top_10 end_10"></span>
                    <span className="dots d-inline-block rounded-circle position-absolute bottom_10 start_10"></span>
                    <span className="dots d-inline-block rounded-circle position-absolute bottom_10 end_10"></span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <h2 className=" ff_Roboto fw-normal fs_11xl text_dark text_shadow pt-5 mt-3">
            Success Stories
          </h2>
          <Row className="pt-4 px_xsm_5 px-sm-0">
            {DummyData.map((value) => {
              const { id, images, hadding, paragraph } = value;
              return (
                <Col xs={12} md={6} lg={4} key={id} className="pt-4">
                  <div className=" position-relative rounded-4 overflow-hidden World_hover cursor_pointer">
                    <img className="w-100" src={images} alt="LaptopInTable" />
                    <div className="bg_tertiary position-absolute top-0 start-0 h-100 w-100 d-flex flex-column justify-content-between p-4 ">
                      <h2 className=" ff_Inter fw-bold fs_xl text_primary">
                        {hadding}
                      </h2>
                      <div className="">
                        <p className=" ff_Inter fw-normal fs_sm text_primary">
                          {paragraph}
                        </p>
                        <svg
                          className="lr_animtion"
                          width="68"
                          height="16"
                          viewBox="0 0 68 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M67.7071 8.70711C68.0976 8.31658 68.0976 7.68342 67.7071 7.29289L61.3431 0.928932C60.9526 0.538408 60.3195 0.538408 59.9289 0.928932C59.5384 1.31946 59.5384 1.95262 59.9289 2.34315L65.5858 8L59.9289 13.6569C59.5384 14.0474 59.5384 14.6805 59.9289 15.0711C60.3195 15.4616 60.9526 15.4616 61.3431 15.0711L67.7071 8.70711ZM0 9L67 9V7L0 7L0 9Z"
                            fill="white"
                          />
                        </svg>
                        <a
                          className=" ff_Roboto fw-normal fs_md text_primary me-3 ps-3"
                          href="#"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
            <Col className="pt-4">
              <div className=" d-flex align-items-center justify-content-center h-100 flex-column bg_primary rounded-4 border_dark py-5 hover_VisitStore cursor_pointer">
                <a href="#" className=" ff_Roboto fw-normal fs_4xl text_dark">
                  Visit<span className=" d-block"> Store</span>
                </a>
                <svg
                  className="lr_animtion mt-4"
                  width="68"
                  height="16"
                  viewBox="0 0 68 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M67.7071 8.70711C68.0976 8.31658 68.0976 7.68342 67.7071 7.29289L61.3431 0.928932C60.9526 0.538408 60.3195 0.538408 59.9289 0.928932C59.5384 1.31946 59.5384 1.95262 59.9289 2.34315L65.5858 8L59.9289 13.6569C59.5384 14.0474 59.5384 14.6805 59.9289 15.0711C60.3195 15.4616 60.9526 15.4616 61.3431 15.0711L67.7071 8.70711ZM0 9L67 9V7L0 7L0 9Z"
                    fill="#000"
                  />
                </svg>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5 my-sm-5  position-relative">
        <div className=" position-relative overflow-hidden py-5">
          <Container className="mb-xxl-5 pb-xl-5">
            <div className=" bg_primary white_shadow p-4 position-relative">
              <h2 className=" ff_Roboto fw-bold fs_3xl text_secondary text-center">
                Testimonials
              </h2>
              <Row className="px-lg-5 py-3 py-md-5 justify-content-md-center Testimonials_height position-relative">
                <Col xs={8} sm={6} md={4} lg={3}>
                  <div>
                    <Slider
                      {...settings}
                      onSwipe={(direction) => {
                        if (direction == "left") {
                          sliderRef2?.current?.slickPrev();
                        } else {
                          sliderRef2?.current?.slickNext();
                        }
                      }}
                      ref={sliderRef1}
                    >
                      {TestimonialsDummyData.map((value) => {
                        const { Image, id } = value;
                        return (
                          <div key={id}>
                            <img className="w-100" src={Image} alt="Image" />
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                </Col>
                <Col xs={12} sm={10} md={8} className="translate_94to203">
                  <div className="d-sm-none d-block position-absolute position_arrow">
                    <img
                      className="me-4 cursor_pointer"
                      onClick={() => {
                        sliderRef1?.current?.slickPrev();
                        sliderRef2?.current?.slickPrev();
                      }}
                      src={PreArrow}
                      alt="PreArrow"
                    />
                    <img
                      className="cursor_pointer translate_n"
                      onClick={() => {
                        sliderRef1?.current?.slickNext();
                        sliderRef2?.current?.slickNext();
                      }}
                      src={NextArrow}
                      alt="NextArrow"
                    />
                  </div>
                  <div className="py-4 my-3 text-end pe-5 d-none d-sm-block">
                    <img
                      className="me-4 cursor_pointer"
                      onClick={() => {
                        sliderRef1?.current?.slickPrev();
                        sliderRef2?.current?.slickPrev();
                      }}
                      src={PreArrow}
                      alt="PreArrow"
                    />
                    <img
                      className="cursor_pointer translate_n"
                      onClick={() => {
                        sliderRef1?.current?.slickNext();
                        sliderRef2?.current?.slickNext();
                      }}
                      src={NextArrow}
                      alt="NextArrow"
                    />
                  </div>
                  <div className=" bg_primary white_shadow p-3 p-lg-4 be_secondary translateX_n_68">
                    <Slider
                      {...settings2}
                      onSwipe={(direction) => {
                        if (direction == "left") {
                          sliderRef1?.current?.slickPrev();
                        } else {
                          sliderRef1?.current?.slickNext();
                        }
                      }}
                      ref={sliderRef2}
                    >
                      {TestimonialsDummyData.map((value) => {
                        const { id, name, company, paragraph } = value;
                        return (
                          <div className=" pe-1" key={id}>
                            <p className=" ff_Roboto fw-normal fs_xl text_dark">
                              {paragraph}
                            </p>
                            <h2 className=" ff_Roboto fs_xl fw-bold text_dark pt-4">
                              {name}
                            </h2>
                            <h4 className=" ff_Roboto fs_sm fw-normal text_secondary">
                              {company}
                            </h4>
                          </div>
                        );
                      })}
                      <div className=" pe-1">
                        <p className=" ff_Roboto fw-normal fs_xl text_dark">
                          Nullam neque nibh, tempus et nisl ac, faucibus pretium
                          enim. Sed scelerisque urna a nisl vestibulum
                          ultricies. Aliquam ex eros, faucibus et tempus vel,
                          varius non metus. Sed pellentesque magna sed nulla
                          mollis bibendum. Proin ultricies nec justo a
                          scelerisque. Nam.
                        </p>
                        <h2 className=" ff_Roboto fs_xl fw-bold text_dark pt-4">
                          Balina Josef
                        </h2>
                        <h4 className=" ff_Roboto fs_sm fw-normal text_secondary">
                          CEO , xyz company
                        </h4>
                      </div>
                    </Slider>
                  </div>
                </Col>
              </Row>
              <img
                className=" position-absolute yellow_circle d-none d-sm-block"
                src={yellow_circle}
                alt="yellow_circle"
              />
              <img
                className=" position-absolute yellow_circle_2 d-none d-sm-block"
                src={yellow_circle}
                alt="yellow_circle"
              />
              <img
                className=" position-absolute red_circle_2 d-none d-sm-block"
                width={25}
                src={ListImageRed}
                alt="ListImageRed"
              />
            </div>
          </Container>
        </div>
        <img
          className=" position-absolute end-0 index_n_1 Testimonials_wave"
          src={Testimonials_wave}
          alt="Testimonials_wave"
        />
        <img
          className=" position-absolute start-0 w-100 index_n _1  Curve_line d-none d-md-block"
          src={Curve_line}
          alt="Curve_line"
        />
      </section>
      <section className=" bg_dark my-sm-5 py-5 position-relative">
        <Container fluid className="p-0">
          <h1 className=" ff_Roboto fw-bold fs_10xl text-uppercase text_white_black position-absolute top_n_36 start-0 ps-3 ps-sm-5 ms-md-5  ">
            OUR TEAM WORK
          </h1>
          <Slider {...settings3}>
            <div className="px-2 px-xl-4">
              <Row className="pt-5 align-items-center px-4 px-sm-5 ">
                <Col xs={12} xl={6}>
                  <div className=" bg_primary p-2 rounded-pill ps-5 position-relative max_w_230 ms-5">
                    <h2 className=" ff_Roboto fw-normal fs_sm text_dark ps-4 ms-4">
                      created by :
                    </h2>
                    <h3 className=" ff_Roboto fw_medium fs_xl text_secondary ps-4 mb-0 ms-4">
                      Nisha
                    </h3>
                    <h4 className="ff_Roboto fw_medium fs_sm text_dark ps-4 ms-4">
                      App Developer
                    </h4>{" "}
                    <div className=" position-absolute girl_position">
                      <div className=" d-inline-block position-relative">
                        <img
                          width={88}
                          height={88}
                          className=" position-absolute top_4 end_5 rounded-circle"
                          src={Girl_Images}
                          alt="Girl_Images"
                        />
                        <img src={Red_Gubbare} alt="Red_Gubbare" />
                      </div>
                    </div>
                  </div>
                  <h2 className=" ff_Roboto fw-bold fs_lg text_primary pt-3 mt-2">
                    Stack Used:{" "}
                  </h2>
                  <h3 className=" ff_Roboto fw-normal fs_lg text_primary">
                    HTML / CSS, Java Script, Bootsrap
                  </h3>
                </Col>
                <Col xs={12} xl={6}>
                  <img className="w-100" src={TheBest} alt="TheBest" />
                </Col>
              </Row>
            </div>
            <div className="px-2 px-xl-4">
              <Row className="pt-5 align-items-center px-4 px-sm-5 ">
                <Col xs={12} xl={6}>
                  <div className=" bg_primary p-2 rounded-pill ps-5 position-relative max_w_230 ms-5">
                    <h2 className=" ff_Roboto fw-normal fs_sm text_dark ps-4 ms-4">
                      created by :
                    </h2>
                    <h3 className=" ff_Roboto fw_medium fs_xl text_secondary ps-4 mb-0 ms-4">
                      Nisha
                    </h3>
                    <h4 className="ff_Roboto fw_medium fs_sm text_dark ps-4 ms-4">
                      App Developer
                    </h4>{" "}
                    <div className=" position-absolute girl_position">
                      <div className=" d-inline-block position-relative">
                        <img
                          width={88}
                          height={88}
                          className=" position-absolute top_4 end_5 rounded-circle"
                          src={Girl_Images}
                          alt="Girl_Images"
                        />
                        <img src={Red_Gubbare} alt="Red_Gubbare" />
                      </div>
                    </div>
                  </div>
                  <h2 className=" ff_Roboto fw-bold fs_lg text_primary pt-3 mt-2">
                    Stack Used:{" "}
                  </h2>
                  <h3 className=" ff_Roboto fw-normal fs_lg text_primary">
                    HTML / CSS, Java Script, Bootsrap
                  </h3>
                </Col>
                <Col xs={12} xl={6}>
                  <img className="w-100" src={TheBest} alt="TheBest" />
                </Col>
              </Row>
            </div>
            <div className="px-2 px-xl-4">
              <Row className="pt-5 align-items-center px-4 px-sm-5 ">
                <Col xs={12} xl={6}>
                  <div className=" bg_primary p-2 rounded-pill ps-5 position-relative max_w_230 ms-5">
                    <h2 className=" ff_Roboto fw-normal fs_sm text_dark ps-4 ms-4">
                      created by :
                    </h2>
                    <h3 className=" ff_Roboto fw_medium fs_xl text_secondary ps-4 mb-0 ms-4">
                      Nisha
                    </h3>
                    <h4 className="ff_Roboto fw_medium fs_sm text_dark ps-4 ms-4">
                      App Developer
                    </h4>{" "}
                    <div className=" position-absolute girl_position">
                      <div className=" d-inline-block position-relative">
                        <img
                          width={88}
                          height={88}
                          className=" position-absolute top_4 end_5 rounded-circle"
                          src={Girl_Images}
                          alt="Girl_Images"
                        />
                        <img src={Red_Gubbare} alt="Red_Gubbare" />
                      </div>
                    </div>
                  </div>
                  <h2 className=" ff_Roboto fw-bold fs_lg text_primary pt-3 mt-2">
                    Stack Used:{" "}
                  </h2>
                  <h3 className=" ff_Roboto fw-normal fs_lg text_primary">
                    HTML / CSS, Java Script, Bootsrap
                  </h3>
                </Col>
                <Col xs={12} xl={6}>
                  <img className="w-100" src={TheBest} alt="TheBest" />
                </Col>
              </Row>
            </div>
            <div className="px-2 px-xl-4">
              <Row className="pt-5 align-items-center px-4 px-sm-5 ">
                <Col xs={12} xl={6}>
                  <div className=" bg_primary p-2 rounded-pill ps-5 position-relative max_w_230 ms-5">
                    <h2 className=" ff_Roboto fw-normal fs_sm text_dark ps-4 ms-4">
                      created by :
                    </h2>
                    <h3 className=" ff_Roboto fw_medium fs_xl text_secondary ps-4 mb-0 ms-4">
                      Nisha
                    </h3>
                    <h4 className="ff_Roboto fw_medium fs_sm text_dark ps-4 ms-4">
                      App Developer
                    </h4>{" "}
                    <div className=" position-absolute girl_position">
                      <div className=" d-inline-block position-relative">
                        <img
                          width={88}
                          height={88}
                          className=" position-absolute top_4 end_5 rounded-circle"
                          src={Girl_Images}
                          alt="Girl_Images"
                        />
                        <img src={Red_Gubbare} alt="Red_Gubbare" />
                      </div>
                    </div>
                  </div>
                  <h2 className=" ff_Roboto fw-bold fs_lg text_primary pt-3 mt-2">
                    Stack Used:{" "}
                  </h2>
                  <h3 className=" ff_Roboto fw-normal fs_lg text_primary">
                    HTML / CSS, Java Script, Bootsrap
                  </h3>
                </Col>
                <Col xs={12} xl={6}>
                  <img className="w-100" src={TheBest} alt="TheBest" />
                </Col>
              </Row>
            </div>
          </Slider>
        </Container>
      </section>
      <section>
        <Container className="text-center py-5">
          <h2 className=" ff_Roboto fw-normal fs_6xl text_dark ">
            Interested in our services?
            <span className="d-block">
              Answer a few short questions and we’ll get in touch with you!
            </span>
          </h2>
          <button className=" ff_Roboto fw-normal fs_3xl text_primary py-2 px-5 bg_secondary border-0 rounded-4 button_shadow mt-5">
            Get in touch
          </button>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Hero;
