import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

function Skills({ skillsData }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skillSection">
      <Container>
        <Row>
          <Col className="softcol">
            <div className="headSkl" xs={12} md={6} lg={6}>
              <h2>Soft-Skills</h2>
              <p>Aptitude, Leadership, Academics, Communication -There is always a gap for me to bridge and it is my motto to make all the green lines reach 100.</p>
            </div>
          </Col>
          <Col>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              className="car"
            >
              {skillsData.map((skill, index) => (
                <div key={index} className={`ima ima${index + 1}`}>
                  <h2>{skill.name}</h2>
                  <br />
                  <h3>{`${skill.percentage}%`}</h3>
                  <ProgressBar
                    now={skill.percentage}
                    className="progressBar"
                    variant="success"
                  />
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
