import React from "react";
import {Container, Row, Col} from 'react-bootstrap';


class Party extends React.Component {
  render() {
    return (
  <div className="Top-Start">
    <Container>
      <Row>
        <Col className="col-12">
        <div className="background_title">
          Party
        </div>
        <div>
            <h1 className="headp">
              Party
            </h1>
            <p className="more-soon">
              Wedding Party Info Coming soon...
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

export default Party;
