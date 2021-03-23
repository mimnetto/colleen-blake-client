import React from "react";
import {Fade, Slide} from "react-awesome-reveal";
import {Container, Row, Col} from 'react-bootstrap';
import leaf from '../img/leaf.png';
dig WWW.colleenandblake.com +nostats +nocomments +nocmd

class Top extends React.Component {
  render() {
    return (
  <div className="top-start">
    <div className="Join-Us">
      <Fade delay={1000} duration={3000}>
      <h1 className="Join-Day">
      Join us on October 16th, 2021
      </h1>
      </Fade>
      <Fade delay={2000} duration={3000}>
      <p>
      Owl's Nest Resort <br />White Mountains Thornton, New Hampshire
      </p>
      </Fade>
      </div>
      <Container>
      <div className="leaf">
      <Row justify-content-center>
      <Col>
      <Slide direction="left" delay={2500} duration={2000}>
        <p className="slide-name">
          Colleen
        </p>
      </Slide>
      </Col>
      <Col>
        <Slide direction="up" delay={3000} duration={2000}>
          <img className="leaf" src={leaf} alt="Logo" />
        </Slide>
      </Col>
      <Col>
      <Slide direction="right" delay={2600} duration={2000}>
        <p className="slide-name">
          Blake
        </p>
      </Slide>
      </Col>
    </Row>
    </div>
      </Container>
  </div>
    );
  }
}

export default Top;
