import React from "react";
import { Container } from "react-bootstrap";
function HeroSection({ myData }) {
  const { name } = myData;
  return (
    <>
      <section className="AboutHeroSection pt-5">
        <Container className="pt-5 mt-5">
          <h2
            className=" ff_Inter fw-bold fs_8xl text_primary text-center mb-0"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-offset="0"
          >
            {name}
          </h2>
          <div  data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-offset="0">
            <h1
              className=" ff_Inter fw-bold fs_15xl text_primary text-center text-uppercase mt_n_20 opacity_1"
             
            >
              HEXABIRDS
            </h1>
          </div>
        </Container>
      </section>
    </>
  );
}

export default HeroSection;
