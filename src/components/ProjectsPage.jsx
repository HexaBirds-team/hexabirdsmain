import React from "react";
import NavbarFile from "./NavbarFile";
import HeroSection from "./HeroSection";
import { Col, Container, Row } from "react-bootstrap";
import Expertise from "../assets/images/svg/Expertise.svg";
import Innovation from "../assets/images/svg/Innovation.svg";
import guaranteed from "../assets/images/svg/guaranteed.svg";
import PeopleChoose from "../assets/images/png/PeopleChoose.png";
import Prime from "../assets/images/png/Prime.png";
import sri from "../assets/images/png/sri.png";
import vision from "../assets/images/png/vision.png";
import Closet from "../assets/images/png/Closet.png";
import edumato_2 from "../assets/images/png/edumato_2.png";
import WorkDummyData from "./WorkDummyData";
import Footer from "./Footer";

function ProjectsPage() {
  const data = {
    name: "Projects",
  };
  return (
    <>
      <HeroSection myData={data} />
      <section className=" py-5 my-5">
        <Container>
          <Row className=" justify-content-between">
            <Col xs={12} lg={6}>
              <h2 className=" ff_Inter fw-bold fs_6xl text_dark">
                Why people choose to
                <span className="d-block">
                  work with{" "}
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
      <section className=" py-5 my-5 bg_semidark">
        <Container>
          <h2 className=" ff_Inter fw-bold fs_6xl text_primary text-center">
            Our Latest Creative Work
          </h2>
          <Row className=" pt-4 px_xsm_5 px-3">
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
          </Row>
        </Container>
      </section>
      <section className=" py-5 my-5">
        <Container>
          <h2 className=" ff_Inter fw-bold fs_6xl text_secondary text-center">
            Trusted and recognized
          </h2>
          <p className=" ff_Inter fw-normal fs_xl text-dark text-center">
            <span className=" fw-bold">Hexabirds'</span> team of skilled
            developers, designers, and analysts assures{" "}
            <span className="d-block">
              your company an increase of business and quick market expansion.
            </span>
          </p>
          <div className=" d-flex justify-content-center pt-5 align-items-center flex-column flex-md-row">
            <div className="d-flex">
              <img className="" src={Prime} alt="Prime" />
              <img className="ms-3 ms-sm-5" src={sri} alt="sri" />
              <img className="ms-3 ms-sm-5" src={vision} alt="vision" />
            </div>
            <div className="d-flex pt-4 pt-sm-0">
              <img className="ms-md-5" src={Closet} alt="Closet" />
              <img className="ms-5" src={edumato_2} alt="edumato_2" />
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default ProjectsPage;
