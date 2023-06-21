import React, { useState } from "react";
import HeroSection from "../../components/HeroSection";
import { Col, Container, Row } from "react-bootstrap";
import Expertise from "../../assets/images/svg/Expertise.svg";
import Innovation from "../../assets/images/svg/Innovation.svg";
import guaranteed from "../../assets/images/svg/guaranteed.svg";
import PeopleChoose from "../../assets/images/png/PeopleChoose.png";
import Prime from "../../assets/images/svg/Prime.svg";
import Prime_2 from "../../assets/images/svg/Prime_2.svg";
import Dots from "../../assets/images/svg/Dots.svg";
import sri from "../../assets/images/svg/sri.svg";
import sri_2 from "../../assets/images/svg/sri_2.svg";
import app_logo from "../../assets/images/svg/app_logo.svg";
import vision from "../../assets/images/png/vision.png";
import vision_2 from "../../assets/images/png/vision_2.png";
import Closet from "../../assets/images/png/Closet.png";
import Closet_2 from "../../assets/images/png/Closet_2.png";
import edumato_2 from "../../assets/images/png/edumato_2.png";
import edumato_3 from "../../assets/images/png/edumato_3.png";
import WorkDummyData from "../../DummyData/WorkDummyData";
import Slider from "react-slick";
function ProjectsPage() {
  const data = {
    name: "Projects",
  };
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [Index, setIndex] = useState(1);
  const settings = {
    autoplay: true,
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4.6,
    speed: 500,
    vertical: true,
    verticalSwiping: true,
    asNavFor: nav2,
    slidesToScroll: 1,
    autoplaySpeed: 2600,
    pauseOnDotsHover: false,
  };
  const settings2 = {
    autoplay: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    asNavFor: nav1,
    slidesToScroll: 1,
    autoplaySpeed: 2600,
    pauseOnDotsHover: false,
  };
  return (
    <>
      <HeroSection myData={data} />
      <section className=" py-5 my-5">
        <Container>
          <Row className=" justify-content-between">
            <Col xs={12} lg={6} className=" position-relative">
              <h2
                className=" ff_Inter fw-bold fs_6xl text_dark"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-offset="0"
              >
                Why people choose to
                <span className="d-block">
                  work with
                  <span className=" text_secondary text-uppercase ps-2">
                    HEXABIRDS
                  </span>
                </span>
              </h2>
              <p
                className=" ff_Inter fw-normal fs_xl text_dark pt-4"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="200"
                data-aos-offset="0"
              >
                By presenting you with fresh ideas and better-suited
                alternatives, we treat you like a partner and build on your
                vision.
              </p>
              <img
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="300"
                data-aos-offset="0"
                className="w-100 d-lg-none d-block pt-4"
                src={PeopleChoose}
                alt="PeopleChoose"
              />
              <div
                className=" d-flex pt-4"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="400"
                data-aos-offset="0"
              >
                <div className="">
                  <img src={Expertise} alt="Expertise" />
                </div>
                <div className="ps-4">
                  <h2 className=" ff_Inter fw_medium fs_3xl text_dark">
                    Expertise
                  </h2>
                  <p className=" ff_Inter fw-normal fs_xl text_dark">
                    Our development team can design cutting-edge, user-friendly
                    websites and android / IOS based applications that are
                    optimised for speed and usability.
                  </p>
                </div>
              </div>
              <div
                className=" d-flex pt-4"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="500"
                data-aos-offset="0"
              >
                <div className="">
                  <img src={Innovation} alt="Innovation" />
                </div>
                <div className="ps-4">
                  <h2 className=" ff_Inter fw_medium fs_3xl text_dark">
                    Innovation
                  </h2>
                  <p className=" ff_Inter fw-normal fs_xl text_dark">
                    To stay ahead of the curve and find cutting-edge technology
                    and solutions that may help our clients, we make significant
                    investments in research and development. Our skilled team is
                    always investigating fresh concepts and pushing the limits
                    of what is practical in the field of IT.
                  </p>
                </div>
              </div>
              <div
                className=" d-flex pt-4"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="600"
                data-aos-offset="0"
              >
                <div className="">
                  <img src={guaranteed} alt="guaranteed" />
                </div>
                <div className="ps-4">
                  <h2 className=" ff_Inter fw_medium fs_3xl text_dark">
                    100% satisfaction guaranteed
                  </h2>
                  <p className=" ff_Inter fw-normal fs_xl text_dark">
                    Our top goal is making sure you are satisfied. If you have
                    any worries regarding your project, we are available to
                    address them in any flexible way we can.
                  </p>
                </div>
              </div>
              <img
                className=" position-absolute position_dots index_n_1 d-none d-sm-block"
                src={Dots}
                alt="Dots"
              />
            </Col>
            <Col xs={6}>
              <img
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="200"
                data-aos-offset="0"
                className="w-100 d-none d-lg-block"
                src={PeopleChoose}
                alt="PeopleChoose"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className=" my-5 bg_semidark overflow-hidden position-relative">
        <Container className=" py-5 position-relative">
          <div
            className=" position-relative index_99"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-offset="100"
          >
            <h2 className=" ff_Inter fw-bold fs_6xl text_primary text-center pt-lg-4">
              Our Latest Creative Work
            </h2>
            <div className="d-flex justify-content-center align-items-center pt-4">
              <button
                className={
                  Index === 1
                    ? " bg-transparent py-2 px-4 text_primary ff_Inter fw-bold fs_2xl  rounded-4 apps_border"
                    : " bg-transparent py-2 px-4 text_primary ff_Inter fw-normal fs_2xl  rounded-4 border_transparent opacity_05"
                }
                onClick={() => {
                  setIndex(1);
                }}
              >
                Apps
              </button>
              <button
                className={
                  Index === 2
                    ? " bg-transparent py-2 px-4 text_primary ff_Inter fw-bold fs_2xl  rounded-4 apps_border mx-2 mx-sm-5"
                    : " bg-transparent py-2 px-4 text_primary ff_Inter fw-normal fs_2xl  rounded-4 border_transparent opacity_05 mx-2 mx-sm-5"
                }
                onClick={() => {
                  setIndex(2);
                }}
              >
                Website
              </button>
              <button
                className={
                  Index === 3
                    ? " bg-transparent py-2 px-4 text_primary ff_Inter fw-bold fs_2xl  rounded-4 apps_border"
                    : " bg-transparent py-2 px-4 text_primary ff_Inter fw-normal fs_2xl  rounded-4 border_transparent opacity_05"
                }
                onClick={() => {
                  setIndex(3);
                }}
              >
                Design
              </button>
            </div>
          </div>
          <div className={Index === 1 ? "d-block" : "d-none"}>
            <Row className=" py -5 justify-content-center justify-content-md-start">
              <Col xs={12} sm={10} md={12} lg={10} className=" py- 5 mb-l g-5">
                <Slider {...settings2} ref={(slider2) => setNav2(slider2)}>
                  {WorkDummyData.map((value) => {
                    const {
                      image2,
                      heading,
                      paragraph,
                      paragraph2,
                      id,
                      link,
                      Flutterimage,
                      StackUsedName1,
                      StackUsedName2,
                      StackUsedName3,
                      PHPimage,
                      figmaImage,
                      CeoImage,
                      CEO,
                    } = value;
                    return (
                      <div key={id}>
                        <Row className="position-relative index_1  justify-content-center justify-content-md-start px-1">
                          <Col xs={8} md={4} lg={3}>
                            <img
                              data-aos="fade-right"
                              data-aos-duration="800"
                              data-aos-delay="100"
                              data-aos-offset="100"
                              className=" w-100"
                              src={image2}
                              alt="image2"
                            />
                          </Col>
                          <Col xs={12} md={8}>
                            <div className="ps-xl-5 pt-4 pt-lg-0">
                              <div className=" d-flex align-items-center">
                                <img
                                  data-aos="fade-right"
                                  data-aos-duration="800"
                                  data-aos-delay="100"
                                  data-aos-offset="100"
                                  src={app_logo}
                                  alt="app_logo"
                                />
                                <h2
                                  className=" ff_Roboto fw-bold fs_4xl text_primary text-uppercase mb-0 ms-3 ms-lg-5"
                                  data-aos="fade-left"
                                  data-aos-duration="800"
                                  data-aos-delay="200"
                                  data-aos-offset="100"
                                >
                                  {heading}
                                </h2>
                              </div>
                              <p
                                className=" ff_Inter fw-normal fs_lg text_primary pt-4"
                                data-aos="zoom-in"
                                data-aos-duration="800"
                                data-aos-delay="300"
                                data-aos-offset="100"
                              >
                                {paragraph}
                              </p>
                              <h2
                                className=" ff_Roboto fw-bold fs_xl text_primary text-capitalize pt-1 pt-lg-4 pt-xl-5"
                                data-aos="fade-right"
                                data-aos-duration="800"
                                data-aos-delay="400"
                                data-aos-offset="100"
                              >
                                Stack Used
                              </h2>
                              <div className="pt-3 d-flex align-items-center">
                                <div
                                  className=" d-flex align-items-center"
                                  data-aos="zoom-in"
                                  data-aos-duration="800"
                                  data-aos-delay="500"
                                  data-aos-offset="100"
                                >
                                  <img src={Flutterimage} alt="Flutterimage" />
                                  <h2 className=" ff_Inter fw-normal fs_lg text_primary mb-0 ms-3">
                                    {StackUsedName1}
                                  </h2>
                                </div>
                                <div
                                  className=" d-flex align-items-center ms-4 ms-sm-5"
                                  data-aos="zoom-in"
                                  data-aos-duration="800"
                                  data-aos-delay="600"
                                  data-aos-offset="100"
                                >
                                  <img src={PHPimage} alt="PHPimage" />
                                  <h2 className=" ff_Inter fw-normal fs_lg text_primary mb-0 ms-3 text-uppercase">
                                    {StackUsedName2}
                                  </h2>
                                </div>
                                <div
                                  className=" d-flex align-items-center ms-4 ms-sm-5"
                                  data-aos="zoom-in"
                                  data-aos-duration="800"
                                  data-aos-delay="700"
                                  data-aos-offset="100"
                                >
                                  <img src={figmaImage} alt="figmaImage" />
                                  <h2 className=" ff_Inter fw-normal fs_lg text_primary mb-0 ms-3 text-uppercase">
                                    {StackUsedName3}
                                  </h2>
                                </div>
                              </div>
                              <h2
                                className=" ff_Roboto fw-bold fs_xl text_primary text-capitalize  pt-1 pt-lg-4 pt-xl-5 mt-4"
                                data-aos="fade-down"
                                data-aos-duration="800"
                                data-aos-delay="100"
                                data-aos-offset="0"
                              >
                                What they say
                              </h2>
                              <div className=" d-flex pt-2 pt-lg-4 align-items-md-center flex-column flex-sm-row pt-4 pt-sm-0">
                                <div
                                  className="me-3"
                                  data-aos="fade-right"
                                  data-aos-duration="800"
                                  data-aos-delay="100"
                                  data-aos-offset="0"
                                >
                                  <img src={CeoImage} alt="CeoImage" />
                                </div>
                                <div
                                  className="ms-1 pt-4 pt-sm-0"
                                  data-aos="fade-left"
                                  data-aos-duration="800"
                                  data-aos-delay="100"
                                  data-aos-offset="0"
                                >
                                  <p className=" ff_Inter fw-normal  fs_sm text_primary mb-0 pb-2">
                                    {paragraph2}
                                  </p>
                                  <h2 className=" ff_Inter  fw-bold fs_sm text_primary mb-0">
                                    CEO
                                  </h2>
                                  <h2 className=" ff_Inter  fw-normal fs_sm text_primary">
                                    {CEO}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <h2
                            className=" ff_Inter fw-bold fs_lg text_primary"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="100"
                            data-aos-offset="0"
                          >
                            Visit :
                            <a
                              className=" fw-normal text_lightprimary know_hover"
                              href="#"
                            >
                              {link}
                            </a>
                          </h2>
                        </Row>
                      </div>
                    );
                  })}
                </Slider>
              </Col>
            </Row>
            <div className=" position-absolute top-0 end-0 max_200 index_1 d-none d-lg-block">
              <Slider
                {...settings}
                ref={(slider1) => setNav1(slider1)}
                className="overlay_up"
              >
                {WorkDummyData.map((value) => {
                  const { image, id } = value;
                  return (
                    <div className="py-2" key={id}>
                      <img className="w-100 " src={image} alt="image" />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
          {/* <div className={Index === 2 ? "d-block" : "d-none"}>
            <Row className=" py-lg-5 justify-content-center justify-content-md-start">
              <Col xs={12} sm={10} md={12} lg={10} className=" py-5 mb-lg-5">
                <Slider {...settings2} ref={(slider2) => setNav2(slider2)}>
                  {WorkDummyData.map((value) => {
                    const {
                      image2,
                      heading,
                      subheading,
                      paragraph,
                      paragraph2,
                      id,
                      link,
                      Flutterimage,
                      StackUsedName1,
                      StackUsedName2,
                      StackUsedName3,
                      PHPimage,
                      figmaImage,
                      CeoImage,
                      CEO,
                    } = value;
                    return (
                      <div key={id}>
                        <Row className=" py-lg-5 position-relative index_1  justify-content-center justify-content-md-start">
                          <Col xs={8} md={4} lg={3}>
                            <img className=" w-100" src={image2} alt="image2" />
                          </Col>
                          <Col xs={12} md={8}>
                            <div className="ps-xl-5 pt-4 pt-lg-0">
                              <div className=" d-flex align-items-center">
                                <img src={app_logo} alt="app_logo" />
                                <h2 className=" ff_Roboto fw-bold fs_4xl text_primary text-uppercase mb-0 ms-3 ms-lg-5">
                                  {heading}
                                </h2>
                              </div>
                              <p className=" ff_Inter fw-normal fs_lg text_primary pt-4">
                                {paragraph}
                              </p>
                              <h2 className=" ff_Roboto fw-bold fs_xl text_primary text-capitalize pt-1 pt-lg-4 pt-xl-5">
                                Stack Used
                              </h2>
                              <div className="pt-3 d-flex align-items-center">
                                <div className=" d-flex align-items-center">
                                  <img src={Flutterimage} alt="Flutterimage" />
                                  <h2 className=" ff_Inter fw-normal fs_lg text_primary mb-0 ms-3">
                                    {StackUsedName1}
                                  </h2>
                                </div>
                                <div className=" d-flex align-items-center ms-4 ms-sm-5">
                                  <img src={PHPimage} alt="PHPimage" />
                                  <h2 className=" ff_Inter fw-normal fs_lg text_primary mb-0 ms-3 text-uppercase">
                                    {StackUsedName2}
                                  </h2>
                                </div>
                                <div className=" d-flex align-items-center ms-4 ms-sm-5">
                                  <img src={figmaImage} alt="figmaImage" />
                                  <h2 className=" ff_Inter fw-normal fs_lg text_primary mb-0 ms-3 text-uppercase">
                                    {StackUsedName3}
                                  </h2>
                                </div>
                              </div>
                              <h2 className=" ff_Roboto fw-bold fs_xl text_primary text-capitalize  pt-1 pt-lg-4 pt-xl-5 mt-4">
                                What they say
                              </h2>
                              <div className=" d-flex pt-2 pt-lg-4 align-items-md-center flex-column flex-sm-row pt-4 pt-sm-0">
                                <div className="me-3">
                                  <img src={CeoImage} alt="CeoImage" />
                                </div>
                                <div className="ms-1 pt-4 pt-sm-0">
                                  <p className=" ff_Inter fw-normal  fs_sm text_primary mb-0 pb-2">
                                    {paragraph2}
                                  </p>
                                  <h2 className=" ff_Inter  fw-bold fs_sm text_primary mb-0">
                                    CEO
                                  </h2>
                                  <h2 className=" ff_Inter  fw-normal fs_sm text_primary">
                                    {CEO}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <h2 className=" ff_Inter fw-bold fs_lg text_primary">
                            Visit :
                            <a
                              className=" fw-normal text_lightprimary know_hover"
                              href="#"
                            >
                              {link}
                            </a>
                          </h2>
                        </Row>
                      </div>
                    );
                  })}
                </Slider>
              </Col>
            </Row>
            <div className=" position-absolute top-0 end-0 max_200 index_1 d-none d-lg-block">
              <Slider
                {...settings}
                ref={(slider1) => setNav1(slider1)}
                className="overlay_up"
              >
                {WorkDummyData.map((value) => {
                  const { image, id } = value;
                  return (
                    <div className="py-2" key={id}>
                      <img className="w-100 " src={image} alt="image" />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
          <div className={Index === 3 ? "d-block" : "d-none"}>
            <Row className=" py-lg-5 justify-content-center justify-content-md-start">
              <Col xs={12} sm={10} md={12} lg={10} className=" py-5 mb-lg-5">
                <Slider {...settings2} ref={(slider2) => setNav2(slider2)}>
                  {WorkDummyData.map((value) => {
                    const {
                      image2,
                      heading,
                      subheading,
                      paragraph,
                      paragraph2,
                      id,
                      link,
                      Flutterimage,
                      StackUsedName1,
                      StackUsedName2,
                      StackUsedName3,
                      PHPimage,
                      figmaImage,
                      CeoImage,
                      CEO,
                    } = value;
                    return (
                      <div key={id}>
                        <Row className=" py-lg-5 position-relative index_1  justify-content-center justify-content-md-start">
                          <Col xs={8} md={4} lg={3}>
                            <img className=" w-100" src={image2} alt="image2" />
                          </Col>
                          <Col xs={12} md={8}>
                            <div className="ps-xl-5 pt-4 pt-lg-0">
                              <div className=" d-flex align-items-center">
                                <img src={app_logo} alt="app_logo" />
                                <h2 className=" ff_Roboto fw-bold fs_4xl text_primary text-uppercase mb-0 ms-3 ms-lg-5">
                                  {heading}
                                </h2>
                              </div>
                              <p className=" ff_Inter fw-normal fs_lg text_primary pt-4">
                                {paragraph}
                              </p>
                              <h2 className=" ff_Roboto fw-bold fs_xl text_primary text-capitalize pt-1 pt-lg-4 pt-xl-5">
                                Stack Used
                              </h2>
                              <div className="pt-3 d-flex align-items-center">
                                <div className=" d-flex align-items-center">
                                  <img src={Flutterimage} alt="Flutterimage" />
                                  <h2 className=" ff_Inter fw-normal fs_lg text_primary mb-0 ms-3">
                                    {StackUsedName1}
                                  </h2>
                                </div>
                                <div className=" d-flex align-items-center ms-4 ms-sm-5">
                                  <img src={PHPimage} alt="PHPimage" />
                                  <h2 className=" ff_Inter fw-normal fs_lg text_primary mb-0 ms-3 text-uppercase">
                                    {StackUsedName2}
                                  </h2>
                                </div>
                                <div className=" d-flex align-items-center ms-4 ms-sm-5">
                                  <img src={figmaImage} alt="figmaImage" />
                                  <h2 className=" ff_Inter fw-normal fs_lg text_primary mb-0 ms-3 text-uppercase">
                                    {StackUsedName3}
                                  </h2>
                                </div>
                              </div>
                              <h2 className=" ff_Roboto fw-bold fs_xl text_primary text-capitalize  pt-1 pt-lg-4 pt-xl-5 mt-4">
                                What they say
                              </h2>
                              <div className=" d-flex pt-2 pt-lg-4 align-items-md-center flex-column flex-sm-row pt-4 pt-sm-0">
                                <div className="me-3">
                                  <img src={CeoImage} alt="CeoImage" />
                                </div>
                                <div className="ms-1 pt-4 pt-sm-0">
                                  <p className=" ff_Inter fw-normal  fs_sm text_primary mb-0 pb-2">
                                    {paragraph2}
                                  </p>
                                  <h2 className=" ff_Inter  fw-bold fs_sm text_primary mb-0">
                                    CEO
                                  </h2>
                                  <h2 className=" ff_Inter  fw-normal fs_sm text_primary">
                                    {CEO}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <h2 className=" ff_Inter fw-bold fs_lg text_primary">
                            Visit :
                            <a
                              className=" fw-normal text_lightprimary know_hover"
                              href="#"
                            >
                              {link}
                            </a>
                          </h2>
                        </Row>
                      </div>
                    );
                  })}
                </Slider>
              </Col>
            </Row>
            <div className=" position-absolute top-0 end-0 max_200 index_1 d-none d-lg-block">
              <Slider
                {...settings}
                ref={(slider1) => setNav1(slider1)}
                className="overlay_up"
              >
                {WorkDummyData.map((value) => {
                  const { image, id } = value;
                  return (
                    <div className="py-2" key={id}>
                      <img className="w-100 " src={image} alt="image" />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div> */}
          <div className=" position-absolute position_dots_3  d-none d-md-inline-block opacity-50">
            <img src={Dots} alt="Dots" />
          </div>
          <div className=" position-absolute position_dots_2 d-none d-md-inline-block opacity-50">
            <img src={Dots} alt="Dots" />
          </div>
        </Container>
        {/* <div className=" position-absolute bottom-0 start-0 index_ n_1 d-none d-md-inline-block opacity-50">
          <img src={Dots} alt="Dots" />
        </div> */}
      </section>
      <section className=" py-5 my-5">
        <Container>
          <h2
            className=" ff_Inter fw-bold fs_6xl text_secondary text-center"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-offset="200"
          >
            Trusted and recognized
          </h2>
          <p
            className=" ff_Inter fw-normal fs_xl text-dark text-center"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="200"
            data-aos-offset="200"
          >
            <span className=" fw-bold">Hexabirds'</span> team of skilled
            developers, designers, and analysts assures
            <span className="d-block">
              your company an increase of business and quick market expansion.
            </span>
          </p>
          <div className=" d-flex justify-content-center pt-5 align-items-center overflow-auto scrollbar_none">
            <div
              className="hover_images"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              <img className="" src={Prime} alt="Prime" />
              <img className=" d-none" src={Prime_2} alt="Prime_2" />
            </div>
            <div
              className="hover_images ms-5"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-offset="200"
            >
              <img className="" src={sri} alt="sri" />
              <img className=" d-none" src={sri_2} alt="sri_2" />
            </div>
            <div
              className="ms-3 ms-sm-5 hover_images"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="500"
              data-aos-offset="200"
            >
              <img className="" src={vision} alt="vision" />
              <img className=" d-none" src={vision_2} alt="vision_2" />
            </div>
            <div
              className="ms-5 hover_images"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="600"
              data-aos-offset="200"
            >
              <img className="" src={Closet} alt="Closet" />
              <img className=" d-none" src={Closet_2} alt="Closet_2" />
            </div>
            <div
              className="ms-5 hover_images"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="700"
              data-aos-offset="200"
            >
              <img className="" src={edumato_2} alt="edumato_2" />
              <img className="d-none" src={edumato_3} alt="edumato_3" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ProjectsPage;
