import React from "react";
import NavbarFile from "./NavbarFile";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import { Col, Container, Row } from "react-bootstrap";
import MaskingImage from "../assets/images/png/MaskingImage.png";
import ListIsEmpty from "../assets/images/png/ListIsEmpty.png";

function CareerPage() {
  const data = {
    name: "Career",
  };
  return (
    <>
      <NavbarFile />
      <HeroSection myData={data} />
      <section className=" PartOfMission_section position-relative overflow-hidden py-5">
        <Container className="py-5">
          <Row>
            <Col xs={6}>
              <h2 className=" ff_Inter fw-bold fs_11xl text_secondary text-capitalize">
                Be part of <span className="d-block">Our Mission</span>
              </h2>
              <p className=" ff_Inter fw-normal fs_2xl text_dark pt-3">
                We are building a Team at{" "}
                <span className=" fw-bold text_secondary text-uppercase">
                  HEXABIRDS
                </span>{" "}
                where amazing people (like you) can do their best work. If you
                are ready to grow your career and help millions of organizations
                grow batter, you’ve come to the right place.
              </p>
            </Col>
            <Col xs={6}>
              <div className="masking_images position-absolute top-50 end_n_50 translate-middle-y">
                <img src={MaskingImage} alt="MaskingImage" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <div className=" d-md-flex">
            <div className="d-flex justify-content-center">
              <button className=" py-1 px-4 text-uppercase ff_Inter fw-normal fs_lg border-0 bg_secondary rounded-pill text_primary">
                View All
              </button>
              <button className=" py-1 px-4 text-uppercase ff_Inter fw-normal fs_lg bg-transparent ms-3 rounded-pill text_light  border_secondary">
                Frontend
              </button>
            </div>
            <div className="d-sm-flex justify-content-center mt-3 mt-md-0 text-center">
              <div className="d-flex justify-content-center">
                <button className=" py-1 px-4 text-uppercase ff_Inter fw-normal fs_lg bg-transparent ms-md-3 rounded-pill text_light  border_secondary">
                  Backend
                </button>
                <button className=" py-1 px-4 text-uppercase ff_Inter fw-normal fs_lg bg-transparent ms-3 rounded-pill text_light  border_secondary">
                  Mobile App
                </button>
              </div>
              <button className=" py-1 px-4 text-uppercase ff_Inter fw-normal fs_lg bg-transparent mt-3 mt-sm-0 ms-sm-3 rounded-pill text_light  border_secondary">
                Full Stack
              </button>
            </div>
          </div>
          <Row className=" justify-content-center align-items-center">
            <Col xs={12} sm={5} md={4}>
              <img className="w-100" src={ListIsEmpty} alt="ListIsEmpty" />
            </Col>
            <Col xs={12} sm={7} md={8} xl={6}>
              <h2 className=" ff_Inter fw-bold fs_6xl text_secondary text-capitalize  text-center">
                No Opportunity
              </h2>
              <p className=" ff_Inter fw-normal fs_2xl text_secondary  text-center">
                Sorry! We are not offering any job opportunity right now.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default CareerPage;
