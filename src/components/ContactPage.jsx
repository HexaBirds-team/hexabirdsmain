import React from "react";
import HeroSection from "./HeroSection";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Questions from "../assets/images/png/Questions.png";
import FaqOpen from "../assets/images/png/FaqOpen.png";
import Footer from "./Footer";

function ContactPage() {
  const data = {
    name: "Contact",
  };
  return (
    <>
      <HeroSection myData={data} />
      <section className="py-5 my-5">
        <Container>
          <h2 className=" ff_Roboto fw-bold fs_11xl text_secondary text-uppercase text-center gotthe_after position-relative">
            GOT THE IDEA?
            <span className=" position-absolute top-0 translate-middle-x start-50 opacity_Low_1 fs_13xl text_dark w-100">
              GOT THE IDEA?
            </span>
          </h2>
          <h3 className=" ff_Roboto fw-bold fs_6xl text_dark text-center text-capitalize pt-3">
            we have got the <span className=" text_secondary">skills</span>.
            let’s <span className=" text_secondary">team up</span>
          </h3>
          <p className=" ff_Roboto fw-normal fs_2xl text_dark opacity_05 text-center mb-0">
            Let us help you become even greater at what you do.
            <span className="d-sm-block">
              Fill out the following form and we will get back to you in the
              next 24 hours.
            </span>
          </p>
          <Row className=" justify-content-center px_xsm_5">
            <Col xs={12} xl={11} xxl={9}>
              <Row className="translateY_60px ">
                <Col xs={12} sm={6} lg={3}>
                  <div className=" text-center p-4 box_shadow_got rounded-5 h-100 bg_primary">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25 13.5417C26.3814 13.5417 27.7061 14.0904 28.6829 15.0671C29.6596 16.0439 30.2084 17.3687 30.2084 18.75C30.2084 19.434 30.0736 20.1112 29.8119 20.7431C29.5501 21.375 29.1665 21.9492 28.6829 22.4328C28.1992 22.9165 27.6251 23.3001 26.9932 23.5619C26.3613 23.8236 25.684 23.9583 25 23.9583C23.6187 23.9583 22.2939 23.4096 21.3172 22.4328C20.3404 21.4561 19.7917 20.1313 19.7917 18.75C19.7917 17.3687 20.3404 16.0439 21.3172 15.0671C22.2939 14.0904 23.6187 13.5417 25 13.5417ZM25 4.16666C28.8678 4.16666 32.5771 5.70311 35.312 8.43802C38.0469 11.1729 39.5834 14.8823 39.5834 18.75C39.5834 29.6875 25 45.8333 25 45.8333C25 45.8333 10.4167 29.6875 10.4167 18.75C10.4167 14.8823 11.9531 11.1729 14.688 8.43802C17.423 5.70311 21.1323 4.16666 25 4.16666ZM25 8.33332C22.2373 8.33332 19.5878 9.43079 17.6343 11.3843C15.6808 13.3378 14.5834 15.9873 14.5834 18.75C14.5834 20.8333 14.5834 25 25 38.9792C35.4167 25 35.4167 20.8333 35.4167 18.75C35.4167 15.9873 34.3192 13.3378 32.3657 11.3843C30.4122 9.43079 27.7627 8.33332 25 8.33332Z"
                        fill="#B63336"
                      />
                    </svg>

                    <h2 className=" ff_Inter fs_lg fw-bold text_dark pt-3 text-uppercase">
                      MAIN OFFICE
                    </h2>
                    <p className=" ff_Inter fw-normal fs_sm text-dark mb-0">
                      1st floor, Bansal Complex, Opp. Local Bus Stand, Rishi
                      Nagar, Hisar - 125001
                    </p>
                  </div>
                </Col>
                <Col xs={12} sm={6} lg={3} className="pt-4 pt-sm-0">
                  <div className=" text-center p-4 box_shadow_got rounded-5 h-100 bg_primary">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.625 10.4167C13.75 12.2708 14.0625 14.0833 14.5625 15.8125L12.0625 18.3125C11.2083 15.8125 10.6667 13.1667 10.4792 10.4167H13.625ZM34.1667 35.4583C35.9375 35.9583 37.75 36.2708 39.5833 36.3958V39.5C36.8333 39.3125 34.1875 38.7708 31.6667 37.9375L34.1667 35.4583ZM15.625 6.25H8.33333C7.1875 6.25 6.25 7.1875 6.25 8.33333C6.25 27.8958 22.1042 43.75 41.6667 43.75C42.8125 43.75 43.75 42.8125 43.75 41.6667V34.3958C43.75 33.25 42.8125 32.3125 41.6667 32.3125C39.0833 32.3125 36.5625 31.8958 34.2292 31.125C34.0223 31.05 33.8032 31.0147 33.5833 31.0208C33.0417 31.0208 32.5208 31.2292 32.1042 31.625L27.5208 36.2083C21.6155 33.1883 16.8117 28.3845 13.7917 22.4792L18.375 17.8958C18.9583 17.3125 19.125 16.5 18.8958 15.7708C18.1055 13.371 17.7046 10.86 17.7083 8.33333C17.7083 7.1875 16.7708 6.25 15.625 6.25Z"
                        fill="#B63336"
                      />
                    </svg>

                    <h2 className=" ff_Inter fs_lg fw-bold text_dark pt-3 text-uppercase">
                      PHONE NUMBER
                    </h2>
                    <p className=" ff_Inter fw-normal fs_sm text-dark mb-0">
                      +91- 8950 40 2201
                    </p>
                  </div>
                </Col>
                <Col xs={12} sm={6} lg={3} className="pt-4 pt-lg-0">
                  <div className=" text-center p-4 box_shadow_got rounded-5 h-100 bg_primary">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M45.8333 12.5C45.8333 10.2083 43.9583 8.33334 41.6666 8.33334H8.33329C6.04163 8.33334 4.16663 10.2083 4.16663 12.5V37.5C4.16663 39.7917 6.04163 41.6667 8.33329 41.6667H41.6666C43.9583 41.6667 45.8333 39.7917 45.8333 37.5V12.5ZM41.6666 12.5L25 22.9167L8.33329 12.5H41.6666ZM41.6666 37.5H8.33329V16.6667L25 27.0833L41.6666 16.6667V37.5Z"
                        fill="#B63336"
                      />
                    </svg>
                    <h2 className=" ff_Inter fs_lg fw-bold text_dark pt-3 text-uppercase">
                      SUPPORT
                    </h2>
                    <p className=" ff_Inter fw-normal fs_sm text-dark mb-0">
                      support@hexabirds.com
                    </p>
                    <h2 className=" ff_Inter fs_lg fw-bold text_dark pt-3 text-uppercase">
                      CONTACT
                    </h2>
                    <p className=" ff_Inter fw-normal fs_sm text-dark mb-0">
                      hexabirdspvtltd@gmail.com
                    </p>
                  </div>
                </Col>
                <Col xs={12} sm={6} lg={3} className="pt-4 pt-lg-0">
                  <div className=" text-center p-4 box_shadow_got rounded-5 h-100 bg_primary">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M39.6875 10.2292C37.7775 8.29984 35.5025 6.77013 32.9951 5.72926C30.4877 4.6884 27.7982 4.1572 25.0834 4.16666C13.7084 4.16666 4.43754 13.4375 4.43754 24.8125C4.43754 28.4583 5.39587 32 7.18754 35.125L4.27087 45.8333L15.2084 42.9583C18.2292 44.6042 21.625 45.4792 25.0834 45.4792C36.4584 45.4792 45.7292 36.2083 45.7292 24.8333C45.7292 19.3125 43.5834 14.125 39.6875 10.2292ZM25.0834 41.9792C22 41.9792 18.9792 41.1458 16.3334 39.5833L15.7084 39.2083L9.20837 40.9167L10.9375 34.5833L10.5209 33.9375C8.80785 31.202 7.89825 28.0401 7.89587 24.8125C7.89587 15.3542 15.6042 7.64583 25.0625 7.64583C29.6459 7.64583 33.9584 9.43749 37.1875 12.6875C38.7865 14.2791 40.0536 16.1722 40.9154 18.2571C41.7773 20.342 42.2168 22.5773 42.2084 24.8333C42.25 34.2917 34.5417 41.9792 25.0834 41.9792ZM34.5 29.1458C33.9792 28.8958 31.4375 27.6458 30.9792 27.4583C30.5 27.2917 30.1667 27.2083 29.8125 27.7083C29.4584 28.2292 28.4792 29.3958 28.1875 29.7292C27.8959 30.0833 27.5834 30.125 27.0625 29.8542C26.5417 29.6042 24.875 29.0417 22.9167 27.2917C21.375 25.9167 20.3542 24.2292 20.0417 23.7083C19.75 23.1875 20 22.9167 20.2709 22.6458C20.5 22.4167 20.7917 22.0417 21.0417 21.75C21.2917 21.4583 21.3959 21.2292 21.5625 20.8958C21.7292 20.5417 21.6459 20.25 21.5209 20C21.3959 19.75 20.3542 17.2083 19.9375 16.1667C19.5209 15.1667 19.0834 15.2917 18.7709 15.2708H17.7709C17.4167 15.2708 16.875 15.3958 16.3959 15.9167C15.9375 16.4375 14.6042 17.6875 14.6042 20.2292C14.6042 22.7708 16.4584 25.2292 16.7084 25.5625C16.9584 25.9167 20.3542 31.125 25.5209 33.3542C26.75 33.8958 27.7084 34.2083 28.4584 34.4375C29.6875 34.8333 30.8125 34.7708 31.7084 34.6458C32.7084 34.5 34.7709 33.3958 35.1875 32.1875C35.625 30.9792 35.625 29.9583 35.4792 29.7292C35.3334 29.5 35.0209 29.3958 34.5 29.1458Z"
                        fill="#B63336"
                      />
                    </svg>

                    <h2 className=" ff_Inter fs_lg fw-bold text_dark pt-3 text-uppercase">
                      WHATSAPP
                    </h2>
                    <p className=" ff_Inter fw-normal fs_sm text-dark mb-0">
                      +91- 8950 41 2201
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className=" bg_secondary pt-5">
          <Container>
            <Row className=" justify-content-center py-5 mt-4">
              <Col xs={12} xl={11} xxl={9}>
                <Row className=" align-items-center">
                  <Col xs={12} md={6}>
                    <label
                      className=" ff_Inter fw-normal fs_xl text_primary"
                      htmlFor="Email"
                    >
                      Email
                    </label>{" "}
                    <br />
                    <input
                      placeholder="Enter your email address"
                      id="Email"
                      className="w-100 bg-transparent border-0 border_bottom ps-3 mt-2 ff_Inter fw-normal text_primary"
                      type="text"
                    />
                    <label
                      className=" ff_Inter fw-normal fs_xl text_primary pt-4 mt-2"
                      htmlFor="Name"
                    >
                      Name
                    </label>{" "}
                    <br />
                    <input
                      placeholder="Enter your name "
                      id="Name"
                      className="w-100 bg-transparent border-0 border_bottom ps-3 mt-2 ff_Inter fw-normal text_primary"
                      type="text"
                    />
                    <label
                      className=" ff_Inter fw-normal fs_xl text_primary pt-4 mt-2"
                      htmlFor="Phone"
                    >
                      Phone number
                    </label>{" "}
                    <br />
                    <input
                      placeholder="Enter your phone number "
                      id="Phone"
                      className="w-100 bg-transparent border-0 border_bottom ps-3 mt-2 ff_Inter fw-normal text_primary"
                      type="text"
                    />
                    <label
                      className=" ff_Inter fw-normal fs_xl text_primary pt-4 mt-2"
                      htmlFor="Message"
                    >
                      Message
                    </label>{" "}
                    <br />
                    <textarea
                      id="Message"
                      rows="3"
                      className=" w-100 bg-transparent border-0 border_bottom ps-3 mt-2 ff_Inter fw-normal text_primary"
                      placeholder="Message "
                    ></textarea>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="ps-lg-5 ps-md-3 mt-4">
                      <h2 className=" ff_Inter fw-normal fs_7xl text_primary">
                        Get in touch
                      </h2>
                      <p className=" ff_Inter fw_medium fs_xl text_primary">
                        We can ensure reliability, low cost fares and most
                        important, with safety and comfort in mind.
                      </p>
                      <p className=" ff_Inter fw-light text_primary fs_xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vestibulum egestas diam, sit amet porta nibh
                        sagittis at. Integer suscipit bibendum velit, a sodales
                        orci sagittis eget. Quisque laoreet viverra malesuada.
                        Etiam non porttitor tortor.
                      </p>
                      <button className=" w-100 ff_Inter fw_medium fs_xl text_dark bg_primary rounded-pill border-0 py-2 mt-lg-5 mt-3 text-uppercase">
                        SUBMIT
                      </button>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section>
        <Container>
          <Row className=" align-items-center pb-5 mb-5">
            <Col xs={12} md={6}>
              <div className=" d-flex align-items-center">
                <img
                  className="w-100 pe-lg-5"
                  src={Questions}
                  alt="Questions"
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item
                  eventKey="0"
                  className=" position-relative overflow-hidden"
                >
                  <Accordion.Header>How to book a call?</Accordion.Header>
                  <Accordion.Body className="pt-0 ff_Roboto fw-normal fs_2xl text_dark">
                    You can fill a short form available on our website and our
                    company executive will connect you within 24 hours.
                    <img
                      className=" position-absolute top-0 start-0"
                      src={FaqOpen}
                      alt="FaqOpen"
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="1"
                  className="mt-4 position-relative overflow-hidden"
                >
                  <Accordion.Header>How to book a call?</Accordion.Header>
                  <Accordion.Body className="pt-0 ff_Roboto fw-normal fs_2xl text_dark">
                    You can fill a short form available on our website and our
                    company executive will connect you within 24 hours.{" "}
                    <img
                      className=" position-absolute top-0 start-0"
                      src={FaqOpen}
                      alt="FaqOpen"
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="2"
                  className="mt-4 position-relative overflow-hidden"
                >
                  <Accordion.Header>How to book a call?</Accordion.Header>
                  <Accordion.Body className="pt-0 ff_Roboto fw-normal fs_2xl text_dark">
                    You can fill a short form available on our website and our
                    company executive will connect you within 24 hours.{" "}
                    <img
                      className=" position-absolute top-0 start-0"
                      src={FaqOpen}
                      alt="FaqOpen"
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="3"
                  className="mt-4 position-relative overflow-hidden"
                >
                  <Accordion.Header>How to book a call?</Accordion.Header>
                  <Accordion.Body className="pt-0 ff_Roboto fw-normal fs_2xl text_dark">
                    You can fill a short form available on our website and our
                    company executive will connect you within 24 hours.{" "}
                    <img
                      className=" position-absolute top-0 start-0"
                      src={FaqOpen}
                      alt="FaqOpen"
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="4"
                  className="mt-4 position-relative overflow-hidden"
                >
                  <Accordion.Header>How to book a call?</Accordion.Header>
                  <Accordion.Body className="pt-0 ff_Roboto fw-normal fs_2xl text_dark">
                    You can fill a short form available on our website and our
                    company executive will connect you within 24 hours.{" "}
                    <img
                      className=" position-absolute top-0 start-0"
                      src={FaqOpen}
                      alt="FaqOpen"
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default ContactPage;
