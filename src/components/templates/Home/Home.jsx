import React, { useEffect, useRef } from "react";
import useSound from "use-sound";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsLinkedin, BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import ReactCountryFlag from "react-country-flag";
const Home = () => {
  const [play, { stop, pause }] = useSound("/audio/wind.mp3");
  const buttonRef = useRef(null);
  useEffect(() => {
    buttonRef.current.addEventListener('click', handleClick);
    buttonRef.current.click();
  }, [buttonRef.current]);

  const handleClick = ()=>{
    console.log("Play button was clicked!");
    play();
  }
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

      <Row className="g-0 justify-content-around" style={{ rowGap: 2 + "rem" }}>
        <p className="fs-5 fw-bold m-0 text-center">
          The only sport fishing lodge in Peru in the best fishing area in the
          world: CABO BLANCO
        </p>
      </Row>

      <Row className="g-0 justify-content-around" style={{ rowGap: 2 + "rem" }}>
        <Col xl={4}>
          <p className="m-0 text-center">
            Av. Circunvalación Del Golf Los Inkas 134 Panorama Centro
            Empresarial, Oficina 707 Torre 1 Santiago de Surco
          </p>
          <p className="m-0 text-center">
            Lima PERÚ{" "}
            <ReactCountryFlag
              countryCode="PE"
              svg
              style={{ width: "1em", height: "auto" }}
              title="PE"
            />
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs="auto">
          <Button variant="light" ref={buttonRef}>
            <BsFillPlayFill />
          </Button>
        </Col>
        <Col xs="auto">
          <Button variant="light" onClick={() => pause()}>
            <BsFillPauseFill />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
