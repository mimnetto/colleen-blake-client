import React from "react";
import {Container, Row, Col} from 'react-bootstrap';


class Story extends React.Component {
  render() {
    return (
  <div className="Top-Start">
    <Container>
      <Row>
        <Col className="col-12">
        <div className="background_title">
          Our Story
        </div>
        <div>
            <h1 className="headp">
              Our Story
            </h1>
            <p className="more-soon">
              Coming soon...
            </p>
            <br />
            </div>
          </Col>
        </Row>
        </Container>
  </div>
    );
  }
}

export default Story;
