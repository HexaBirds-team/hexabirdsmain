import React from "react";
import HeroSection from "./HeroSection";
import { Col, Container, Row } from "react-bootstrap";
import Expertise from "../assets/images/svg/Expertise.svg";
import Innovation from "../assets/images/svg/Innovation.svg";
import guaranteed from "../assets/images/svg/guaranteed.svg";
import PeopleChoose from "../assets/images/png/PeopleChoose.png";
import Prime from "../assets/images/svg/Prime.svg";
import Prime_2 from "../assets/images/svg/Prime_2.svg";
import Dots from "../assets/images/svg/Dots.svg";
import sri from "../assets/images/svg/sri.svg";
import sri_2 from "../assets/images/svg/sri_2.svg";
import Flutter from "../assets/images/svg/Flutter.svg";
import logos_php from "../assets/images/svg/logos_php.svg";
import devicon_figma from "../assets/images/svg/devicon_figma.svg";
import app_logo from "../assets/images/svg/app_logo.svg";
import CEO_EMV from "../assets/images/png/CEO_EMV.png";
import Phone from "../assets/images/png/Phone.png";
import vision from "../assets/images/png/vision.png";
import vision_2 from "../assets/images/png/vision_2.png";
import Closet from "../assets/images/png/Closet.png";
import Closet_2 from "../assets/images/png/Closet_2.png";
import edumato_2 from "../assets/images/png/edumato_2.png";
import edumato_3 from "../assets/images/png/edumato_3.png";
import WorkDummyData from "./WorkDummyData";
import Slider from "react-slick";
import ElonMuskVision from "../assets/images/png/ElonMuskVision.png";
import EduApp from "../assets/images/png/EduApp.png";
function ProjectsPage() {
  const data = {
    name: "Projects",
  };
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
  };
  return (
    <>
      <HeroSection myData={data} />
      <section className=" py-5 my-5">
        <Container>
          <Row className=" justify-content-between">
            <Col xs={12} lg={6} className=" position-relative">
              <h2 className=" ff_Inter fw-bold fs_6xl text_dark">
                Why people choose to
                <span className="d-block">
                  work with
                  <span className=" text_secondary text-uppercase">
                    HEXABIRDS
                  </span>
                </span>
              </h2>
              <p className=" ff_Inter fw-normal fs_xl text_dark pt-4">
                By presenting you with fresh ideas and better-suited
                alternatives, we treat you like a partner and build on your
                vision.
              </p>
              <img
                className="w-100 d-lg-none d-block pt-4"
                src={PeopleChoose}
                alt="PeopleChoose"
              />
              <div className=" d-flex pt-4">
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
              <div className=" d-flex pt-4">
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
              <div className=" d-flex pt-4">
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
                className="w-100 d-none d-lg-block"
                src={PeopleChoose}
                alt="PeopleChoose"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className=" my-5 bg_semidark overflow-hidden">
        <Container className=" py-5 position-relative">
          <div className=" position-relative index_99">
            <h2 className=" ff_Inter fw-bold fs_6xl text_primary text-center pt-lg-4">
              Our Latest Creative Work
            </h2>
            <div className="d-flex justify-content-center align-items-center pt-4">
              <button className=" bg-transparent py-2 px-4 text_primary ff_Inter fw-bold fs_2xl  rounded-4 apps_border">
                Apps
              </button>
              <button className=" ff_Inter fw-normal py-2 fs_2xl text_primary opacity_05 bg-transparent border-0 mx-2 mx-sm-5 px-4">
                Website
              </button>
              <button className=" ff_Inter fw-normal py-2 fs_2xl text_primary opacity_05 bg-transparent border-0 px-4">
                Design
              </button>
            </div>
          </div>
          <Row className=" py-lg-5 justify-content-center justify-content-md-start">
            <Col xs={12} sm={10} md={12} lg={10} className=" py-5 mb-lg-5">
              <Row className=" py-lg-5 position-relative index_1  justify-content-center justify-content-md-start">
                <Col xs={8} md={4} lg={3}>
                  <img className=" w-100" src={Phone} alt="Phone" />
                </Col>
                <Col xs={12} md={8}>
                  <div className="ps-xl-5 pt-4 pt-lg-0">
                    <div className=" d-flex align-items-center">
                      <img src={app_logo} alt="app_logo" />
                      <h2 className=" ff_Roboto fw-bold fs_4xl text_primary text-uppercase mb-0 ms-3 ms-lg-5">
                        ELON MUSK VISION
                      </h2>
                    </div>
                    <p className=" ff_Inter fw-normal fs_lg text_primary pt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus eleifend gravida diam, et efficitur nunc posuere
                      ut. Morbi nec urna non diam consequat aliquam quis et
                      lorem. Maecenas rhoncus, dui non consequat semper, ligula
                      velit hendrerit augue, non pharetra sem libero non eros.
                      Fusce facilisis pulvinar pretium. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Donec non vulputate
                      quam. Fusce egestas libero sit amet venenatis fringilla.
                      Proin id euismod tortor.
                    </p>
                    <h2 className=" ff_Roboto fw-bold fs_xl text_primary text-capitalize pt-1 pt-lg-4 pt-xl-5">
                      Stack Used
                    </h2>
                    <div className="pt-3 d-flex align-items-center">
                      <div className=" d-flex align-items-center">
                        <img src={Flutter} alt="Flutter" />
                        <h2 className=" ff_Inter fw-normal fs_lg text_primary mb-0 ms-3">
                          Flutter
                        </h2>
                      </div>
                      <div className=" d-flex align-items-center ms-4 ms-sm-5">
                        <img src={logos_php} alt="logos_php" />
                        <h2 className=" ff_Inter fw-normal fs_lg text_primary mb-0 ms-3 text-uppercase">
                          PHP
                        </h2>
                      </div>
                      <div className=" d-flex align-items-center ms-4 ms-sm-5">
                        <img src={devicon_figma} alt="devicon_figma" />
                        <h2 className=" ff_Inter fw-normal fs_lg text_primary mb-0 ms-3 text-uppercase">
                          Figma
                        </h2>
                      </div>
                    </div>
                    <h2 className=" ff_Roboto fw-bold fs_xl text_primary text-capitalize  pt-1 pt-lg-4 pt-xl-5 mt-4">
                      What they say
                    </h2>
                    <div className=" d-flex pt-2 pt-lg-4 align-items-md-center flex-column flex-sm-row pt-4 pt-sm-0">
                      <div className="me-3">
                        <img src={CEO_EMV} alt="CEO_EMV" />
                      </div>
                      <div className="ms-1 pt-4 pt-sm-0">
                        <p className=" ff_Inter fw-normal  fs_sm text_primary mb-0 pb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus eleifend gravida diam, et efficitur
                          nunc posuere ut. Morbi nec urna non diam consequat
                          aliquam quis et lorem.
                        </p>
                        <h2 className=" ff_Inter  fw-bold fs_sm text_primary mb-0">
                          CEO
                        </h2>
                        <h2 className=" ff_Inter  fw-normal fs_sm text_primary">
                          EMV Pvt Ltd.
                        </h2>
                      </div>
                    </div>
                  </div>
                </Col>{" "}
                <div className=" position-absolute position_dots_2 index_n_1 d-none d-md-inline-block">
                  <img src={Dots} alt="Dots" />
                </div>
                <h2 className=" ff_Inter fw-bold fs_lg text_primary">
                  Visit :{" "}
                  <a
                    className=" fw-normal text_lightprimary know_hover"
                    href="#"
                  >
                    h/ag/ga/ba/hhh.playstore.com
                  </a>
                </h2>
              </Row>
            </Col>
          </Row>
          <div className=" position-absolute top-0 end-0 max_200 index_1 d-none d-lg-block">
            <Slider {...settings} className="overlay_up">
              <div className=" py-2">
                <img className="w-100" src={ElonMuskVision} alt="" />
              </div>
              <div className=" py-2">
                <img className="w-100" src={EduApp} alt="" />
              </div>
              <div className=" py-2">
                <img className="w-100" src={ElonMuskVision} alt="" />
              </div>
              <div className=" py-2">
                <img className="w-100" src={EduApp} alt="" />
              </div>
              <div className=" py-2">
                <img className="w-100" src={ElonMuskVision} alt="" />
              </div>
              <div className=" py-2">
                <img className="w-100" src={EduApp} alt="" />
              </div>
              <div className=" py-2">
                <img className="w-100" src={ElonMuskVision} alt="" />
              </div>
              <div className=" py-2">
                <img className="w-100" src={EduApp} alt="" />
              </div>
            </Slider>
          </div>

          {/* <Row className=" pt-4 px_xsm_5 px-3">
            {WorkDummyData.map((value) => {
              const { image, heading, subheading, id } = value;
              return (
                <Col xs={12} sm={6} md={4} lg={3} className=" pt-5" key={id}>
                  <div className=" position-relative">
                    <img className=" w-100" src={image} alt="EduApp" />
                    <div className=" bg_primary text-center rounded_top_left py-2 d-inline-block px-5 position-absolute bottom_n_26 end-0">
                      <h2 className=" ff_Roboto fw-bold fs_xl text_dark mb-0">
                        {heading}
                      </h2>

                      <p className=" ff_Roboto fw-normal fs_sm text_dark mb-0 text-nowrap">
                        {subheading}
                      </p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row> */}
        </Container>
      </section>
      <section className=" py-5 my-5">
        <Container>
          <h2 className=" ff_Inter fw-bold fs_6xl text_secondary text-center">
            Trusted and recognized
          </h2>
          <p className=" ff_Inter fw-normal fs_xl text-dark text-center">
            <span className=" fw-bold">Hexabirds'</span> team of skilled
            developers, designers, and analysts assures
            <span className="d-block">
              your company an increase of business and quick market expansion.
            </span>
          </p>
          <div className=" d-flex justify-content-center pt-5 align-items-center overflow-auto">
            <div className="hover_images">
              <img className="" src={Prime} alt="Prime" />
              <img className=" d-none" src={Prime_2} alt="Prime_2" />
            </div>
            <div className="hover_images ms-5">
              <img className="" src={sri} alt="sri" />
              <img className=" d-none" src={sri_2} alt="sri_2" />
            </div>
            <div className="ms-3 ms-sm-5 hover_images">
              <img className="" src={vision} alt="vision" />
              <img className=" d-none" src={vision_2} alt="vision_2" />
            </div>
            <div className="ms-5 hover_images">
              <img className="" src={Closet} alt="Closet" />
              <img className=" d-none" src={Closet_2} alt="Closet_2" />
            </div>
            <div className="ms-5 hover_images">
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
