import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TeamDummyData from "../../DummyData/TeamDummyData";
import GirlChatting from "../../assets/images/png/GirlChatting.png";
import MeetOurGirl from "../../assets/images/png/MeetOurGirl.png";
import Vikash from "../../assets/images/png/Vikash.png";
import JoginderSaini from "../../assets/images/png/JoginderSaini.png";
import RakeshSheoran from "../../assets/images/png/RakeshSheoran.png";
import Linkedin from "../../assets/images/svg/Linkedin.svg";
import HeroSection from "../../components/HeroSection";
import { Tilt } from "react-tilt";

function AboutPage() {
  const [index, setIndex] = useState(1);
  const data = {
    name: "About",
  };

  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };
  return (
    <>
      <HeroSection myData={data} />
      <section className="py-5   my-5 ">
        <Container>
          <Row className=" justify-content-between align-items-center">
            <Col
              xs={12}
              md={6}
              lg={5}
              xl={4}
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-offset="0"
            >
              <Tilt options={defaultOptions}>
                <img className="w-100" src={GirlChatting} alt="GirlChatting" />
              </Tilt>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={7}
              xl={6}
              className="pt-4 pt-md-0"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-offset="0"
            >
              <h2 className=" ff_Inter fw-bold fs_9xl text_secondary text-md-end">
                Services
                <span className=" d-block fw-normal fs_6xl text_dark">
                  that serves your needs.
                </span>
              </h2>
              <p className=" ff_Inter fw-normal fs_2xl  text_dark text-md-end pt-2 pt-lg-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                non eros sed nisl faucibus tincidunt et vitae nunc. Nunc
                ullamcorper tincidunt mi. Donec vehicula erat sollicitudin,
                euismod neque eget, placerat turpis. Nam ornare ipsum at urna
                malesuada, ac ultricies magna dapibus. Suspendisse ultricies a
                turpis id tincidunt. Etiam blandit auctor.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-5  my-5 MeetOur_section">
        <Container>
          <Row className=" justify-content-lg-between justify-content-center align-items-center">
            <Col xs={12} md={7} lg={8}>
              <h2
                className=" ff_Inter fw-bold  fs_6xl text_dark"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-offset="200"
              >
                Meet our FOUNDER
              </h2>
              <h3
                className=" ff_Inter fw_medium text_dark fs_3xl pt-1 pt-lg-3"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="300"
                data-aos-offset="200"
              >
                Poonam Sheoran
              </h3>
              <p
                className=" ff_Inter fw-normal fs_2xl  text_dark pt-2  pt-lg-4"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="500"
                data-aos-offset="200"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                non eros sed nisl faucibus tincidunt et vitae nunc. Nunc
                ullamcorper tincidunt mi. Donec vehicula erat sollicitudin,
                euismod neque eget, placerat turpis. Nam ornare ipsum at urna
                malesuada, ac ultricies magna dapibus. Suspendisse ultricies a
                turpis id tincidunt. Etiam blandit auctor.
              </p>
            </Col>
            <Col xs={7} sm={5} lg={3} className="pt-4 pt-lg-0">
              <img
                className="w-100"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="500"
                data-aos-offset="200"
                src={MeetOurGirl}
                alt="MeetOurGirl"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="MeetOurTeam_section position-relative index_1">
        <Container>
          <h2
            className=" ff_Inter fw-bold fs_10xl text_dark text-center"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-offset="200"
          >
            Meet the team
          </h2>
          <div className="position-absolute start-50 translate-middle-x translate_middle_md top_md_50 opacity_Low_md_1 bottom_73 index_1 index_n_md_1">
            <h2
              className=" ff_Inter fw-bold fs_16xl text-center text-uppercase text_dark "
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-offset="200"
            >
              MANAGEMENT
            </h2>
          </div>
          <Row className=" justify-content-center">
            <Col xs={12} md={11} xl={8}>
              {" "}
              <Row className=" justify-content-between pt-md-4 mt-3">
                <Col
                  xs={4}
                  lg={3}
                  className="text-center px-0"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="500"
                  data-aos-offset="200"
                >
                  <img
                    onClick={() => {
                      setIndex(1);
                    }}
                    className="w-100"
                    src={RakeshSheoran}
                    alt="RakeshSheoran"
                  />
                </Col>
                <Col
                  xs={4}
                  lg={3}
                  className="text-center px-0"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="300"
                  data-aos-offset="200"
                >
                  <img
                    onClick={() => {
                      setIndex(2);
                    }}
                    className="w-100"
                    src={JoginderSaini}
                    alt="JoginderSaini"
                  />
                </Col>{" "}
                <Col
                  xs={4}
                  lg={3}
                  className="text-center px-0"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="500"
                  data-aos-offset="200"
                >
                  <img
                    className="w-100"
                    onClick={() => {
                      setIndex(3);
                    }}
                    src={Vikash}
                    alt="Vikash"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className=" bg_secondary py-4">
          <Container className="reflect">
            <Row className=" justify-content-center">
              <Col xs={12} md={11} xl={8}>
                {" "}
                <Row className=" justify-content-between">
                  <Col
                    xs={4}
                    lg={3}
                    className="text-center"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="500"
                    data-aos-offset="200"
                  >
                    <div className=" position-relative index_1 d-none d-sm-block ">
                      <h2 className=" ff_Inter fw-bold fs_2xl text_primary">
                        Rakesh Sheoran
                      </h2>
                      <h3 className=" ff_Inter fw-normal fs_sm text_primary mb-0">
                        Website Developer
                      </h3>
                      <a
                        href="#"
                        className=" ff_Inter fw-normal fs_xsm text_primary"
                      >
                        <img className="pe-2" src={Linkedin} alt="Linkedin" />:
                        rakesh_123
                      </a>
                    </div>
                  </Col>
                  <Col
                    xs={4}
                    lg={3}
                    className="text-center"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="300"
                    data-aos-offset="200"
                  >
                    <div className=" position-relative index_1 d-none d-sm-block">
                      <h2 className=" ff_Inter fw-bold fs_2xl text_primary">
                        Joginder Saini
                      </h2>
                      <h3 className=" ff_Inter fw-normal fs_sm text_primary mb-0">
                        App Developer & UI/UX
                      </h3>
                      <a
                        href="#"
                        className=" ff_Inter fw-normal fs_xsm text_primary"
                      >
                        <img className="pe-2" src={Linkedin} alt="Linkedin" />:
                        joginder_123
                      </a>
                    </div>
                  </Col>{" "}
                  <Col
                    xs={4}
                    lg={3}
                    className="text-center"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="500"
                    data-aos-offset="200"
                  >
                    <div className=" position-relative index_1 d-none d-sm-block">
                      <h2 className=" ff_Inter fw-bold fs_2xl text_primary">
                        Vikash Boora
                      </h2>
                      <h3 className=" ff_Inter fw-normal fs_sm text_primary mb-0">
                        Full Stack Developer
                      </h3>
                      <a
                        href="#"
                        className=" ff_Inter fw-normal fs_xsm text_primary"
                      >
                        <img className="pe-2" src={Linkedin} alt="Linkedin" />:
                        vikas_123
                      </a>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className={index === 1 ? "d-block" : " d-none"}>
              <div className=" position-relative index_1 d-sm-none">
                <h2 className=" ff_Inter fw-bold fs_2xl text_primary">
                  Rakesh Sheoran
                </h2>
                <h3 className=" ff_Inter fw-normal fs_sm text_primary mb-0">
                  Website Developer
                </h3>
                <a href="#" className=" ff_Inter fw-normal fs_xsm text_primary">
                  <img className="pe-2" src={Linkedin} alt="Linkedin" />:
                  rakesh_123
                </a>
              </div>
            </div>
            <div className={index === 2 ? "d-block" : " d-none"}>
              <div className=" position-relative index_1 d-sm-none">
                <h2 className=" ff_Inter fw-bold fs_2xl text_primary">
                  Joginder Saini
                </h2>
                <h3 className=" ff_Inter fw-normal fs_sm text_primary mb-0">
                  App Developer & UI/UX
                </h3>
                <a href="#" className=" ff_Inter fw-normal fs_xsm text_primary">
                  <img className="pe-2" src={Linkedin} alt="Linkedin" />:
                  joginder_123
                </a>
              </div>
            </div>
            <div className={index === 3 ? "d-block" : " d-none"}>
              <div className=" position-relative index_1 d-sm-none">
                <h2 className=" ff_Inter fw-bold fs_2xl text_primary">
                  Vikash Boora
                </h2>
                <h3 className=" ff_Inter fw-normal fs_sm text_primary mb-0">
                  Full Stack Developer
                </h3>
                <a href="#" className=" ff_Inter fw-normal fs_xsm text_primary">
                  <img className="pe-2" src={Linkedin} alt="Linkedin" />:
                  vikas_123
                </a>
              </div>
            </div>
          </Container>
        </div>
        {/* <div className="py-5 linear_gradient">

        </div> */}
      </section>
      <section className="pt-5 pb-sm-5 mt-5">
        <Container>
          <Row className=" position-relative py-5 mb-md-4">
            <Col xs={12} lg={3}>
              <div className="d-lg-inline-block rotate_n_90 position_lg_absolute top-50 start-0 opacity_Low_3">
                <h2
                  className=" ff_Inter fw-bold fs_10xl text-dark  text-center"
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="200"
                  data-aos-offset="200"
                >
                  OUR TEAM
                </h2>
              </div>
            </Col>
            <Col xs={12} lg={9}>
              <Row>
                {TeamDummyData.map((value) => {
                  const { id, stack, name, images } = value;
                  return (
                    <Col
                      xs={4}
                      sm={3}
                      md={2}
                      className="pt-5"
                      key={id}
                      data-aos="zoom-in"
                      data-aos-duration="800"
                      data-aos-delay="400"
                      data-aos-offset="200"
                    >
                      <div className="images_hover position-relative">
                        <span className="teamline d-inline-block position-absolute top-0 translate-middle-x start-50"></span>
                        <div className="imgoverlay">
                          <img
                            className="w-100 position-relative index_1"
                            src={images}
                            alt="team"
                          />
                        </div>
                        <div className=" bg_dark d-inline-block p-1 team_name position-absolute">
                          <h2 className=" ff_Inter fw-bold fs_lg text_secondary mb-0">
                            {name}
                          </h2>
                          <h3 className=" ff_Inter fw-bold fs_xsm text_primary mb-0">
                            {stack}
                          </h3>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AboutPage;
