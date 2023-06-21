import React, { useState, useRef } from "react";
import Slider from "react-slick";
import hexabirds_intro from "../../assets/Video/hexabirds_intro.mp4";
import Red_wave from "../../assets/images/svg/Red_wave.svg";
import Quality from "../../assets/images/png/Qservice.png";
import Expert_Team from "../../assets/images/png/Expert_Team.png";
import Excellent_Support from "../../assets/images/png/Excellent_Support.png";
import Management from "../../assets/images/png/Management.png";
import TeamWork from "../../assets/images/png/TeamWork.png";
import Testimonials_wave from "../../assets/images/png/Testimonials_wave.png";
import NextArrow from "../../assets/images/svg/NextArrow.svg";
import PreArrow from "../../assets/images/svg/PreArrow.svg";
import Red_Gubbare from "../../assets/images/svg/Red_Gubbare.svg";
import yellow_circle from "../../assets/images/svg/yellow_circle.svg";
import ListImageRed from "../../assets/images/svg/ListImageRed.svg";
import Curve_line from "../../assets/images/svg/Curve_line.svg";
import LeftArrow from "../../assets/images/svg/LeftArrow.svg";
import RightArrow from "../../assets/images/svg/RightArrow.svg";
import EmailGif from "../../assets/images/Gif/EmailGif.gif";
import PhoneGif from "../../assets/images/Gif/PhoneGif.gif";
import TestimonialsDummyData from "../../DummyData/TestimonialsDummyData";
import { Col, Container, Row } from "react-bootstrap";
import DummyData from "../../DummyData/DummyData";
import OurTeamDummyuData from "../../DummyData/OurTeamDummyuData";
import { Link } from "react-router-dom";

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
  const slider = React.useRef(null);
  return (
    <>
      <section className=" position-relative ">
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
              <h2
                className=" ff_Hyeon fw-normal fs_4xl text_primary opacity_07"
                data-aos="zoom-in"
                data-aos-duration="800"
              >
                Ready for the Future
              </h2>
              <h2
                className=" ff_Inter fw-bold fs_12xl text_primary"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                Where Innovation Meets
                <span className=" d-md-block">The Real World</span>
              </h2>
              <p
                className=" ff_Roboto fw-normal fs_3xl text_primary"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="400"
                data-aos-offset="0"
              >
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

        <div className=" d-inline-block position-absolute top-50 translate-middle-y end-0">
          <img className="" width={40} src={EmailGif} alt="EmailGif" />
          <img
            className=" pt-4 d-block"
            width={40}
            src={PhoneGif}
            alt="PhoneGif"
          />
        </div>
      </section>
      <section>
        <Container>
          <Row className=" px_xsm_5 px-sm-0">
            <Col
              xs={12}
              sm={6}
              lg={3}
              className="pt-5 mt-4"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-offset="200"
            >
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
            <Col
              xs={12}
              sm={6}
              lg={3}
              className="pt-5 mt-4"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-offset="200"
            >
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
            <Col
              xs={12}
              sm={6}
              lg={3}
              className="pt-5 mt-4"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-offset="200"
            >
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
            <Col
              xs={12}
              sm={6}
              lg={3}
              className="pt-5 mt-4"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-offset="200"
            >
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
        <Container fluid className="px-0 py-5 my-xl-5">
          <div className=" d-xl-flex pb-lg-5 mb-lg-5">
            <div className="writing_lr pt-xl-5 mt-xl-3 pb-3 pb-xl-0">
              <h2
                className=" ff_Roboto fw_medium fs_11xl text_dark text-center "
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-offset="200"
              >
                DEDICATED <span className=" d-xl-block">TEAM</span>
              </h2>
            </div>
            <div className=" position-relative">
              <img
                className="w-100"
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay="200"
                data-aos-offset="200"
                src={TeamWork}
                alt="TeamWork"
              />
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
                data-aos-offset="200"
              >
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
          </div>
        </Container>
      </section>
      <section className=" bg_red_to_tr py-5 mt-sm-5 ps-xl-4 position-relative">
        <Container fluid>
          <Row>
            <h2
              className=" ff_Roboto fw-normal fs_14xl text_black_white text-uppercase text-center start-0 position-absolute Our_services"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-offset="200"
            >
              OUR SERVICES
            </h2>
            <Col xs={12} xl={10}>
              <Row>
                <Col
                  xs={12}
                  sm={6}
                  lg={4}
                  className="pt-sm-5"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="200"
                  data-aos-offset="200"
                >
                  <div className="px_xsm_5 h-100 px-sm-0">
                    <div className=" position-relative Service_card p-4 ps-5 h-100">
                      <h2 className=" ff_Roboto fw-normal fs_2xl text_primary">
                        Websites
                      </h2>
                      <p className=" ff_Roboto fw-normal fs_md text_primary opacity_07 pe-4">
                        Nullam neque nibh, tempus et nisl ac, faucibus pretium
                        enim. Sed scelerisque urna a nisl vestibulum ultricies.
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
                      <Link to="/Services">
                        <a
                          className=" ff_Roboto fw-normal fs_md text_primary me-3 Read_hover ps-3"
                          href="#"
                        >
                          Read More
                        </a>
                      </Link>
                      <span className="dots d-inline-block rounded-circle position-absolute top_10 start_10"></span>
                      <span className="dots d-inline-block rounded-circle position-absolute top_10 end_10"></span>
                      <span className="dots d-inline-block rounded-circle position-absolute bottom_10 start_10"></span>
                      <span className="dots d-inline-block rounded-circle position-absolute bottom_10 end_10"></span>
                    </div>
                  </div>
                </Col>
                <Col
                  xs={12}
                  sm={6}
                  lg={4}
                  className="pt-5"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="300"
                  data-aos-offset="200"
                >
                  <div className="px_xsm_5 h-100 px-sm-0">
                    <div className=" position-relative Service_card p-4 ps-5 h-100">
                      <h2 className=" ff_Roboto fw-normal fs_2xl text_primary">
                        Mobile App
                      </h2>
                      <p className=" ff_Roboto fw-normal fs_md text_primary opacity_07 pe-4">
                        Nullam neque nibh, tempus et nisl ac, faucibus pretium
                        enim. Sed scelerisque urna a nisl vestibulum ultricies.
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
                      <Link to="/Services">
                        <a
                          className=" ff_Roboto fw-normal fs_md text_primary me-3 Read_hover ps-3"
                          href="#"
                        >
                          Read More
                        </a>
                      </Link>
                      <span className="dots d-inline-block rounded-circle position-absolute top_10 start_10"></span>
                      <span className="dots d-inline-block rounded-circle position-absolute top_10 end_10"></span>
                      <span className="dots d-inline-block rounded-circle position-absolute bottom_10 start_10"></span>
                      <span className="dots d-inline-block rounded-circle position-absolute bottom_10 end_10"></span>
                    </div>
                  </div>
                </Col>
                <Col
                  xs={12}
                  sm={6}
                  lg={4}
                  className="pt-5"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="400"
                  data-aos-offset="200"
                >
                  <div className="px_xsm_5 h-100 px-sm-0">
                    <div className=" position-relative Service_card p-4 ps-5 h-100">
                      <h2 className=" ff_Roboto fw-normal fs_2xl text_primary">
                        Backend
                      </h2>
                      <p className=" ff_Roboto fw-normal fs_md text_primary opacity_07 pe-4">
                        Nullam neque nibh, tempus et nisl ac, faucibus pretium
                        enim. Sed scelerisque urna a nisl vestibulum ultricies.
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
                      <Link to="/Services">
                        <a
                          className=" ff_Roboto fw-normal fs_md text_primary me-3 Read_hover ps-3"
                          href="#"
                        >
                          Read More
                        </a>
                      </Link>
                      <span className="dots d-inline-block rounded-circle position-absolute top_10 start_10"></span>
                      <span className="dots d-inline-block rounded-circle position-absolute top_10 end_10"></span>
                      <span className="dots d-inline-block rounded-circle position-absolute bottom_10 start_10"></span>
                      <span className="dots d-inline-block rounded-circle position-absolute bottom_10 end_10"></span>
                    </div>
                  </div>
                </Col>
                <Col
                  xs={12}
                  sm={6}
                  lg={4}
                  className="pt-5"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="500"
                  data-aos-offset="200"
                >
                  <div className="px_xsm_5 h-100 px-sm-0">
                    <div className=" position-relative Service_card p-4 ps-5 h-100">
                      <h2 className=" ff_Roboto fw-normal fs_2xl text_primary">
                        E-Commerce
                      </h2>
                      <p className=" ff_Roboto fw-normal fs_md text_primary opacity_07 pe-4">
                        Nullam neque nibh, tempus et nisl ac, faucibus pretium
                        enim. Sed scelerisque urna a nisl vestibulum ultricies.
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
                      <Link to="/Services">
                        <a
                          className=" ff_Roboto fw-normal fs_md text_primary me-3 Read_hover ps-3"
                          href="#"
                        >
                          Read More
                        </a>
                      </Link>
                      <span className="dots d-inline-block rounded-circle position-absolute top_10 start_10"></span>
                      <span className="dots d-inline-block rounded-circle position-absolute top_10 end_10"></span>
                      <span className="dots d-inline-block rounded-circle position-absolute bottom_10 start_10"></span>
                      <span className="dots d-inline-block rounded-circle position-absolute bottom_10 end_10"></span>
                    </div>
                  </div>
                </Col>
                <Col
                  xs={12}
                  sm={6}
                  lg={4}
                  className="pt-5"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="600"
                  data-aos-offset="200"
                >
                  <div className="px_xsm_5 h-100 px-sm-0">
                    <div className=" position-relative Service_card p-4 ps-5 h-100">
                      <h2 className=" ff_Roboto fw-normal fs_2xl text_primary">
                        CMS Service
                      </h2>
                      <p className=" ff_Roboto fw-normal fs_md text_primary opacity_07 pe-4">
                        Nullam neque nibh, tempus et nisl ac, faucibus pretium
                        enim. Sed scelerisque urna a nisl vestibulum ultricies.
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
                      <Link to="/Services">
                        <a
                          className=" ff_Roboto fw-normal fs_md text_primary me-3 Read_hover ps-3"
                          href="#"
                        >
                          Read More
                        </a>
                      </Link>
                      <span className="dots d-inline-block rounded-circle position-absolute top_10 start_10"></span>
                      <span className="dots d-inline-block rounded-circle position-absolute top_10 end_10"></span>
                      <span className="dots d-inline-block rounded-circle position-absolute bottom_10 start_10"></span>
                      <span className="dots d-inline-block rounded-circle position-absolute bottom_10 end_10"></span>
                    </div>
                  </div>
                </Col>
                <Col
                  xs={12}
                  sm={6}
                  lg={4}
                  className="pt-5"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="700"
                  data-aos-offset="200"
                >
                  <div className="px_xsm_5 h-100 px-sm-0">
                    <div className=" position-relative Service_card p-4 ps-5 h-100">
                      <h2 className=" ff_Roboto fw-normal fs_2xl text_primary">
                        Wordpress
                      </h2>
                      <p className=" ff_Roboto fw-normal fs_md text_primary opacity_07 pe-4">
                        Nullam neque nibh, tempus et nisl ac, faucibus pretium
                        enim. Sed scelerisque urna a nisl vestibulum ultricies.
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
                      <Link to="/Services">
                        <a
                          className=" ff_Roboto fw-normal fs_md text_primary me-3 Read_hover ps-3"
                          href="#"
                        >
                          Read More
                        </a>
                      </Link>
                      <span className="dots d-inline-block rounded-circle position-absolute top_10 start_10"></span>
                      <span className="dots d-inline-block rounded-circle position-absolute top_10 end_10"></span>
                      <span className="dots d-inline-block rounded-circle position-absolute bottom_10 start_10"></span>
                      <span className="dots d-inline-block rounded-circle position-absolute bottom_10 end_10"></span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <h2
            className=" ff_Roboto fw-normal fs_11xl text_dark text_shadow pt-xl-5 mt-3 px_xsm_5 px-sm-0"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-offset="200"
          >
            Success Stories
          </h2>
          <Row className="pt-4 px_xsm_5 px-sm-0">
            {DummyData.map((value) => {
              const { id, images, hadding, paragraph } = value;
              return (
                <Col
                  xs={12}
                  md={6}
                  lg={4}
                  key={id}
                  className="pt-4"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="200"
                  data-aos-offset="200"
                >
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
            <Col
              className="pt-4"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-offset="200"
            >
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
            <div className=" bg_primary white_shadow pt-5 px-4 pb-0 position-relative">
              <h2
                className=" ff_Roboto fw-bold fs_3xl text_secondary text-center"
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                Testimonials
              </h2>
              <Row className="px-lg-5 py-3 py-md-5 justify-content-md-center Testimonials_height position-relative">
                <Col xs={12} sm={6} md={4} lg={3}>
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
                          <div key={id} className="">
                            <img
                              data-aos="fade-right"
                              data-aos-duration="800"
                              data-aos-delay="100"
                              data-aos-offset="200"
                              className="w-100 mb-0 white_shadow bg_primary"
                              src={Image}
                              alt="Image"
                            />
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                </Col>
                <Col xs={12} sm={10} md={8} className="translate_94to203">
                  <div className="d-sm-none d-block">
                    <img
                      className="me-4 cursor_pointer position-absolute top-50 translate-middle-y start-0"
                      onClick={() => {
                        sliderRef1?.current?.slickPrev();
                        sliderRef2?.current?.slickPrev();
                      }}
                      src={PreArrow}
                      alt="PreArrow"
                    />
                    <img
                      className="cursor_pointer translate_n position-absolute top-50 translate-middle-y end-0"
                      onClick={() => {
                        sliderRef1?.current?.slickNext();
                        sliderRef2?.current?.slickNext();
                      }}
                      src={NextArrow}
                      alt="NextArrow"
                    />
                  </div>
                  <div className="py-4 my-3 text-end pe-5 d-none d-sm-block ">
                    <img
                      className="me-5 cursor_pointer"
                      onClick={() => {
                        sliderRef1?.current?.slickPrev();
                        sliderRef2?.current?.slickPrev();
                      }}
                      data-aos="fade-right"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-offset="200"
                      src={PreArrow}
                      alt="PreArrow"
                    />
                    <img
                      className="cursor_pointer translate_n ms-5"
                      data-aos="fade-left"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-offset="200"
                      onClick={() => {
                        sliderRef1?.current?.slickNext();
                        sliderRef2?.current?.slickNext();
                      }}
                      src={NextArrow}
                      alt="NextArrow"
                    />
                  </div>
                  <div
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-delay="400"
                    data-aos-offset="200"
                  >
                    <div className=" bg_primary white_shadow p-3 p-lg-4 be_secondary translateX_n_68 ">
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
                      </Slider>
                    </div>
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
      <section className=" bg_dark my-lg-5 py-5 position-relative">
        <Container fluid className="p-0">
          <h1
            className=" ff_Roboto fw-bold fs_10xl text-uppercase text_white_black position-absolute top_n_36 start-0 ps-3 ps-sm-5 ms-md-5  "
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-offset="200"
          >
            OUR TEAM WORK
          </h1>
          <div className=" position-relative">
            <Slider {...settings3} ref={slider} className="py-4 overley_slider">
              {OurTeamDummyuData.map((value) => {
                const { name, stack, StackUsed, Image, CreatedImage, id } =
                  value;
                return (
                  <div className="px-2 px-xl-4 py-4" key={id}>
                    <Row className=" align-items-center px-4 px-sm-5 ">
                      <Col xs={12} xl={6}>
                        <div
                          className=" bg_primary p-2 rounded-pill ps-5 position-relative max_w_230 ms-5"
                          data-aos="fade-right"
                          data-aos-duration="800"
                          data-aos-delay="100"
                          data-aos-offset="200"
                        >
                          <h2 className=" ff_Roboto fw-normal fs_sm text_dark ps-4 ms-4">
                            created by :
                          </h2>
                          <h3 className=" ff_Roboto fw_medium fs_xl text_secondary ps-4 mb-0 ms-4">
                            {name}
                          </h3>
                          <h4 className="ff_Roboto fw_medium fs_sm text_dark ps-4 ms-4">
                            {stack}
                          </h4>
                          <div className=" position-absolute girl_position">
                            <div className=" d-inline-block position-relative">
                              <img
                                width={88}
                                height={88}
                                className=" position-absolute top_4 end_5 rounded-circle"
                                src={CreatedImage}
                                alt="CreatedImage"
                              />
                              <img src={Red_Gubbare} alt="Red_Gubbare" />
                            </div>
                          </div>
                        </div>
                        <h2
                          className=" ff_Roboto fw-bold fs_lg text_primary pt-3 mt-2"
                          data-aos="fade-down"
                          data-aos-duration="800"
                          data-aos-delay="300"
                          data-aos-offset="200"
                        >
                          Stack Used:
                        </h2>
                        <h3
                          className=" ff_Roboto fw-normal fs_lg text_primary"
                          data-aos="fade-up"
                          data-aos-duration="800"
                          data-aos-delay="500"
                          data-aos-offset="200"
                        >
                          {StackUsed}
                        </h3>
                      </Col>
                      <Col xs={12} xl={6}>
                        <img
                          className="w-100 pt-4 pt-xl-0"
                          data-aos="fade-left"
                          data-aos-duration="800"
                          data-aos-delay="200"
                          data-aos-offset="200"
                          src={Image}
                          alt="Image"
                        />
                      </Col>
                    </Row>
                  </div>
                );
              })}
            </Slider>
            <img
              className=" position-absolute top_md_50 translate-middle-y LeftArrow cursor_pointer"
              onClick={() => slider?.current?.slickPrev()}
              src={LeftArrow}
              alt="LeftArrow"
            />
            <img
              className=" position-absolute top_md_50 translate-middle-y RightArrow cursor_pointer"
              onClick={() => slider?.current?.slickNext()}
              src={RightArrow}
              alt="RightArrow"
            />
          </div>
        </Container>
      </section>
      <section>
        <Container className="text-center py-5">
          <h2
            className=" ff_Roboto fw-bold fs_6xl text_dark "
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-offset="200"
          >
            Interested in our services?
            <span className="d-block fw-normal fs_3xl">
              Answer a few short questions and we’ll get in touch with you!
            </span>
          </h2>
          <button
            className=" ff_Roboto fw-normal fs_3xl text_primary py-2 px-5 bg_secondary border-0 rounded-4 button_shadow mt-4"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-offset="200"
          >
            Get in touch
          </button>
        </Container>
      </section>
      <div className=" d-none position-fixed index_99 d-sm-inline-block robo_position overflow-hidden pt-2">
        <span className="d-inline-block position-relative">
          <div className="robo">
            <svg
              className=" "
              width="167"
              height="139"
              viewBox="0 0 167 139"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="82.7446"
                y="26.7623"
                width="78.3753"
                height="52.4322"
                rx="26.2161"
                fill="#E3E5E1"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M160.296 59.526L160.301 59.669L165.353 58.3035C168.193 53.7157 166.536 47.7443 165.353 45.332L159.754 44.1031L159.774 44.6643C160.647 47.2767 161.12 50.0723 161.12 52.9784C161.12 55.2392 160.834 57.4331 160.296 59.526Z"
                fill="#B3B0A9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M84.1642 44.4466C83.2441 47.1212 82.7446 49.9914 82.7446 52.9784C82.7446 55.2882 83.0433 57.5282 83.6042 59.662L78.578 58.3035C75.7379 53.7157 77.3946 47.7443 78.578 45.332L84.1762 44.1031L84.1642 44.4466Z"
                fill="#B3B0A9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M122.069 79.1945H134.904C149.382 79.1945 161.12 67.4571 161.12 52.9784C161.12 38.4996 149.382 26.7623 134.904 26.7623H122.069V79.1945Z"
                fill="#B3B0A9"
              />
              <path
                d="M92.3026 53.1149C92.3026 43.9903 99.6995 36.5933 108.824 36.5933H135.04C144.165 36.5933 151.562 43.9903 151.562 53.1149V53.1149C151.562 62.2396 144.165 69.6365 135.04 69.6365H121.742C121.416 69.6365 121.093 69.6946 120.788 69.808L109.707 73.926C108.388 74.416 107.447 72.6295 108.597 71.8189L108.902 71.6037C109.765 70.9949 109.334 69.6365 108.278 69.6365V69.6365V69.6365C99.455 69.6365 92.3026 62.4841 92.3026 53.6611V53.1149Z"
                fill="#292345"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M108.824 36.5933C99.6995 36.5933 92.3026 43.9903 92.3026 53.1149C92.3026 53.5747 92.3213 54.0301 92.3582 54.4804C93.0524 45.9945 100.159 39.3242 108.824 39.3242H135.04C143.705 39.3242 150.812 45.9945 151.506 54.4804C151.543 54.0301 151.562 53.5747 151.562 53.1149C151.562 43.9903 144.165 36.5933 135.04 36.5933H108.824Z"
                fill="#17152E"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M122.069 69.6365H135.04C144.165 69.6365 151.562 62.2396 151.562 53.1149C151.562 43.9903 144.165 36.5933 135.04 36.5933H122.069V69.6365Z"
                fill="#17152E"
              />
              <circle
                className="left_eye"
                cx="106.776"
                cy="52.1591"
                r="4.91552"
                fill="#8AD1C0"
              />
              <circle
                className="right_eye"
                cx="137.362"
                cy="52.1591"
                r="4.91552"
                fill="#8AD1C0"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M122.069 119.61C100.665 118.358 100.666 94.3489 102.714 88.3442C104.35 83.5425 116.299 82.4295 122.086 82.4727C127.872 82.4295 139.821 83.5425 141.458 88.3442C143.505 94.3489 143.506 118.358 122.103 119.61V119.612C122.097 119.612 122.091 119.612 122.086 119.611C122.08 119.612 122.074 119.612 122.069 119.612V119.61Z"
                fill="#E3E5E1"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M121.593 82.479C118.937 82.5184 114.544 82.5836 107.732 84.3831C106.366 84.9293 106.503 86.1582 108.551 86.1582C109.222 86.1582 110.004 86.1324 110.85 86.1047C115.512 85.9515 122.069 85.7362 122.069 89.4352C122.069 89.4424 122.069 89.4497 122.069 89.4569V119.612C143.506 118.383 143.506 94.352 141.458 88.3442C139.82 83.5383 127.851 82.4275 122.071 82.4728L122.069 82.4715C121.917 82.4742 121.758 82.4765 121.593 82.479Z"
                fill="#B3B0A9"
              />
              <circle cx="111.418" cy="98.3104" r="2.73084" fill="#B3B0A9" />
              <path
                d="M152.518 109.643C149.896 110.08 143.597 107.186 140.775 105.684C130.807 101.041 129.169 81.2426 139.956 86.2947C150.743 91.3468 155.795 109.097 152.518 109.643Z"
                fill="#B3B0A9"
              />
            </svg>
            <svg
              className="right_hand"
              width="21"
              height="25"
              viewBox="0 0 21 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.987706 24.1672C3.60932 24.6042 9.90847 21.7095 12.7303 20.2075C22.6979 15.5651 24.3364 -4.23354 13.5496 0.818525C2.76275 5.87059 -2.28931 23.6211 0.987706 24.1672Z"
                fill="#E3E5E1"
              />
              <path
                d="M7.61993 22.5978C9.59951 21.7998 11.5156 20.8687 12.7578 20.2075C21.3871 16.1884 23.7738 0.809939 17.26 0.0307358C17.0875 0.145576 16.9125 0.269481 16.7351 0.402711C9.72777 5.66388 7.16412 17.017 7.61993 22.5978Z"
                fill="#B3B0A9"
              />
            </svg>
            <svg
              className="eye position-absolute"
              width="12.5"
              height="12.5"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5.36151" cy="5.15917" r="4.91552" fill="#292345" />
            </svg>
            <svg
              className="eye2 position-absolute"
              width="12.5"
              height="12.5"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5.36151" cy="5.15917" r="4.91552" fill="#17152E" />
            </svg>
            <span className="mouth_new position-absolute">
              <svg
                width="21"
                height="7"
                viewBox="0 0 21 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1V1C5.59394 7.12526 14.7011 7.35863 19.6028 1.47669L20 1"
                  stroke="white"
                  strokeLinecap="round"
                  fillOpacity="0.50"
                />
              </svg>
            </span>
            <span className=" position-absolute hello_word">
              <svg
                width="63"
                height="51"
                viewBox="0 0 63 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="31.3624"
                  cy="19.3982"
                  rx="31.3624"
                  ry="19.3982"
                  fill="#E3E5E1"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M48.5574 35.6236C57.0905 32.157 62.7248 26.1846 62.7248 19.3982C62.7248 8.68487 48.6834 0 31.3625 0C23.6602 0 16.6064 1.71734 11.1475 4.56672C16.0851 2.56079 21.9935 1.39392 28.3424 1.39392C45.6634 1.39392 59.7048 10.0788 59.7048 20.7921C59.7048 26.7415 55.3746 32.0653 48.5574 35.6236Z"
                  fill="#B3B0A9"
                  fillOpacity="0.25"
                />
                <path
                  d="M12.0155 23.2419V15.9692H13.5532V18.9699H16.6746V15.9692H18.2087V23.2419H16.6746V20.2377H13.5532V23.2419H12.0155ZM19.4765 23.2419V15.9692H24.377V17.2369H21.0141V18.9699H24.1249V20.2377H21.0141V21.9742H24.3912V23.2419H19.4765ZM25.5995 23.2419V15.9692H27.1372V21.9742H30.255V23.2419H25.5995ZM31.2733 23.2419V15.9692H32.811V21.9742H35.9289V23.2419H31.2733ZM43.3472 19.6055C43.3472 20.3986 43.1969 21.0734 42.8962 21.6297C42.5979 22.186 42.1907 22.611 41.6746 22.9046C41.1609 23.1957 40.5832 23.3413 39.9417 23.3413C39.2954 23.3413 38.7153 23.1946 38.2016 22.901C37.6879 22.6074 37.2819 22.1825 36.9836 21.6261C36.6853 21.0698 36.5361 20.3963 36.5361 19.6055C36.5361 18.8125 36.6853 18.1377 36.9836 17.5814C37.2819 17.0251 37.6879 16.6013 38.2016 16.3101C38.7153 16.0165 39.2954 15.8698 39.9417 15.8698C40.5832 15.8698 41.1609 16.0165 41.6746 16.3101C42.1907 16.6013 42.5979 17.0251 42.8962 17.5814C43.1969 18.1377 43.3472 18.8125 43.3472 19.6055ZM41.7883 19.6055C41.7883 19.0918 41.7113 18.6586 41.5574 18.3058C41.4059 17.9531 41.1917 17.6856 40.9147 17.5033C40.6377 17.321 40.3133 17.2298 39.9417 17.2298C39.57 17.2298 39.2456 17.321 38.9687 17.5033C38.6917 17.6856 38.4762 17.9531 38.3223 18.3058C38.1708 18.6586 38.0951 19.0918 38.0951 19.6055C38.0951 20.1193 38.1708 20.5525 38.3223 20.9053C38.4762 21.258 38.6917 21.5255 38.9687 21.7078C39.2456 21.8901 39.57 21.9813 39.9417 21.9813C40.3133 21.9813 40.6377 21.8901 40.9147 21.7078C41.1917 21.5255 41.4059 21.258 41.5574 20.9053C41.7113 20.5525 41.7883 20.1193 41.7883 19.6055ZM46.2653 15.9692L46.1269 21.0615H44.8271L44.6851 15.9692H46.2653ZM45.477 23.3342C45.2426 23.3342 45.0414 23.2514 44.8733 23.0857C44.7052 22.9176 44.6224 22.7163 44.6247 22.482C44.6224 22.25 44.7052 22.0511 44.8733 21.8854C45.0414 21.7197 45.2426 21.6368 45.477 21.6368C45.7019 21.6368 45.8996 21.7197 46.07 21.8854C46.2405 22.0511 46.3269 22.25 46.3293 22.482C46.3269 22.6382 46.2855 22.7814 46.205 22.9117C46.1269 23.0395 46.0239 23.1425 45.896 23.2206C45.7682 23.2964 45.6285 23.3342 45.477 23.3342ZM49.5075 15.9692L49.369 21.0615H48.0693L47.9273 15.9692H49.5075ZM48.7192 23.3342C48.4848 23.3342 48.2836 23.2514 48.1155 23.0857C47.9474 22.9176 47.8645 22.7163 47.8669 22.482C47.8645 22.25 47.9474 22.0511 48.1155 21.8854C48.2836 21.7197 48.4848 21.6368 48.7192 21.6368C48.9441 21.6368 49.1418 21.7197 49.3122 21.8854C49.4827 22.0511 49.5691 22.25 49.5715 22.482C49.5691 22.6382 49.5277 22.7814 49.4472 22.9117C49.369 23.0395 49.2661 23.1425 49.1382 23.2206C49.0104 23.2964 48.8707 23.3342 48.7192 23.3342Z"
                  fill="black"
                />
                <ellipse
                  cx="47.6245"
                  cy="42.5134"
                  rx="7.89867"
                  ry="4.87859"
                  fill="#D0D0D0"
                />
                <ellipse
                  cx="55.4069"
                  cy="49.1343"
                  rx="2.90392"
                  ry="1.74235"
                  fill="#B3B0A9"
                />
              </svg>
            </span>
          </div>
          <svg className="position-absolute top-0 start-0">
            <ellipse
              className="shadow_ellipse"
              cx="121.932"
              cy="134.084"
              rx="26.0796"
              ry="4.91552"
              fill="#B3B0A9"
              fillOpacity="0.32"
            />
          </svg>
        </span>
      </div>
    </>
  );
}

export default Hero;
