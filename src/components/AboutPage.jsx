import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import GirlChatting from "../assets/images/png/GirlChatting.png";
import MeetOurGirl from "../assets/images/png/MeetOurGirl.png";
import Vikash from "../assets/images/png/Vikash.png";
import JoginderSaini from "../assets/images/png/JoginderSaini.png";
import RakeshSheoran from "../assets/images/png/RakeshSheoran.png";
import Linkedin from "../assets/images/svg/Linkedin.svg";

function AboutPage() {
  const [index, setIndex] = useState(1);
  return (
    <>
      <section className="AboutHeroSection pt-5">
        <Container className="pt-5 mt-5">
          <h2 className=" ff_Inter fw-bold fs_8xl text_primary text-center mb-0">
            About
          </h2>
          <h1 className=" ff_Inter fw-bold fs_15xl text_primary text-center text-uppercase mt_n_20 opacity_1">
            HEXABIRDS
          </h1>
        </Container>
      </section>
      <section className="py-5   my-5 ">
        <Container>
          <Row className=" justify-content-between align-items-center">
            <Col xs={12} md={6} lg={5} xl={4}>
              <img className="w-100" src={GirlChatting} alt="GirlChatting" />
            </Col>
            <Col xs={12} md={6} lg={7} xl={6} className="pt-4 pt-md-0">
              <h2 className=" ff_Inter fw-bold fs_9xl text_secondary text-md-end">
                Services{" "}
                <span className=" d-block fw-normal fs_6xl text_dark">
                  {" "}
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
              <h2 className=" ff_Inter fw-bold  fs_6xl text_dark">
                Meet our FOUNDER
              </h2>
              <h3 className=" ff_Inter fw_medium text_dark fs_3xl pt-1 pt-lg-3">
                Poonam Sheoran
              </h3>
              <p className=" ff_Inter fw-normal fs_2xl  text_dark pt-2  pt-lg-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                non eros sed nisl faucibus tincidunt et vitae nunc. Nunc
                ullamcorper tincidunt mi. Donec vehicula erat sollicitudin,
                euismod neque eget, placerat turpis. Nam ornare ipsum at urna
                malesuada, ac ultricies magna dapibus. Suspendisse ultricies a
                turpis id tincidunt. Etiam blandit auctor.
              </p>
            </Col>
            <Col xs={7} sm={5} lg={3} className="pt-4 pt-lg-0">
              <img className="w-100" src={MeetOurGirl} alt="MeetOurGirl" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="MeetOurTeam_section position-relative index_1">
        <Container>
          <h2 className=" ff_Inter fw-bold fs_10xl text_dark text-center">
            Meet the team
          </h2>
          <h2 className=" ff_Inter fw-bold fs_16xl text-center text-uppercase position-absolute text_dark start-50 translate-middle top-50 opacity_Low_1 index_n_1">
            MANAGEMENT
          </h2>

          <Row className=" justify-content-center">
            <Col xs={12} md={11} xl={8}>
              {" "}
              <Row className=" justify-content-between pt-4 mt-3">
                <Col xs={4} lg={3} className="text-center">
                  <img
                    onClick={() => {
                      setIndex(1);
                    }}
                    className="w-100"
                    src={RakeshSheoran}
                    alt="RakeshSheoran"
                  />
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
                <Col xs={4} lg={3} className="text-center">
                  <img
                    onClick={() => {
                      setIndex(2);
                    }}
                    className="w-100"
                    src={JoginderSaini}
                    alt="JoginderSaini"
                  />
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
                <Col xs={4} lg={3} className="text-center">
                  <img
                    className="w-100"
                    onClick={() => {
                      setIndex(3);
                    }}
                    src={Vikash}
                    alt="Vikash"
                  />
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
            <div className=" position-relative index_1">
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
            <div className=" position-relative index_1">
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
            <div className=" position-relative index_1">
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
      </section>
    </>
  );
}

export default AboutPage;
