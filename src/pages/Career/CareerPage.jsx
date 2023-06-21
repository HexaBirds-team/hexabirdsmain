import React from "react";
import NavbarFile from "../../components/NavbarFile";
import HeroSection from "../../components/HeroSection";
import { Col, Container, Row } from "react-bootstrap";
import MaskingImage from "../../assets/images/png/MaskingImage.png";
import ListIsEmpty from "../../assets/images/png/ListIsEmpty.png";

function CareerPage() {
  const data = {
    name: "Career",
  };
  return (
    <>
      <HeroSection myData={data} />
      <section className=" PartOfMission_section position-relative overflow-hidden py-5">
        <Container className="py-md-5">
          <Row>
            <Col xs={12} md={6}>
              <h2
                className=" ff_Inter fw-bold fs_11xl text_secondary text-capitalize"
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-offset="0"
              >
                Be part of <span className="d-block">Our Mission</span>
              </h2>
              <p
                className=" ff_Inter fw-normal fs_2xl text_dark pt-3"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-offset="0"
              >
                We are building a Team at
                <span className=" fw-bold text_secondary text-uppercase">
                  HEXABIRDS
                </span>{" "}
                where amazing people (like you) can do their best work. If you
                are ready to grow your career and help millions of organizations
                grow batter, you’ve come to the right place.
              </p>
            </Col>
            <Col xs={6} className=" d-md-block d-none">
              <div className="masking_images position-absolute top-50 end_n_50 translate-middle-y">
                <img
                  src={MaskingImage}
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-delay="100"
                  data-aos-offset="0"
                  alt="MaskingImage"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-md-5">
        <Container>
          <div className=" d-flex overflow-auto scrollbar_none">
            <button
              className=" py-1 text-nowrap px-4 text-uppercase ff_Inter fw-normal fs_lg border-0 bg_secondary rounded-pill text_primary"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-offset="200"
            >
              All
            </button>
            <button
              className=" py-1 text-nowrap px-4 text-uppercase ff_Inter fw-normal fs_lg bg-transparent ms-3 rounded-pill text_light  border_secondary"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-offset="200"
            >
              Frontend
            </button>
            <button
              className=" py-1 text-nowrap px-4 text-uppercase ff_Inter fw-normal fs_lg bg-transparent ms-3 rounded-pill text_light  border_secondary"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              Backend
            </button>
            <button
              className=" py-1 text-nowrap px-4 text-uppercase ff_Inter fw-normal fs_lg bg-transparent ms-3 rounded-pill text_light  border_secondary"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-offset="200"
            >
              Mobile App
            </button>
            <button
              className=" py-1 text-nowrap px-4 text-uppercase ff_Inter fw-normal fs_lg bg-transparent  ms-3 rounded-pill text_light  border_secondary"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="500"
              data-aos-offset="200"
            >
              Full Stack
            </button>
          </div>
          <Row className=" justify-content-center align-items-center pt-4">
            <Col xs={10} sm={5} md={4}>
              <img
                className="w-100"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-offset="200"
                src={ListIsEmpty}
                alt="ListIsEmpty"
              />
            </Col>
            <Col xs={12} sm={7} md={8} xl={6}>
              <h2
                className=" ff_Inter fw-bold fs_6xl text_secondary text-capitalize  text-center"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                No Opportunity
              </h2>
              <p
                className=" ff_Inter fw-normal fs_2xl text_secondary  text-center"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="300"
                data-aos-offset="200"
              >
                Sorry! We are not offering any job opportunity right now.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default CareerPage;
