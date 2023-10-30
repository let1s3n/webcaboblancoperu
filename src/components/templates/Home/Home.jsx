import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { BsLinkedin } from "react-icons/bs";
const Home = () => {
  return (
    <Container
      fluid
      className="mainContainer g-0 d-flex flex-column align-items-center justify-content-center text-white"
      style={{ height: "100vh", rowGap: "2rem" }}
    >
      {/* <Row className="g-0 justify-content-center">
        <Col xs="auto" className="g-0">
          <Image className="logo" src="/images/logo-amarante.png" />
        </Col>
      </Row> */}

      <Row className="g-0 justify-content-center">
        <Col xs="auto" className="g-0 text-center">
          <a
            className="d-block lh-1"
            href="https://www.linkedin.com/company/cabo-blanco-fishing-lodge-sa/"
            target="_blank"
          >
            <h3 className="lh-1 m-0 p-0">
              <BsLinkedin />
            </h3>
          </a>

          <p className="lh-1 m-0">info@caboblancoperu.com</p>
        </Col>
      </Row>

      {/* <Row className="g-0 justify-content-around" style={{ rowGap: 2 + "rem" }}>
        <p className="fs-5 fw-bold m-0 text-center">
          Investment multinational focused on results for progress
        </p>
      </Row> */}

      <Row className="g-0 justify-content-around" style={{ rowGap: 2 + "rem" }}>
        <Col xl={4}>
          <p className="m-0 text-center">
            Av. Circunvalación Del Golf Los Inkas 134 Panorama Centro
            Empresarial, Oficina 707 Torre 1 Santiago de Surco
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
